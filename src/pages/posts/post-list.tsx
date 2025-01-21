import { 
    Datagrid, 
    List, 
    ReferenceField, 
    TextField, 
    SimpleList, 
    FunctionField ,
    useRecordContext,
    EditButton,
    TextInput,
    ReferenceInput // to reference user db
} from 'react-admin';

// const PostPanel =() => {
//     const record = useRecordContext();
//     return <div>{record?.body}</div>
// }

const PostList = () => {
    const postFilters = [
        <TextInput key="search" source="q" label="Search" alwaysOn />, 
        <ReferenceInput key="user" source="userId" label="User" reference='users' />, 
    ];


    return (
        <List filters={postFilters}>
            <Datagrid>
                {/* expand={<PostPanel />}
                sx={{
                    '.RaDatagrid-headerCell': {
                        padding: "16px",
                    },
                }} */}
                {/* <SimpleList 
                    primaryText={(record) => record.title} 
                    secondaryText={(record) => record.body}
                /> */}
                <TextField source="id" />
                <TextField source="title" label="Post Title"/>
                <FunctionField 
                    label="Excerpt" 
                    render={(record) => `${record.body.substring(0, 50)}...`}
                />
                <ReferenceField source="userId" reference="users" />
                <EditButton />
            </Datagrid>
        </List>
    )
};

export default PostList;