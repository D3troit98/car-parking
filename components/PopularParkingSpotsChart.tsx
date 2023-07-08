
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


const PopularParkingSpotsChart = ({popularParkingSpots}:any) => {
  // const [popularSpotsData, setPopularSpotsData] = useState<PopularSpotsData>({
  //   parkingSpots: [],
  //   counts: [],
  // });
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get<PopularSpotsData>(
  //         "/api/popular-parking-spots"
  //       );

  //       setPopularSpotsData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching popular parking spots data:", error);
  //       setPopularSpotsData({
  //         parkingSpots: [],
  //         counts: [],
  //       }); // Set empty data in case of an error
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div data-cy="popular-parking-spots-chart" className="w-full">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">Popular Parking Spots</h2>
        {popularParkingSpots?.parkingSpots.length > 0 ? (
          <Bar
            data={{
              labels: popularParkingSpots.parkingSpots,
              datasets: [
                {
                  label: "Check-in Count",
                  data: popularParkingSpots.counts,
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
