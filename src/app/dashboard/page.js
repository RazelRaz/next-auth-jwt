'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const DashboardPage = () => {

    const router = useRouter()

    const Logout = async () => {
        const res = await fetch('/api/login')
        const json = await res.json();
        if(json['status'] === true){
            router.replace('/')
        }
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={Logout}>Logout</button>
        </div>
    );
};

export default DashboardPage;