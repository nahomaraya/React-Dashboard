import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GiPrimitiveTorch } from 'react-icons/gi';
import { Stacked, SparkLine, Pie, LineChart, Button } from '../components';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';

const Home = () => {
  return (
    <div className='mt-12'>
       <div className='flex flex-wrap lg:flex-nowrap  justify-center'>
          <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl lg:w-80 w-full  p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
            <div className='flex justify-between items-center'>
              <div>
                <p className='font-bold text-gray-400'>Cesh</p>
                <p className='text-2xl'>69,420</p>
              </div>

            </div>
            <div className='mt-6'>
                <Button color='white' bgColor='blue' text='Download' borderRadius='10px' size='md'/>
            </div>
            
          </div>
          <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
              {earningData.map((item)=>(
              <div key={item.title} className='bg-white h-44  dark:text-gray-200 dark:bg-secondary-dark-bg p-10 pt-9 rounded-2xl'>
                <button className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl' type='button' style={{ color: item.iconColor, backgroundColor: item.iconBg}}>
                    {item.icon}
                </button>
                 <p className='mt-3'>
                    <span className='text-lg font-semibold'>{item.amount}</span>
                    <span className={`text-sm text-${item.pcColor} ml-2`}>{item.percentage}</span>
                 </p>
                 <p className='text-sm text-gray-400 mt-1'>{item.title}</p>

              </div>))}

          </div>
       </div>

       <div className='flex gap-10 flex-wrap justify-center'>
          <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-760'>
             <div className='flex justify-between'>
                  <p className='font-semibold text-xl'>Revenue Updates</p>
                  <div className='flex items-center gap-4'>
                    <p className='flex items-center gap-2 text-gray-400 hover:drop-shadow-xl'>
                      <span><GiPrimitiveTorch/></span>
                      <span>Expenses</span>
                    </p>
                    <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                      <span><GiPrimitiveTorch/></span>
                      <span>Budget</span>
                    </p>
                  </div>
             </div>

             <div className='mt-10 flex gap-10 flex-wrap justify-center'>
              <div className='border-r-1 border-color m-4 pr-10'>
                <div>
                  <p>
                    <span className='text-3xl font-semibold'>93,678</span>
                  </p>
                  <p className='text-gray-500 mt-1'>Budget</p>
                </div>
                <div className='mt-8'>
                  <p>
                    <span className='text-3xl font-semibold'>93,678</span>
                  </p>
                  <p className='text-gray-500 mt-1'>Budget</p>
                </div>
                <div className='mt-5'>
                  <SparkLine
                    currentColor='blue'
                    id='line-sparkline'
                    type='Line'
                    height='80px'
                    width='250px'
                    data={SparklineAreaData}
                    color='blue'
                  />
                </div>
                <div className='mt-10'>
                  <Button 
                    color='white'
                    bgColor='blue'
                    text="Download Report"
                    borderRadius="10px"
                  />
                </div>
              </div>

              <div>
                <Stacked
                  width='320px'
                  height='360px'
                  id='charts'
                />
              </div>

             </div>

          </div>
      
       </div>

    </div>
  )
}

export default Home