import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { List, SimpleList, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';
import {
    Show,
    ShowButton,
    SimpleShowLayout,
    RichTextField,
    Edit,
    Create,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextInput,
    Filter,
} from 'react-admin';


export const SlideList = (props) => (
    <List {...props}>
        <Datagrid>
    
            <TextField source="id"/>
            <TextField source="_id"/>
            <TextField source="title"/>
            <EditButton />
                <ShowButton />
  
        </Datagrid>
    </List>
  );
  
 

export const SlideFilter = props => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput
            label="User"
            source="_id"
            reference="users"
            allowEmpty
        >
            <SelectInput optionText="question" />
        </ReferenceInput>
    </Filter>
);



export const SlideEdit = props => (
    <Edit {...props}>
        <SimpleForm>          
            <TextInput source="id" />
            <TextInput source="title" />
     
        </SimpleForm>
    </Edit>
);


export const SlideCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />  
        </SimpleForm>
    </Create>
);

export const SlideShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
        <TextField source="id" />
            <TextField source="_id" />
            <TextField source="title" />
       
           
        </SimpleShowLayout>
    </Show>
);
