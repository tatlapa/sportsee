import Bodybuilding from "../assets/bodybuilding.svg";
import Cycling from "../assets/cycling.svg";
import Meditation from "../assets/meditation.svg";
import Swimming from "../assets/swimming.svg";

const AsideNav = () => {
  return (
    <nav className="bg-black px-7 text-white">
      <ul className="flex flex-col gap-4 pt-[256px]">
        <li>
          <img src={Meditation}></img>
        </li>
        <li>
          <img src={Swimming}></img>
        </li>
        <li>
          <img src={Cycling}></img>
        </li>
        <li>
          <img src={Bodybuilding}></img>
        </li>
      </ul>
      <div className="flex justify-center pt-40">
        <p className="[writing-mode:vertical-lr] rotate-180">
          Copyright, SportSee 2020
        </p>
      </div>
    </nav>
  );
};

export default AsideNav;
