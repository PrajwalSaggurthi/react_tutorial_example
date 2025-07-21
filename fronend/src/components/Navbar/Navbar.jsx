import React from 'react'
import { NavbarMenu, NavContact_us} from '../../mockData/data'
import logo from '../../assets/logo.png'
import { MdMenu } from 'react-icons/md';
import ResponsiveMenu from './ResponsiveMenu';



const Navbar = () => {
    const [open, setOpen] = React.useState(false);
  return (
  <>  
    <nav>
        <div className='container flex justify-between items-center py-6'>
            {/* logo */}
            <div className='text-2xl flex items-center gap-1 font-bold py-6'>
                <a href="/" className='flex hover:scale-105 duration-200'>
                    <img src={logo} alt="BrandDo" className="w-10 h-10 rounded-full object-cover" />
                    <p className='text-shadow-lg py-1'>BrandDo</p>
                    <p className='text-[var(--color-primary)] text-shadow-lg py-1'>Creative</p>
                </a>
            </div>
            {/* menu */}
            <div className='hidden md:block'>
                <ul className='flex item-center gap-6 text-[var(--color-secondary)] py-1'>
                    {
                        NavbarMenu.map((item) => {
                            return (
                                <li key={item.id} className='text-shadow-lg'>
                                    <a href={item.link} className='inline-block py-1 px-3 hover:text-[var(--color-highlight)] font-semibold duration-200'>{item.title}</a>
                                </li>
                            )
                        })
                    }
                    <li key={NavContact_us.id} className='text-shadow-lg py-1 hover:scale-105 duration-200'>
                        <a href={NavContact_us.link} className='bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-[var(--color-highlight)] hover:text-[var(--color-primary)] py-2 px-4 rounded-full font-semibold text-shadow-lg duration-200'>{NavContact_us.title}</a>
                    </li>
                    
                </ul>
            </div>
            
            {/* mobile hamburger menu*/}

            <div className='md:hidden hover:scale-105' onClick={() =>
                setOpen(!open)
            }>
                    <MdMenu className='text-4xl'/>
            </div>
        </div>
    </nav>

    {/*Mobile menu section*/}
    <ResponsiveMenu open={open}/>
  </>
);
}

export default Navbar