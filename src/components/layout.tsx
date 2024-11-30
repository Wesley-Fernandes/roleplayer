
import Navbar from './Navbar';


interface Props{
    children: React.ReactNode;
}
export default function Layout({children}:Props) {
  return (
    <main className='bg-black'>
        <Navbar/>
        {children}
    </main>
  )
}
