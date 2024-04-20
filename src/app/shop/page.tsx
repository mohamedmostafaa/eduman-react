import ShopMainArea from '@/components/shop/ShopMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';


const ShopMain = () => {
    return (
        <>
        <Wrapper>
            <main>
                <ShopMainArea/>
            </main>
        </Wrapper>
        </>
    );
};

export default ShopMain;