import React from "react";

const Logo = ({
  logo,
  name,
  className,
}: {
  logo: string;
  name: string;
  className: string;
}) => {
  return (
    <div className={className}>
      <img src={logo} alt="logo" className="logo" />
      <img src={name} alt="company" />
    </div>
  );
};

export default Logo;
