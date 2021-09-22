import React from "react";
import { Modal, Button } from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";

function ModalForDrivers(props) {
  
  // const drivers = [
  //   { name: "Cafer", status: "assignable", img: "" },
  //   { name: "Galip", status: "assignable" },
  //   { name: "Mahmut", status: "on the way" },
  //   { name: "Feyzi", status: "assignable" },
  // ];

  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Select a Driver
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.drivers.map((driver, i) => {
            return (
              <div className="driverCard">
                <div className="driverPhoto">
                  <BsFillPersonFill size="2em" color="black" />
                </div>
                <driver className="info">
                  <p>Name : {driver.name} </p>
                  <p>Status : {driver.status} </p>
                </driver>
              </div>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Done</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalForDrivers;
