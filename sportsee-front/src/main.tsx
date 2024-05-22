import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.tsx";
import AsideNav from "./components/AsideNav.tsx";
import "./index.css";
import Greeting from "./components/Greeting.tsx";
import Macronutritient from "./components/Macronutrient.tsx";
import caloriesIcon from "./assets/calories-icon.svg";
import proteinIcon from "./assets/protein-icon.svg";
import carbsIcon from "./assets/carbs-icon.svg";
import fatIcon from "./assets/fat-icon.svg";
import Activity from "./components/Activity.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <main className="flex">
      <AsideNav />
      <div className="mx-28 my-16 w-full">
        <Greeting firstName="Thomas" />
        <div className="flex gap-4 mt-12 h-[320px]">
          <Activity />
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
              nutritient="Calories"
            />

            <Macronutritient
              icon={carbsIcon}
              quantity={1.93}
              measurementUnit="kCal"
              nutritient="Calories"
            />
            <Macronutritient
              icon={fatIcon}
              quantity={1.93}
              measurementUnit="kCal"
              nutritient="Calories"
            />
          </div>
        </div>
      </div>
    </main>
  </React.StrictMode>
);
