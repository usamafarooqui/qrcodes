import React from 'react';
import '../css/formoptions.css';
import {RiLinksLine} from "react-icons/ri";
import {MdEmail} from "react-icons/md";
import logo from '../assests/images/logo.png'


const FormOptions = () => {
  return (
    <>
    <div className='main'>
        <div className="options">
            <div className="btnLink">
                <div className="setrow">
                <div className='links'><RiLinksLine/> Links</div>
                <div className='links'><MdEmail />Email</div>
                <div className='links'><i class="bi bi-justify"></i> Text</div>
                <div className='links'><i class="bi bi-telephone-outbound-fill"></i> Call</div>
                <div className='links'><i class="bi bi-chat-dots"></i> Sms</div>
                </div>
                <div className="setrows">
                <div className='links'><i class="bi bi-postcard"></i> V-card</div>
                <div className='links'><i class="bi bi-wifi"></i> Wifi</div>
                <div className='links'><i class="bi bi-whatsapp"></i> Whatsapp</div>
                <div className='links'><i class="bi bi-paypal"></i> Paypal</div>
                <div className='links'><i class="bi bi-currency-bitcoin"></i> Bitcoin</div>
                </div>
                <div className="setrows">
                <div className='links'><i class="bi bi-file-earmark-pdf-fill"></i> Pdf</div>
                <div className='links'><i class="bi bi-phone"></i> App</div>
                <div className='links'><i class="bi bi-images"></i> Images</div>
                <div className='links'><i class="bi bi-play-circle-fill"></i> Video </div>
                <div className='links'><i class="bi bi-share-fill"></i> Socials</div>
                </div>
            </div>
            <div className="form">Form options here</div>
        </div>
        <div className="qrcode">
            <div className="qrcodeimg">
                <img src={logo} alt="" />
            </div>
            <div className="qrcodeoptions">
                <button style={{backgroundColor:"blue"}}><i class="bi bi-plus-circle-fill"></i> Generate Qrcode </button>
                <div className="downloadoptions">
                    <button><i class="bi bi-box-arrow-down"></i> Download Png</button>
                    <button><i class="bi bi-box-arrow-down"></i> Download SVG</button>
                </div>
                <button><i class="bi bi-bar-chart-fill"></i> Track No of scans</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default FormOptions