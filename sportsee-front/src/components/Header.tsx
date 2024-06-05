import logo from "../assets/logo.svg";
import textLogo from "../assets/text-logo.svg";

const Header = () => {
  return (
    <header className="flex gap-36 items-center list-none bg-black text-white p-3.5 text-2xl">
      <div className="flex gap-2">
        <img src={logo} alt="logo" />
        <img src={textLogo} alt="text-logo" />
      </div>
      <ul className="flex justify-between gap-52">
      <li>Accueil</li>
      <li>Profil</li>
      <li>Réglage</li>
      <li>Communauté</li>
      </ul>
    </header>
  );
};

export default Header;
