import Link from "next/link";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Profile from "./Profile";
import ThemeToggler from "./ThemeToggler";

const TopNavBar = () => {
  return (
    <nav className="shadow-md py-2">
      <div className="container px-1 mx-auto flex items-center justify-between">
        {/* Start  */}
        <div
          className="flex items-center gap-2
        "
        >
          <MobileMenu />
          <Link href="/" className="font-bold">
            Smart Book
          </Link>
        </div>
        {/* Center  */}
        <div className="hidden lg:flex">
          <DesktopMenu />
        </div>
        {/* End  */}
        <div className="flex items-center gap-2">
          <ThemeToggler />
          <Profile />
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
