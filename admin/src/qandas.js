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




export const QaList = (props) => (
    <List {...props}>
        <Datagrid>
    
            <TextField source="id"/>
            <TextField source="_id"/>
            <TextField source="question" />
            <TextField source="answer" />
            <EditButton />
                <ShowButton />
  
        </Datagrid>
    </List>
  );
  


 const QaTitle = ({item }) => {
    return <span>Post {item.id ? `"${item.id}"` : ''}</span>;
};



export const QaEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="question" />
            <TextInput source="answer" />
        </SimpleForm>
    </Edit>
);


export const QaCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="Question" />
            <TextInput multiline source="Answer" />
        </SimpleForm>
    </Create>
);

export const QaShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="_id" />
            <TextField source="question" />
            <RichTextField source="answer" />          
        </SimpleShowLayout>
    </Show>
);
