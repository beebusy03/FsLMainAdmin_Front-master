import React from 'react'
import "../src/css/Feature.css"
import workflow from '../src/assets/images/workflow1.png'
import datasharing from '../src/assets/images/datasharing.png'
import dashbd from '../src/assets/images/dashbd.png'

function Features() {
  return (
    <div>
      

<div class="container ">
<div className=' mt-4'>
<h2>Feature</h2>
</div>

  <div class="profile-cards mt-5">
 
    <div class="card">
     
      <img src={workflow} className="img-fluid" alt=""  />
      <div class="content">
     <h3>Work flow based</h3>
     <p>
Automates the complete work flow of forensics Labs from registration to dispatch of reports.</p>
        
       
      </div>
    </div>

    <div class="card">
    <img src={dashbd} className="img-fluid" alt="" />
      <div class="content mt-2">
      <h3> Dashboard reports</h3>
     <p>
    
Provides statistical and status information about the registration, report readiness and dispatch of reports.</p>
        
    
      </div>
    </div>
   
    <div class="card">
    <img src={datasharing} className="img-fluid" alt="" />
      <div class="content mt-2">
      <h3> Data Sharing</h3>
     <p>
    
Data and report sharing with other pillars like police and courts. .</p>
        
     </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Features
