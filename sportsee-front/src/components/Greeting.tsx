import React from "react";

interface GreetingProps {
  firstName: string;
}

const Greeting: React.FC<GreetingProps> = (props) => {
  return (
    <div>
      <h1>Bonjour, {props.firstName}</h1>
        <p className="mt-12 text-xl">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default Greeting;
