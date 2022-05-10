import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    let { name, price, shortDescription, image } = this.props.content;
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          style={{ maxWidth: "600px" }}
          className="modal-dialog d-flex align-items-center"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Detail
              </h5>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-12 col-xl-5">
                  <img src={image} alt="" />
                </div>
                <div className="col-12 col-xl-7">
                  <div className="table">
                    <tr>
                      <td className="font-weight-bold">Name</td>
                      <td>{name}</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">Description</td>
                      <td>{shortDescription}</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">Price</td>
                      <td>{price} $</td>
                    </tr>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
