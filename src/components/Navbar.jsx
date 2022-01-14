import React, {useState, useEffect} from 'react'
import {Button, Menu, Typography, Avatar} from 'antd';
import { NavLink } from 'react-router-dom';
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons/lib/icons';
import icon from '../images/cryptocurrency.png';

const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState(true)
    const [screenSize, setScreenSize] = useState(null)

    useEffect(()=>{
        const handleResize = ()=> setScreenSize(window.innerWidth)
        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)

    },[])

    useEffect(()=>{
        if( screenSize < 768) setActiveMenu(false)
        else setActiveMenu(true)
    },[screenSize])

    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size='large'/>
                <Typography.Title level={2} className='logo'>
                    <NavLink to={'/'}>Cryptoverse</NavLink>
                </Typography.Title>
                <Button className='menu-control-container' onClick={()=>setActiveMenu(prev=>!prev)}>
                    <MenuOutlined/>
                </Button>
            </div>
            {activeMenu &&
            <Menu theme='dark'>
                <Menu.Item key='home' icon={<HomeOutlined/>} >
                    <NavLink to={'/'}>Home</NavLink>
                </Menu.Item>
                <Menu.Item key='cryptocurrencies' icon={<FundOutlined/>} >
                    <NavLink to={'/cryptocurrencies'}>Cryptocurrencies</NavLink>
                </Menu.Item>
                <Menu.Item key='news' icon={<BulbOutlined/>} >
                    <NavLink to={'/news'}>News</NavLink>
                </Menu.Item>
            </Menu>
            }
        </div>
    )
}

export default Navbar
