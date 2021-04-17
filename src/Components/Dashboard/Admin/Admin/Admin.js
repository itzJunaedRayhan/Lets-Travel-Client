import React from 'react';
import AddServices from '../AddServices/AddServices';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const Admin = () => {
    return (
        <section className="admin-section">
            <div className="row">
                <AdminSidebar/>
                <AddServices/>
            </div>
        </section>
    );
};

export default Admin;