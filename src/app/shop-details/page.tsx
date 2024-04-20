import ShopDetailsMain from '@/components/shop-details/ShopDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';


const ShopMain = () => {
    const id = 1
    
    return (
        <>
        <Wrapper>
            <main>
               <ShopDetailsMain id={id}/>
            </main>
        </Wrapper>
        </>
    );
};

export default ShopMain;