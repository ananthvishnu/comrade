import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./AllProducts.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  deleteProduct,
  getAdminProduct,
} from "../../actions/ProductActions";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { ToastContainer, toast } from 'react-toastify';
import { DELETE_PRODUCT_RESET } from "../../constans/ProductConstans";


const AllProducts = ({history}) => {

const dispatch = useDispatch();

const { error, products } = useSelector((state) => state.products);

const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteProduct
  );

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  };

useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    if (deleteError) {
        toast.error(deleteError);
        dispatch(clearErrors());
      }
  
      if (isDeleted) {
        toast.success("Product Deleted Successfully");
        history.push("/dashboard");
        dispatch({ type: DELETE_PRODUCT_RESET });
      }
    dispatch(getAdminProduct());
  }, [dispatch, alert, error, history]);

const columns = [
    // { field: "id", headerName: "Product ID", minWidth: 200, flex: 0.5 },
    // { field: "custom", headerName: "custom_id", minWidth: 200, flex: 0.5 },
    {
      field:"productImage",
      headerName:"Product",
      minWidth:100,
      flex:0.3,
      align:"left",
      renderCell: (params) => {
        const productImage = params.getValue(params.id , "productImage");
        return (
          <img 
          src={productImage}
          alt="User"
          style={{
            width:50,
            height:50,
            border:"4px solid orange"
          }}
          />
        );
      },

    },
{ field: "custom", headerName: "Product-Id", minWidth: 200, flex: 0.3 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 300,
      flex: 0.5,
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: "price",
      headerName: "Price",
      type: "number",
      minWidth: 200,
      flex: 0.3,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/edit/product/${params.getValue(params.id, "id")}`}>
              <EditIcon  style={{
                color:"green"
              }}/>
            </Link>

            <Button
            onClick={() =>
                deleteProductHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon style={{
                color:"red"
              }} />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  products &&
    products.forEach((item) => {
      rows.push({
        id: item._id,
        stock: item.Stock,
        price: item.price,
        name: item.name,
        custom:item.custom_id,
        productImage:item.images 
        .map((productImages)=> productImages.url)
        .join(", ")
      });
    });

    return (
       <Fragment>
      <MetaData title={`ALL PRODUCTS - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL PRODUCTS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
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
    )
}

export default AllProducts
