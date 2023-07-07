import React from 'react'
import { GuardSpinner  } from "react-spinners-kit";
const Index = ({laoding}) => {
  return (
    <div className='loader'>
        <div className='loader-in'>
            <GuardSpinner 
                size={150}
                color="green"
                loading={laoding}
            />
            </div>
    </div>
  )
}

export default Index