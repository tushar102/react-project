import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [items, setItem] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const result = await axios.get("http://3.20.41.252:3000/admin/getFields");
    setItem(result.data.response);
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://3.20.41.252:3000/admin/deleteField/${id}`);
    // this api is not working because of authorization
    loadItems();
  };
  return (
    <div className="container">
      <form
        className="form-inline my-2 my-lg-0 d-flex justify-content-center position-absolute"
        style={{ top: "9px", right: "1px" }}
      >
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(event) => setSearchItem(event.target.value)}
        />
      </form>
      <div className="py-4">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Category</th>
              <th scope="col">Brands</th>
              <th scope="col">Title</th>
              <th scope="col">Screen type</th>
              <th scope="col">Attributes</th>
              <th scope="col">Unit</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {items
              .filter((item) => {
                if (searchItem === "") {
                  return item;
                } else if (
                  item.brand.title
                    .toLowerCase()
                    .includes(searchItem.toLowerCase())
                ) {
                  return item;
                }
                return false;
              })
              .map((item, index) => (
                <tr key={item._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.catagory_id.title}</td>
                  <td>{item.brand.title}</td>
                  <td>{item.title}</td>
                  <td>{item.type === "1" ? `Horizontal` : `Vertical`}</td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {item.attributes[0]}
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        {item.attributes.map((attribute) => (
                          <Link
                            className="dropdown-item"
                            key={attribute}
                            to="/"
                          >
                            {attribute}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td>{item.unit}</td>
                  <td className="pl-4">
                    <button className="btn btn-outline-primary mr-2">
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteItem(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
