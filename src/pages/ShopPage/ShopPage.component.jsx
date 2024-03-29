import React ,{useState} from 'react'
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview.component';
import SHOP_DATA from './shop.data';

const ShopPage = () =>{

    const [collections] = useState(SHOP_DATA)

    return (
        <div className="shop-page">
           {
               collections.map(({id, ...otherCollectionProps}) =>{
                return <CollectionPreview key={id} {...otherCollectionProps} />
               })
           }
        </div>
    )
}

export default ShopPage;