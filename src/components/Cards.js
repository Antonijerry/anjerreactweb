import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out AnJer Home Designs!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__item'>
                    <CardItem 
                    src='images/product9.jpg'
                    text='Responsive React App'
                    label='Website Devs'
                    path='/services'
                    />
                    <CardItem 
                    src='images/product8.jpg'
                    text='Python Development at Ease'
                    label='Data Analysis'
                    path='/services'
                    />
                </ul>


                <ul className='cards__item'>
                    <CardItem 
                    src='images/product4.jpg'
                    text='Network SetUp Engineering / Management'
                    label='Microsoft Azure'
                    path='/services'
                    />
                    <CardItem 
                    src='images/product2.jpg'
                    text='Ethical Hacking With Python'
                    label='Hacking Devs'
                    path='/services'
                    />
                    <CardItem 
                    src='images/product3.jpg'
                    text='Full Stack Game Development'
                    label='Game Room'
                    path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
