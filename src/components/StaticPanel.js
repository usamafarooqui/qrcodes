import React from 'react';
import '../css/staticpanel.css'

const StaticPanel = () => {
  return (
    <>
        <div className='main'>
            <div className="iconbox">
            <div className="icon">
                <i className="bi bi-phone ico"></i>
                <p>Customize Mobile Panels</p>
            </div>
            <div className="icon">
                 <i class="bi bi-bar-chart-steps ico"></i>
                <p>Track Qr codes</p>
            </div>
            <div className="icon">
            <i className="bi bi-palette-fill ico"></i>
                <p>Choose Color And Shapes</p>
            </div>
            <div className="icon">
            <i className="bi bi-images ico"></i>
                <p>Add Logos To Qrcodes</p>
            </div>
            </div>
        </div>
    </>
  )
}

export default StaticPanel