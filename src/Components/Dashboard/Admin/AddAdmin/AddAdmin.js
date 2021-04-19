import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import { useForm } from 'react-hook-form';
const AddAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        fetch('https://frozen-taiga-77038.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => console.log('server side response', res))
    }
    return (
        <div className="AddAdmin-section">
            <div className="row">
                <AdminSidebar></AdminSidebar>
                <div className="col-md-8">
                    <div className="make-admin">
                        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input className="form-control" type="email" placeholder="Make Admin :" {...register("email", { required: true })} />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className="form-group service-footer">
                            <button type="submit" className="btn btn-danger">Send</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AddAdmin;