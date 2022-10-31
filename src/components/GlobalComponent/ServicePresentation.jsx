import React from 'react';
import ReactPlayer from 'react-player'
const video = require('../../assets/videosApp/videoPresentation.mp4')

export const ServicePresentation = () => {
    return (
        <div className='wrapperServicePresentation'>
            <div className="descriptionServicePresentation">
                            <div className="titleServicePresentation">
                                <h1>Découvrez nos conseils d'inovation</h1>
                            </div>
                          
                                  <div className="bioServicePresentation">
                                      <p className="textServicePresentation">Apprenez un métier d’avenir, grâce à Bantu Consulting, l'agence d'accompagnement nouvelle génération 100% en ligne.</p>
                                   </div>
                                  <div className='buttonTopServices'>
                                      <p>Souscrire</p>
                                  </div>
                         
            </div>
            <div className="wrapperVideoServicePresentation" >
                <div className='videoServicePresentationContainer'>
                    <ReactPlayer
                    //url='https://www.youtube.com/watch?v=QOSU77YNgks'
                    url={video}
                    controls
                    muted
                    width="100%"
                    height="100%"
                   
                    />
                </div>
                
            </div>
      
            {/* <div className="imageBgTopNosServices">
                    <div className="blurTopNosService">
                            <div className="titleTopNosServices">
                                      <h1>Titre</h1>
                            </div>
                            <div className="descriptionTopNosServices">
                                  <div className="bioTopNosServices">
                                      <p className="textTopNosServices">Bio</p>
                                  <div className='buttonTopServices'>
                                      <p>Souscrire</p>
                                  </div>
                            </div>
                            <div className="vertorNosServices" >
                                        <img 
                                        src={imageTop} 
                                        alt="" />
                            </div>
                    </div>
              </div> 
            </div> */}
         </div>
    );
};
