import React, { useState, useEffect } from "react";
import axios from 'axios';

import Products from "./Products";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../App.css";

const ListProduct = () => {
    const [data, setData] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [brand, setBrand] = useState("");

    const [currentData, setCurrentData] = useState(0);

    const handleSave = () => {
        if (title !== "" && price !== "" && stock !== "" && brand !== "") {
            setCurrentData(count => count + 1)
            const newData = { id: currentData, title: title, price: price, stock: stock, brand: brand };
            setData([...data, newData]);
            setShow(false);
        }
        setTitle("");
        setPrice("");
        setStock("");
        setBrand("");
    }


    const removeItem = (id) => {
        const newData = data.filter((item) => item.id !== id);
        setData(newData);
    }

    useEffect(() => {
        const getData = async function () {
            const baseURL = "http://localhost:5000/currentData";
            const response = await axios.get(baseURL);
            const new_data = response.data;
            setData(new_data);
            setCurrentData(new_data.length + 1)
        }
        getData();
    }, [])

    return (
        <div className="App">
            <h1 style={{ color: "blue" }}>Product Management</h1>
            {/* <ButtonCRUD></ButtonCRUD> */}
            <Button variant="primary" onClick={handleShow}>
                Add
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton >
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>Các trường có dấu <span className="text-danger">*</span> là bắt buộc cần nhập</div>
                    <div className="mb-3 mt-3">
                        <label className="w-25">Title: <span className="text-danger">*</span></label>
                        <input type="text" className="py-1 w-50" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="w-25">Price: <span className="text-danger">*</span></label>
                        <input type="text" className="py-1 w-50" onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="w-25">Stock: <span className="text-danger">*</span></label>
                        <input type="text" className="py-1 w-50" onChange={(e) => setStock(e.target.value)} />
                    </div>
                    <div>
                        <label className="w-25">Brand: <span className="text-danger">*</span></label>
                        <input type="text" className="py-1 w-50" onChange={(e) => setBrand(e.target.value)} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
            <Products data={data} setData={setData} removeItem={removeItem} />
        </div>
    );
}

export default ListProduct;