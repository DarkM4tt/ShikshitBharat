import { useState } from "react";
import { colleges } from "../colleges";

const CollegeTable = () => {
  const [tableData, setTableData] = useState(colleges.slice(0, 10));
  const [hasMore, setHasMore] = useState(colleges.length > 10);

  const handleScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    if (scrollTop + clientHeight >= scrollHeight && hasMore) {
      const nextTableData = colleges.slice(
        tableData.length,
        tableData.length + 10
      );
      setTableData([...tableData, ...nextTableData]);
      setHasMore(nextTableData.length > 0);
    }
  };

  return (
    <div
      className="container"
      onScroll={handleScroll}
      style={{ height: "70vh", overflowY: "auto" }}
    >
      <table className="college-table">
        <thead>
          <tr>
            <th className="table-header">CD Rank</th>
            <th className="table-header">Colleges</th>
            <th className="table-header">Course Fees</th>
            <th className="table-header">Placement</th>
            <th className="table-header">User Reviews</th>
            <th className="table-header">Ranking</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((college, index) => (
            <tr
              key={index}
              className={college.featured ? "featured-row" : "table-row"}
            >
              <td>#{index + 1}</td>
              <td>
                <div className="colleges">
                  <img
                    src={college.college_logo}
                    alt={college.college_name}
                    width="50"
                    height="40"
                  />
                  <div className="college-info">
                    <span className="name">
                      {college.college_name}, {college.college_city}
                    </span>{" "}
                    <br />
                    <div>
                      <span className="location">{`${college.college_city}, ${college.college_state}`}</span>{" "}
                      |{" "}
                      <span className="approval">
                        {college.institutions_approved.join(", ")} Approved
                      </span>
                    </div>
                    <br />
                    <div className="rank">
                      <span className="course">
                        B. Tech, Computer Science And Engineering
                      </span>
                      <span className="cuttoff">{`JEE-Advanced 2023 Cutoff: ${college.last_year_jee_advanced_btech_cse_cutoff}`}</span>
                    </div>
                  </div>
                  <div className="footer"></div>
                </div>
              </td>
              <td className="course-fees">{college.course_fees}</td>
              <td className="placement">
                <span>{college.placement.average_package}</span> <br />
                <span>{college.placement.highest_package}</span>
              </td>
              <td className="user-reviews">
                <span>{college.user_reviews.rating}</span> <br />
                <span>
                  {college.user_reviews.no_of_users
                    ? college.user_reviews.no_of_users + " reviews"
                    : ""}
                </span>{" "}
                <br />
                <span>
                  {college.user_reviews.best_in
                    ? `Best in ${college.user_reviews.best_in}`
                    : ""}
                </span>
              </td>
              <td className="ranking">
                {college.ranking ? college.ranking : "-"}
              </td>
            </tr>
          ))}
          {hasMore && <div>Loading...</div>}
        </tbody>
      </table>
    </div>
  );
};

export default CollegeTable;
