import Profile from "../components/Profile";
import KarlPicture from "../assets/karl.jpg";
import CeciliaPicture from "../assets/cecilia.jpg";

const Lobby = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <div className="bg-[#FF0000] rounded-xl p-4 text-center">
        <p className="text-xl font-bold">Switch user</p>
        <p>⬇</p>
      </div>
      <div className="flex gap-4">
        <Profile name="Karl" image={KarlPicture} id={12} />
        <Profile name="Cecilia" image={CeciliaPicture} id={18} />
      </div>
    </div>
  );
};

export default Lobby;
