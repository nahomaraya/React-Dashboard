import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar,Sidebar,Footer,ThemeSettings } from './components'
import { Home,Orders,Kanban,Employees,Customers, ColorPicker,ColorMapping,Editor,Calendar,Area,Bar,Financial,Line,Pie,Pyramid,Stacked} from './pages'
import './App.css';
import { useStateContext } from './context/ContextProvider'

function App(){
   // const { activeMenu } = useStateContext();
    const activeMenu = true;
    return (
        <div>
            <BrowserRouter>
              <div className="flex relative dark:bg-main-dark-bg">
                <div className="fixed right-4 bottom-4" style={{ zIndex: '1000'}}>
                    <TooltipComponent content="Settings" position="Top">
                        <button type="button" 
                        className="text-3x1 p-3 hover:drop-shadow-x1 hover:bg-light-gray text-white"
                        style={{ background: 'blue', borderRadius: '50%'}}>
                            <FiSettings/>
                        </button>
                    </TooltipComponent>
                </div>
                { activeMenu ? 
                (<div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white"><Sidebar/></div>):
                (<div  className="w-0 dark:bg-secondary-dark-bg">1</div>) }
                <div className={activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '}>
                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar ">
                        <Navbar/>
                    </div>

               
                <div>
                    <Routes>
                        {/**/}
                        <Route path="/" element={<Home/>}/>
                        <Route path="/home" element={<Home/>}/>

                        <Route path="/orders" element={<Orders/>}/>
                        <Route path="/employees" element={<Employees/>}/>
                        <Route path="/customers" element={<Customers/>}/>

                        <Route path="/calendar" element={<Calendar/>}/>
                        <Route path="/kanban" element={<Kanban/>}/>
                        <Route path="/editor" element={<Editor/>}/>
                        <Route path="/color-picker" element={<ColorPicker/>}/>

                        <Route path="/line" element={<Line/>}/>
                        <Route path="/area" element={<Area/>}/>
                        <Route path="/bar" element={<Bar/>}/>
                        <Route path="/pie" element={<Pie/>}/>
                        <Route path="/financial" element={<Financial/>}/>
                        <Route path="/color-mapping" element={<ColorMapping/>}/>
                        <Route path="/pyramid" element={<Pyramid/>}/>
                        <Route path="/stack" element={<Stacked/>}/>







                    </Routes>
                </div>
                </div>
              </div>
            </BrowserRouter>
        </div >
    )

}

export default App;