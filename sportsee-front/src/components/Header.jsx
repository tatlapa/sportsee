import logo from "../assets/logo.svg";
import textLogo from "../assets/text-logo.svg";

const Header = () => {
  return (
    <header className="flex justify-between items-center list-none bg-black text-white p-6 text-2xl">
      <div className="flex gap-2">
        <img src={logo} alt="logo" />
        <img src={textLogo} alt="text-logo" />
      </div>
      <li>Accueil</li>
      <li>Profil</li>
      <li>Réglage</li>
      <li>Communauté</li>
    </header>
  );
};

export default Header;
