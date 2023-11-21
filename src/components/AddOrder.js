import React, { useState } from "react";
import OrderList from "./OrderList";

const AddOrder = () => {

    const [id, setId] = useState('')
    const [price, setPrice] = useState('')
    const [dish, setDish] = useState('')
    const [table, setTable] = useState('table1')

    const [table1List, setTable1List] = useState([])
    const [table2List, setTable2List] = useState([])
    const [table3List, setTable3List] = useState([])



    const orderIdHandler = (event) => {
        // console.log(event.target.value)
        setId(event.target.value)
    }

    const priceHandler = (event) => {
        // console.log(event.target.value)
        setPrice(event.target.value)
    }

    const dishHandler = (event) => {
        // console.log(event.target.value)
        setDish(event.target.value)
    }

    const tableHandler = (event) => {
        // console.log(event.target.value)
        setTable(event.target.value)
    }




    const AddOrderHandler = (event) =>{
        event.preventDefault()
        // console.log({id: id, price: price, dish: dish, table: table})  

        if(table==='table1') {
            setTable1List([...table1List, {id: id, price: price, dish: dish, table: table}])
        }
        if(table==='table2') {
            setTable2List([...table2List, {id: id, price: price, dish: dish, table: table}])
        }
        if(table==='table3') {
            setTable3List([...table3List, {id: id, price: price, dish: dish, table: table}])
        }

        setId('')
        setPrice('')
        setDish('')
    }



    const handleDeleteOrder = (table, orderId) => {
        // Implement your logic to delete the order
        // Update the state to remove the deleted order
    
        if (table === 'table1') {
            setTable1List((prevList) => prevList.filter((order) => order.id !== orderId));
        } else if (table === 'table2') {
            setTable2List((prevList) => prevList.filter((order) => order.id !== orderId));
        } else if (table === 'table3') {
            setTable3List((prevList) => prevList.filter((order) => order.id !== orderId));
        }
    };



  return (
    <div>
      <form onSubmit={AddOrderHandler}>
        <label htmlFor="order-id">Unique Order ID: </label>
        <input type="number" id="order-id" value={id}  onChange={orderIdHandler}/>

        <label htmlFor="price">Choose Price: </label>
        <input type="number" id="price" value={price}  onChange={priceHandler}/>

        <label htmlFor="dish">Choose Dish: </label>
        <input type="text" id="dish" value={dish}  onChange={dishHandler}/>
        
        <label htmlFor="table">Choose a Table: </label>
        <select id="table" value={table}  onChange={tableHandler}>
          <option value='table1'>Table 1</option>
          <option value='table2'>Table 2</option>
          <option value='table3'>Table 3</option>
        </select>

        <button type="submit">Add a bill</button>
      </form>
      <OrderList table1list={table1List} table2list={table2List} table3list={table3List}  onDelete={(table, orderId) => handleDeleteOrder(table, orderId)}  />  
    </div>
  );
};

export default AddOrder;
