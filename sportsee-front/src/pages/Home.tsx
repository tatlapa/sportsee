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

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex">
        <AsideNav />
        <div className="mx-28 my-16 w-full">
          <Greeting firstName="Thomas" />
          <div className="flex gap-4 mt-12">
            <div className="flex flex-col w-full">
              <Activity />
              <div className="flex gap-2 h-full">
                <div className="bg-[#FF0000] w-64 h-64">
                  <Sessions />
                </div>
                <div className="bg-[#282D30] w-64 h-64">
                  <SimpleRadarChart />
                </div>
                <div className="bg-white w-64 h-64">
                  <ScoreChart />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Macronutritient
                icon={caloriesIcon}
                quantity={1.93}
                measurementUnit="kCal"
                nutritient="Calories"
              />
              <Macronutritient
                icon={proteinIcon}
                quantity={1.93}
                measurementUnit="kCal"
                nutritient="Protein"
              />
              <Macronutritient
                icon={carbsIcon}
                quantity={1.93}
                measurementUnit="kCal"
                nutritient="Carbs"
              />
              <Macronutritient
                icon={fatIcon}
                quantity={1.93}
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
