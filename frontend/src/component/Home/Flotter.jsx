import React from "react";
import "./Flotter.css";
import proimg from "../../Assets/procover2.png";
import { Link } from "react-router-dom";
import logopro from "../../Assets/cardamom-50.png";
import logopro2 from "../../Assets/cinnamon-91.png";
import logopro1 from "../../Assets/clove-64.png";

const Flotter = () => {
  return (
    <div classproimg="ag-format-container">
      <div class="ag-courses_box">
        <div class="ag-courses_item">
          <a href="#" class="ag-courses-item_link">
            <div class="ag-courses-item_bg"></div>

            <div class="ag-courses-item_title">
              <div>
                <img
                  src={logopro}
                  style={{
                    width: "90px",
                    height: "90px",
                    marginTop: "10px",
                    marginBottom: "-20px",
                    borderBottom: "",
                  }}
                />
              </div>
              Cinnamon
              <div>
                <img
                  src={proimg}
                  style={{ width: "250px", height: "250px", marginTop: "5px" }}
                />
              </div>
            </div>

            <div class="ag-courses-item_date-box">
              <Link to="/Products">
                <button
                  style={{
                    fontSize: "1vmax",
                    color: "#ffff",
                    backgroundColor: "#F06A49",
                    border: "none",
                    borderRadius: "25px",
                    padding: "10px 15px 10px 15px",
                    marginBottom:"3px",
                    boxShadow:"rgba(25, 25, 25, 0.04) 0 0 1px 0, rgba(0, 0, 0, 0.1) 0 3px 4px 0"
                  }}
                >
                  {" "}
                  View more
                </button>
              </Link>
            </div>
          </a>
        </div>

        <div class="ag-courses_item">
          <a href="#" class="ag-courses-item_link">
            <div class="ag-courses-item_bg"></div>

            <div class="ag-courses-item_title">
              <div>
                <img
                  src={logopro2}
                  style={{
                    width: "90px",
                    height: "90px",
                    marginTop: "10px",
                    marginBottom: "-20px",
                    borderBottom: "",
                  }}
                />
              </div>
              Cardamom Tea
              <div>
                <img
                  src={proimg}
                  style={{
                    width: "250px",
                    height: "250px",
                    marginTop: "5px",
                    border: "none",
                    borderRadius: "5%",
                  }}
                />
              </div>
            </div>

            <div class="ag-courses-item_date-box">
              <Link to="/Products">
                <button
                  style={{
                    fontSize: "1vmax",
                    color: "#ffff",
                    backgroundColor: "#F06A49",
                    border: "none",
                    borderRadius: "25px",
                    padding: "10px 15px 10px 15px",
                    marginBottom:"3px",
                    boxShadow:"rgba(25, 25, 25, 0.04) 0 0 1px 0, rgba(0, 0, 0, 0.1) 0 3px 4px 0"
                  }}
                >
                  {" "}
                  View more
                </button>
              </Link>
            </div>
          </a>
        </div>

        <div class="ag-courses_item">
          <a href="#" class="ag-courses-item_link">
            <div class="ag-courses-item_bg"></div>

            <div class="ag-courses-item_title">
              <div>
                <img
                  src={logopro1}
                  style={{
                    width: "90px",
                    height: "90px",
                    marginTop: "10px",
                    marginBottom: "-20px",
                    borderBottom: "",
                  }}
                />
              </div>
              Clove Tea
              <div>
                <img
                  src={proimg}
                  style={{
                    width: "250px",
                    height: "250px",
                    marginTop: "5px",
                    border: "none",
                    borderRadius: "5%",
                  }}
                />
              </div>
            </div>

            <div class="ag-courses-item_date-box">
              <Link to="/Products">
                <button
                  style={{
                    fontSize: "1vmax",
                    color: "#ffff",
                    backgroundColor: "#F06A49",
                    border: "none",
                    borderRadius: "25px",
                    padding: "10px 15px 10px 15px",
                    marginBottom:"3px",
                    boxShadow:"rgba(25, 25, 25, 0.04) 0 0 1px 0, rgba(0, 0, 0, 0.1) 0 3px 4px 0"
                  }}
                >
                  {" "}
                  View more
                </button>
              </Link>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Flotter;
