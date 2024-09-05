from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import numpy as np
import joblib

# Flask app initialization
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the model and label encoder from the pickle file
with open(r"fish_prediction34.pkl", 'rb') as f:
    data = joblib.load(f)
    model = data['model']
    le = data['label_encoder']

# Initialize a global variable to store results
results = {}

# Define the home route
@app.route('/')
def home():
    return "Welcome to the Fish Prediction API!"

# Define the prediction endpoint for POST requests
@app.route('/predict', methods=['POST'])
def predict():
    global results
    try:
        # Get input data from the request
        data = request.json


        # Ensure 'features' is present in the request
        if 'features' not in data:
            return jsonify({'error': "Missing 'features' in request payload"}), 400

        # Convert features to a numpy array
        features = np.array(data['features']).reshape(1, -1)

        # Predict using the loaded model
        predicted_probabilities = model.predict_proba(features)

        # Output the probabilities for each species
        results = {}
        for species, prob in zip(le.classes_, predicted_probabilities[0]):
            results[species] = prob

        return jsonify(results)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Define the endpoint for GET requests to retrieve prediction results
@app.route('/predict', methods=['GET'])
def predict_info():
    if not results:
        return jsonify({'error': 'No predictions made yet'}), 404
    return jsonify(results)

# Run the Flask application
if __name__ == "__main__":
    app.run(debug=True, port=5000, use_reloader=False)

