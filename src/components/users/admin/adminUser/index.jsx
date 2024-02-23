
import UserTable from './UserTable';
import { getUserAll } from '../../../../services/api';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../../../context/authContex';

function AdminDashBoard() {
    const [users, setUsers]=useState([]);
    const {jwt} = useAuthContext();
    useEffect(() => {
        const getDataTable = async () => {
            try {
                const response= await getUserAll(jwt)
                setUsers(response)
            } catch (error) {
                console.log(error)
            }
        }
        getDataTable();
    },[])

    return (
        <div>
            <UserTable users={users} token={jwt} />
        </div>
    );
}
export default AdminDashBoard;