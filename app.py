from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/', methods=['POST'])
def post():
    input = request.get_json()["message"]    # request from client
    output = input                           # response to client
    return jsonify({"text": output, "user": "bot"})


if __name__ == '__main__':
    app.run(host='127.0.0.1', port='5000', debug=True)
