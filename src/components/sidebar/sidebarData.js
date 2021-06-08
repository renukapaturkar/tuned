import React from 'react';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';

export const sidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Liked Videos ',
        path: '/likedvideos',
        icon: <AiIcons.AiFillLike/>,
        cName: 'nav-text'
    },
    {
        title: 'Watch Later',
        path: '/watchlater',
        icon: <MdIcons.MdWatchLater/>,
        cName: 'nav-text'
    },
    {
        title: 'Playlists',
        path: '/allplaylists',
        icon: <MdIcons.MdPlaylistPlay/>,
        cName: 'nav-text'
    },
    {
        title: 'History',
        path: '/history',
        icon: <AiIcons.AiOutlineHistory/>,
        cName: 'nav-text'
    },
    
]