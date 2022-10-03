import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import ErrorIcon from '@mui/icons-material/Error';
import SMSTable from '../components/SMSTable';
import { SMS_data } from '../components/SMS_data'
import { CSVLink } from "react-csv";

function Dashboard(props) {

  const headers = [
    { label: 'ID', key: 'id' },
    { label: 'Receiver', key: 'receiver' },
    { label: 'Status', key: 'status' },
    { label: 'Reason', key: 'reason' },
  ]

  const data = SMS_data.map((val, key) => {
      return { id: val.id, 
        receiver: val.reciver, 
        status: val.sms_status, 
        reason: val.reason }
    })
  

  const csvReport = {
    data: data,
    headers: headers,
    filename: 'ERROR_SMS_REPORT.csv'
  }

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
        <div className="error_sms_head"><h3>Error SMSs</h3><CSVLink {...csvReport} className='btn'>Export to CSV</CSVLink></div>
        <SMSTable className='sms-history-table' />
      </div>
    </div>

  )
}

export default Dashboard