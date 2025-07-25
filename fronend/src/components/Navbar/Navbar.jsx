import React, { useEffect } from 'react'
import { NavbarMenu, NavContact_us} from '../../mockData/data'
import logo from '../../assets/3d.jpeg'
import { MdMenu } from 'react-icons/md';
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
      const handleAnchorClick = (e) => {
        const anchor = e.target.closest('a[href^="#"]');
        if (anchor) {
          const id = anchor.getAttribute('href').replace('#', '');
          const el = document.getElementById(id);
          if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setOpen(false);
          }
        }
      };
      document.addEventListener('click', handleAnchorClick);
      return () => document.removeEventListener('click', handleAnchorClick);
    }, []);

    return (
  <>  
    <nav className='fixed w-full top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md shadow-lg'>
        <div className='flex justify-between items-center px-3 sm:px-5 h-20 py-5 w-full'>
            {/* logo */}
            <div className='text-2xl flex items-center gap-1 font-bold py-6'>
                <a href="#home" className='flex hover:scale-105 duration-200'>
                    <img src={logo} alt="BrandDo" className="w-10 h-10 rounded-full object-cover shadow-xl shadow-[var(--color-primary)]"/>
                    <p className='text-shadow-lg py-1 text-white'>BrandDo</p>
                    <p className='text-[var(--color-primary)] text-shadow-lg py-1'>Creative</p>
                </a>
            </div>
            {/* menu */}
            <div className='hidden md:block'>
                <ul className='flex items-center gap-6 text-white py-1'>
                    {
                        NavbarMenu.map((item) => {
                            return (
                                <li key={item.id} className='text-shadow-lg '>
                                    <a href={item.link} className='inline-block py-1 px-3 font-semibold duration-200 hover:scale-115 hover:text-[var(--color-primary)]'>{item.title}</a>
                                </li>
                            )
                        })
                    }
                    <li key={NavContact_us.id} className='text-shadow-lg py-1 hover:scale-105 duration-200'>
                        <a href={NavContact_us.link} className='bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-[var(--color-secondary)] hover:text-[var(--color-primary)] py-2 px-4 rounded-xl font-semibold text-shadow-lg duration-200'>{NavContact_us.title}</a>
                    </li>
                </ul>
            </div>
            {/* mobile hamburger menu*/}
            <div className='md:hidden hover:scale-105' onClick={() =>
                setOpen(!open)
            }>
                    <MdMenu className='text-4xl' color='white'/>
            </div>
        </div>
    </nav>
    {/*Mobile menu section*/}
    <ResponsiveMenu open={open} setOpen={setOpen}/>
  </>
);
}

export default Navbar