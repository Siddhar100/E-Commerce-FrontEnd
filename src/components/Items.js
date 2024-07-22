import React from "react";
import Item from "./Item.js";
import ItemsStyle from './Items.module.css'

const Items = () => {
 const  allItems = [
        {uri:'none',heading:'IPhone',description:'This is Iphone.',
            price:'21000'
        },
        {uri:'none',heading:'IPad',description:'This is Ipad.',
            price:'12000'
        },
        {uri:'none',heading:'AC',description:'This is Samsung Ac.',
            price:'11000'
        },
        {uri:'none',heading:'Fridge',description:'This is Fridge',
            price:'15000'
        },
        {uri:'none',heading:'Iphoe',description:'welcome',
            price:'10000'
        },
        {uri:'none',heading:'Iphoe',description:'welcome',
            price:'10000'
        },
        {uri:'none',heading:'Iphoe',description:'welcome',
            price:'10000'
        },
        {uri:'none',heading:'Iphoe',description:'welcome',
            price:'10000'
        },
    ]
  return (
    <div className={ItemsStyle.ItemStyle}>
      {allItems.map((item, index) => {
          return <Item key={item.index} uri ={item.heading} />;
        })}
      
    </div>
  );
};
export default Items;
