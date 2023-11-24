// Import necessary dependencies
import React from 'react';
import styled from 'styled-components';

// Styled components for your About page
const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2em;
`;

const Paragraph = styled.p`
  color: #666;
  font-size: 1.2em;
  line-height: 1.5;
`;

// About page component
const AboutPage = () => {
  return (
<AboutContainer>
  <Title>About DDoS Watcher</Title>
  <Paragraph>
  The DDoS Watcher is a smart combination of advanced tech tools. It uses machine learning, cool data graphics, and a sleek interface to defend against DDoS attacks. It's like having a superhero for your online security, always on the lookout for the latest threats.
  </Paragraph>

  <Paragraph>
    <h2>Machine Learning Model (Akash Dogra)</h2>
  </Paragraph>

  <Paragraph>
    <strong>Step 1:</strong> Simple Model Development
    <br />
    Akash developed a simple machine learning model using the decision tree classifier as the base. Leveraging 100 estimators, this model achieved a remarkable accuracy of 99.98% and a perfect recall of 100%.
  </Paragraph>

  <Paragraph>
    <strong>Step 2:</strong> Metric Validation
    <br />
    To ensure the reliability of the model, Akash employed additional metrics. The Matthews Correlation Coefficient (MCC) stood out with an impressive result of 98.99%, reinforcing the robustness of the model and confirming its accuracy without overfitting.
  </Paragraph>

  <Paragraph>
    <strong>Step 3:</strong> Real-world Deployment
    <br />
    With confidence in the model's accuracy and effectiveness, we have successfully deployed it in real-world scenarios, contributing to the defense against potential DDoS attacks.
  </Paragraph>

  <Paragraph>
    Akash Dogra's adept development of this machine learning model forms a strong foundation for the DDoS Analyser, providing not only high accuracy but also reliability and real-world applicability.
  </Paragraph>

  <Paragraph>
  <h2>Backend (Tushar Puri)</h2>
</Paragraph>

<Paragraph>
  <strong>Step 1:</strong> Flask Integration
  <br />
  First, we set up the Flask server. Think of it as the boss that manages things.
</Paragraph>

<Paragraph>
  <strong>Step 2:</strong> Integrated cicflowmeter
  <br />
  Akash and Tushar collaborated to debug the Python code of cicflowmeter. Subsequently, Tushar seamlessly integrated it into the Flask server, enabling the generation of CSV files for the ML model and API.
</Paragraph>

<Paragraph>
  <strong>Step 3:</strong> Integrated ML model
  <br />
  With the adept use of pickle and other essential libraries, Tushar skillfully integrated the ML model into Flask. This ensures a cohesive synergy between the data collected by cicflowmeter and the analytical capabilities of the ML model.
</Paragraph>

<Paragraph>
  <strong>Step 4:</strong> API Implementation
  <br />
  Continuing the journey, Tushar implemented an API. This is like a special communication channel, allowing different parts of the system to talk to each other effortlessly. It's the bridge that connects the Flask server and the frontend, making data exchange smooth and efficient.
</Paragraph>

<Paragraph>
  These backend steps, orchestrated by Tushar Puri, form the backbone of our system—setting up the server, integrating tools, merging machine learning, and building connections for seamless communication.
</Paragraph>

<Paragraph>
    <h2>Frontend (Vishwas Malik)</h2>
  </Paragraph>

  <Paragraph>
    <strong>Step 1:</strong> React Magic
    <br />
    Vishwas Malik brought the frontend to life using React—a powerful library for building user interfaces. He incorporated Material UI to ensure a sleek and modern design.
  </Paragraph>

  <Paragraph>
    <strong>Step 2:</strong> Charting with Apex
    <br />
    For dynamic and interactive charts, Vishwas utilized Apex Charts, adding a layer of sophistication to the visual representation of data.
  </Paragraph>

  <Paragraph>
    <strong>Step 3:</strong> Routing with React Router DOM
    <br />
    To navigate seamlessly through the application, Vishwas integrated React Router DOM—a tool that facilitates smooth transitions between different components.
  </Paragraph>

  <Paragraph>
    <strong>Step 4:</strong> State Management with React Redux
    <br />
    Vishwas employed React Redux for efficient state management, ensuring that data flows seamlessly across different parts of the frontend.
  </Paragraph>

  <Paragraph>
    These frontend steps, led by Vishwas Malik, contribute to the polished user interface and interactive experience of our DDoS Analyser. His expertise with React, Material UI, Apex Charts, React Router DOM, and React Redux enriches the user's journey through our application.
  </Paragraph>

  <Paragraph>
    <h2>Deployment (Shubham Rana)</h2>
  </Paragraph>

  <Paragraph>
    <strong>Step 1:</strong> Elastic Beanstalk Deployment
    <br />
    Shubham utilized the Elastic Beanstalk service for deploying and scaling our web application. Elastic Beanstalk simplifies the deployment process, making it easy to scale and manage web applications seamlessly.
  </Paragraph>

  <Paragraph>
    <strong>Step 2:</strong> Elastic Container Registry (ECR)
    <br />
    Shubham leveraged Elastic Container Registry to create a Docker image of our application. This Docker image plays a crucial role in resolving dependency issues arising from different developer environments. It ensures consistency and reliability across various development setups.
  </Paragraph>

  <Paragraph>
    <strong>Step 3:</strong> Tackling Dependency Problems
    <br />
    The use of Elastic Container Registry is instrumental in tackling dependency problems. Shubham's approach ensures that differences in developer environments do not impact the application's functionality, contributing to a more reliable and developer-friendly deployment.
  </Paragraph>

  <Paragraph>
    Shubham Rana's expertise in deploying our DDoS Analyser, employing Elastic Beanstalk and Elastic Container Registry, reinforces the stability and scalability of our application.
  </Paragraph>
</AboutContainer>

  );
};

export default AboutPage;
