import React from 'react';
import '../css/benefit.css';
import cover from '../assests/images/benefitcover.png';

const Benefit = () => {
  return (
    <>
        <div className="box container">
            <div className="cover">
                <img src={cover} alt="cover image" />
            </div>
            <div className="content">
                <h1>Benefits from Qr.io</h1>
                <div>
                <p>By using QR.io you will be able keep track of how many people</p>
                <p>scan your QR Codes, from where and on what date.</p>
                <br />
                <p>Also for those non-developers you can create fully customized</p>
                <p>landing pages for your QR Codes. No Coding Required!</p>
                </div>
                <table>
                    <tr>
                        <td> <i class="bi bi-check-circle-fill"></i> Dynamic Qr codes</td>
                    </tr>
                    <tr>
                        <td> <i class="bi bi-check-circle-fill"></i> Dynamic Qr codes</td>
                    </tr>
                    <tr>
                        <td> <i class="bi bi-check-circle-fill"></i> Dynamic Qr codes</td>
                    </tr>
                    <tr>
                        <td> <i class="bi bi-check-circle-fill"></i> Dynamic Qr codes</td>
                    </tr>
                    <tr>
                        <td> <i class="bi bi-check-circle-fill"></i> Dynamic Qr codes</td>
                    </tr>
                    <tr>
                        <td> <i class="bi bi-check-circle-fill"></i> Dynamic Qr codes</td>
                    </tr>
                </table>
            </div>
        </div>
    </>
  )
}

export default Benefit