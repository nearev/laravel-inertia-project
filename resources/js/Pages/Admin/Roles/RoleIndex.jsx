import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import Table from '@/Components/Table';
import TableRow from '@/Components/TableRow';
import TableHeaderCell from '@/Components/TableHeaderCell';
import TableDataCell from '@/Components/TableDataCell';

export default function Dashboard({ auth, roles }) {
    return (
        <AdminLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="max-w-7xl mx-auto py-4">
                <div className='mt-6'>
                    <Table 
                    header={
                        <TableRow>
                            <TableHeaderCell>ID</TableHeaderCell>
                            <TableHeaderCell>Name</TableHeaderCell>
                            
                            <TableHeaderCell>Action</TableHeaderCell>
                        </TableRow>
                    }
                    children={
                        roles.map((role) => (
                            <TableRow className='border-b'>
                            <TableDataCell key={role.id}>{role.id}</TableDataCell>
                            <TableDataCell key={role.id}>{role.name}</TableDataCell>
                            <TableDataCell key={role.id}>Edit/Delete</TableDataCell>
                            </TableRow>
                        ))
                    }
                    />
                    
                    
                    
                </div>
            </div>
        </AdminLayout>
    );
}
