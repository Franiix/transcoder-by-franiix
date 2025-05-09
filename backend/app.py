
from flask import Flask, send_from_directory
from flask_socketio import SocketIO
import eventlet

app = Flask(__name__, static_folder='static')
socketio = SocketIO(app, cors_allowed_origins="*")

@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

if __name__ == "__main__":
    socketio.run(app, host="0.0.0.0", port=5000)
