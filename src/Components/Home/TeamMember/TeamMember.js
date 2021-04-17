import React from 'react';
import './TeamMember.css'
import natasha from '../../../images/Team/1.jpg'
import rogers from '../../../images/Team/2.jpg'
import wanda from '../../../images/Team/3.jpg'
import Member from '../Member/Member';
const teamData = [
    {
        image : natasha,
        name  : 'NATASHA',
        title : 'MANAGER',
        text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
    },
    {
        image : rogers,
        name  : 'STEVEN ROGERS',
        title : 'FOUNDER',
        text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
    },
    {
        image : wanda,
        name  : 'WANDA MAXIMOFF',
        title : 'ASSISTANT MANAGER',
        text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
    }
]
const TeamMember = () => {
    return (
        <section className="team-member">
            <div className="team-header text-center">
                <h3>OUR Team</h3>
                <h2>MEET OUR TEAM</h2>
            </div>
            <div className="members">
                {
                    teamData.map(team => <Member member={team}></Member>)
                }
            </div>
        </section>
    );
};

export default TeamMember;