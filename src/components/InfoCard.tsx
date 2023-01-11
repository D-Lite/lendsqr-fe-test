const InfoCard = ({
  text,
  num,
  img,
}: {
  text: string;
  num: number | string;
  img: string;
}) => {
  return (
    <div className="info-card">
      <img src={img} alt="All users" />
      <p>{text}</p>
      <p>{num}</p>
    </div>
  );
};

export default InfoCard;
