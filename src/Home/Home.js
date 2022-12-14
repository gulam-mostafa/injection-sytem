import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Options from '../Pages/Options';
import Accordins from './Accordins';
import HomeCards from './HomeCards';
import './Home.css'
import { toast } from 'react-toastify';

const Home = () => {
    // useState
    const [totalPreforms, setTotalPreforms] = useState(0)
    const [wastages, setWastage] = useState(0)
    const [hourlyProd, setHourlyProd] = useState(0)
    const [totalCarton, setTotalCartons] = useState(0)
    const [perHourseMaterialCon, setPerHourMaterilaCon] = useState(0)
    const [totalMaterial, setTotalMaterials] = useState(0)
    const [percentage, setPercentage] = useState(0)
    const [totalCases, setTotalCase] = useState(0)
    const [totalContainer, setTotalContainer] = useState()
    const [averageCycleTime, setAverageCycleTime] = useState(0)
    const [runningTime, setRunningTime] = useState(0)
    const [breakDown, setBreakdown] = useState(0)
    //   Uper value 
    const [totalCArtonsUp, setTotalCartonsUp] = useState(0)
    const [totaPreformUp, setTotalPreformUp] = useState(0)
    const [hourlyOutputUp, setHourlyOutputUp] = useState(0)
    const [runningTimeUp, setRunningTimeUp] = useState(0)
    const [BreakDownUp, setBreakDownUp] = useState(0)
    const [avarageCycleTimeUp, setAverageCycleTimeUp] = useState(0)
    const [totalMaterialUp, setTotalMaterialUp] = useState(0)
    const [wastagePercentageUp, setWastagePercentageUp] = useState(0)
    const [totalCaseUp, setTotalCaseUp] = useState(0)
    const [totalContainerUp, setTotalContainerUp] = useState(0)
    // console.log(totalCArtonsUp,totaPreformUp,hourlyOutputUp,
    //     BreakDownUp, runningTimeUp , avarageCycleTimeUp , totalMaterialUp,wastagePercentageUp ,totalCaseUp, totalContainerUp)

    //   function start 
    const add = async (event) => {
        event.preventDefault()
        const form = event.target;
        const preformSizes = parseFloat(form.preformssize.value);
        const cycleTimes = parseFloat(form.cycleTimes.value);
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
        setWastage(wastageOfInput)
        const underPreforms = parseFloat(form.underPreforms.value);
        const perContainer = parseFloat(form.perContainer.value);
        const perShift = parseFloat(form.perShift.value);
        const eHour = parseFloat(form.eHour.value);
        const eMin = parseFloat(form.eMin.value);
        // console.log(perCartons, preformSizes, cycleTimes, currentPreforms, activeCavity, remainsTime, perCase, wastage, underPreforms, perContainer, perShift)
        const hourlyOutput = (activeCavity * 3600) / cycleTimes;
        if (isNaN(hourlyOutput)) {
            setHourlyProd('Empty Input')
        } else {
            setHourlyProd(hourlyOutput)
        }
        const perHourMaterial = (hourlyOutput * preformSizes) / 1000
        if (isNaN(perHourMaterial)) {

            setPerHourMaterilaCon('Empty Input')
        } else {
            setPerHourMaterilaCon(perHourMaterial.toFixed(2))
        }
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

                setTotalCartons(totalCartons.toFixed(2))
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
                setTotalCartons(totalCartons.toFixed(2))
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
            setTotalPreforms(totalShiftPreforms.toFixed(2))
            // console.log(totalShiftPreforms)
        }
        const TotalUnderPreform = (underPreforms * perCartons * preformSizes) / 1000
        if (isNaN(TotalUnderPreform)) {
            const totalMaterials = totalShiftPreforms * (preformSizes / 1000) + wastageOfInput
            console.log(totalMaterials)
            setTotalMaterials(totalMaterials.toFixed(2))

            const wastagePercentage = (wastageOfInput * 100) / totalMaterials
            if (!isNaN(wastagePercentage)) {
                setPercentage(wastagePercentage.toFixed(2))
            }
        } else {
            const totalMaterials = totalShiftPreforms * (preformSizes / 1000) + TotalUnderPreform + wastageOfInput
            setTotalMaterials(totalMaterials.toFixed(2))
            const wastagePercentage = (wastageOfInput * 100) / totalMaterials
            if (!isNaN(wastagePercentage)) {
                setPercentage(wastagePercentage.toFixed(2))
            }
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
        const breakDown = perShift.toFixed(2) - runningTime.toFixed(2)
        const minTohOur = eMin / 60
        const estimatedRunningTime = perShift - (eHour + minTohOur)
        const inputBreakDown = minTohOur + eHour
        if (eHour > 0 || eMin > 0) {
            const averageCycleTime = activeCavity * 3600
            const totalAverageCycleTime = averageCycleTime / totalShiftPreforms
            const avarageCycle = totalAverageCycleTime * estimatedRunningTime
            if (!isNaN(estimatedRunningTime)) {
                setRunningTime(estimatedRunningTime.toFixed(2))
            }
            if (!isNaN(eHour + minTohOur)) {
                setBreakdown((eHour + minTohOur).toFixed(2))
            }
            if (avarageCycle - cycleTimes > 1 || avarageCycle - cycleTimes < -1) {
                toast.error("Maybe Your Input Wrong (cycle-time) ! ??????????????? ?????????????????? ????????? ??????????????? ????????????", {
                    position: toast.POSITION.TOP_CENTER
                })
                // console.log(perShift, 'and', runningTime, 'and', estimatedRunningTime)
            }
            if (!isNaN(avarageCycle)) {
                setAverageCycleTime(avarageCycle.toFixed(2))
            }
        } else {
            const averageCycleTime = activeCavity * 3600
            const totalAverageCycleTime = averageCycleTime / totalShiftPreforms
            const avarageCycle = totalAverageCycleTime * runningTime
            if (!isNaN(breakDown)) {
                setBreakdown(breakDown.toFixed(2))
            }
            if (!isNaN(runningTime)) {
                setRunningTime(runningTime.toFixed(2))
            }
            // setRunningTime(runningTime)
            if (!isNaN(avarageCycle)) {
                setAverageCycleTime(avarageCycle.toFixed(2))
            }
            if (avarageCycle - cycleTimes > .8 || avarageCycle - cycleTimes < -.8) {
                toast.error("Maybe Your Input Wrong ! ??????????????? ?????????????????? ????????? ??????????????? ????????????", {
                    position: toast.POSITION.TOP_CENTER
                })
                // console.log(perShift, 'and', runningTime, 'and', estimatedRunningTime)
            }
        }
        if (perShift + .03 < runningTime || perShift + .03 < estimatedRunningTime) {
            toast.error("Maybe Your Input Wrong(production) ! ??????????????? ?????????????????? ????????? ??????????????? ????????????", {
                position: toast.POSITION.TOP_CENTER
            })
            console.log(perShift, 'and', runningTime, 'and', estimatedRunningTime)
        }
        window.scrollTo(0, 180);
        // Number celling 
        const cartonsUp = Math.ceil(totalCartons)
        if (!isNaN(cartonsUp)) {
            setTotalCartonsUp(cartonsUp)
        }
        const TotalPreformsUp = Math.ceil(cartonsUp * perCartons)
        if (!isNaN(TotalPreformsUp)) {
            setTotalPreformUp(TotalPreformsUp)
        }
        const hourlyOutputUp = Math.ceil((activeCavity * 3600) / cycleTimes)
        if (!isNaN(hourlyOutputUp)) {
            setHourlyOutputUp(hourlyOutputUp)
        }
        const runningTmeUP = TotalPreformsUp / hourlyOutputUp
        if (!isNaN(runningTmeUP)) {
            setRunningTimeUp(runningTmeUP.toFixed(2))
        }
        if (eHour > 0 || eMin > 0) {
            const avarageCycleTimeUp = ((activeCavity * 3600) / TotalPreformsUp) * estimatedRunningTime
            setAverageCycleTimeUp(avarageCycleTimeUp.toFixed(2))

            const breakDownUp = perShift.toFixed(2) - (inputBreakDown.toFixed(2))
            if (!isNaN(breakDownUp)) {
                setBreakDownUp(breakDownUp.toFixed(2))
            }
        } else {
            const avarageCycleTimeUp = ((activeCavity * 3600) / TotalPreformsUp) * runningTmeUP
            setAverageCycleTimeUp(avarageCycleTimeUp.toFixed(2))
            const breakDownUp = perShift.toFixed(2) - runningTmeUP.toFixed(2)
            if (!isNaN(breakDownUp)) {
                setBreakDownUp(breakDownUp.toFixed(2))
            }
        }
        const TotalMaterialConsumeUp = ((TotalPreformsUp * preformSizes) / 1000 + (underPreforms * perCartons * preformSizes) / 1000 + inputWastage)
        if (!isNaN(TotalMaterialConsumeUp)) {
            setTotalMaterialUp(TotalMaterialConsumeUp.toFixed(2))
        }
        const wastagePercentageUp = (inputWastage * 100) / TotalMaterialConsumeUp
        if (!isNaN(wastagePercentageUp)) {
            setWastagePercentageUp(wastagePercentageUp.toFixed(2))
        }
        const totalCaseUp = TotalPreformsUp / perCase
        if (!isNaN(totalCaseUp)) {
            setTotalCaseUp(totalCaseUp)
        }
        const totalContainerUp = totalCArtonsUp / perContainer
        if (!isNaN(totalContainerUp) || isFinite(totalContainerUp)) {
            setTotalContainerUp(totalContainerUp.toFixed(2))
            console.log(totalContainerUp)
        }



    }
    return (
        <div className='  my-4 lg:mx-4 mx-2 '>
            <Options></Options>
            <div className=' my-4'>
                <HomeCards
                    hourlyProd={[hourlyProd, perHourseMaterialCon]}
                ></HomeCards>
            </div>
            <Accordins

                totalProduction={{
                    hourlyProd, perHourseMaterialCon, totalCarton, totalPreforms, wastages, totalMaterial, percentage, totalCases, totalContainer, averageCycleTime, runningTime, breakDown,
                    totalCArtonsUp, totaPreformUp, hourlyOutputUp,
                    BreakDownUp, runningTimeUp, avarageCycleTimeUp, totalMaterialUp, wastagePercentageUp, totalCaseUp, totalContainerUp

                }}
            >

            </Accordins>

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
                                defaultValue={11.97}
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
                                defaultValue={350000}
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
                                defaultValue={1440}
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
                                defaultValue={25}
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
                                defaultValue={0}
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