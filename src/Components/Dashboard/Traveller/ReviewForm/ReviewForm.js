import React from 'react';
import { useForm } from 'react-hook-form';
const ReviewForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        const reviewDetails = {
            name : data.name,
            company : data.company,
            desc : data.desc
        }
        const url = `http://localhost:3500/addReview`
        fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewDetails)
        })
        .then(res => console.log('server side response', res))
    }
    return (
            <>
                <h3 className="p-4">Add Review</h3>
            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input className="form-control" placeholder="Your Name" {...register("name", { required: true })} />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text"  className="form-control" placeholder="Your Company" {...register("company", { required: true })} />
                        {errors.company && <span className="text-danger">This Field is required</span>}
                    </div>
                    <div className="form-group">
                        <textarea cols="30" rows="10" className="form-control" placeholder="Package Description :" {...register("desc", { required: true })}></textarea>
                        {errors.desc && <span className="text-danger">This Field is required</span>}
                    </div>
                    <div className="form-group row submit-footer">
                        <button type="submit" className="submitBtn">Submit</button>
                    </div>
                </form>
            </>
    );
};

export default ReviewForm;