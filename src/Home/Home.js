import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Options from '../Pages/Options';


const Home = () => {
      const [cycleTime, setCycleTime] = useState(0)
      const [preformSize, setPreformSize] = useState(0)
      const [currentPreforms, setCurrentPreforms] = useState(0)
      const [activeCavity, setActiveCavity] = useState(0)
      const [remainsTime, setRemainsTime] = useState(0)
      const [perCartons, setPerCartons] = useState(0)
      const [wastage, setWastage] = useState(0)
      const [underPreforms, setUnderPreforms] = useState(0)
      const [perContainer, setPerContainer] = useState(0)
      const [perShift, setPerShift] = useState(0)
    const add = (event) => {
        event.preventDefault()
        const form = event.target;
        const preformSizes = form.preformssize.value;
        const cycleTimes = form.cycleTimes.value;
        const currentPreforms = form.currentPreforms.value;
        const activeCavity = form.activeCavity.value;
        const remainsTime = form.remainsTime.value;
        const perCartons = form.perCartons.value;
        const perCase = form.perCase.value;
        const wastage = form.wastage.value;
        const underPreforms = form.underPreforms.value;
        const perContainer = form.perContainer.value;
        const perShift = form.perShift.value;

        // console.log(preformSizes)

        console.log(perCartons, preformSizes,  cycleTimes, currentPreforms, activeCavity, remainsTime, perCase, wastage,underPreforms,perContainer,perShift)




    }


    return (
        <div className='  my-4 lg:mx-4 mx-2 '>
            <Options></Options>
            <h2 className='underline underline-offset-4 decoration-wavy  mb-8 decoration-black -600 text-center text-xl font-bold my-4 text-blue-600 '>Preforms calculator page</h2>
            <form onSubmit={add} className="flex flex-col  gap-1">
                <div className=' grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4  gap-1 lg:gap-4  place-items-stretch'>
                    <div className=' flex justify-between rounded bg-gray-100 px-2 border border-purple-300 '>
                        {/* preform size */}
                        <div className="mb- w-4/5 ">
                            <Label
                                className='text-lg font-bold'
                                htmlFor="email2"
                                value="Preform Size "
                            />
                        </div>
                        <div className='flex w-1/ justify-end '>
                            <input
                                id='preformssize'
                                name='preformssize'
                                type="text"
                                placeholder="Type Size"
                                className="input text-orange-500  text-lg font-bold input-bordered rounded-lg bg-red- input-sm w-full -w-xs" />
                            <p className='ml-1      w-10 text-end '> gms</p>
                        </div>
                    </div>
                    <div className=' flex justify-between rounded bg-yello  w-100 px-2  border border-purple-300'>
                        {/* cycle times  */}
                        <div className="mb- w-4/5 ">
                            <Label
                                className='text-lg font-bold'
                                htmlFor="email2"
                                value="Cycle Times "
                            />
                        </div>
                        <div className='flex w-1/ justify-end '>
                            <input name='cycleTimes'
                                type="text" placeholder="Type Cycle Times" className="input text-orange-500  text-lg font-bold input-bordered rounded-lg bg-red- input-sm w-full -w-xs" />
                            <p className='ml-1     w-10 text-end '>Sec</p>
                        </div>
                    </div>
                    <div className=' flex justify-between rounded bg-red-100 px-2  border border-purple-300'>
                        {/* Current Preforms  */}
                        <div className="mb- w-4/5 ">
                            <Label
                                className='text-lg font-bold'
                                htmlFor="email2"
                                value="Current Preforms "
                            />
                        </div>
                        <div className='flex w-1/ justify-end '>
                            <input name='currentPreforms'
                                type="text" placeholder="Type Current Preforms" className="input text-orange-500  text-lg font-bold input-bordered rounded-lg bg-red- input-sm w-full -w-xs" />
                            <p className='ml-1     w-10 text-end '> Ps</p>
                        </div>
                    </div>
                    <div className=' flex justify-between rounded bg-lime-100 px-2 border border-purple-300 '>
                        {/* Active Cavity  */}
                        <div className="mb- w-4/5 ">
                            <Label
                                className='text-lg font-bold'
                                htmlFor="email2"
                                value="Active Cavity "
                            />
                        </div>
                        <div className='flex w-1/ justify-end '>
                            <input name='activeCavity'
                                type="text" placeholder="Active Cavity" className="input text-orange-500  text-lg font-bold input-bordered rounded-lg bg-red- input-sm w-full -w-xs" />
                            <p className='ml-1     w-10  text-end '> Ps</p>
                        </div>
                    </div>
                    <div>
                        <div className=' flex justify-between rounded bg-violet-100 px-2  border border-purple-300'>
                            {/* Remaining Time */}
                            <div className="mb- w-4/5 ">
                                <Label
                                    className='text-lg font-bold'
                                    htmlFor="email2"
                                    value="Remaining Time "
                                />
                            </div>
                            <div className='flex w-1/ justify-end '>
                                <input name='remainsTime'
                                    type="text" placeholder="Remain Minute" className="input text-orange-500  text-lg font-bold input-bordered rounded-lg bg-red- input-sm w-full -w-xs" />
                                <p className='ml-1     w-10 text-end '> Min.</p>
                            </div>
                        </div>

                    </div>
                    <div className=' flex justify-between rounded bg-blue-100 px-2  border border-purple-300 '>
                        {/* Per cartons */}
                        <div className="mb- w-4/5 ">
                            <Label
                                className='text-lg font-bold'
                                htmlFor="email2"
                                value="Per cartons "
                            />
                        </div>
                        <div className='flex w-1/ justify-end '>
                            <input name='perCartons'
                                type="text" placeholder="Type per cartons" className="input text-orange-500  text-lg font-bold input-bordered rounded-lg bg-red- input-sm w-full -w-xs" />
                            <p className='ml-1     w-10 text-end '> ps</p>
                        </div>
                    </div>
                    <div className=' flex justify-between rounded bg-green-100 px-2  border border-purple-300 '>
                        {/* Per Case */}
                        <div className="mb- w-4/5 ">
                            <Label
                                className='text-lg font-bold'
                                htmlFor="email2"
                                value="Per Case "
                            />
                        </div>
                        <div className='flex w-1/ justify-end '>
                            <input name='perCase'
                                type="text" placeholder="Type per case" className="input text-orange-500  text-lg font-bold input-bordered rounded-lg bg-red- input-sm w-full -w-xs" />
                            <p className='ml-1     w-10 text-end '> ps</p>
                        </div>
                    </div>
                    <div className=' flex justify-between rounded bg-stone-100 px-2  border border-purple-300 '>
                        {/* Wastage */}
                        <div className="mb- w-4/5 ">
                            <Label
                                className='text-lg font-bold'
                                htmlFor="email2"
                                value="Wastage "
                            />
                        </div>
                        <div className='flex w-1/ justify-end '>
                            <input name='wastage'
                                type="text" placeholder="Type Wastage in kg" className="input text-orange-500 text-lg font-bold input-bordered rounded-lg bg-red- input-sm w-full -w-xs" />
                            <p className='ml-1     w-10 text-end '> Kgs</p>
                        </div>
                    </div>
                    <div className=' flex justify-between rounded bg-emerald-100 px-2 border border-purple-300  '>
                        {/* Under Preforms  */}
                        <div className="mb- w-4/5 ">
                            <Label
                                className='text-lg font-bold'
                                htmlFor="email2"
                                value="Under Preforms "
                            />
                        </div>
                        <div className='flex w-1/ justify-end '>
                            <input name='underPreforms'
                                type="text" placeholder="Type cartons" className="input text-orange-500  text-lg font-bold input-bordered rounded-lg bg-red- input-sm w-full -w-xs" />
                            <p className='ml-1     w-10 text-end '> crt.</p>
                        </div>
                    </div>
                    <div className=' flex justify-between rounded bg-orange-100 px-2  border border-purple-300 '>
                        {/* Per / container /*/}
                        <div className="mb- w-4/5 ">
                            <Label
                                className='text-lg font-bold'
                                htmlFor="email2"
                                value="Per Container "
                            />
                        </div>
                        <div className='flex w-1/ justify-end '>
                            <input name='perContainer'
                                type="text" placeholder="Cartons" className="input text-orange-500 text-lg font-bold input-bordered rounded-lg bg-red- input-sm w-full -w-xs" />
                            <p className='ml-1     w-10 text-end '> crt.</p>
                        </div>
                    </div>
                    <div className=' flex justify-between rounded border border-purple-300 bg-amber-100 px-2  '>
                        {/* Per Shift */}
                        <div className="mb- w-4/5 ">
                            <Label
                                className='text-lg font-bold'
                                htmlFor="email2"
                                value="Per Shift "
                            />
                        </div>
                        <div className='flex w-1/ justify-end '>
                            <input
                                name='perShift' type="text" defaultValue={8} className="input text-orange-500 text-lg font-bold input-bordered rounded-lg bg-red- input-sm w-full -w-xs" />
                            <p className='ml-1   text-xs items-center  w-10 text-end '> hours</p>
                        </div>
                    </div>
                </div>
                <p className='text-xs text-center'> <span className='text-red-500'>*</span> Remaining time is, When you calculate before finish shift</p>

                <Button className='mt-4 lg:w-1/2 w-full mx-auto' type="submit">
                    Calculate now
                </Button>
            </form>

        </div>
    );
};

export default Home;