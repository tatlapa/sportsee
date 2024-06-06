import React from "react";
import Loading from "./Utilities/Loading";

interface GreetingProps {
  firstName: string;
  isLoading: boolean;
}

const Greeting: React.FC<GreetingProps> = (props: GreetingProps) => {
  if (props.isLoading) return <Loading />;
  return (
    <>
      <h1>
        Bonjour, <span className="text-[#FF0101]">{props.firstName}</span>
      </h1>
      <p className="mt-12 text-xl">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </>
  );
};

export default Greeting;
