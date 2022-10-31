import React from 'react';
import {infosFondateurs} from "../../../assets/stockages/Stockages";
const backGroundComponent = require("../../../assets/imagesApp/bgFondators.jpg");


const Fondators = () => {
    return (
        <div className='wrapperFondators'  style={{
            backgroundColor: "red",
            backgroundImage: `url(${backGroundComponent})`,
          
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <div className='fondatorsBlur'>
                <div className='topComponent'>
                    <div class="wrapperNameApp">
                        <h1 class="nameApp">Bantu Consulting</h1>
                    </div>
                    <div class="wrapperBio">
                        <p class="textAbout">Partagez vous l’idée que l’on puisse investir au congo et au sengal en toute séreinité,sans craindre de perdre de l’argent?Partagez vous l’idée que les entreprises congolaise et sénégalaise puissent être productives et performantes?</p>
                    </div>
                </div>
                <div className='mainComponent'>
                    <div className='containerMain'>

                     {infosFondateurs.map((item) =>(
                        <div key={item.id} class="fondateur">
                            <div className='profileFondator' >
                                <img src={item.image} alt="" />
                            </div>
 
                            <div className='infoFondator'>
                                <div className='nameFondator'>
                                    <h5>{item.name}</h5>
                                </div>
    
                                <div className='workFondator'>
                                        <p>{item.profession}</p>  
                                </div>
                            </div>
                        </div>
                        ))} 
               
                    </div>
                </div>

            <div className='content'> </div>
        </div>
     </div>
    );
};

export default Fondators;



