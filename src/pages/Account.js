import React from 'react'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CSV_upload from '../components/CSV_upload';

function Account(props) {
  return (
    <div className="account">
      <h3>My Account</h3>
      <div className="billing_details">
        <div className="subscription_plan">
          <h6>Current subscription plan</h6>
          <h4>E{props.subscription_cost}</h4>
          <h6>Per Month</h6>
          <div className="change_plan"><h6>Change Plan</h6></div>
        </div>
        <div className="next_payment">
          <div className="next_payment_top"><h6>Next Payment</h6><div className="credit_card"><CreditCardIcon /></div></div>
          <h4>E{props.next_amount}</h4>
          <h6>on {props.next_date}</h6>
        </div>
      </div>
      <h3>Upload SMS CSV</h3>
      <div className="file_upload">
        <CSV_upload/>
      </div>
    </div>
  )
}

export default Account