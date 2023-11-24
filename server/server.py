from flask import Flask, jsonify
import time
import subprocess
import pandas as pd
import pickle

app = Flask(__name__)
ML_MODEL_PATH = "model/model.pkl"

def rearrange_columns(df, column_positions_dict):
    # Sort the dictionary items based on their values
    sorted_cols = sorted(column_positions_dict.items(), key=lambda x: x[1])
    
    # Extract column names in the new order
    new_order = [col[0] for col in sorted_cols]
    
    # Return the DataFrame with columns rearranged
    return df[new_order]

def preprocessing(dftest):
    dftest = dftest.loc[:, ~dftest.columns.str.startswith('Unnamed')]
    dftest.dropna(inplace=True)
    dftest = dftest.drop(columns=["src_ip", "dst_ip", "src_port", "protocol", "timestamp"])
    dftest['Fwd Header Length.1'] = 0
    column_positions_dict_test = {
    'dst_port': 0,
    'flow_duration': 1,
    'tot_fwd_pkts': 2,
    'tot_bwd_pkts': 3,
    'flow_byts_s': 14,
    'flow_pkts_s': 15,
    'fwd_pkts_s': 36,
    'bwd_pkts_s': 37,
    'totlen_fwd_pkts': 4,
    'totlen_bwd_pkts': 5,
    'fwd_pkt_len_max': 6,
    'fwd_pkt_len_min': 7,
    'fwd_pkt_len_mean': 8,
    'fwd_pkt_len_std': 9,
    'bwd_pkt_len_max': 10,
    'bwd_pkt_len_min': 11,
    'bwd_pkt_len_mean': 12,
    'bwd_pkt_len_std': 13,
    'pkt_len_max': 39,
    'pkt_len_min': 38,
    'pkt_len_mean': 40,
    'pkt_len_std': 41,
    'pkt_len_var': 42,
    'fwd_header_len': 34,
    'bwd_header_len': 35,
    'fwd_seg_size_min': 69,
    'fwd_act_data_pkts': 26,
    'flow_iat_mean': 16,
    'flow_iat_max': 18,
    'flow_iat_min': 19,
    'flow_iat_std': 17,
    'fwd_iat_tot': 20,
    'fwd_iat_max': 23,
    'fwd_iat_min': 24,
    'fwd_iat_mean': 21,
    'fwd_iat_std': 22,
    'bwd_iat_tot': 25,
    'bwd_iat_mean': 26,
    'bwd_iat_min': 29,
    'bwd_iat_max': 28,
    'bwd_iat_std': 27,
    'fwd_psh_flags': 30,
    'bwd_psh_flags': 31,
    'fwd_urg_flags': 32,
    'bwd_urg_flags': 33,
    'fin_flag_cnt': 43,
    'syn_flag_cnt': 44,
    'rst_flag_cnt': 45,
    'psh_flag_cnt': 46,
    'ack_flag_cnt': 47,
    'urg_flag_cnt': 48,
    'ece_flag_cnt': 50,
    'down_up_ratio': 51,
    'pkt_size_avg': 52,
    'init_fwd_win_byts': 66,
    'init_bwd_win_byts': 67,
    'active_max': 72,
    'active_min': 73,
    'active_mean': 70,
    'active_std': 71,
    'idle_max': 76,
    'idle_min': 77,
    'idle_mean': 74,
    'idle_std': 75,
    'fwd_byts_b_avg': 56,
    'fwd_pkts_b_avg': 57,
    'bwd_byts_b_avg': 59,
    'bwd_pkts_b_avg': 60,
    'fwd_blk_rate_avg': 58,
    'bwd_blk_rate_avg': 61,
    'fwd_seg_size_avg': 53,
    'bwd_seg_size_avg': 54,
    'cwe_flag_count': 49,
    'subflow_fwd_pkts': 62,
    'subflow_bwd_pkts': 64,
    'subflow_fwd_byts': 63,
    'subflow_bwd_byts': 65,
    'Fwd Header Length.1':55
}
    
    dftest_rearranged = rearrange_columns(dftest, column_positions_dict_test)
    return dftest_rearranged



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

    #fronend records
    selected_columns = csv_data[['timestamp', 'tot_fwd_pkts']]

    #preprocessing call
    final_df = preprocessing(csv_data)

    # Make predictions
    predictions = predict_with_model(model, final_df)

    # Combine CSV data and predictions
    result = {
        'csv_data': selected_columns.to_dict(orient='records', lines=True),
        'predictions': predictions.tolist()
    }

    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)