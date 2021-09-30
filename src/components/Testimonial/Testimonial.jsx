import React from 'react';
import ReactStars from "react-rating-stars-component";
import './Testimonial.css';
const Testimonial = ({data}) => {

    const newData=data.slice(0,6)
    return (
        <section className="testimonial">
            <h2 className="testimonial-title">Testimonials</h2>
            <h4 className="testimonial-subtitle">What they think.</h4>
            <div className="testimonial-container">
                {newData.map(person=>{
                    const {name,designation,id,rating,avatar,message}=person
                    return(
                        <div className="testimonial-card" key={id}>

                    <ReactStars
                    classNames="star"
                        count={5}
                        onChange={rating}
                        size={18}
                        isHalf={true}
                        edit={false}
                        value={rating}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                            <p>{message}</p>
                            <div className="person-details">
                                <img src={avatar} alt={name} className="customer"/>
                                
                                <div>
                                <h4>{name}</h4> 
                                <p>{designation}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Testimonial
