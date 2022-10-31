import React from 'react';

export const ResustsComponent = ({resultsItems}) => {
    return (
        <div className='wrapperResults'>
            <div className='resultsContainer'>
                {resultsItems.map((item) =>(
                    <div className='blockResults'>
                        <img src={item.image} alt="" />
                        <h2>intitulé</h2>
                        <div className='descriptResult'>
                            <p>{item.descript}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
