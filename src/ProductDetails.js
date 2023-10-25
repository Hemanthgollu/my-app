import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
function ProductDetails() {
    const products = [
        {
            id : 1,
            name : 'APPLE iPhone 14 (Blue, 128 GB)',
            price : 5000,
            imgSrc : "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70",
            rating : 4.6,
            specifications : [
                '128 GB ROM',
                '15.49 cm (6.1 inch) Super Retina XDR Display',
                'A15 Bionic Chip, 6 Core Processor Processor'
            ],
            thumbnails : [
                {
                    type : 'image',
                    src : 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/w/3/-original-imaghxcpnf8aay8h.jpeg?q=70'
                },
                {
                    type : 'vedio',
                    src: 'https://youtu.be/oAs1oG2K5c4'
                },
                {
                    type : 'image',
                    src:'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/b/z/-original-imaghxcpwuhbghgh.jpeg?q=70'
                },
            ]
        },
        {
            id : 2,
            name : 'POCO X5 Pro 5G (Horizon Blue, 256 GB)',
            price : 2,
            imgSrc : "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/v/2/-original-imagmkjfjwtzhaag.jpeg?q=70",
            rating : 4.7,
            specifications : [
                '128 GB ROM',
                '15.49 cm (6.1 inch) Super Retina XDR Display',
                'A15 Bionic Chip, 6 Core Processor Processor'
            ],
            thumbnails : [
                {
                    type : 'image',
                    src : 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/w/3/-original-imaghxcpnf8aay8h.jpeg?q=70'
                },
                {
                    type : 'vedio',
                    src: 'https://youtu.be/oAs1oG2K5c4'
                },
                {
                    type : 'image',
                    src:'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/b/z/-original-imaghxcpwuhbghgh.jpeg?q=70'
                },
                
            ]
        },
        {
            id : 3,
            name : 'vivo T2 5G (Nitro Blaze, 128 GB)',
            price : 55,
            imgSrc : "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/1/h/-original-imagpfbvfu4p55n4.jpeg?q=70",
            rating : 4.8,
            specifications : [
                '128 GB ROM',
                '15.49 cm (6.1 inch) Super Retina XDR Display',
                'A15 Bionic Chip, 6 Core Processor Processor'
            ],
            thumbnails : [
                {
                    type : 'image',
                    src : 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/w/3/-original-imaghxcpnf8aay8h.jpeg?q=70'
                },
                {
                    type : 'vedio',
                    src: 'https://youtu.be/oAs1oG2K5c4'
                },
                {
                    type : 'image',
                    src:'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/b/z/-original-imaghxcpwuhbghgh.jpeg?q=70'
                },
            ]
        },
        {
            id : 4,
            name : 'Google Pixel 7a (Sea, 128 GB)',
            price : 88,
            imgSrc : "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/b/d/-original-imagpgx48f4szdvf.jpeg?q=70",
            rating : 4.9,
            specifications : [
                '128 GB ROM',
                '15.49 cm (6.1 inch) Super Retina XDR Display',
                'A15 Bionic Chip, 6 Core Processor Processor'
            ],
            thumbnails : [
                {
                    type : 'image',
                    src : 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/w/3/-original-imaghxcpnf8aay8h.jpeg?q=70'
                },
                {
                    type : 'vedio',
                    src: 'https://youtu.be/oAs1oG2K5c4'
                },
                {
                    type : 'image',
                    src:'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/b/z/-original-imaghxcpwuhbghgh.jpeg?q=70'
                },
            ]
        },
        {
            id : 5,
            name : 'REDMI Note 12 Pro 5G (Onyx Black, 128 GB)',
            price : 3,
            imgSrc : "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/r/f/-original-imaghkvuhzwge3za.jpeg?q=70",
            rating : 4.6,
            specifications : [
                '128 GB ROM',
                '15.49 cm (6.1 inch) Super Retina XDR Display',
                'A15 Bionic Chip, 6 Core Processor Processor'
            ],
            thumbnails : [
                {
                    type : 'image',
                    src : 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/w/3/-original-imaghxcpnf8aay8h.jpeg?q=70'
                },
                {
                    type : 'vedio',
                    src: 'https://youtu.be/oAs1oG2K5c4'
                },
                {
                    type : 'image',
                    src:'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/b/z/-original-imaghxcpwuhbghgh.jpeg?q=70'
                },
            ]
        },
    ]
    const { productId } = useParams()
    const[SearchParams,setSearchparams] = useSearchParams();
    const[currentImgSrc,setCurrentImgSrc]= useState('');
    const [filteredproduct, setFilteredproducts] = useState({});
    useEffect(() => {
        const _filteredproduct = products.find(product=>product.id == productId);
        setFilteredproducts(_filteredproduct);
        setCurrentImgSrc(_filteredproduct.thumbnails[0]);
        console.log(SearchParams.get('name'),SearchParams.get('price'));
    }, []);
    return(
        <div className="container my-2">
            <div className="row">
                <div className="col-sm-4">
                    <div className ="row">
                        <div className = "col-sm-3">
                            {filteredproduct.thumbnails?.map(obj => (
                                <div className = "border p-1 my-2">
                                    <img src={obj.src} onClick={() => setCurrentImgSrc(obj)}/>
                                   
                                </div>
                            )) }
                        </div>
                        <div className = "col-sm-9">
                        {obj.type === 'image' ? (
                            <img src = {obj.src} width="60px" height="90px"/>
                        ) : (
                            <vedio>
                                <source src={currentImgSrc.src}></source>
                            </vedio>
                        )}
                        </div> 
                    </div>
                </div>
                <div className="col-sm-8">
                    <h3>{filteredproduct.name}</h3>
                    <h4>{filteredproduct.price}</h4>
                    <h4>{filteredproduct.rating}</h4>
                    <ul>
                        {filteredproduct.specifications?.map(specification =>(
                            <li key={specification}>{specification}</li>

                        ))}
                    </ul>


                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
           
        </div>
    )
};

export default ProductDetails;