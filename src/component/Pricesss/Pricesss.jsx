import React from 'react';
import Featur from '../Featur/Featur';

const Pricesss = ({optin}) => {
    const {name, id, price, features} = optin;
    return (
        <div className='bg-blue-500 flex flex-col text-white text-center p-8 rounded-xl'>
            <p>{id}</p>
            <h1 className='text-3xl'>{name}</h1>
           <h2  className='text-5xl font-extrabold'>{price}</h2>
            
           <div className='flex-grow'>
           {
                features.map((feature, Index) => <Featur feature={feature} key={Index}></Featur>)
            }
           </div>
           <button className='mt-12 bg-green-600 w-full p-4 rounded-xl font-bold hover:bg-red-300'>Buy Naw</button>
        </div>
    );
};

export default Pricesss;