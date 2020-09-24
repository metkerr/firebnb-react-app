import React from "react";
import Fade from "react-reveal/Fade";

import { InputText, InputFile } from "elements/Form";

import logoBank1 from "assets/images/bank1.jpg";
import logoBank2 from "assets/images/bank2.jpg";

export default function Payment(props) {
  const { data, ItemDetails, checkout } = props;
  const tax = 10;
  const subTotal = ItemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <p className="mb-4">Payment details:</p>
              <p>Tax: {tax}</p>
              <p>Subtotal: ${subTotal} USD</p>
              <p>Total: ${grandTotal} USD</p>
              <div className="row mt-4">
                <div className="col-3 text-right">
                  <img src={logoBank1} alt="Bank of New Zealand" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank of New Zealand</dd>
                    <dd>2514 2254 3356</dd>
                    <dd>Firebnb Co.</dd>
                  </dl>
                </div>
              </div>
              <div className="row">
                <div className="col-3 text-right">
                  <img src={logoBank2} alt="ASB Bank" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>ASB Bank</dd>
                    <dd>2687 5548 8897</dd>
                    <dd>Firebnb Co.</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="proofPayment">Upload Transfer Receipt</label>
              <InputFile
                accept="image/*"
                id="proofPayment"
                name="proofPayment"
                value={data.proofPayment}
                onChange={props.onChange}
              />

              <label htmlFor="bankName">Bank Name</label>
              <InputText
                id="bankName"
                name="bankName"
                value={data.bankName}
                onChange={props.onChange}
              />

              <label htmlFor="bankHolder">Bank Account Name</label>
              <InputText
                id="bankHolder"
                name="bankHolder"
                value={data.bankHolder}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
