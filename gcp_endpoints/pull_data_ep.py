from pymongo import MongoClient
from flask import jsonify, request

MONGO_URI = '...'  # Your Mongo_URI details

def pull_data_ep(request):
    """HTTP Cloud Function."""
    headers = {
        'Access-Control-Allow-Origin': '*',  
        'Access-Control-Allow-Methods': 'POST, OPTIONS',  
        'Access-Control-Allow-Headers': 'Content-Type'  # Allows any content type to be sent
    }
    # Handling OPTIONS request for CORS Pre-flight
    if request.method == 'OPTIONS':
        return ('', 204, headers)
    try:
        request_json = request.get_json(silent=True)
        if request_json and 'user_id' in request_json:
            user_id = request_json['user_id']
            db_name = 'igem_readings_db'
            collection_name = 'igem_readings_collection'
            client = MongoClient(MONGO_URI)
            db = client[db_name]
            collection = db[collection_name]
            cursor = collection.find({"user_id": user_id})
            readings = [{"reading": doc["reading"], "timestamp": doc["timestamp"]} for doc in cursor]
            if readings:
                return jsonify({"success": True, "readings": readings}), 200, headers
            else:
                return jsonify({"success": False, "error": "No readings found for the provided user_id"}), 404, headers
        else:
            return jsonify({"success": False, "error": "Invalid JSON received"}), 400, headers
    except Exception as e:
        return jsonify({"success": False, "error": f"Connection to DB failed. Error: {str(e)}"}), 501, headers