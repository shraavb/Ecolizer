from flask import Flask, render_template, request, jsonify
import pandas as pd

app = Flask(__name__)


# Load the dataset
dataset = pd.read_csv('Ecolizer-Proj\crop-recommendation\Crop_recommendation.csv')

# Convert each row to a dictionary and store them in a list
data_objects = []

for index, row in dataset.iterrows():
    data_object = {
        'area_id': 'Land Plot {}'.format(index + 1),  # Assign ID as 'Land Plot 1', 'Land Plot 2', etc.
        'Nitrogen': row['Nitrogen'],
        'Phosphorus': row['Phosphorus'],
        'Potassium': row['Potassium'],
        'Temperature': row['Temperature'],
        'Humidity': row['Humidity'],
        'pH': row['pH'],
        'Rainfall': row['Rainfall'],
        'Label': row['Label']
    }
    data_objects.append(data_object)

@app.route('/')
def index():
    # Pass the dataset to the template
    return render_template('index.html', dataset=dataset)

@app.route('/get_land_plot_data', methods=['POST'])
def get_land_plot_data():
    # Handle POST request
    selected_land_plot = request.json.get('selected_land_plot')
    # Find the data for the selected land plot
    land_plot_data = [data for data in data_objects if data['area_id'] == selected_land_plot]
    return jsonify({'message': 'Received POST request'})

if __name__ == '__main__':
    app.run(debug=True)
