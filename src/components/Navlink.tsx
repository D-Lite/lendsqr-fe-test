const Navlink = ({
  icon,
  text,
  handleLogout,
}: {
  icon: string;
  text: string;
  handleLogout?: Function;
}) => {
  const handleLogoutClick = (e: any) => {
    if (!handleLogout) return;
    e.preventDefault();

    handleLogout();
  };
  return (
    // @ts-ignore
    <li className="dashboard__navbox-li" onClick={handleLogoutClick}>
      <a href="/">
        <img src={icon} alt="users" />
        <p>{text}</p>
      </a>
    </li>
  );
};

export default Navlink;
