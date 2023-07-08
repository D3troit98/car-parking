
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { motion } from "framer-motion";

const OccupancyRateChart = ({occupancyData, labels}:any) => {
  // const [occupancyData, setOccupancyData] = useState([]);
  // const [labels, setLabels] = useState([]);
  ChartJS.register(ArcElement, Tooltip, Legend);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("/api/occupancy");
  //       const { occupancyData, labels } = response.data;
  //       setOccupancyData(occupancyData);
  //       setLabels(labels);
  //     } catch (error) {
  //       console.error("Error fetching occupancy data:", error);
  //       setOccupancyData([]); // Set empty data in case of an error
  //       setLabels([]);
  //     }
  //   };

  //   fetchData();
  // }, []);
console.log(occupancyData, labels)
  return (
    <div data-cy="occupancy-rate-chart" className="w-full md:w-1/2">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-[#FECB21] text-center">
          Occupancy Rate
        </h2>
        {occupancyData?.length > 0 && labels?.length > 0 ? (
          <Pie
            data={{
              labels: labels,
              datasets: [
                {
                  label: "Occupancy Rate",
                  data: occupancyData,
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
          />
        ) : (
          <div className="flex items-center animate-pulse">
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-gray-900 mr-2"></div>
            <span className="text-yellow-500">Loading occupancy data.</span>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default OccupancyRateChart;
