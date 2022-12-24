import React from 'react';

const HomeCards = ({hourlyProd}) => {
    return (
        <div>
            <div className="card md:w-96  w-full bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">Hourly Productions {hourlyProd[0]}</h2>
                    <h2 className="card-title">Hourly Materials {hourlyProd[1]}</h2>
                    <p>Per Hours Production ps</p>
                    <div className="card-actions justify-end">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCards;