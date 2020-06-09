import React from 'react';

const card = (props) => {
    const avatar = `https://i.pravatar.cc/150?img=${props.avatarId}`;
    return (
        <div className="col-md-4">
            <div className="card">
                <img className="card-img-top" src={avatar} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">{props.job}</a>
                </div>
            </div>    
        </div>
    );
}

export default card;