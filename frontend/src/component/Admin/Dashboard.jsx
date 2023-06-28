import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Typography, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Doughnut, Line, Bar, Pie } from "react-chartjs-2";
// eslint-disable-next-line
import Chart from "chart.js/auto";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../../more/Metadata.js";
import Loading from "../../more/Loader.js";
import { getAdminProduct } from "../../actions/ProductActions.js";
import { getAllOrders } from "../../actions/OrderAction.js";
import { getAllUsers } from "../../actions/userAction.js";
import { getAllBlogs } from "../../actions/BlogAction.js";
import { getAllNotes } from "../../actions/NoteAction.js";
import { getAllReports } from "../../actions/ReportAction.js";
import moment from "moment";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PostAddIcon from "@material-ui/icons/PostAdd";
import HomeIcon from "@mui/icons-material/Home";
// import ListItem from '@mui/material/ListItem';
import user from "../user/Profile.jsx";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.products);

  const { orders } = useSelector((state) => state.AllOrders);

  const { users } = useSelector((state) => state.allUsers);

  const { blogs } = useSelector((state) => state.AllBlogs);

  const { notes } = useSelector((state) => state.AllNotes);

  const { reports } = useSelector((state) => state.AllReports);

  const [mostOrderedItemsData, setMostOrderedItemsData] = useState(null);

  const [ratingChartData, setRatingChartData] = useState(null);

  const [userChartData, setUserChartData] = useState(null);

  const [contentCountChartData, setContentCountChartData] = useState(null);

  const [orderStatusChartData, setOrderStatusChartData] = useState(null);

  const { user } = useSelector((state) => state.user);

  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
    dispatch(getAllBlogs());
    dispatch(getAllNotes());
    dispatch(getAllReports());
  }, [dispatch]);

  useEffect(() => {
    if (blogs && notes && reports) {
      const data = [blogs.length, notes.length, reports.length];

      setContentCountChartData({
        labels: ["Blogs", "Notes", "Reports"],
        datasets: [
          {
            label: "Content Count",
            data,
            backgroundColor: ["#88A47C", "#227C70", "#1C315E"],
            //hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          },
        ],
      });
    }
  }, [blogs, notes, reports]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["#F99B7D"],
        //hoverBackgroundColor: ["#F06A49"],
        data: [0, totalAmount],
        fill: true,
      },
    ],
  };

  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["red", "#F5A764"],
        //hoverBackgroundColor: ["#4B5000", "#97b693"],
        data: [outOfStock, products.length - outOfStock],
      },
    ],
  };
  const barState = {
    labels: products && products.map((product) => product.name),
    datasets: [
      {
        label: "Stock",
        backgroundColor:
          products &&
          products.map((product) => (product.Stock <= 20 ? "#4F709C" : "#116A7B")),
        data: products && products.map((product) => product.Stock),
      },
    ],
  };

  const salesPerMonthState = {
    labels:
      orders &&
      orders.map((order) => moment(order.createdAt).format("MMMM YYYY")),
    datasets: [
      {
        label: "Sales per Month",
        backgroundColor: "#116A7B",
        borderColor: "#116A7B",
        fill: false,
        data: orders && orders.map((order) => order.totalPrice),
      },
    ],
  };

  //calculate most order item
  useEffect(() => {
    if (orders && orders.length > 0) {
      // Calculate the most ordered items
      const orderedItems = orders.flatMap((order) => order.orderItems);
      const itemQuantities = orderedItems.reduce((acc, item) => {
        acc[item.name] = (acc[item.name] || 0) + item.quantity;
        return acc;
      }, {});

      const mostOrderedItems = Object.entries(itemQuantities)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5); // Get the top 5 most ordered items

      // Prepare the data for the pie chart
      const pieLabels = mostOrderedItems.map(([name]) => name);
      const pieData = mostOrderedItems.map(([_, quantity]) => quantity);

      setMostOrderedItemsData({
        labels: pieLabels,
        datasets: [
          {
            data: pieData,
            backgroundColor: [
              "#344D67",
              "#6ECCAF",
              "#ADE792",
              "#F3ECB0",
              "#9966FF",
            ],
            // hoverBackgroundColor: [
            //   "#FF6384",
            //   "#36A2EB",
            //   "#FFCE56",
            //   "#4BC0C0",
            //   "#9966FF",
            // ],
          },
        ],
      });
    }
  }, [orders]);

  //Admin see the product ratings summary
  const calculateRatingDistribution = () => {
    const productRatings =  products && products.map((product) => {
      const ratings = product.reviews.map((review) => review.rating);
      const averageRating =
        ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;
      return {
        productName: product.name,
        averageRating: parseFloat(averageRating.toFixed(1)),
      };
    });

    const sortedProducts = productRatings.sort(
      (a, b) => b.averageRating - a.averageRating
    );

    const labels = sortedProducts.map((product) => product.productName);
    const data = sortedProducts.map((product) => product.averageRating);

    setRatingChartData({
      labels,
      datasets: [
        {
          label: "Average Rating per Product",
          data,
          backgroundColor: [
            "#393E46",
            "#6D9886",
            "#F2E7D5",
            "#F7F7F7",
            "#FF9800",
          ],
          // hoverBackgroundColor: [
          //   "#FF6384",
          //   "#36A2EB",
          //   "#FFCE56",
          //   "#66BB6A",
          //   "#FF9800",
          // ],
        },
      ],
    });
  };

  //Rating Count useEffect
  useEffect(() => {
    calculateRatingDistribution();
  }, [orders]);

  //Admin & User Count useEffect
  useEffect(() => {
    const adminCount = users.filter((user) => user.role === "admin").length;
    const userCount = users.length - adminCount;

    setUserChartData({
      labels: ["Admin", "User"],
      datasets: [
        {
          data: [adminCount, userCount],
          backgroundColor: ["#116A7B", "#5C8984"],
          //hoverBackgroundColor: ["#FF6384", "#36A2EB"],
        },
      ],
    });
  }, [users]);

  useEffect(() => {
    if (orders && orders.length > 0) {
      const orderStatusCounts = orders.reduce((acc, order) => {
        acc[order.orderStatus] = (acc[order.orderStatus] || 0) + 1;
        return acc;
      }, {});

      const pieLabels = Object.keys(orderStatusCounts);
      const pieData = Object.values(orderStatusCounts);

      setOrderStatusChartData({
        labels: pieLabels,
        datasets: [
          {
            data: pieData,
            backgroundColor: ["#2A4E45", "#2E8A99", "#8EAC50"],
            //hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          },
        ],
      });
    }
  }, [orders]);
  const orderCount = orders ? orders.length : 0;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="dashboard">
          <MetaData title="Dashboard" />
          <Sidebar />

          <div className="dashboardContainer">
            <div className="dashboardnav">
              <div className="navicon">
                {" "}
                <HomeIcon
                  style={{
                    color: "#fff",
                    width: "50px",
                    height: "50px",
                    marginLeft: "5%",
                    background: "#2A4E45",
                    marginTop: "8px",
                    borderRadius: "12px",
                    padding: "5px",
                    boxShadow: "#000 0 0 1px 0, #000 0 3px 4px 0",
                  }}
                />
              </div>
              <Typography
                component="h1"
                style={{
                  marginLeft: "65%",
                  marginTop: "-50px",
                  fontSize: "1.5vmax",
                }}
              >
                Dashboard
              </Typography>
              <Link to="/login">
                <div
                  style={{
                    marginLeft: "90%",
                    marginTop: "-50px",
                    fontSize: "1.5vmax",
                  }}
                >
                  {user ? (
                    <>
                      {user.avatar ? (
                        <img
                          src={user.avatar.url}
                          className="profile__img"
                          alt="Profile"
                          style={{
                            height: "40px",
                            width: "40px",
                          }}
                        />
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30px"
                          height="30px"
                          fill="currentColor"
                          className="bi bi-person pxz__20 black"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                        </svg>
                      )}
                    </>
                  ) : (
                    <Link to="/login">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30px"
                        height="30px"
                        fill="currentColor"
                        className="bi bi-person pxz__20 black"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                      </svg>
                    </Link>
                  )}
                </div>
              </Link>
            </div>
            <br />

            <div className="dashboardSummary">
              <div className="dashboardSummaryBox2">
                <Link to="/admin/products">
                  <PostAddIcon
                    style={{
                      color: "#000",
                      width: "45px",
                      height: "45px",
                      background: "#066163",
                      borderRadius: "5px",
                      boxShadow: "#000 0 0 1px 0, #000 0 3px 4px 0",
                      margin: "-50px 250px 0px 0px",
                      padding: "20px",
                    }}
                  />
                  <p style={{ marginLeft: "45%", marginTop: "-10%" ,color:"#fff"}}>
                    Product
                  </p>
                  <p style={{ marginLeft: "45%",color:"#fff" }}>
                    {products && products.length}
                  </p>
                  <hr style={{ marginTop: "10%",color:"#fff" }} />
                </Link>
                <Link to="/admin/orders">
                  <ListAltIcon
                    style={{
                      color: "#000",
                      width: "50px",
                      height: "50px",
                      background: "#066163",
                      borderRadius: "5px",
                      boxShadow: "#000 0 0 1px 0, #000 0 3px 4px 0",
                      margin: "-50px 250px 0px 0px",
                      padding: "20px",
                    }}
                  />
                  <p style={{ marginLeft: "45%", marginTop: "-10%",color:"#fff" }}>Orders</p>
                  <p style={{ marginLeft: "45%" ,color:"#fff"}}>{orders && orders.length}</p>

                  <hr style={{ marginTop: "10%",color:"#fff" }} />
                </Link>
                <Link to="/admin/users" style={{ background: "#41644A" }}>
                  <PeopleAltOutlinedIcon
                    style={{
                      color: "#000",
                      width: "50px",
                      height: "50px",
                      background: "#066163",

                      // background: "#2A4E45",
                      borderRadius: "5px",
                      boxShadow: "#000 0 0 1px 0, #000 0 3px 4px 0",
                      margin: "-50px 250px 0px 0px",
                      padding: "20px",
                    }}
                  />
                  <p style={{ marginLeft: "45%", marginTop: "-10%",color:"#fff" }}>
                    Customer
                  </p>
                  <p style={{ marginLeft: "45%",color:"#fff" }}>{users && users.length}</p>

                  <hr style={{ marginTop: "10%",color:"#fff" }} />
                </Link>
                <Link to="/admin/users">
                  <PostAddIcon
                    style={{
                      color: "#000",
                      width: "45px",
                      height: "45px",
                      background: "#066163",
                      borderRadius: "5px",
                      boxShadow: "#000 0 0 1px 0, #000 0 3px 4px 0",
                      margin: "-50px 250px 0px 0px",
                      padding: "20px",
                    }}
                  />
                  <p style={{ marginLeft: "45%", marginTop: "-15%",color:"#fff" }}>
                    Total Amount
                  </p>
                  <p style={{ marginLeft: "45%",color:"#fff" }}> ${totalAmount}</p>
                  <hr style={{ marginTop: "5%",color:"#fff" }} />
                </Link>
              </div>
            </div>

            <div className="grid">
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <div className="grid-item">
                    <Typography
                      component="h1"
                      style={{
                       color:"#000",
                        marginBottom: "-5%",
                        padding: "10px",
                        fontWeight:"bolder"
                      }}
                    >
                      Sales Per Month
                    </Typography>
                    <div className="salesPerDayChart">
                      <Line data={salesPerMonthState} />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="grid-item">
                    <div>
                      <Typography component="h1" style={{  fontWeight:"bolder"}}>Order Status</Typography>
                      <Typography component="h1">
                        Total Orders : {orderCount}
                      </Typography>
                      {orderStatusChartData ? (
                        <div className="pieChart1">
                          <Pie data={orderStatusChartData} />
                        </div>
                      ) : (
                        <p>No data available</p>
                      )}
                    </div>
                  </div>
                </Grid>
                <Grid item xs={7}>
                  <div className="grid-item">
                    <Typography
                      component="h2"
                      style={{
                        marginLeft: "20%",
                        marginBottom: "-3%",
                        padding: "15px",
                        fontWeight:"bolder"
                      }}
                    >
                      Every Product Stock
                    </Typography>
                    <div className="barChart">
                      <Bar data={barState} />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={5}>
                  <div className="grid-item">
                    <Typography
                      component="h2"
                      style={{
                        marginLeft: "35%",

                        marginBottom: "",
                        marginTop: "",
                        padding: "10px",
                        fontWeight:"bolder"
                      }}
                    >
                      Most Ordered Items
                    </Typography>
                    {mostOrderedItemsData ? (
                      <div className="pieChart2">
                        <Pie data={mostOrderedItemsData} />
                      </div>
                    ) : (
                      <p>No data available</p>
                    )}
                  </div>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <div className="grid-item">
                    <Typography
                      component="h1"
                      style={{
                       
                        fontWeight:"bolder",
                        padding: "15px",
                      }}
                    >
                      All Products Ratings
                    </Typography>

                    {ratingChartData && (
                      <div className="ratingChart">
                        <Doughnut data={ratingChartData} />
                      </div>
                    )}
                  </div>
                </Grid>

                <Grid item xs={8}>
                  <div className="grid-item">
                    <Typography
                      component="h1"
                      style={{ marginTop: "2%",  fontWeight:"bolder"}}
                    >
                      Total Amount
                    </Typography>
                    <div className="lineChart">
                      <Line data={lineState} />
                    </div>
                  </div>
                </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={3}>
                    <div className="grid-item">
                      <Typography component="h1" style={{  fontWeight:"bolder"}}>Customer</Typography>
                      {userChartData ? (
                        <div className="pieChart">
                          <Pie data={userChartData} />
                        </div>
                      ) : (
                        <p>No data available</p>
                      )}
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="grid-item">
                      <Typography component="h1" style={{  fontWeight:"bolder"}}>Content Count</Typography>
                      {contentCountChartData ? (
                        <div className="barChart1">
                          <Bar data={contentCountChartData} />
                        </div>
                      ) : (
                        <p>No data available</p>
                      )}
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                  <div className="grid-item">
                    <Typography
                      component="h1"
                      style={{
                       
                        marginBottom: "-3.5%",
                        padding: "15px",
                        fontWeight:"bolder"
                      }}
                    >
                      Stock
                    </Typography>
                    <div className="doughnutChart">
                      <Doughnut data={doughnutState} />
                    </div>
                    </div>
                  </Grid>
                 
              </Grid>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;