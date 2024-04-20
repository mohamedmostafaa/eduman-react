import { PriceFilterCategory } from '@/data/price-filter-data';
import useGlobalContext from '@/hooks/use-context';
import React, { useState } from 'react';

const ShopPrice = () => {
    const { setInputValue,setFilterType } = useGlobalContext();
    const [isActiveB, setActiveB] = useState(false);
    const handleToggleB = () => {
        setActiveB(!isActiveB);
    };
    const handleSelect = (item:number)=>{
       
        if(item === 0){
            const formate = item.toString()
            setInputValue(formate)
            setFilterType("Free")
        }else{
            const formate = item.toString()
            setInputValue(formate)
            setFilterType("Paid")
        }
      }


      const handleSelectAll = (item:string) =>{
        setInputValue("")
      }

    return (
        <div className="course-sidebar-widget mb-20">
                <div className={`course-sidebar-info ${isActiveB ? "danger" : "content-hidden"}`}>
                    <h3 className="drop-btn" onClick={handleToggleB}>Price</h3>
                    <ul>
                    <li onClick={()=>handleSelectAll("")}>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="radio" id="e-85" name="price"/>
                            <label className="edu-check-label" htmlFor="e-85">All</label>
                        </div>
                    </li>
                    {
                    PriceFilterCategory.map((item)=>(
                        <li onClick={()=>handleSelect(item.priceAmount)} key={item.id}>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="radio" id="e-85" name="price"/>
                            <label className="edu-check-label" htmlFor="e-85">{item.price}</label>
                        </div>
                    </li>
                    ))
                    }
                   
                    </ul>
                </div>
            </div>
    );
};

export default ShopPrice;