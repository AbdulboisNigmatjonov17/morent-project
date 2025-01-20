import Logo from '../logo/logo'

import TuneTwoToneIcon from '@mui/icons-material/TuneTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';

const Navbar = () => {
  return (
    <>
      <nav className="w-full h-[10vh] flex items-center">
        <div className="leftSide flex gap-20 items-center max-w-[70%]">
          <Logo />
          <form className='border-[#c1c1c1] border-[1px] rounded-xl text-[20px] gap-20 px-4 py-2 max-w-screen-sm flex justify-between'>
            <div className='flex gap-5'>
              <label htmlFor="search">
                <SearchTwoToneIcon fontSize='large' className='cursor-pointer' />
              </label>
              <input type="text" id='search' placeholder='Search something here' className='focus:outline-none ' />
            </div>
            <label htmlFor="search">
              <TuneTwoToneIcon fontSize='large' className='cursor-pointer' />
            </label>
          </form>
        </div>
        <div className='rightSide'>
          <div className="icon rounded-full border-[2px] p-1">
            <SettingsTwoToneIcon fontSize='large' className='rounded-full'/>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar