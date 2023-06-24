import { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

const ParkingHistoryTimeline = () => {
  const [timelineData, setTimelineData] = useState({
    checkInDates: [],
    checkInTimes: [],
  });
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/parking-history-chart");
        const { checkInDates, checkInTimes } = response.data;
        setTimelineData({ checkInDates, checkInTimes });
      } catch (error) {
        console.error("Error fetching parking history data:", error);
        setTimelineData({ checkInDates: [], checkInTimes: [] }); // Set empty data in case of an error
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full md:w-1/2">
      <div className="">
        <h2 className="text-2xl font-bold mb-4">Parking History Timeline</h2>
        {timelineData.checkInDates.length > 0 ? (
          <Line
            data={{
              labels: timelineData.checkInDates,
              datasets: [
                {
                  label: "Check-in Times",
                  data: timelineData.checkInTimes,
                  borderColor: "rgb(255, 99, 132)",
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                },
              ],
            }}
            options={{
              responsive: true,
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Check-in Dates",
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Check-in Times",
                  },
                },
              },
            }}
          />
        ) : (
          <div className="flex items-center animate-pulse">
            <div className="animate-spin  rounded-full h-6 w-6 border-t-2 border-b-2 border-gray-900 mr-2"></div>
            <span className="text-yellow-500">
              Loading parking history data.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParkingHistoryTimeline;
