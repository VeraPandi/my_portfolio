import { Link } from "react-router";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <nav className="flex justify-between md:text-lg animate-slide">
      <Logo />
      <Link to="/about" className="text-primary">
        À propos
      </Link>
    </nav>
  );
};

export default Navigation;
