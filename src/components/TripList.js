import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import "./TripList.css";

export default function TripList() {
    const [url, setUrl] = useState("http://localhost:3000/trips");
    const { data: trips } = useFetch(url);

    return (
        <div className="trip-list">
            <h2>trips :</h2>
            <ul>
                {trips &&
                    trips.map((trip) => (
                        <li key={trip.id}>
                            <h4>{trip.title}</h4>
                            <h5>{trip.price}</h5>
                        </li>
                    ))}
            </ul>
            <div className="filters">
                <button
                    onClick={() =>
                        setUrl("http://localhost:3000/trips?loc=europe")
                    }
                >
                    European Trips
                </button>
                <button onClick={() => setUrl("http://localhost:3000/trips")}>
                    All Trips
                </button>
            </div>
        </div>
    );
}
