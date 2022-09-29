import React from 'react'
import { SMS_data } from '../components/SMS_data'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import ErrorIcon from '@mui/icons-material/Error';

function Dashboard(props) {
  return (
    <div className="dashboard">
      <h3>Dashboard</h3>
      <div className="sms_cards">
        <div className="successful_smss success">
          <div className="sms_card"><h6>Successful</h6><div className="credit_card"><CheckCircleIcon /></div></div>
          <h4>{props.successful}</h4>
          <h6>SMSs</h6>
        </div>
        <div className="successful_smss pending">
          <div className="sms_card"><h6>Pending</h6><div className="credit_card"><PendingIcon /></div></div>
          <h4>{props.pending}</h4>
          <h6>SMSs</h6>
        </div>
        <div className="successful_smss error">
          <div className="sms_card"><h6>Error</h6><div className="credit_card"><ErrorIcon /></div></div>
          <h4>{props.error}</h4>
          <h6>SMSs</h6>
        </div>
      </div>
      <div className="sms_history">
        <h3>SMS History</h3>
        <table>
          <thead>
          <tr className="heading_of_table">
            <th>Reciever</th>
            <th>Status</th>
            <th>Content</th>
          </tr>
          </thead>
          <tbody>
          {SMS_data.map((val, key) => {

            return (
              <tr key={key}>
                <td>{val.reciver}</td>
                <td ><p className={val.sms_status === 'Pending' ? 'Pending' : val.sms_status === 'Error' ? 'Error' : 'Successful'}>{val.sms_status}</p></td>
                <td>{val.content}</td>
              </tr>)
          })
          }
          </tbody>

        </table>
      </div>
    </div>

  )
}

export default Dashboard