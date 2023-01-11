import users from "../assets/users.png";
import {
  activeusers,
  loans,
  savings,
  InfoCard,
  Layout,
  Table,
  useFetch,
} from "../components/index";
import { allUsers } from "../utils/urls";

const Home = () => {
  const { data, isLoading } = useFetch(allUsers);

  let count = 0;

  if (data) {
    data.forEach((user: any) => {
      if (user.education.loanRepayment) {
        count++;
      }
    });
  }

  return (
    <Layout isLoading={isLoading}>
      {data && (
        <div>
          <h2>users</h2>
          <div className="dashboard__info">
            <InfoCard text="users" num={data.length} img={users} />
            <InfoCard text="active users" num={data.length} img={activeusers} />
            <InfoCard text="users with loans" num={count} img={loans} />
            <InfoCard text="users with savings" num="102,453" img={savings} />
          </div>
          <div className="table__box">
            <Table data={data} />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Home;
