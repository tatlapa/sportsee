import Bodybuilding from "../assets/bodybuilding.svg";
import Cycling from "../assets/cycling.svg";
import Meditation from "../assets/meditation.svg";
import Swimming from "../assets/swimming.svg";

const AsideNav = () => {
  return (
    <nav className="flex flex-col p-6 bg-black text-white justify-center w-fit gap-32">
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
