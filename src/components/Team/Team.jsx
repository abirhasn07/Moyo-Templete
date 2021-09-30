import React from 'react';
import facebook from '../../images/facebook-circular-logo.svg';
import instagram from '../../images/instagram.svg';
import slack from '../../images/slack.svg';
import twitter from '../../images/twitter.svg';
import './Team.css';

const Team = ({team}) => {
    console.log(team);
    return (
        <section className="team">
            <h2 className="team-title">The Team</h2>

            <div className="team-container">
                {team.map(teamMember=>{
                    const {description,name,id,img,title}=teamMember
                    return(
                        <div className="team-card" key={id}>
                            <img src={img} alt={name} width="125px" />
                            <h4>{name}</h4>
                            <h5>{title}</h5>
                            <p>{description}</p>
                               
                            
                            <div className="social-icon">
                            <img src={facebook} alt="facebook"/>
                            <img src={instagram} alt="instagram"/>
                                <img src={twitter} alt="twitter"/>
                                <img src={slack} alt="slack"/>
                            </div>


                        </div>
                    )
                })}
            </div>
            
        </section>
    )
}

export default Team
