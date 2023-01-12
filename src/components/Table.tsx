import { FilterDropdown, settings, Filter, Paginate } from "../components/index";
import { useCallback, useState } from "react";

import { formatTime } from "../utils/helperFunctions";
import { useNavigate } from "react-router-dom";

const Table = ({ data }: { data: [] }) => {
  const [filterVisible, setFilterVisible] = useState<boolean>(false);
  const [paginatedData, setPaginatedData] = useState<[]>([]);
  const navigate = useNavigate();

  const getCurrentItems = useCallback((items: any) => {
    setPaginatedData(items);
  }, []);
  
  const getFilteredData = (data: []) => {
    setPaginatedData(data);
  };
  const routeToUserPage = (e: React.MouseEvent<HTMLTableRowElement>) => {
    // @ts-ignore
    const element = e.target.closest("#href");
    navigate(element.dataset.href);
  };

  return (
    <div>
      <div>
        <table className="usertable">
          <thead>
            <tr>
              <th>
                <div>
                  <h3>organization</h3>
                    <img src={FilterDropdown} onClick={() => setFilterVisible(!filterVisible)} alt="users" />
                </div>
              </th>
              <th>
                <div>
                  <h3>username</h3>
                  <img src={FilterDropdown} onClick={() => setFilterVisible(!filterVisible)} alt="users" />
                </div>
              </th>
              <th>
                <div>
                  <h3>email</h3>
                  <img src={FilterDropdown} onClick={() => setFilterVisible(!filterVisible)} alt="users" />
                </div>
              </th>
              <th>
                <div>
                  <h3>phone number</h3>
                  <img src={FilterDropdown} onClick={() => setFilterVisible(!filterVisible)} alt="users" />
                </div>
              </th>
              <th>
                <div>
                  <h3>date joined</h3>
                  <img src={FilterDropdown} onClick={() => setFilterVisible(!filterVisible)} alt="users" />
                </div>
              </th>
              <th>
                <div>
                  <h3>status</h3>
                  <img src={FilterDropdown} onClick={() => setFilterVisible(!filterVisible)} alt="users" />
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {paginatedData &&
              paginatedData?.map(
                ({ orgName, userName, email, phoneNumber, createdAt, id }) => (
                  <tr
                    data-href={`/userdetails/${id}`}
                    key={id}
                    onClick={routeToUserPage}
                    id="href"
                  >
                    <td>{orgName}</td>
                    <td>{userName}</td>
                    <td>{email}</td>
                    <td>{phoneNumber}</td>
                    <td>{formatTime(createdAt)}</td>
                    <td>
                      <p className="status__active">active</p>
                    </td>
                    <td>
                      <img
                        src={settings}
                        alt="settings dropdown"
                        className="usertable__dropdown"
                      />
                    </td>
                  </tr>
                )
              )}
          </tbody>
        </table>
        <div className="dashboard__filtercontainer">
          {filterVisible && (
            <Filter
              data={paginatedData}
              handleFilterAction={getFilteredData}
              handleVisibility={setFilterVisible}
            />
          )}
        </div>
        <div className="dashboard__tableFooter">
          <div className="selectPerPage">
              <p>Showing</p>
              <select name="pages" className="pagesSelect">
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
            <p>out of 100</p>
          </div>
          <div>
            <Paginate getCurrentItems={getCurrentItems} items={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
