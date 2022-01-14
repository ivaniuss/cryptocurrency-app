import React from 'react'
import {Button, Menu, Typography, Avatar} from 'antd';
import { NavLink } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons/lib/icons';
import icon from '../images/cryptocurrency.png';

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size='large'/>
                <Typography.Title level={2} className='logo'>
                    <NavLink to={'/'}>Cryptoverse</NavLink>
                </Typography.Title>
            </div>
            <Menu theme='dark'>
                <Menu.Item key='home' icon={<HomeOutlined/>} >
                    <NavLink to={'/'}>Home</NavLink>
                </Menu.Item>
                <Menu.Item key='cryptocurrencies' icon={<HomeOutlined/>} >
                    <NavLink to={'/cryptocurrencies'}>Cryptocurrencies</NavLink>
                </Menu.Item>
                <Menu.Item key='exchanges' icon={<HomeOutlined/>} >
                    <NavLink to={'/exchanges'}>Exchanges</NavLink>
                </Menu.Item>
                <Menu.Item key='news' icon={<HomeOutlined/>} >
                    <NavLink to={'/news'}>News</NavLink>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar
