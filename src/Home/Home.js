import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Options from '../Pages/Options';


const Home = () => {
    const [totals, setTotal] = useState(0)
    const [minus, seMinus] = useState(0)
    const add = (event) => {
        event.preventDefault()
        const form = event.target;
        const a = form.a.value;
        const b = form.b.value;
        const aI = parseFloat(a)
        const bI = parseFloat(b)


        const total = a - b
        const minus = b + a
        // console.log(total)
        setTotal(total)
        seMinus(minus)
    }


    return (
        <div className='  h1 my-4 lg:mx-4 mx-2 '>



<Options></Options>




            <h2 className='underline underline-offset-4 decoration-red-600 text-center text-xl font-bold my-4 text-blue-600 '>Preforms calculator page</h2>

            <form className="flex flex-col  gap-1">
             

                <div className=' grid lg:grid-cols-3 md:grid-cols-2  gap-1 lg:gap-4  place-items-stretch'>
                <div className=' flex justify-between rounded bg-yellow-100 px-2  '>
                    {/* first  */}
                    <div className="mb- w-4/5 ">
                        <Label
                        className='text-lg font-bold'
                            htmlFor="email2"
                            value="Preform Size "
                        />
                    </div>
                  <div className='flex w-1/ justify-end '>
                  <input type="text" placeholder="Type here" className="input text-black text-lg font-bold input-bordered rounded-lg bg-red- input-sm w-full -w-xs" />
                    <p className='ml-1 '> gms</p>
                  </div>
                </div>


                 {/* seound  */}
                <div className=' flex justify-between bg-green-100 align-middle '>
                    <div className="mb- w-4/5 ">
                        <Label
                            htmlFor="email2"
                            value="Preform Size"
                        />
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered rounded-lg input-sm w-1/3 -w-xs" />
                </div>
                <div className=' flex justify-between bg-green-200 align-middle '>
                    <div className="mb- w-4/5 ">
                        <Label
                            htmlFor="email2"
                            value="Preform Size"
                        />
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered rounded-lg input-sm w-1/3 -w-xs" />
                </div>
                <div className=' flex justify-between bg-green-200 align-middle '>
                    <div className="mb- w-4/5 ">
                        <Label
                            htmlFor="email2"
                            value="Preform Size"
                        />
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered rounded-lg input-sm w-1/3 -w-xs" />
                </div>
                <div className=' flex justify-between bg-green-200 align-middle place-self-cente self-center '>
                    <div className="mb- w-4/5 ">
                        <Label
                            htmlFor="email2"
                            value="Preform Size"
                        />
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered rounded-lg input-sm w-1/3 -w-xs " />
                </div>
                </div>
                
                <Button className='mt-4' type="submit">
                   Calculate now
                </Button>
            </form>
        </div>
    );
};

export default Home;