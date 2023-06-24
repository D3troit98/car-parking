import { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { motion } from "framer-motion";

interface PopularSpotsData {
  parkingSpots: string[];
  counts: number[];
}

const PopularParkingSpotsChart = () => {
  const [popularSpotsData, setPopularSpotsData] = useState<PopularSpotsData>({
    parkingSpots: [],
    counts: [],
  });
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<PopularSpotsData>(
          "/api/popular-parking-spots"
        );

        setPopularSpotsData(response.data);
      } catch (error) {
        console.error("Error fetching popular parking spots data:", error);
        setPopularSpotsData({
          parkingSpots: [],
          counts: [],
        }); // Set empty data in case of an error
      }
    };

    fetchData();
  }, []);
  console.log(popularSpotsData.parkingSpots);
  return (
    <div className="w-full">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">Popular Parking Spots</h2>
        {popularSpotsData.parkingSpots.length > 0 ? (
          <Bar
            data={{
              labels: popularSpotsData.parkingSpots,
              datasets: [
                {
                  label: "Check-in Count",
                  data: popularSpotsData.counts,
                  backgroundColor: "#FECB21",
                },
              ],
            }}
            options={{
              responsive: true,
              indexAxis: "y",
              scales: {
                y: {
                  title: {
                    display: true,
                    text: "Parking Spots",
                  },
                },
                x: {
                  title: {
                    display: true,
                    text: "Check-in Count",
                  },
                },
              },
            }}
          />
        ) : (
          <div className="flex items-center animate-pulse">
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-gray-900 mr-2"></div>
            <span className="text-yellow-500">
              Loading popular parking spots data.
            </span>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default PopularParkingSpotsChart;
