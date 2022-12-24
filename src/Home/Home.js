import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Options from '../Pages/Options';
import Accordins from './Accordins';
import HomeCards from './HomeCards';
import './Home.css'
import { useEffect } from 'react';
import { toast } from 'react-toastify';


const Home = () => {
    const [cycleTime, setCycleTime] = useState(0)
    // console.log(cycleTime)
    const [preformSize, setPreformSize] = useState(0)
    const [totalPreforms, setTotalPreforms] = useState(0)
    const [activeCavity, setActiveCavity] = useState(0)
    const [remainsTime, setRemainsTime] = useState(0)
    const [perCartons, setPerCartons] = useState(0)
    const [wastages, setWastage] = useState(0)

    const [underPreforms, setUnderPreforms] = useState(0)
    const [perContainer, setPerContainer] = useState(0)
    const [perShift, setPerShift] = useState(0)
    const [hourlyProd, setHourlyProd] = useState(0)

    const [totalCarton, setTotalCartons] = useState(0)
    // console.log(totalCarton)

    const [loader, setLoader] = useState(true)
    const [perHourseMaterialCon, setPerHourMaterilaCon] = useState(0)
    const [totalMaterial, setTotalMaterials] = useState(0)
    const [percentage, setPercentage] = useState(0)
    const [totalCases, setTotalCase] = useState(0)
    const [totalContainer, setTotalContainer] = useState()
    const [averageCycleTime, setAverageCycleTime] = useState()
    const [runningTime, setRunningTime] = useState(0)
    const [breakDown, setBreakdown] = useState(0)


    const add = async (event) => {


        event.preventDefault()
        const form = event.target;
        const preformSizes = parseFloat(form.preformssize.value);
        const cycleTimes = parseFloat(form.cycleTimes.value);
        // if (cycleTime >= 0) {

        // }

        const currentPreforms = parseFloat(form.currentPreforms.value);
        const currentProduction = currentPreforms ? currentPreforms : 0;
        const activeCavity = parseFloat(form.activeCavity.value);
        const remainsTimes = parseFloat(form.remainsTime.value);
        const deuTime = remainsTimes ? remainsTimes : 0
        const perCartons = parseFloat(form.perCartons.value);
        const perCartonValue = perCartons ? perCartons : 0;
        const perCase = parseFloat(form.perCase.value);
        const inputWastage = parseFloat(form.wastage.value);

        const wastageOfInput = inputWastage ? inputWastage : 0
        const underPreforms = parseFloat(form.underPreforms.value);
        const perContainer = parseFloat(form.perContainer.value);
        const perShift = parseFloat(form.perShift.value);
        const eHour = parseFloat(form.eHour.value);
        const eMin = parseFloat(form.eMin.value);
        // console.log(perCartons, preformSizes, cycleTimes, currentPreforms, activeCavity, remainsTime, perCase, wastage, underPreforms, perContainer, perShift)
        const hourlyOutput = (activeCavity * 3600) / cycleTimes;
        // console.log( currentPreforms )
        setHourlyProd(hourlyOutput)

        const perHourMaterial = (hourlyOutput * preformSizes) / 1000
        setPerHourMaterilaCon(perHourMaterial)

        let totalCartons = 0
        if (remainsTimes >= 0) {
            const remainsProduction = 60 / deuTime;
            const totalRemainProduction = hourlyOutput / remainsProduction;
            const totalShiftProduction = currentProduction + totalRemainProduction
            totalCartons = totalShiftProduction / perCartonValue

            if (totalCartons === Infinity) {
                setTotalCartons('fill per carton1 ')
            }
            else if (currentProduction <= 0 && perCartons) {
                setTotalCartons('fill current prefore')
                return
            }
            else {

                setTotalCartons(totalCartons)
                setLoader(false)
            }
        }
        else {
            const perCartonsZero = perCartons ? perCartons : 0;
            if (perCartonsZero <= 0) {
                setTotalCartons('Fill per cartons 2')
            }
            else if (currentProduction <= 0) {
                setTotalCartons('Fill current preforms')
            }
            else {
                totalCartons = currentProduction / perCartonsZero
                setTotalCartons(totalCartons)
                setLoader(false)
            }
        }

        const totalShiftPreforms = totalCartons * perCartons
        // console.log(totalCarton)
        // console.log(perCartons)
        if (isNaN(totalShiftPreforms)) {
            setTotalPreforms('Fill Up Input Value')
            return
        }
        else {
            setTotalPreforms(totalShiftPreforms)
            // console.log(totalShiftPreforms)
        }
        const TotalUnderPreform = (underPreforms * perCartons * preformSizes) / 1000


        if (isNaN(TotalUnderPreform)) {
            const totalMaterials = totalShiftPreforms * (preformSizes / 1000) + wastageOfInput
            console.log(totalMaterials)
            setTotalMaterials(totalMaterials)

            const wastagePercentage = (wastageOfInput * 100) / totalMaterials
            setPercentage(wastagePercentage)
        } else {
            const totalMaterials = totalShiftPreforms * (preformSizes / 1000) + TotalUnderPreform + wastageOfInput
            setTotalMaterials(totalMaterials)
            const wastagePercentage = (wastageOfInput * 100) / totalMaterials
            setPercentage(wastagePercentage)


        }
        const cases = totalShiftPreforms / perCase
        if (!isNaN(cases)) {
            // console.log(cases)
            setTotalCase(cases.toFixed(0))
        } else {
            setTotalCase('input Empty')
        }

        const container = totalCartons / perContainer
        if (!isNaN(container)) {
            setTotalContainer(container.toFixed(2))
        } else {
            setTotalContainer('input Empty')
        }

        const runningTime = totalShiftPreforms / hourlyOutput
       
        const breakDown = perShift.toFixed(2)- runningTime.toFixed(2)
        // console.log(perShift.toFixed(1)- runningTime.toFixed(1))
        // console.log( runningTime)
        // console.log( breakDown)
        const minTohOur = eMin / 60
        const estimatedRunningTime = perShift - (eHour + minTohOur)

        if(eHour > 0 || eMin > 0){
            const averageCycleTime = activeCavity * 3600
        const totalAverageCycleTime = averageCycleTime / totalShiftPreforms
        const avarageCycle = totalAverageCycleTime * estimatedRunningTime
        setRunningTime(estimatedRunningTime)
        setBreakdown((eHour + minTohOur))
        
        setAverageCycleTime(avarageCycle.toFixed(3))
        }else{
            const averageCycleTime = activeCavity * 3600
            const totalAverageCycleTime = averageCycleTime / totalShiftPreforms
            const avarageCycle = totalAverageCycleTime * runningTime 
            setBreakdown(breakDown)
            console.log(breakDown)
            setRunningTime(runningTime)
            setRunningTime(runningTime)
            setAverageCycleTime(avarageCycle.toFixed(3))
        }



        // if (totalAverageCycleTime - cycleTimes > 1 || totalAverageCycleTime - cycleTimes < -1) {

        //     toast.error("Maybe Your Input Wrong !", {
        //         position: toast.POSITION.TOP_CENTER
        //     });
        // }




    }


    return (
        <div className='  my-4 lg:mx-4 mx-2 '>
            <Options></Options>
            <div className=' my-4'>
                <HomeCards
                    hourlyProd={[hourlyProd, perHourseMaterialCon]}
                ></HomeCards>
            </div>
            <p>Hourly Production {hourlyProd}</p>
            <p>Hourly Production {perHourseMaterialCon.toFixed(2)}</p>
            <p>total cartons {totalCarton}</p>
            <p>total preforms  {totalPreforms}</p>
            <p>wastage {wastages}</p>
            <p>Total materials: {totalMaterial}</p>
            <p>percentage: {percentage}</p>
            <p>setTotalCase: {totalCases}</p>
            <p>setTotalContainer: {totalContainer}</p>
            <p>setAverageCycleTime: {averageCycleTime}</p>
            <p>setrunningTime: {runningTime}</p>
            <p>setbreakDown: {breakDown}</p>

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
                                defaultValue={11}
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
                                type="text"
                                defaultValue={7.5}
                                required
                                onKeyPress={(event) => {
                                    if (!/[0-9.]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }}
                                placeholder="Type Cycle Times" className="input text-orange-500  text-lg font-bold input-bordered rounded-lg bg-red- input-sm w-full -w-xs" />
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
                                defaultValue={258000}
                                onKeyPress={(event) => {
                                    if (!/[0-9.]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }}

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
                                defaultValue={96}
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


                                    type="text" placeholder={'0'} className="input text-orange-500  text-lg font-bold input-bordered rounded-lg bg-red- input-sm w-full -w-xs" />
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
                                defaultValue={1400}
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
                                defaultValue={0}
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
                                id='pla'
                                defaultValue={2}
                                type="text" placeholder="Type cartons" className="input text-orange-500  text-lg font-bold input-bordered rounded-lg bg-red- input-sm w-full -w-xs myClass" />
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
                    <div className=' flex justify-between rounded border items-center border-purple-300 bg-amber-100 px-2  '>
                        {/* Estimated hours*/}
                        <div className="mb- w-full ">
                            <Label
                                className='text-xs font-bold'
                                htmlFor="email2"
                                value="Estimated break Down Hour"
                            />
                        </div>
                        <div className='flex w-1/ justify-end '>
                            <input
                                name='eHour' type="text" defaultValue={0} className="input text-orange-500 text-lg font-bold input-bordered rounded-lg bg-red- input-sm w-full -w-xs" />
                            <p className='ml-1   text-xs items-center  w-10 text-end '> hours</p>
                        </div>
                    </div>
                    <div className=' flex justify-between items-center rounded border border-purple-300 bg-amber-100 px-2 mb-4  '>
                        {/* Estimated min*/}
                        <div className="mb- w-full ">
                            <Label
                                className='text-xs font-bold'
                                htmlFor="email2"
                                value="Estimated break Down Min "
                            />
                        </div>
                        <div className='flex w-1/ justify-end '>
                            <input
                                name='eMin' type="text" defaultValue={0} className="input text-orange-500 text-lg font-bold input-bordered rounded-lg bg-red- input-sm w-full -w-xs" />
                            <p className='ml-1   text-xs items-center  w-10 text-end '> Min</p>
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