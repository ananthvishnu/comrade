import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./myOrders.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, myOrders } from "../../actions/OrderAction";
import { Link } from "react-router-dom";
import MetaData from "../../more/Metadata";
import LaunchIcon from "@material-ui/icons/Launch";
import Loading from "../../more/Loader";
import BottomTab from "../../more/BottomTab";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Home/Header";
import Foot from "../../Foot";

const MyOrder = () => {
  const dispatch = useDispatch();

  const { loading, error, orders } = useSelector((state) => state.myOrder);

  const { user } = useSelector((state) => state.user);

  const columns = [
    // { field: "id", headerName: "Order ID", minWidth: 300, flex: 1 },
    { field: "ORDER_ID", headerName: "Order ID", minWidth: 250, flex: 0.3 }, //short id

    {
      field: "productNames",
      headerName: "ProductNames",
      minWidth: 150,
      flex: 0.3,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.3,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 150,
      flex: 0.2
    },

    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      minWidth: 150,
      flex: 0.2,
    },

    {
      field: "actions",
      flex: 0.2,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Link to={`/order/${params.getValue(params.id, "id")}`}>
            <LaunchIcon />
          </Link>
        );
      },
    },
  ];
  const rows = [];

  orders &&
    orders.forEach((item, index) => {
      const ProductNames = item.orderItems.map((product) => product.name).join(", ")
      rows.push({
        itemsQty: item.orderItems.length === 0 ? 1 : item.orderItems.length,
        id: item._id,
        ORDER_ID:item.ORDER_ID, //shortid
        status: item.orderStatus,
        amount: item.totalPrice,
        productNames:ProductNames
      });
    });

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    dispatch(myOrders());
  }, [dispatch, alert, error]);

  return (
    <Fragment>
      <Header/>
      <MetaData title={`${user.name} - Orders`} />

      {loading ? (
        <Loading />
      ) : (
        
        <div className="myOrdersPage">
         
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="myOrdersTable"
            autoHeight
          />

        </div>
      )}
      <Foot/>
      <BottomTab />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Fragment>
  
  );
};

export default MyOrder;
