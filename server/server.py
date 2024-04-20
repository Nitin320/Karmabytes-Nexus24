from flask import Flask, jsonify
from flask import request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/api/home", methods=['GET', 'POST'])
def receive_data():

    data = request.json
    message = data.get('message')
    print('Received message:', message)
    return jsonify({'status': 'success', 'message': message})



if __name__ == "__main__":
    app.run(debug=True, port=8080)



