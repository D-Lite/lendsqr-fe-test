import { useEffect, useState, useRef, Dispatch, SetStateAction } from "react";
import DatePicker from "react-datepicker";
import handshake from "../assets/nav/handshake.svg";
import "react-datepicker/dist/react-datepicker.css";

const Filter = ({
  data,
  handleFilterAction,
  handleVisibility,
}: {
  data: [];
  handleFilterAction: Function;
  handleVisibility: Dispatch<SetStateAction<boolean>>;
}) => {
  const [startDate, setStartDate] = useState<Date | null>();
  const organizationRef = useRef<any>();
  const emailRef = useRef<any>();
  const nameRef = useRef<any>();
  const phoneRef = useRef<any>();
  const statusRef = useRef<any>();
  let newFilter: any = [];

  useEffect(() => {
    setTimeout(() => {
      // @ts-ignore
      document
        .querySelector(".react-datepicker__input-container")
        ?.querySelector("input")
        ?.setAttribute("id", "date");
    }, 100);
  }, []);

  const handleReset = () => {
    handleFilterAction(data);
    handleVisibility(false);
  };
  const handleFilter = () => {
    const organizationIsNotTouched = organizationRef?.current?.value === "none";
    const statusIsNotTouched = statusRef?.current?.value === "none";
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const org = organizationRef?.current?.value;
    const status = statusRef?.current?.value;
    const phone = phoneRef.current.value;
    if (
      !email &&
      !name &&
      !phone &&
      statusIsNotTouched &&
      organizationIsNotTouched &&
      !startDate
    ) {
      return handleVisibility(false);
    }

    if (email) {
      newFilter = data.filter((value: any) => {
        return value.email.toLowerCase().includes(email.toLowerCase());
      });
    }
    if (phone) {
      let filter = data.filter((value: any) => {
        return value.phoneNumber.includes(phone.toLowerCase());
      });
      newFilter = [...newFilter, ...filter];
    }
    if (name) {
      let filter = data.filter((value: any) => {
        return value.userName.toLowerCase().includes(name.toLowerCase());
      });
      newFilter = [...newFilter, ...filter];
    }
    if (!organizationIsNotTouched) {
      let filter = data.filter((value: any) => {
        return value.orgName.toLowerCase().includes(org.toLowerCase());
      });
      newFilter = [...newFilter, ...filter];
    }

    if (startDate) {
      let filter = data.filter((value: any) => {
        let date = new Date(value.createdAt);
        let timeString = date.toLocaleDateString().toString();
        let dateString = startDate.toLocaleDateString().toString();
        return timeString.includes(dateString);
      });
      newFilter = [...newFilter, ...filter];
    }
    if (!statusIsNotTouched) {
      let filter = data.filter((value: any) => {
        return value.status === status;
      });
      newFilter = [...newFilter, ...filter];
    }
    newFilter = new Set(newFilter);
    let uniqueFilter: any = [];
    newFilter.forEach((item: any) => uniqueFilter.push(item));
    window.scroll({ top: 0, behavior: "smooth" });
    handleFilterAction(uniqueFilter);
    handleVisibility(false);
  };

  return (
    <div className="filter__box">
      <div className="div">
        <label>organization</label>
        <select name="organization" id="organization" ref={organizationRef}>
          <option value="none" disabled selected hidden>
            Select
          </option>
          {data.map((user, i) => (
            // @ts-ignore
            <option key={i}>{user.orgName}</option>
          ))}
        </select>
      </div>

      <div className="div">
        <label>username</label>
        <input type="text" placeholder="User" ref={nameRef} />
      </div>
      <div className="div">
        <label>Email</label>
        <input type="text" placeholder="Email" ref={emailRef} />
      </div>
      <div className="calendar_test div">
        <p className="label">Date</p>
        <DatePicker
          selected={startDate}
          placeholderText="Date"
          showYearDropdown
          yearDropdownItemNumber={55}
          scrollableYearDropdown
          onChange={(date: Date) => setStartDate(date)}
        />
        <label htmlFor="date">
          <img src={handshake} alt="calendar" className="calendar" />
        </label>
      </div>
      <div className="div">
        <label>Phone Number</label>
        <input ref={phoneRef} type="text" placeholder="Phone Number" />
      </div>
      <div className="div">
        <label>status</label>
        <select name="organization" id="organization" ref={statusRef}>
          <option value="none" disabled selected hidden>
            Select
          </option>
          <option value="inactive">inactive</option>
          <option value="pending">pending</option>
          <option value="active">active</option>
          <option value="blacklisted">blacklisted</option>
        </select>
      </div>
      <div className="filter__btncontainer">
        <button type="button" className="reset" onClick={handleReset}>
          reset
        </button>
        <button onClick={handleFilter} type="button" className="filter">
          filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
