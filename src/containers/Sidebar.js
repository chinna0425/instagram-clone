import React from 'react'
import './Sidebar.css'
import SidebarOptions from'./SidebarOptions'
import Post from './Post';
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import LocalPostOfficeRoundedIcon from '@mui/icons-material/LocalPostOfficeRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DehazeIcon from '@mui/icons-material/Dehaze';

function Sidebar() {
  return (
    <div className='sidebar'>
        <InstagramIcon className="sidebar__InstagramIcon"/> 
        <SidebarOptions  Icon={HomeIcon} text="Home"/>
        <SidebarOptions  Icon={SearchIcon} text="Search"/>
        <SidebarOptions  Icon={ExploreIcon } text="Explore"/>
        <SidebarOptions  Icon={MovieCreationIcon} text="Reels"/>
        <SidebarOptions  Icon={LocalPostOfficeRoundedIcon} text="Messages"/>
        <SidebarOptions  Icon={FavoriteBorderIcon} text="Notificatons"/>
        <SidebarOptions  Icon={AddBoxIcon} text="Create"/>
        <SidebarOptions  Icon={AccountCircleIcon} text="Profile"/>
        <div className="button">
        <SidebarOptions  Icon={DehazeIcon} text="More"/>
        </div>
    </div>
  )
}

export default Sidebar;