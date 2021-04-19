import React, { useState } from 'react';
import './AddServices.css'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form';

const AddServices = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imgURL, setImgURL] = useState(null)
    const onSubmit = data =>{
            const serviceDetails = {
                name : data.name,
                price : data.price,
                desc : data.desc,
                imgURL : imgURL
            }
            const url = `https://frozen-taiga-77038.herokuapp.com/addProducts`
            fetch(url, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(serviceDetails)
            })
            .then(res => console.log('server side response', res))
        }
        
        
    
//  image upload
    const handleImage = event =>{
        const imageInfo = new FormData();
        imageInfo.set('key', 'cc26c4aba1afa68a65fbb7c27fea416a')
        imageInfo.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageInfo)
        .then(function (response) {
            setImgURL(response.data.data.display_url)
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    console.log(imgURL, 'Image Url')
    return (
        <div className="col-md-8" style={{padding: '0px'}}>
            <div className="add-services">
                <h1>Add Services</h1>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input className="form-control" placeholder="Package Name :" {...register("name", { required: true })} />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="Package Price :" {...register("price", { required: true })} />
                        {errors.number && <span className="text-danger">This Field is required</span>}
                    </div>
                    <div className="form-group">
                        <textarea cols="30" rows="10" className="form-control" placeholder="Package Description :" {...register("desc", { required: true })}></textarea>
                        {errors.desc && <span className="text-danger">This Field is required</span>}
                    </div>
                    <div className="form-group">
                            <input type="file" id="file" onChange={handleImage} />
                        <label for="file" class="btn-2">Images<FontAwesomeIcon className="icon" icon={faCloudUploadAlt} /></label>
                    </div>
                    <div className="form-group service-footer">
                        <button type="submit" className="serviceBtn">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddServices;