import os
from dotenv import load_dotenv
import matplotlib.pyplot as plt
from pymongo import MongoClient
import pandas as pd

# Load environment variables from .env file
load_dotenv()
# Read the MongoDB URI from environment variables
mongodb_uri = os.getenv("MONGODB_URI")
# Connect to MongoDB
try:
    client = MongoClient(mongodb_uri)
    db = client.test
    print("Database connection successful.")
    collection_names = db.list_collection_names()
    for collection_name in collection_names:
        print(collection_name)
except Exception as e:
    print("Database connection failed:", str(e))

# Visualization 1: Occupancy Rate
try:
    number = 0
    parking_spots = db.parkingspots.find()
    available_count = 0
    occupied_count = 0

    for spot in parking_spots:
        if spot["available"]:
            available_count += 1
        else:
            occupied_count += 1

    occupancy_data = [available_count, occupied_count]
    labels = ["Available", "Occupied"]

    plt.pie(occupancy_data, labels=labels, autopct="%1.1f%%")
    plt.title("Parking Spot Occupancy Rate")
except Exception as e:
    print("Error in visualization 1:", str(e))

# Visualization 2: Parking History Timeline
try:
    parking_history = db.parkinghistories.find().sort("timestamps")

    check_in_dates = []
    check_in_times = []

    for entry in parking_history:
        check_in_dates.append(entry["checkInDate"])
        check_in_times.append(entry["checkInTime"])

    plt.figure()
    plt.plot(check_in_dates, check_in_times)
    plt.xlabel("Check-in Dates")
    plt.ylabel("Check-in Times")
    plt.title("Parking History Timeline")
except Exception as e:
    print("Error in visualization 2:", str(e))

# Visualization 3: Popular Parking Spots
try:
    parking_history = db.parkinghistories.aggregate(
        [
            {"$group": {"_id": "$parkingSpot", "count": {"$sum": 1}}},
            {
                "$lookup": {
                    "from": "parkingspots",
                    "localField": "_id",
                    "foreignField": "_id",
                    "as": "spot_info",
                }
            },
            {"$sort": {"count": -1}},
            {"$limit": 5},
        ]
    )

    popular_spots = []
    counts = []

    for entry in parking_history:
        spot_info = entry.get("spot_info", [])
        if spot_info:
            spot_name = spot_info[0].get("name")
            if spot_name:
                count = entry.get("count")
                popular_spots.append(spot_name)
                counts.append(count)

    plt.figure()
    plt.bar(popular_spots, counts)
    plt.xlabel("Parking Spots")
    plt.ylabel("Check-in Count")
    plt.title("Popular Parking Spots")
except Exception as e:
    print("Error in visualization 3:", str(e))

# Visualization 4: User Registration Timeline
try:
    users = db.users.find()

    registration_dates = []
    for user in users:
        registration_dates.append(user["createdAt"])

    # Convert registration dates to datetime objects
    registration_dates = [pd.to_datetime(date) for date in registration_dates]

    # Sort the dates in ascending order
    registration_dates.sort()

    # Count the number of registrations per day
    daily_registrations = pd.Series(1, index=registration_dates).resample("D").sum()

    plt.figure()
    plt.plot(daily_registrations.index, daily_registrations.values)
    plt.xlabel("Registration Date")
    plt.ylabel("Number of Registrations")
    plt.title("User Registration Timeline")
except Exception as e:
    print("Error in user registration timeline visualization:", str(e))

# Visualization 5: User Activity Metrics
try:
    users = db.users.find()

    user_names = []
    logged_in_counts = []

    for user in users:
        user_names.append(user["userName"])
        logged_in_counts.append(user["loggedIn"])

    plt.figure()
    plt.bar(user_names, logged_in_counts)
    plt.xlabel("User")
    plt.ylabel("Logged In Count")
    plt.title("User Activity Metrics")
except Exception as e:
    print("Error in user activity metrics visualization:", str(e))

# Show all the visualizations
plt.show()
