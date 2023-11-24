from flask import Flask, jsonify
import time
import subprocess
import pandas as pd
import pickle

app = Flask(__name__)
ML_MODEL_PATH = "model/model.pkl"

def generate_csv():
    try:
        # Run the command to generate CSV file
        subprocess.run('cicflowmeter -i "Wi-Fi 2" -c flows.csv', shell=True, check=True)
        return True
    except subprocess.CalledProcessError:
        return False

def generate_csv_with_retry():
    max_retries = 3
    retries = 0

    while retries < max_retries:
        if generate_csv():
            return True
        else:
            retries += 1
            time.sleep(60)

    return False

def load_ml_model():
    try:
        # Load the machine learning model from the pickle file
        with open(f'model/model.pkl', 'rb') as f:
            model = pickle.load(f)
        return model
    except Exception as e:
        print(f"Error loading machine learning model: {e}")
        return None

def predict_with_model(model, data):
    # Your logic for making predictions with the machine learning model
    # Replace this with your actual prediction code
    return model.predict(data)

@app.route('/get_data', methods=['GET'])
def get_data():
    if not generate_csv_with_retry():
        return jsonify({'error': 'Failed to generate CSV file after multiple retries'}), 500

    model = load_ml_model()
    if model is None:
        return jsonify({'error': 'Failed to load machine learning model'}), 500

    # Read CSV data
    csv_data = pd.read_csv('flows.csv')

    # Your logic for preparing data for prediction
    # Replace this with your actual data preparation code
    input_data = csv_data.drop(columns=['label'])  # Assuming 'label' is the target column

    # Make predictions
    predictions = predict_with_model(model, input_data)

    # Combine CSV data and predictions
    result = {
        'csv_data': csv_data.to_dict(orient='records'),
        'predictions': predictions.tolist()
    }

    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)