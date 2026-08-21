from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)

CORS(app)


def get_db_connection():
    connection = sqlite3.connect("feedback.db")
    connection.row_factory = sqlite3.Row
    return connection


def create_table():

    connection = get_db_connection()

    connection.execute("""
        CREATE TABLE IF NOT EXISTS feedback (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            event TEXT NOT NULL,
            rating INTEGER NOT NULL,
            comments TEXT NOT NULL
        )
    """)

    connection.commit()
    connection.close()


@app.route("/")
def home():

    return {
        "message": "Welcome to Event Feedback System API"
    }


@app.route("/feedback", methods=["POST"])
def feedback():

    data = request.get_json()

    connection = get_db_connection()

    connection.execute("""
        INSERT INTO feedback
        (name, email, event, rating, comments)
        VALUES (?, ?, ?, ?, ?)
    """, (
        data["name"],
        data["email"],
        data["event"],
        data["rating"],
        data["comments"]
    ))

    connection.commit()
    connection.close()

    return jsonify({
        "message": "Feedback saved successfully"
    }), 201


@app.route("/feedback", methods=["GET"])
def get_feedback():

    connection = get_db_connection()

    feedback_data = connection.execute(
        "SELECT * FROM feedback"
    ).fetchall()

    connection.close()

    return jsonify([
        dict(feedback)
        for feedback in feedback_data
    ])


if __name__ == "__main__":

    create_table()

    app.run(debug=True)