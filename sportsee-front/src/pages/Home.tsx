import Greeting from "../components/Greeting";
import Macronutritient from "../components/Macronutrient";
import caloriesIcon from "../assets/calories-icon.svg";
import proteinIcon from "../assets/protein-icon.svg";
import carbsIcon from "../assets/carbs-icon.svg";
import fatIcon from "../assets/fat-icon.svg";
import ActivityChart from "../components/charts/Activity/ActivityChart";
import Header from "../components/Header";
import AsideNav from "../components/AsideNav";
import SessionChart from "../components/charts/Session/SessionChart";
import SimpleRadarChart from "../components/charts/SimpleRadarChart";
import ScoreChart from "../components/charts/ScoreChart";
import Api from "../services/Api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const Home = () => {
  const { id } = useParams();
  const api = Api({ userId: Number(id) });

  const {
    data: dataInfos,
    error: errorInfos,
    isPending,
  } = useQuery({
    queryKey: ["repoDataInfos"],
    queryFn: () => api.getUserMainData(),
  });

  if (errorInfos) {
    alert("An error has occurred: " + errorInfos.message);
  }

  const calculatedScore = dataInfos?.todayScore
    ? dataInfos.todayScore * 100
    : dataInfos?.score * 100;

  const { data: dataActivity, error: errorActivity } = useQuery({
    queryKey: ["repoDataActivity"],
    queryFn: () => api.getUserActivity(),
  });

  if (errorActivity) {
    alert("An error has occurred: " + errorActivity.message);
  }

  const { data: dataSession, error: errorSession } = useQuery({
    queryKey: ["repoDataSession"],
    queryFn: () => api.getUserSession(),
  });

  if (errorSession) {
    alert("An error has occurred: " + errorSession.message);
  }

  interface Item {
    kind: number;
  }

  const { data: dataPerformance, error: errorPerformance } = useQuery({
    queryKey: ["repoDataPerformance"],
    queryFn: () => api.getUserPerformance(),
    select: (data) =>
      data.data.map((item: Item) => ({
        ...item,
        kind: data.kind[item.kind],
      })),
  });

  if (errorPerformance) {
    alert("An error has occurred: " + errorPerformance.message);
  }

  return (
    <>
      <Header />
      <main className="flex">
        <AsideNav />
        <div className="mx-28 my-16 w-full">
          <Greeting
            firstName={dataInfos?.userInfos?.firstName}
            isLoading={isPending}
          />
          <div className="flex gap-4 mt-12">
            <div className="flex flex-col w-full gap-6">
              <ActivityChart
                data={dataActivity?.sessions}
                isLoading={isPending}
              />
              <div className="flex gap-8 h-full">
                <SessionChart
                  data={dataSession?.sessions}
                  isLoading={isPending}
                />
                <SimpleRadarChart
                  data={dataPerformance}
                  isLoading={isPending}
                />
                <ScoreChart score={calculatedScore} isLoading={isPending} />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Macronutritient
                icon={caloriesIcon}
                quantity={dataInfos?.keyData?.calorieCount}
                measurementUnit="kCal"
                nutritient="Calories"
                isLoading={isPending}
              />
              <Macronutritient
                icon={proteinIcon}
                quantity={dataInfos?.keyData?.proteinCount}
                measurementUnit="g"
                nutritient="Protéines"
                isLoading={isPending}
              />
              <Macronutritient
                icon={carbsIcon}
                quantity={dataInfos?.keyData?.carbohydrateCount}
                measurementUnit="g"
                nutritient="Glucides"
                isLoading={isPending}
              />
              <Macronutritient
                icon={fatIcon}
                quantity={dataInfos?.keyData?.lipidCount}
                measurementUnit="g"
                nutritient="Lipides"
                isLoading={isPending}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
