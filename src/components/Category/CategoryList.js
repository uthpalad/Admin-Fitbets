import React, { Component } from "react";
import Dashboard from "../DashBoard/dashboard";
import DashboardFooter from "../DashBoard/dashboard_footer";
import DashboardMenu from "../DashBoard/dashboard_menu";
import "../assets/category.scss";
import Back from "../assets/images/add_image1.png";

const initialState = {
  image: null,
  previewImage: Back,
};

class EditCategory extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onFileChange = this.onFileChange.bind(this);
  }
  onFileChange = (event) => {
    this.setState({ image: event.target.files[0] });
    this.setState({ previewImage: URL.createObjectURL(event.target.files[0]) });
  };

  render() {
    return (
      <>
        <div className="container-scroller">
          <Dashboard />

          <div className="container-fluid page-body-wrapper">
            <DashboardMenu />
            <div className="main-panel">
              <div className="content-wrapper">
                <div className="row">
                  <div className="col-12 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h1 className="card-title">Edit Category Details</h1>
                        <p className="card-description">
                          Now You can edit Category Details
                        </p>
                        <br />
                        <form className="forms-sample">
                          <div className="form-group">
                            <label htmlFor="exampleInputName1">
                              Category Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputName1"
                              placeholder="Category Name"
                            />
                          </div>

                          <div className="form-group">
                            <label>Category Images</label>
                            <input
                              type="file"
                              name="image"
                              accept="image/*"
                              onChange={this.onFileChange}
                              className="form-control form-control-user"
                              required
                            />
                          </div>
                          <div className="col-12 p-0 ">
                            <img
                              src={this.state.previewImage}
                              alt="Category Image"
                              style={{ height: 400, width: "50%" }}
                            />
                          </div>
                          <br />

                          <div className="form-group">
                            <label htmlFor="exampleInputEmail3">
                              Equipment
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputEmail3"
                              placeholder="Equipment"
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="exampleTextarea1">Rule</label>
                            <textarea
                              className="form-control"
                              id="exampleTextarea1"
                              rows={4}
                              defaultValue={""}
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary mr-2"
                          >
                           Save
                          </button>
                          <button className="btn btn-light">Cancel</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <DashboardFooter />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default EditCategory;
