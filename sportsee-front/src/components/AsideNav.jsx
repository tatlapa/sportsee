import Bodybuilding from "../../src/assets/bodybuilding.svg";
import Cycling from "../../src/assets/cycling.svg";
import Meditation from "../../src/assets/meditation.svg";
import Swimming from "../../src/assets/swimming.svg";

const AsideNav = () => {
  return (
    <nav className="flex flex-col p-6 bg-black text-white">
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
    </nav>
  );
};

export default AsideNav;
