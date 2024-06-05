import React from "react";

interface GreetingProps {
  firstName: string;
}

const Greeting: React.FC<GreetingProps> = (props: GreetingProps) => {
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
