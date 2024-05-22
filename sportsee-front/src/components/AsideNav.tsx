import Bodybuilding from "../../src/assets/bodybuilding.svg";
import Cycling from "../../src/assets/cycling.svg";
import Meditation from "../../src/assets/meditation.svg";
import Swimming from "../../src/assets/swimming.svg";

const AsideNav = () => {
  return (
    <nav className="flex flex-col p-6 bg-black text-white justify-center w-fit h-screen gap-32">
      <ul className="flex flex-col gap-4">
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
      <p className="writingMode-vertical textOrientation-upright">Copyright, SportSee 2020</p>    </nav>
  );
};

export default AsideNav;
