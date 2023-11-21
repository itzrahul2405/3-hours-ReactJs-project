import React from "react";

const OrderList = (props) => {

    const deleteHandler = (table, orderId) => {
        props.onDelete(table, orderId);
      };

  return (
    <div>
      <h2>Orders</h2>
      <h3>Table 1</h3>
      <ul>
        {props.table1list.map((order) => (
          <li key={order.id}>
            {order.price}-{order.table}-{order.dish}
            <button onClick={() => deleteHandler(order.table, order.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h3>Table 2</h3>
      <ul>
        {props.table2list.map((order) => (
          <li key={order.id}>
            {order.price}-{order.table}-{order.dish}
            <button onClick={() => deleteHandler(order.table, order.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h3>Table 3</h3>
      <ul>
        {props.table3list.map((order) => (
          <li key={order.id}>
            {order.price}-{order.table}-{order.dish}
            <button onClick={() => deleteHandler(order.table, order.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
