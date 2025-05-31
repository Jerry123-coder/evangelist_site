import { Outlet } from 'react-router-dom';
import AdminLayout from './AdminLayout';

export default function Admin() {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
}
