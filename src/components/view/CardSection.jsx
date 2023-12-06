import React from 'react'
import { BsBicycle, BsBack, BsBoxFill } from "react-icons/bs";


const CardSection = (props) => {
    const card_data = props.card_data;
    console.log(card_data);
    return (
        <div className='card-section'>
            <div className="card-main-title">
                What are our beliefs
            </div>
            <div className="cards">
                <div className="cards-content">
                    <div className="card-logo">
                    <BsBack />
                    </div>
                    <h4>
                        Card Title
                    </h4>
                    <div className="card-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat est delectus dolor incidunt sit quibusdam natus enim voluptate? Ipsam et ullam magni deleniti? Veniam laboriosam ipsam quasi vero iste ullam.a</p>
                    </div>
                </div>
                <div className="cards-content">
                    <div className="card-logo">
                        <BsBicycle />
                    </div>
                    <h4>
                        Card Title
                    </h4>
                    <div className="card-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat est delectus dolor incidunt sit quibusdam natus enim voluptate? Ipsam et ullam magni deleniti? Veniam laboriosam ipsam quasi vero iste ullam.a</p>
                    </div>
                </div>
                <div className="cards-content">
                    <div className="card-logo">
                        <BsBoxFill />
                    </div>
                    <h4>
                        Card Title
                    </h4>
                    <div className="card-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat est delectus dolor incidunt sit quibusdam natus enim voluptate? Ipsam et ullam magni deleniti? Veniam laboriosam ipsam quasi vero iste ullam.a</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSection
