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
      style={{ height: "90vh", overflowY: "auto" }}
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
                    <div className="rank">
                      <span className="course">
                        B. Tech, Computer Science And Engineering
                      </span>
                      <span className="cuttoff">{`JEE-Advanced 2023 Cutoff: ${college.last_year_jee_advanced_btech_cse_cutoff}`}</span>
                    </div>
                  </div>
                </div>
                <div className="footer">
                  <span className="an">➡ Apply Now</span>
                  <span className="db">⬇ Download Brochure</span>
                  <span className="ac">☑ Add To Compare</span>
                </div>
              </td>
              <td>
                <div className="course-fees">₹ {college.course_fees}</div>
                <div className="details">
                  <span>BE/B.Tech</span>
                  <span>- 1st Year Fees</span>
                  <span className="cf">🔀 Compare Fees</span>
                </div>
              </td>
              <td>
                <div className="placement course-fees">
                  <span>₹ {college.placement.average_package}</span>
                  <span className="text">Average Package</span>
                  <span>₹ {college.placement.highest_package}</span>
                  <span className="text">Highest Package</span>
                  <span className="cf">🔀 Compare Placement</span>
                </div>
              </td>
              <td>
                <div className="user-reviews">
                  <div className="cp">
                    <span className="circle"></span>
                    <span className="points">
                      {college.user_reviews.rating} / 10
                    </span>
                  </div>
                  <span className="numrev">
                    Based on{" "}
                    {college.user_reviews.no_of_users
                      ? college.user_reviews.no_of_users + " User"
                      : ""}
                    <br />
                    Reviews
                  </span>{" "}
                  <span className="bestIn">
                    ☑{" "}
                    {college.user_reviews.best_in
                      ? `Best in ${college.user_reviews.best_in}`
                      : ""}{" "}
                    ˅
                  </span>
                </div>
              </td>
              <td className="ranking">
                #{college.ranking ? college.ranking : "-"} /{" "}
                <span className="total">150</span> in India
                <div className="news">
                  <img
                    src="https://shashidthakur23.files.wordpress.com/2017/04/untitled.png?w=1108&h=459&crop=1"
                    width="40"
                    height="15"
                    alt="news"
                  />
                  2023
                </div>
                <div className="more">
                  <img
                    src="https://media.istockphoto.com/id/929047972/vector/world-news-flat-vector-icon-news-symbol-logo-illustration-business-concept-simple-flat.jpg?s=612x612&w=0&k=20&c=5jpcJ7xejjFa2qKCzeOXKJGeUl7KZi9qoojZj1Kq_po="
                    width="15"
                    height="15"
                    alt="more"
                  />
                  <span>+9 more ˅</span>
                </div>
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
