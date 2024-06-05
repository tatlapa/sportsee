import Greeting from "../components/Greeting";
import Macronutritient from "../components/Macronutrient";
import caloriesIcon from "../assets/calories-icon.svg";
import proteinIcon from "../assets/protein-icon.svg";
import carbsIcon from "../assets/carbs-icon.svg";
import fatIcon from "../assets/fat-icon.svg";
import Activity from "../components/charts/ActivityChart";
import Header from "../components/Header";
import AsideNav from "../components/AsideNav";
import Sessions from "../components/charts/SessionChart";
import SimpleRadarChart from "../components/charts/SimpleRadarChart";
import ScoreChart from "../components/charts/ScoreChart";
import Api from "../services/Api";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const id = 12;
  const api = Api({ userId: id });

  const { data: dataInfos, error: errorInfos } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => api.getUserMainData(),
  });

  if (errorInfos) {
    alert("An error has occurred: " + errorInfos.message);
  }

  // const { data: dataActivity, errorActivity } = useQuery({
  //   queryKey: ["repoData"],
  //   queryFn: () => api.getUserActivity(),
  // });

  // if (errorActivity) {
  //   alert("An error has occurred: " + errorActivity.message);
  // }

    // const { data: dataSession, errorSession } = useQuery({
  //   queryKey: ["repoData"],
  //   queryFn: () => api.getUserSession(),
  // });

  // if (errorSession) {
  //   alert("An error has occurred: " + errorSession.message);
  // }

    // const { data: dataPerformance, errorPerformance } = useQuery({
  //   queryKey: ["repoData"],
  //   queryFn: () => api.getUserPerformance(),
  // });

  // if (errorPerformance) {
  //   alert("An error has occurred: " + errorPerformance.message);
  // }

  return (
    <>
      <Header />
      <main className="flex">
        <AsideNav />
        <div className="mx-28 my-16 w-full">
          <Greeting firstName={dataInfos?.userInfos?.firstName} />
          <div className="flex gap-4 mt-12">
            <div className="flex flex-col w-full gap-6">
              <Activity />
              <div className="flex gap-8 h-full">
                <div className="bg-[#FF0000] w-64 h-64 rounded">
                  <p className="absolute top-4 left-4 text-white"></p>
                  <Sessions />
                </div>
                <div className="bg-[#282D30] w-64 h-64 rounded">
                  <SimpleRadarChart />
                </div>
                <div className="bg-[#FBFBFB] w-64 h-64 rounded">
                  <ScoreChart score={dataInfos?.todayScore}/>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Macronutritient
                icon={caloriesIcon}
                quantity={dataInfos?.keyData?.calorieCount}
                measurementUnit="kCal"
                nutritient="Calories"
              />
              <Macronutritient
                icon={proteinIcon}
                quantity={dataInfos?.keyData?.proteinCount}
                measurementUnit="kCal"
                nutritient="Protein"
              />
              <Macronutritient
                icon={carbsIcon}
                quantity={dataInfos?.keyData?.carbohydrateCount}
                measurementUnit="kCal"
                nutritient="Carbs"
              />
              <Macronutritient
                icon={fatIcon}
                quantity={dataInfos?.keyData?.lipidCount}
                measurementUnit="kCal"
                nutritient="Fat"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
