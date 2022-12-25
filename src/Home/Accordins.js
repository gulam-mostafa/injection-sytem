import { Accordion } from 'flowbite-react';
import React from 'react';

const Accordins = ({ totalProduction }) => {
  const { hourlyProd, perHourseMaterialCon, totalCarton, totalPreforms, wastages, totalMaterial, percentage, totalCases, totalContainer, averageCycleTime, runningTime, breakDown,
    totalCArtonsUp, totaPreformUp, hourlyOutputUp,
    BreakDownUp, runningTimeUp, avarageCycleTimeUp, totalMaterialUp, wastagePercentageUp, totalCaseUp, totalContainerUp
  } = totalProduction
  // console.log(totalProduction)
  return (
    <div className='my-8 bg-gray-300 rounded-lg '>
      <Accordion flush={true}>
        <Accordion.Panel className=' ' >
          <Accordion.Title >
            <p className='text-amber-600 '> Original Results {totalCarton} cartons</p>
          </Accordion.Title>
          <Accordion.Content>
            <div >
              <div className='flex border px-2 py-1 rounded-md border-blue-400 justify-between '>
                <p>Hourly Output:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{hourlyProd}</p>
                  <p>ps</p>
                </div>
              </div>
              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Hourly materials Consume:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{perHourseMaterialCon}</p>
                  <p>Kg</p>
                </div>
              </div>
              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Total Carton:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{totalCarton}</p>
                  <p>Cartons</p>
                </div>
              </div>
              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Total Preforms:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{totalPreforms}</p>
                  <p>Ps</p>
                </div>
              </div>

              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Total wastage:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{wastages}</p>
                  <p>Kg</p>
                </div>

              </div>
              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Total Material consume:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{totalMaterial}</p>
                  <p>Kg</p>
                </div>
              </div>
              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Wastage Percentage:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{percentage}</p>
                  <p>%</p>
                </div>

              </div>
              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Total Case:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{totalCases}</p>
                  <p>cases</p>
                </div>

              </div>
              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Total Container:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{totalContainer}</p>
                  <p>Box</p>
                </div>

              </div>
              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Average CycleTime:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{averageCycleTime}</p>
                  <p>Sec</p>
                </div>

              </div>
              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Running Time:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{runningTime}</p>
                  <p>Hours</p>
                </div>

              </div>
              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Break down Time:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{breakDown}</p>
                  <p>Hours</p>
                </div>

              </div>

            </div>

          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel className='bg-red-400'>
          <Accordion.Title>
            if <span className='font-bold text-pink-700 '>{totalCArtonsUp}</span> Cartons, click Here
          </Accordion.Title>
          <Accordion.Content>
            <div >
              <div className='flex border px-2 py-1 rounded-md border-blue-400 justify-between '>
                <p>Hourly Output:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{hourlyOutputUp}</p>
                  <p>ps</p>
                </div>
              </div>
              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Hourly materials Consume:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{perHourseMaterialCon}</p>
                  <p>Kg</p>
                </div>
              </div>
              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Total Carton:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{ totalCArtonsUp}</p>
                  <p>Cartons</p>
                </div>
              </div>
              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Total Preforms:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{totaPreformUp}</p>
                  <p>Ps</p>
                </div>
              </div>

              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Total wastage:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{wastages}</p>
                  <p>Kg</p>
                </div>

              </div>
              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Total Material consume:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{totalMaterialUp}</p>
                  <p>Kg</p>
                </div>
              </div>
              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Wastage Percentage:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{wastagePercentageUp}</p>
                  <p>%</p>
                </div>

              </div>
              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Total Case:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{totalCaseUp}</p>
                  <p>cases</p>
                </div>

              </div>
              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Total Container:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{totalContainerUp}</p>
                  <p>Box</p>
                </div>

              </div>
              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Average CycleTime:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{avarageCycleTimeUp}</p>
                  <p>Sec</p>
                </div>

              </div>
              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Running Time:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{runningTime}</p>
                  <p>Hours</p>
                </div>

              </div>
              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Break down Time:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{BreakDownUp}</p>
                  <p>Hours</p>
                </div>

              </div>

            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            if 30 Cartons
          </Accordion.Title>
          <Accordion.Content>
            <div >
              <div className='flex border px-2 py-1 rounded-md border-blue-400 justify-between '>
                <p>Hourly Output:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{hourlyProd}</p>
                  <p>ps</p>
                </div>
              </div>
              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Hourly materials Consume:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{perHourseMaterialCon}</p>
                  <p>Kg</p>
                </div>
              </div>
              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Total Carton:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{totalCarton}</p>
                  <p>Cartons</p>
                </div>
              </div>
              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Total Preforms:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{totalPreforms}</p>
                  <p>Ps</p>
                </div>
              </div>

              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Total wastage:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{wastages}</p>
                  <p>Kg</p>
                </div>

              </div>
              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Total Material consume:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{totalMaterial}</p>
                  <p>Kg</p>
                </div>
              </div>
              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Wastage Percentage:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{percentage}</p>
                  <p>%</p>
                </div>

              </div>
              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Total Case:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{totalCases}</p>
                  <p>cases</p>
                </div>

              </div>
              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Total Container:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{totalContainer}</p>
                  <p>Box</p>
                </div>

              </div>
              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Average CycleTime:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{averageCycleTime}</p>
                  <p>Sec</p>
                </div>

              </div>
              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Running Time:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{runningTimeUp}</p>
                  <p>Hours</p>
                </div>

              </div>
              <div className='flex  justify-between border px-2 py-1 rounded-md border-blue-400'>
                <p>Break down Time:</p>
                <div className='flex justify-between '>
                  <p className=' mx-1 font-bold text-red-500 '>{breakDown}</p>
                  <p>Hours</p>
                </div>

              </div>

            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Accordins;