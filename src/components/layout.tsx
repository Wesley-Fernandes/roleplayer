
import Navbar from './Navbar';
import { Toaster } from 'sonner'

interface Props{
    children: React.ReactNode;
}
export default function Layout({children}:Props) {
  return (
    <main className='bg-black'>
        <Navbar/>
        <Toaster />
        {children}
    </main>
  )
}
