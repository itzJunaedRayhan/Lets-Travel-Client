import React from 'react';
import './Services.css'
import Service from '../Service/Service';
import { useState } from 'react';
import { useEffect } from 'react';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3500/allServices')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    console.log(services)
    return (
        <section className = "services-section py-5">
            <div className="service-header text-center">
                <h3>OUR SERVICES</h3>
                <h2>POPULAR TOURS</h2>
            </div>
            <div className="services">
                {
                    services.map(service => <Service service={service} key={service._id}></Service>)
                }
            </div>
        </section>
    );
};

export default Services;