import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./faqs.css";

import faqImg from "../../Assets/faq-img.png";

const Faqs = () => {
  return (
    <div className="faqs-section">
      <div className="container">
        <div className="faqs-sec-title w-50">
          <h6 className="text-success">FAQ's</h6>
          <h2>Frequently Asked Questions</h2>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            corporis eos deserunt voluptates expedita repudiandae quaerat cumque
            aperiam error magnam!
          </p>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col-md-6">
            <div className="faq-bg-img">
              <img src={faqImg} width='80%' className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="faq-accordion">
              <Accordion flush>
                {/* single accordion item */}
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Why do I get sick?</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                {/* single accordion item */}
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    What does the immune system do?{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                {/* single accordion item */}
                <Accordion.Item eventKey="2">
                  <Accordion.Header>What are allergies?</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                {/* single accordion item */}
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Do our intestines contain germs?</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                {/* single accordion item */}
                <Accordion.Item eventKey="4">
                  <Accordion.Header>What are antibiotics?</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
