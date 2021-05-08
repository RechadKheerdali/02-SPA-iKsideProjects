import React from 'react';
import IkGifLi from './IkGifLi.js';

const IkGifUl = props =>  {
	const iKloopList = props.iKdataArray.map( iKitem => {
        return (
            <IkGifLi
                iKsrc={iKitem.images.fixed_height_small}
                iKalt={iKitem.title}
                key={iKitem.id.toString()}
            />
        ); /*7+*/
    }); /*END iKloopList */

    return (
        <ul>
            { iKloopList }
        </ul>
    ); /*8+*/
}; /*END IkGifUl */

export default IkGifUl;