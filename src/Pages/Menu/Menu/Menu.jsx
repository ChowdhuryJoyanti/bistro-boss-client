import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import menuImg from '../../../assets/menu/dessert-bg.jpeg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu//soup-bg.jpg'
import UseMenu from '../../../Hooks/UseMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = UseMenu();
   
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro  Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            {/* Main category */}
            <SectionTitle
                subHeading="Don't Miss"
                heading="Today's Offer"
            ></SectionTitle>
            {/* Offered menu category */}
            <MenuCategory items={offered} ></MenuCategory>
            {/* Desserts category */}
        <MenuCategory 
            items={desserts}
            title= "dessert"
            img={dessertImg}
        ></MenuCategory>
        <MenuCategory 
            items={pizza}
            title= "pizza"
            img={pizzaImg}
        ></MenuCategory>
  
        <MenuCategory 
            items={salad}
            title= "salad"
            img={saladImg}
        ></MenuCategory>
        <MenuCategory 
            items={soup}
            title= "soup"
            img={soupImg}
        ></MenuCategory>
        </div>
    );
};

export default Menu;