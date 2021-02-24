import React from 'react';
import Flip from 'react-reveal/Flip';

const Offers = () => {
    return (
        <div>
            <div className="offers">
                <Flip bottom>

                    <div className="container" style={{maxWidth: '1400px', width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <div>
                        <img style={{ width: '300px', height: '200px'}} src="https://www.myistria.com/UserDocsImages/app/objekti/795/slika_hd/19082020034916_Villas-near-Rovinj-Villa-Prestige-2.jpg?preset=carousel-1-webp" alt="">
                        </img>
                        <p style={{fontWeight: 'bold'}}>Marina Villa</p>
                        </div>
                        <div>
                        <img style={{ width: '300px', height: '200px'}} src="https://www.engelvoelkers.com/images/2a17fd6a-5ab1-4dab-bc30-a78fa4f32a36/elegant-villa-with-private-pool-and-garden" alt="">
                        </img>
                        <p style={{fontWeight: 'bold'}}>Victoria Villa</p>
                        </div>
                        <div>
                        <img style={{ width: '300px', height: '200px'}} src="https://www.myistria.com/UserDocsImages/app/objekti/795/slika_hd/19082020034916_Villas-near-Rovinj-Villa-Prestige-2.jpg?preset=carousel-1-webp" alt="">
                        </img>
                        <p style={{fontWeight: 'bold'}}>Casablanco Villa</p>
                        </div>
                        <div>
                        <img style={{ width: '300px', height: '200px'}} src="https://sun9-14.userapi.com/impf/c622621/v622621622/16293/mrm9ySrdTVA.jpg?size=604x396&quality=96&sign=018dd68e39fd7ac402ea2cb84919478f&type=album" alt="">
                        </img>
                        <p style={{fontWeight: 'bold'}}>La maison Villa</p>
                        </div>
                    </div>
                </Flip>
            </div>
        </div>
    );
};

export default Offers;