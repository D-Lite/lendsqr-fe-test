import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Ctx } from "../contexts/globalContext";
import { IsLoading, Header, Popup, Navigation } from "../components/index";

const Layout = ({
  children,
  isLoading,
}: {
  children: React.ReactNode;
  isLoading: boolean | undefined;
}) => {
  const [navIsVisible, setNavIsVisible] = useState<boolean>(false);
  const { user } = Ctx();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user, navigate]);

  const handleNavVisibility = () => {
    setNavIsVisible(true);
    const body = document.querySelector("body")!;
    body.style.overflow = "hidden";
  };

  const handleNavInVisibility = () => {
    setNavIsVisible(false);
    const body = document.querySelector("body")!;
    body.style.overflow = "auto";
  };
  return (
    <div>
      {isLoading && <IsLoading isLoading={isLoading} />}

      {navIsVisible && <Popup handleDrawer={handleNavInVisibility} />}
      <div className="dashboard__container">
        <Navigation navIsVisible={navIsVisible} />
        <main>
          <Header handleDrawer={handleNavVisibility} />
          <div className="dashboard__main">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
