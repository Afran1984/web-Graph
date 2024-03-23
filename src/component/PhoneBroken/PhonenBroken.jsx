import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BallTriangle} from 'react-loader-spinner'


const PhonenBroken = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoadin] = useState(true)
    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhone(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            const phoneWithData = phoneData.map(phone =>{
                const obj ={
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            console.log(phoneWithData)
            setPhones(phoneWithData);
            setLoadin(false);
        })

    },[]);
    return (
        <div>
                {
                    loading && <div>
                        <BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="#4fa94d"
                    ariaLabel="ball-triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    />
                    </div>
                }
            <h2 className='text-5xl'>Phone:{phones.length}</h2>
            <BarChart width={600} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey=""></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
        </div>
    );
};

export default PhonenBroken;