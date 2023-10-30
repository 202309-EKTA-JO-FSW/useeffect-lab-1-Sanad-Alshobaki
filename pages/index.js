import React, { useState, useEffect } from 'react';
import DogList from '../Components/DogList/DogList'
import Form from '../Components/Form/Form'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  // You will need to put a state here to save all the dogs data into

  // And you will fetch the data with useEffect
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  console.log(data['message']);

  return (
    <div className="card">
      {/* When the button is clicked in the form, it should fetch the information. 
          How can we do that by utilizing useState?
          
      */}
      {/* <Form /> Uncomment <Form /> if you are going after the bonus */}
      {/* This page should receive the images array */}
      <DogList dogsList={data['message']} />

    </div>
  );
}

