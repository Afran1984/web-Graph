import ProtoType from 'prop-types'
import React from 'react';
import Pricesss from '../Pricesss/Pricesss';

const PriceOption = () => {
    
        const PriceOption = [
          {
            "id": 1,
            "name": "Basic Membership",
            "features": [
              "Access to cardio equipment",
              "Access to weightlifting area",
              "Locker room access",
              "Limited access to group fitness classes",
              "Discounts on personal training sessions"
            ],
            "price": "$30/month"
          },
          {
            "id": 2,
            "name": "Premium Membership",
            "features": [
              "Access to all gym facilities",
              "Unlimited group fitness classes",
              "Personalized workout plan",
              "Free access to workshops/seminars",
              "Towel service included"
            ],
            "price": "$50/month"
          },
          {
            "id": 3,
            "name": "Student Membership",
            "features": [
              "Access to gym during off-peak hours",
              "Valid student ID required",
              "Access to select equipment",
              "Discounts at partner establishments",
              "Monthly fitness assessment"
            ],
            "price": "$25/month"
          }
        ];

      
    return (
        <div className='m-12'>
            <h2 className='text-5xl'>Best Price Option</h2>
           <div className=' grid md:grid-cols-3 mt-4 gap-3'>
           {
              PriceOption.map(optin => <Pricesss optin={optin} key={optin.id}></Pricesss>)
            }
           </div>
        </div>
    );
};
PriceOption.ProtoType ={
    route: ProtoType
}
export default PriceOption;