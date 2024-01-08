import React from 'react'
import "../src/Electronic_TV.css"
import img1 from "./images_TV/Tv01.webp"
import img2 from "./images_TV/Tv02.webp"
import img3 from "./images_TV/Tv03.webp"
import img4 from "./images_TV/Tv04.webp"
import img5 from "./images_TV/Tv05.webp"
import img6 from "./images_TV/Tv06.webp"
export default function TVcart(){
    return (
        <div>
           <div className="main">
            <h1>Responsive Card Grid Layout</h1>
            <ul className="cards">
                <li className="card_items">
                    <div className="card">
                        <div className="card_img">
                            <img src={img1} alt="" />
                        </div>
                        <div className="card_content">
                        <p>ONIDA 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV 2023 Edition with Dolby Atmos Vision & HDR10  (65UIG)</p>
                        <p>Special price</p>
                        <p><b>₹ 44,999</b>&nbsp;&nbsp;<del> ₹64,990</del>&nbsp;&nbsp;(30% off)</p>
                        </div>
                        <div className="card_button">
                        <button className='buyButton'>buy now</button>
                        </div>
                    </div>
                    
                </li>
                <li className="card_items">
                    <div className="card">
                        <div className="card_image">
                            <img src={img2} alt="" />
                        </div>
                        <div className="card_content">
                        <p>ONIDA 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV 2023 Edition with Dolby Atmos Vision & HDR10  (65UIG)</p>
                        <p>Special price</p>
                        <p><b>₹ 44,999</b>&nbsp;&nbsp;<del> ₹64,990</del>&nbsp;&nbsp;(30% off)</p>
                        </div>
                        <div className="card_button">
                        <button className='buyButton'>buy now</button>
                        </div>
                    </div>   
                </li>
                <li className="card_items">
                    <div className="card">
                        <div className="card_image">
                            <img src={img3} alt="" />
                        </div>
                        <div className="card_content">
                        <p>ONIDA 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV 2023 Edition with Dolby Atmos Vision & HDR10  (65UIG)</p>
                        <p>Special price</p>
                        <p><b>₹ 44,999</b>&nbsp;&nbsp;<del> ₹64,990</del>&nbsp;&nbsp;(30% off)</p>
                        </div>
                        <div className="card_button">
                        <button className='buyButton'>buy now</button>
                        </div>
                    </div>   
                </li>
                <li className="card_items">
                    <div className="card">
                        <div className="card_image">
                            <img src={img1} alt="" />
                        </div>
                        <div className="card_content">
                        <p>ONIDA 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV 2023 Edition with Dolby Atmos Vision & HDR10  (65UIG)</p>
                        <p>Special price</p>
                        <p><b>₹ 44,999</b>&nbsp;&nbsp;<del> ₹64,990</del>&nbsp;&nbsp;(30% off)</p>
                        </div>
                        <div className="card_button">
                        <button className='buyButton'>buy now</button>
                        </div>
                    </div>   
                </li>
                <li className="card_items">
                    <div className="card">
                        <div className="card_image">
                            <img src={img5} alt="" />
                        </div>
                        <div className="card_content">
                        <p>ONIDA 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV 2023 Edition with Dolby Atmos Vision & HDR10  (65UIG)</p>
                        <p>Special price</p>
                        <p><b>₹ 44,999</b>&nbsp;&nbsp;<del> ₹64,990</del>&nbsp;&nbsp;(30% off)</p>
                        </div>
                        <div className="card_button">
                        <button className='buyButton'>buy now</button>
                        </div>
                    </div>   
                </li>
                <li className="card_items">
                    <div className="card">
                        <div className="card_image">
                            <img src={img6} alt="" />
                        </div>
                        <div className="card_content">
                        <p>ONIDA 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV 2023 Edition with Dolby Atmos Vision & HDR10  (65UIG)</p>
                        <p>Special price</p>
                        <p><b>₹ 44,999</b>&nbsp;&nbsp;<del> ₹64,990</del>&nbsp;&nbsp;(30% off)</p>
                        </div>
                        <div className="card_button">
                        <button className='buyButton'>buy now</button>
                        </div>      
                    </div>   
                </li>
            </ul>
           </div>
        </div>
    );
}