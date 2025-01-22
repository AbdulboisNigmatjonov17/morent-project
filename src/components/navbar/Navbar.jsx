import Logo from '../logo/logo'

import TuneTwoToneIcon from '@mui/icons-material/TuneTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';

const Navbar = () => {

  const user = 'https://morent-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FImageprofile.a9ab6a22.png&w=64&q=75'

  return (
    <>
      <nav className="w-full h-[10vh] flex items-center justify-between bg-white px-5">
        <div className="leftSide flex gap-20 items-center max-w-[70%] bg-inherit">
          <Logo />
          <form className='border-[#c1c1c1] border-[1px] rounded-xl text-[20px] gap-32 px-4 py-2 max-w-screen-sm flex justify-between'>
            <div className='flex gap-5 bg-white'>
              <label htmlFor="search" className='opacity-50 hover:opacity-100'>
                <SearchTwoToneIcon fontSize='large' className='cursor-pointer bg-white ' />
              </label>
              <input type="text" id='search' placeholder='Search something here' className=' focus:outline-none bg-white' />
            </div>
            <label htmlFor="search" className='opacity-50 hover:opacity-100'>
              <TuneTwoToneIcon fontSize='large' className='cursor-pointer bg-white' />
            </label>
          </form>
        </div>
        <div className='rightSide max-w-[30%] flex justify-start bg-white'>
          <div className=' flex w-full items-center gap-5 bg-inherit'>
            <div className="icon rounded-full border-[#c1c1c1] border-[1px] p-2">
              <SettingsTwoToneIcon className='rounded-full cursor-pointer' />
            </div>
            <div className="icon rounded-full border-[#c1c1c1] border-[1px] p-2">
              <NotificationsSharpIcon className='rounded-full cursor-pointer' />
            </div>
            <div className="icon rounded-full border-[#c1c1c1] border-[1px] p-2">
              <FavoriteSharpIcon className='rounded-full cursor-pointer' />
            </div>
            <div className="icon rounded-full cursor-pointer flex justify-center">
              <img src={user} width={60} alt="uer-img" className='rounded-full transition ease-in-out delay-150 hover:scale-125' />
            </div>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar