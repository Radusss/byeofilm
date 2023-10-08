from datetime import datetime
from flask import jsonify
from pymongo import MongoClient

MONGO_URI = '...'  # Your Mongo_URI details

def push_data_ep(request):
    """HTTP Cloud Function."""
    request_json = request.get_json(silent=True)
    try:
        if request_json : #and 'user_id' in request_json and 'reading' in request_json:
            user_id = request_json.get('user_id')
            reading = request_json.get('reading')
            timestamp = datetime.utcnow()  # generating current UTC timestamp
            # creating the document to be inserted
            doc = {
                "user_id": user_id,
                "reading": reading,
                "timestamp": timestamp
            }
            db_name = 'igem_readings_db'
            collection_name = 'igem_readings_collection'
            client = MongoClient(MONGO_URI)
            db = client[db_name]
            collection = db[collection_name]
            # inserting the document into the MongoDB collection
            result = collection.insert_one(doc)
            # if insertion is successful, return the inserted document's id
            if result.inserted_id:
                return jsonify({"success": True, "id": str(result.inserted_id)}), 200
            else:
                return jsonify({"success": False}), 420
        else:
            return jsonify({"success": False, "error": "Invalid JSON received"}), 400
    except:
        return jsonify({"success": False, "error": "Connection to DB failed"}), 501
