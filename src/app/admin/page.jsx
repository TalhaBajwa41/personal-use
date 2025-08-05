import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/admin/login');
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome, {session.user.name}</h1>
      <p>This is a protected admin dashboard.</p>
    </div>
  );
}
