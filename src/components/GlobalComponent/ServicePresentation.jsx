import React from 'react';
import { ReactVideoPlayer } from './ReactVideoPlayer/ReactVideoPlayer';
// import ReactPlayer from 'react-player/file'
// import 'video.js/dist/video-js.css'; 



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
                                 
                         
            </div>
            <div className="wrapperVideoServicePresentation" >
                <div className='videoServicePresentationContainer'>
           
                    <ReactVideoPlayer/>
                    
                </div>
                <div className='buttonServicePresentation'>
                        <p>Souscrire</p>
                    </div>
                
            </div>
         </div>
    );
};
