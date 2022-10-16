import React from "react";

const Home = () => {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2">
          <a href="/register">
          <button className="btn btn-primary" to="/register">Add Data</button>
          </a>
        </div>

        <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr className="table-dark">
              <th scope="col">Id</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Customer Mob</th>
              <th scope="col">Email</th>
              <th scope="col">Customer Address</th>
              <th scope="col">Enquiry</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr>
              <th scope="row">1</th>
              <td>Shivendra kr singh</td>
              <td>9319256984</td>
              <td>shivi@gmail.com</td>
              <td>12/1 cassia road</td>
              <td>scooty</td>
              <td className="d-flex justify-content-between">
                <button className="btn btn-success"><i class="fa-sharp fa-solid fa-eye"></i></button>
                <button className="btn btn-primary"><i class="fa-regular fa-pen-to-square"></i></button>
                <button className="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Shivendra kr singh</td>
              <td>9319256984</td>
              <td>shivi@gmail.com</td>
              <td>12/1 cassia road shipra sun city</td>
              <td>scooty</td>
              <td className="d-flex justify-content-between">
                <button className="btn btn-success"><i class="fa-sharp fa-solid fa-eye"></i></button>
                <button className="btn btn-primary"><i class="fa-regular fa-pen-to-square"></i></button>
                <button className="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
