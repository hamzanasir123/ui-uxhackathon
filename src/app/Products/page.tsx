"use client"
import React from 'react'

// interface Type {
// 	id : number;
// 	name : string;
// 	images : string;
// 	desc : string;
// 	price : number;
// 	isVeg : boolean;
// }

const page = async () => {

// 	const url = 'https://burgers-hub.p.rapidapi.com/burgers';
// 	const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '602e8815a7msh639d522990d0a9dp1c567djsn81ac4a3eab43',
// 		'x-rapidapi-host': 'burgers-hub.p.rapidapi.com'
// 	}
// };
// 	const response = await fetch(url, options);
// 	const result:Type[] = await response.json();

// 	const url1 = 'https://price-tracking-tools.p.rapidapi.com/camelizer/get-prices?asin=B07FZ8S74R&locale=us';
// const options1 = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '602e8815a7msh639d522990d0a9dp1c567djsn81ac4a3eab43',
// 		'x-rapidapi-host': 'price-tracking-tools.p.rapidapi.com'
// 	}
// };


	// const response1 = await fetch(url1, options1);
	// const result1 = await response1.text();

  return (
    <>
	  <div className='max-w-[1320px] text-white m-4'>
				<div className='m-10 flex flex-wrap justify-center items-center gap-2'>
					{/* {result.map((item) => (
						<div key={item.id}>
							<Image src={item.images} height={349} width={423} className='w-[350px] h-[350px] object-cover' alt=''/>
							<p className='text-center'>{item.name}</p>
							<p>{item.desc}</p>
							<p>{item.price}</p>
							<p>{item.isVeg ? "Veg" : "NonVeg"}</p>
						</div>
					))} */}
					{

					}
				</div>
			</div>
	</>
  )
}

export default page