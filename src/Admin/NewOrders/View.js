import React from 'react';
import { Link } from 'react-router-dom';

const View = ({orderid, data,handleContent}) => {
  const order =data.find((item)=>item.orderid === orderid)
  return (
    <>
      <div className="row">
        <h2 className="margin-left">Order Details</h2>
        <div className="col l1 m1 hide-small">&nbsp;</div>
        <div className="col l10 m10">
          <button className="btn black round margin" disabled="true">
            Confirmed
          </button>
          <button className="btn deep-orange round margin">
            Out For Delivery
          </button>
          <button className="btn green round margin">
            <i className="fas fa-check-square"></i> Complete Order
          </button>
          <button className="btn red round margin">
            <i className="fas fa-window-close"></i> Cancel
          </button>
          <button className="btn blue round margin">
            <i className="fas fa-print"></i> Print Bill
          </button>
          <div className="container shadow card round padding white">
            <label className="margin-right">Assign Delivery Boy</label>
            <select
              className="select border round padding"
              style={{ width: '150px' }}
            >
              <option>Select Delivery Boy</option>
              <option>Sorry, No members found yet</option>
            </select>
            <button className="btn round green margin small">Update</button>
          </div>
          <div className="userDetails container padding white card shadow round margin-top">
            <div className="row">
              <h3>Order ID :{order.orderid}</h3>
              <div className="col m4">
                <h4>Order Details</h4>
                <p>Date : <b> {order.orderTime}</b></p>
                <p>No of Items :<b>{order.NoOfItems}</b></p>
                <p>total : &nbsp;<b>{order.Total}</b></p>
                <p className="text-teal">
                  Status : &nbsp;<b>Order Confirmed</b>
                </p>
                <p className="text-deep-orange">
                  Delivery Admin: &nbsp;<b>Not Assigned</b>
                </p>
              </div>
              <div className="col m4">
                <h4>Customer Details</h4>
                <p>Name : <b>{order.Name}</b></p>
                <p>contact no : <b>{order.Number}</b></p>
              </div>

              <div className="col m4">
                <h4>Delivary Address : </h4>
                <p>Type :Home</p>
                <p className="text-grey">
                  om sai munneshwara PG kundalhalli, bangalore-560037
                </p>
              </div>
            </div>
            <div className="orderDetails container padding white card shadow round margin-top">
              <h3>Dishes Ordered</h3>
              <table className="table">
                <tbody>
                  <tr className="blue">
                    <td>Product</td>
                    <td>Price</td>
                    <td>Qty</td>
                    <td>Sum</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/">Chicken pickle 250g</a>
                    </td>
                    <td>200</td>
                    <td>X : <b>1</b></td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/">Mango pickle 250g</a>
                    </td>
                    <td>80</td>
                    <td>X : <b>1</b></td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/">Tomato pickle 250g</a>
                    </td>
                    <td>40</td>
                    <td>X : <b>1</b></td>
                    <td>40</td>
                  </tr>
                  <tr className="light-grey">
                    <td colspan="3"> Delivery Charges</td>
                    <td>0</td>
                  </tr>
                  <tr className="black">
                    <td colspan="3"> Total</td>
                    <td>320</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="container padding white card shadow round margin-top">
              <button className="btn green card right round margin-top">
                Open App
              </button>
              <h3>User Location</h3>
              <div className="padding border"></div>
              <p></p>
              <button style={{float:'right'}} onClick={() => handleContent('NewOrders')} className="btn round blue">Back</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;