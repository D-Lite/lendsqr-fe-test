import {
  back,
  starFilled,
  starHole,
  Layout,
  useFetch,
} from "../components/index";

import { singleUser } from "../utils/urls";
import { useParams } from "react-router-dom";
const UserDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetch(`${singleUser}/${id}`);
  window.scroll({ top: 0, behavior: "smooth" });

  return (
    <Layout isLoading={isLoading}>
      {data && (
        <div className="details__box1">
          <a href="/">
            <p className="back">
              <img src={back} alt="back" /> Back to users
            </p>
          </a>

          <div className="details__userstatus">
            <h2>user details</h2>
            <div className="button__box">
              <button className="button__box--blacklist">blacklist user</button>
              <button className="button__box--active">activate user</button>
            </div>
          </div>

          <div className="details__userintrobox">
            <div className="details__userheader">
              <div className="details__userheader--0">
                <img src={data.profile.avatar} alt="user" />
              </div>
              <div className="details__userheader--1">
                <div>
                  <h3>
                    {data.profile.firstName + " " + data.profile.lastName}
                  </h3>
                  <p>{data.accountNumber}</p>
                </div>
              </div>
              <div className="details__userheader--2">
                <p>user's tier</p>
                <div>
                  <img src={starFilled} alt="filled star" />
                  <img src={starHole} alt="empty star" />
                  <img src={starHole} alt="user" />
                </div>
              </div>
              <div className="details__userheader--3">
                <h3>₦{data.accountBalance}</h3>
                <p>2209152939/zenith bank</p>
              </div>
            </div>
            <div className="button__nav">
              <button className="button__nav--active" type="button">
                general details
              </button>
              <button type="button">documents</button>
              <button type="button">bank details</button>
              <button type="button">loans</button>
              <button type="button">savings</button>
              <button type="button">app and system</button>
            </div>
          </div>

          <div className="details__usermaininfo">
            <div className="userbox">
              <div className="details__usermaininfo--1">
                <h3>personal information</h3>
                <div className="details__info">
                  <div>
                    <h4>full name</h4>
                    <p>
                      {data.profile.firstName + " " + data.profile.lastName}
                    </p>
                  </div>
                  <div>
                    <h4>phone number </h4>
                    <p> {data.phoneNumber}</p>
                  </div>
                  <div>
                    <h4>email address</h4>
                    <p> {data.email}</p>
                  </div>
                  <div>
                    <h4>bvn</h4>
                    <p> {data.profile.bvn}</p>
                  </div>
                  <div className="info__last">
                    <h4>gender</h4>
                    <p> {data.profile.gender}</p>
                  </div>
                  <div>
                    <h4>marital status</h4>
                    <p> single</p>
                  </div>
                  <div>
                    <h4> children </h4>
                    <p> none</p>
                  </div>
                  <div>
                    <h4>type of residence</h4>
                    <p>{data.profile.address}</p>
                  </div>
                </div>
              </div>

              <div className="details__usermaininfo--1">
                <h3>Education and Employment</h3>
                <div className="details__info ext">
                  <div>
                    <h4>level of education</h4>
                    <p> {data.education.level}</p>
                  </div>
                  <div>
                    <h4>employment status </h4>
                    <p> {data.education.employmentStatus}</p>
                  </div>
                  <div>
                    <h4>sector of employment</h4>
                    <p> {data.education.sector}</p>
                  </div>
                  <div className="info__last">
                    <h4>Duration of employment</h4>
                    <p> {data.education.duration} </p>
                  </div>
                  <div>
                    <h4>office email</h4>
                    <p> {data.education.officeEmail}</p>
                  </div>
                  <div>
                    <h4>Monthly income</h4>
                    <p>
                      ₦{data.education.monthlyIncome[0]}- ₦
                      {data.education.monthlyIncome[1]}
                    </p>
                  </div>
                  <div>
                    <h4> loan repayment </h4>
                    <p> 40,000</p>
                  </div>
                </div>
              </div>

              <div className="details__usermaininfo--1">
                <h3>Socials</h3>
                <div className="details__info ">
                  <div>
                    <h4>Twitter</h4>
                    <p>{data.socials.twitter}</p>
                  </div>
                  <div>
                    <h4>Facebook </h4>
                    <p>{data.socials.facebook}</p>
                  </div>

                  <div className="info__last">
                    <h4>Instagram</h4>
                    <p>{data.socials.instagram}</p>
                  </div>
                </div>
              </div>

              <div className="details__usermaininfo--1">
                <h3>Guarantor</h3>
                <div className="details__info ">
                  <div>
                    <h4>full Name</h4>
                    <p>
                      {data.guarantor.firstName + " " + data.guarantor.lastName}
                    </p>
                  </div>
                  <div>
                    <h4>Phone Number </h4>
                    <p> {data.guarantor.phoneNumber}</p>
                  </div>
                  <div>
                    <h4>Email Address</h4>
                    <p> debby@gmail.com</p>
                  </div>
                  <div className="info__last">
                    <h4>Relationship</h4>
                    <p> Sister</p>
                  </div>
                </div>
              </div>
              {/* <div className="details__usermaininfo--1">
                <h3>&nbsp;</h3>
                <div className="details__info ">
                  <div>
                    <h4>full Name</h4>
                    <p> Debby Ogana</p>
                  </div>
                  <div>
                    <h4>Phone Number </h4>
                    <p> 07060780922</p>
                  </div>
                  <div>
                    <h4>Email Address</h4>
                    <p> debby@gmail.com</p>
                  </div>
                  <div className="info__last">
                    <h4>Relationship</h4>
                    <p> Sister</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default UserDetails;
