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
          A frequently asked questions list is often used in articles, websites, email lists, and online forums where common questions tend to recur
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
                  Whenever the normal working of our body system gets disturbed, we feel sick. It can happen when a bacterium, virus, etc, enters our body or because of unhealthy living practices like lack of exercise or intake of drugs/excessive sugar/salt. There are two major kinds of diseases: infectious and non-infectious.
                  </Accordion.Body>
                </Accordion.Item>
                {/* single accordion item */}
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    What does the immune system do?{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                  What is the immune system? The immune system protects your child's body from outside invaders. These include germs such as bacteria, viruses, and fungi, and toxins (chemicals made by microbes). The immune system is made up of different organs, cells, and proteins that work together..
                  </Accordion.Body>
                </Accordion.Item>
                {/* single accordion item */}
                <Accordion.Item eventKey="2">
                  <Accordion.Header>What are allergies?</Accordion.Header>
                  <Accordion.Body>
                  Allergies occur when your immune system reacts to a foreign substance — such as pollen, bee venom or pet dander — or a food that doesn't cause a reaction in most people. Your immune system produces substances known as antibodies.
                  </Accordion.Body>
                </Accordion.Item>
                {/* single accordion item */}
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Do our intestines contain germs?</Accordion.Header>
                  <Accordion.Body>
                  Living inside of your gut are 300 to 500 different kinds of bacteria containing nearly 2 million genes. Paired with other tiny organisms like viruses and fungi, they make what's known as the microbiota, or the microbiome.
                  </Accordion.Body>
                </Accordion.Item>
                {/* single accordion item */}
                <Accordion.Item eventKey="4">
                  <Accordion.Header>What are antibiotics?</Accordion.Header>
                  <Accordion.Body>
                  An antibiotic is a type of antimicrobial substance active against bacteria. It is the most important type of antibacterial agent for fighting bacterial infections, and antibiotic medications are widely used in the treatment and prevention of such infections. They may either kill or inhibit the growth of bacteria.
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
