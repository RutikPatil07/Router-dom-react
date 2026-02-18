import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import {useEffect, useState } from "react";
export default function Service() {
const [data,SetData]=useState([])
const [ttl,SetTtl]=useState(0)
const [ind,SetInd]=useState(0)
const [fr,SetTFr]=useState(0)
const [dt,SetDet]=useState(0)
let api=()=>{
    axios.get("https://api.rootnet.in/covid19-in/stats/latest")
    .then(res=>{
        console.log(res.data)
        SetData(res.data.data.regional)
        console.log(data)
        SetTtl(res.data.data.summary.total)
        SetInd(res.data.data.summary.confirmedCasesIndian)
        SetTFr(res.data.data.summary.confirmedCasesForeign)
        SetDet(res.data.data.summary.deaths)
    })
}
//onload 
     useEffect(()=>{
     api()
     },[])


  const Card = ({ title, value, footer, bg, text, icon }) => (
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card border-0 shadow h-100 rounded-4">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <h3 className={`fw-bold ${text}`}>{value}</h3>
            <p className="text-muted mb-0">{title}</p>
          </div>
          <div className={`fs-2 ${text}`}>
            <i className={icon}></i>
          </div>
        </div>

        <div className={`card-footer ${bg} text-white d-flex justify-content-between rounded-bottom-4`}>
          <span>{footer}</span>
          <span>↗</span>
        </div>
      </div>
    </div>
  );

  return (

    <>
  
   
    <div className="container mt-5">
      <div className="row">
        <Card
          title="Total Case"
          value={ttl}
          footer="10% changes on profit"
          bg="bg-warning"
          text="text-warning"
          icon="bi bi-currency-dollar"
        />

        <Card
          title="confirmedCasesIndian"
          value={ind}
          footer="28% task performance"
          bg="bg-danger"
          text="text-danger"
          icon="bi bi-calendar-check"
        />

        <Card
          title="ConfirmedCasesForeign"
          value={fr}
          footer="10k daily views"
          bg="bg-success"
          text="text-success"
          icon="bi bi-file-earmark-text"
        />

        <Card
          title="Deaths"
          value={dt}
          footer="1k download in App store"
          bg="bg-primary"
          text="text-primary"
          icon="bi bi-hand-thumbs-up"
        />
      </div>
    </div>

<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Loc</th>
      <th scope="col">India</th>
      <th scope="col">Foreign</th>
      <th scope="col">Discharged</th>
      <th scope="col">Deaths</th>
     
    </tr>
  </thead>
  <tbody>
  {data.map((item)=>{
      return(<tr>
        <td>{item.loc}</td>
        <td>{item.confirmedCasesIndian}</td>
        <td>{item. confirmedCasesForeign}</td>
        <td>{item.discharged}</td>
        <td>{item.deaths}</td>  
      </tr>)
    })}
   
  </tbody>
</table>


    </>
  );
}
