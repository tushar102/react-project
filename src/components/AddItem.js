import React, { useState } from "react";
import Select from 'react-select'

const AddItem = () => {
  const [item, setItem] = useState({
    category: "",
    brands: "",
    unit: "",
    screen: "",
    attribute: "",
    title: "",
  });

  const onInputChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const onAdd = async (e) => {
    e.preventDefault();
    console.log(item);
  };

  const options = [
    { value: 'Galaxy A 50', label: 'Galaxy A 50' },
    { value: 'Galaxy A 30', label: 'Galaxy A 30' },
    { value: 'samsung', label: 'samsung' }
  ]

  const {title } = item;
  return (
    <div classee="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Field</h2>
        <form onSubmit={onAdd}>
          <div className="form-group">
            <label>Select Category</label>
            <select  onChange={onInputChange} className="form-control" id="exampleFormControlSelect1" name="category">
              <option>Grocery</option>
              <option>Mobiles</option>
            </select>
          </div>
          <div className="form-group">
            <label>Select Brand</label>
            <select  onChange={onInputChange} className="form-control" id="exampleFormControlSelect1" name="brands">
              <option>Samsung New</option>
              <option>Oppoo</option>
              <option>Nokia</option>
              <option>One plus</option>
              <option>Polo</option>
              <option>Levis</option>
            </select>
          </div>
          <div className="form-group">
            <label>Select Unit</label>
            <select  onChange={onInputChange} className="form-control" id="exampleFormControlSelect1" name="unit">
              <option>mm</option>
              <option>cm</option>
              <option>ft</option>
              <option>m</option>
              <option>GB</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Screen Type</label>
            <select  onChange={onInputChange} className="form-control" id="exampleFormControlSelect1" name="screen">
              <option>Horizontal</option>
              <option>Vertical</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Select Attribute</label>
          </div>
           <Select options={options}  name="attribute" isMulti/>
          <div className="form-group mt-3">
            <label htmlFor="exampleInputPassword1">Select Title</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Title"
              name="title"
              value={title}
              onChange={onInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
