import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu,
Filter, Page, ExcelExport, PdfExport, Edit, Inject} from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';
 


const Orders = () => {
  return (
    <div className='m-2 p-2 bg-white rounded-3xl'>
      <Header category="Page" title="Orders"/>
      <GridComponent id="GridComp" dataSource={ordersData} allowPaging allowSorting>
        <ColumnsDirective>
         {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}/>
         ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, Filter, Page, ExcelExport, PdfExport, Edit, ContextMenu]}/>
      </GridComponent>
      
    </div>
  )
}

export default Orders