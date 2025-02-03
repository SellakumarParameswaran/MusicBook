import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './Payment.css';

const PaymentCard = () => {
  const [showForm, setShowForm] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [formError, setFormError] = useState('');


  const gpayData = {
    // Add your Google Pay data here
    // For example, you can add merchant information, transaction details, etc.
    // Refer to the Google Pay API documentation for the specific data format
  };


  const handlePayment = () => {
    // Basic validation
    if (!cardNumber || !expiryDate || !cvv || !nameOnCard) {
      setFormError('Please fill in all fields.');
      return;
    }

    // Here you would implement your payment logic
    // For this example, let's just simulate a successful payment after 2 seconds
    setTimeout(() => {
      setPaymentSuccess(true);
    }, 2000);
  };

  return (
    <div >
      <button className="btn btn-success" onClick={() => setShowForm(true)}>Pay Here</button>
      {showForm && (
        <div>
          {paymentSuccess ? (
            <div>
              <h1>Payment Successful!</h1>
              {/* You can show further details or redirect the user */}
            </div>
          ) : (
            <div className='payment-form'>
              <h2>Payment Details</h2>
              {formError && <p style={{ color: 'red' }}>{formError}</p>}
              <input
                type="text"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
              <input
                type="text"
                placeholder="Expiry Date"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
              <input
                type="text"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
              <input
                type="text"
                placeholder="Name on Card"
                value={nameOnCard}
                onChange={(e) => setNameOnCard(e.target.value)}
              />
              <button className="btn btn-primary" onClick={handlePayment}>Pay Now</button>
              <div style={{margin: '40px'}}>
              <h1> Another Way to Buy</h1>
              <h4>Scan QR Code to Pay with Google Pay</h4>
      {/* Render the QR code using the Google Pay data */}
      <QRCode value={JSON.stringify(gpayData)} />
      </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PaymentCard;
