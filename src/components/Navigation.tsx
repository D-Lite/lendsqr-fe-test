import {
  users,
  briefcase,
  home,
  loan,
  loanreq,
  karma,
  bank,
  data,
  phonetrans,
  userfunc,
  fan,
  scroll,
  chart,
  clipboard,
  sliders,
  badgepercent,
  dropdown,
  logo,
  Logo,
  name,
  Navlink,
  whitelist,
  decision,
  guarantors,
  navSavings,
} from "../components/index";
import { Ctx } from "../contexts/globalContext";

// /////////-----------------------------

const Navigation = ({ navIsVisible }: { navIsVisible: boolean }) => {
const { logout } = Ctx();

  return (
    <nav
      className="dashboard__nav"
      style={navIsVisible ? { width: "30rem" } : { display: "" }}
      data-testid="sidebar"
    >
      <div className="dashboard__nav--box1">
        <Logo logo={logo} name={name} className="logobox-gen" data-testid="sidebar-logo" />
      </div>

      <div className="dashboard__dropdown">
        <img src={briefcase} alt="users" />
        <h2>switch organization</h2>
        <img src={dropdown} alt="dropdwon" className="drop" />
      </div>

      <div className="dashboard__dropdown">
        <img src={home} alt="users" />
        <h2>Dashboard</h2>
      </div>

      <ul className="dashboard__navbox">
        <h3>customers </h3>
        <Navlink icon={users} text="users" />
        <Navlink icon={guarantors} text="guarantors" />
        <Navlink icon={loan} text="loans" />
        <Navlink icon={decision} text="decision models" />
        <Navlink icon={navSavings} text="savings" />
        <Navlink icon={loanreq} text="loan requests" />
        <Navlink icon={whitelist} text="whitelist" />
        <Navlink icon={karma} text="karma" />
      </ul>

      <ul className="dashboard__navbox">
        <h3>businesses </h3>
        <Navlink icon={briefcase} text="organisation" />
        <Navlink icon={loanreq} text="loan Products" />
        <Navlink icon={bank} text="savings products" />
        <Navlink icon={data} text="fees and charges" />
        <Navlink icon={phonetrans} text="transactions" />
        <Navlink icon={fan} text="services" />
        <Navlink icon={userfunc} text="service account" />
        <Navlink icon={scroll} text="settlements" />
        <Navlink icon={chart} text="reports" />
      </ul>

      <ul className="dashboard__navbox">
        <h3>settings </h3>
        <Navlink icon={sliders} text="preferences" />
        <Navlink icon={badgepercent} text="fees and pricing" />
        <Navlink icon={clipboard} text="audit logs" />
      </ul>
      <ul className="dashboard__navbox">
        <h3>settings </h3>
        <Navlink icon={badgepercent} text="logout" handleLogout={logout} />
      </ul>
    </nav>
  );
};

export default Navigation;
