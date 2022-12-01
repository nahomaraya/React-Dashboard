import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Selection, Toolbar, Sort,
  Filter, Page, Edit, Inject} from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid, contextMenuItems } from '../data/dummy';
import { Header } from '../components';
 


const Employees = () => {
  return (
    <div className='m-2 p-2 bg-white rounded-3xl'>
      <Header category="Page" title="Customers"/>
      <GridComponent dataSource={customersData} allowPaging allowSorting  enableHover={false} toolbar={['Delete', 'Add', 'Edit']} editSettings= {{ allowDeleting: true, allowEditing: true, allowAdding: true }} selectionSettings={{ persistSelection: true }}>
        <ColumnsDirective>
         {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}/>
         ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Edit, Filter, Selection, Sort]}/>
      </GridComponent>
      
    </div>
  )
}

export default Employees