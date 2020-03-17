import React from 'react';
import { fetchUtils, Admin, Resource, EditGuesser, List, Datagrid, TextField,  ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider'
import { QaList, QaEdit, QaCreate, QaShow } from './qandas';
import { SlideList, SlideEdit, SlideCreate, SlideShow } from './slides';
import Dashboard from './Dashboard'
import {dataProvider} from './dataProvider'


const App = () => 
<Admin dataProvider={dataProvider} authProvider={authProvider} dashboard={Dashboard}>   
<Resource name="faq" list={QaList} edit={QaEdit} create={QaCreate} show={QaShow} />
<Resource name="slides" list ={SlideList} edit={SlideEdit} create={SlideCreate} show={SlideShow} />
</Admin>

 
export default App;



