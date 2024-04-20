import order_history_data from "@/data/order-history-data";
import React from "react";

const OrderHistory = () => {
  return (
    <>
      <div className="student-profile-orders-wrapper">
        <div className="student-profile-orders">
          {order_history_data.map((item) => (
            <div
              key={item.id}
              className="student-profile-order custom-height-80"
            >
              <div className="student-profile-order-name">
                <span>{item.orderName}</span>
              </div>
              <div className="student-profile-order-price">
                <span>${item.orderPrice}</span>
              </div>
              <div className="student-profile-order-duration">
                <span>{item.orderDuration}</span>
              </div>
              <div className="student-profile-order-status">
                <span>{item.orderStatus}</span>
              </div>
              <div className="student-profile-order-method">
                <span>{item.orderMethod}</span>
              </div>
              <div className="student-profile-order-date">
                <span>{item.orderDate}</span>
              </div>
              <div className="student-profile-order-renew">
                <button type="button" className="edu-btn">
                  {item.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
