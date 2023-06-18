import React from "react";
import { NavLink } from "react-router-dom";

const ListHospital = (props) => {
  console.log(props);
  return (
    <div className="list-section">
      <p className="j-text">Search Results</p>
      <hr />
      <div className="p-2 row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img
              src="https://imgs.search.brave.com/29bVYCbAC9t-yaIdJsLSQeGPl5gJjBtImZ0iMdmRF_s/rs:fit:700:337:1/g:ce/aHR0cHM6Ly93d3cu/bWVkaWZlZS5jb20v/b2ZmZXJzL3RoeXJv/Y2FyZS9pbWcvYXBv/bGxvLWhvc3BpdGFs/LWJodWJhbmVzd2Fy/LmpwZw"
              className="card-img-top"
              alt="Apollo Hospital"
            />
            <div className="card-body">
              <h5 className="card-title">Apollo Hospital</h5>
              <p className="card-text text-black-50">
                Plot Number 251, Gajapati Nagar, Bhubaneswar -750015
              </p>
            </div>
            <div className="card-footer">
              {/* <a href="/" className="col-md-5 col-xs-6 btn"><i className="fa fa-medkit" aria-hidden="true"></i> Make Appointment </a>
                <a href="Javascipt:void(0)" className="d-none d-md-inline col-md-1 text-decoration-none"> || </a> */}
              <NavLink
                to="/find-hospital/details"
                className="col-md-5 col-xs-6 btn text-dark"
              >
                {" "}
                <i className="fa fa-external-link" aria-hidden="true"></i> More
                Details
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListHospital;
