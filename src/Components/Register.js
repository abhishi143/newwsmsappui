import React, { useState } from "react";

const Register = () => {

  const [inpval, setINP] = useState({
    name: "",
    mob: "",
    email: "",
    addr: "",
    otp: "",
    enq: "",
  });

  const setData = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;

    //For setting data into inpval////////////////////////////
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const addinpdata= async(e)=>{
e.preventDefault();
const {name,mob,email,addr,otp,enq}=inpval;

    const res= await fetch("/create",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,mob,email,addr,otp,enq
      })
    });
    const data= await res.json();
    console.log(data);

    if (res.status === 442) {
      
      alert("error");
      console.log("error ");
    } else {
      alert("data added!!");
      console.log("data addded!!");
      
    }
  }
  function generateotp() {
    let otpp="";
    for(let i=0;i<4;i++){
      otpp+=Math.floor(Math.random()*10);
    }
    return otpp;
    
  }
  // console.log("generateotppp-",generateotp());
 
  // const randno = Math.floor(Math.random()*10000);

  return (
    
    <div className="container">
      <div className="mt-5">
      {/* <form> */}
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Customer Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name='name'
              aria-describedby="emailHelp" 
              onChange={setData}
              value={inpval.name}
              // required
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Customer Mobile No.
            </label>
            <input
              type="number"
              className="form-control"
              name='mob'
              id="exampleInputPassword1" 
              onChange={setData}
              value={inpval.mob}
              // required
            />
            <div className="mt-2">
            <button id="button1" className="btn btn-dark" onClick={generateotp}>Generate</button>
            </div>
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Customer Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name='email'
              aria-describedby="emailHelp"
              //  required
              onChange={setData}
              value={inpval.email}
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              name='addr'
              id="exampleInputPassword1"
              onChange={setData}
              value={inpval.addr}
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label ">
              OTP 
            </label>
            

            <input
              type="password"
              className="form-control"
              name='otp'
              id="random-number"
              onChange={setData}
              value={inpval.otp}
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Enquiry
            </label>
            <textarea name='enq' className="form-control" type="text" id="" cols="20" rows="5" onChange={setData} value={inpval.enq}></textarea>
          </div>
          
          <button type="submit" onClick={addinpdata} className="btn btn-primary">
            Submit
          </button>
        </div>
      {/* </form> */}
      </div>
    </div>
  );
};

export default Register;
