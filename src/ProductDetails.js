import { useEffect, useState } from "react";
import { Link, Outlet, useParams, useSearchParams } from "react-router-dom";
import Productdescription from "./Productdescription";
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
                    imgSrc : 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/w/3/-original-imaghxcpnf8aay8h.jpeg?q=70'
                },
                {
                    type : 'vedio',
                    imgSrc : 'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70',
                    vedioRef : 'https://youtu.be/RLzC55ai0eo?feature=shared'
                },
                {
                    type : 'image',
                    imgSrc :'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/b/z/-original-imaghxcpwuhbghgh.jpeg?q=70'
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
                    imgSrc : 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/y/9/g/-original-imagnfzyhh8gz8sd.jpeg?q=70'
                },
                {
                    type : 'vedio',
                    imgSrc : 'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/y/9/g/-original-imagnfzyhh8gz8sd.jpeg?q=70',
                    vedioRef : 'https://youtu.be/RLzC55ai0eo?feature=shared'
                },
                {
                    type : 'image',
                    imgSrc:'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/j/i/j/-original-imagnfzyrwm2zxzr.jpeg?q=70'
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
                    imgSrc: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/w/3/-original-imaghxcpnf8aay8h.jpeg?q=70'
                },
                {
                    type : 'vedio',
                    imgSrc : 'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70',
                    vedioRef : 'https://youtu.be/RLzC55ai0eo?feature=shared'
                },
                {
                    type : 'image',
                    imgSrc:'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/b/z/-original-imaghxcpwuhbghgh.jpeg?q=70'
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
                    imgSrc : 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/w/3/-original-imaghxcpnf8aay8h.jpeg?q=70'
                },
                {
                    type : 'vedio',
                    imgSrc : 'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70',
                    vedioRef : 'https://youtu.be/RLzC55ai0eo?feature=shared'
                },
                {
                    type : 'image',
                    imgSrc:'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/b/z/-original-imaghxcpwuhbghgh.jpeg?q=70'
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
                    imgSrc : 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/w/3/-original-imaghxcpnf8aay8h.jpeg?q=70'
                },
                {
                    type : 'vedio',
                    imgSrc : 'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70',
                    vedioRef : 'https://youtu.be/RLzC55ai0eo?feature=shared'
                },
                {
                    type : 'image',
                    imgSrc:'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/b/z/-original-imaghxcpwuhbghgh.jpeg?q=70'
                },
            ],
            description : [
                {
                    title : 'Super Retina XDR Display',
                    content : 'The iPhone 14 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 15.40 centimetres (6.06) diagonally.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/f5eb9b65a19a4a84bd00439775ae2da1_18b05ad9990_-original-imaghxcpvtta2hzs.jpeg?q=90'    
                },
                {
                    title : 'Dual-camera System',
                    content : 'Equipped with a 12 MP Main camera and an ultra wide camera, you can click beautiful pictures on this phones dual camera system. You can also capture your wild memories on the Portrait mode with Focus and Depth Control to create a memorable memory.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/d87133a412c14cf291a04c253231ff05_18b05aeb925_-original-imaghxcp9m9fmr9e.jpeg?q=90'    
                },
                {
                    title : 'Power and Battery',
                    content : 'Powered by a MagSafe wireless charging up to 15 W and Qi wireless charging up to 7.5 W, this phone has a built-in rechargeable lithium-ion battery. With a fast-charge capability where you can boost up your battery up to 50% charge in around 30 minutes with a 20 W adapter or higher (available separately). You can have up to 20 hours of video playback time, up to 16 hours of streaming, and up to 80 hours of audio playback time.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/177b68789ac1403e81989ca2a97af223_18b05aed3e5_-original-imaghxcp4ctcfwff.jpeg?q=90'    
                }
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
                                    <img src={obj.imgSrc} width= '60px' height='70px' onClick={() => setCurrentImgSrc(obj)}/>
                                   
                                </div>
                            )) }
                        </div>
                        <div className = "col-sm-9">
                        {currentImgSrc.type === 'image' ? (
                            <img src = {currentImgSrc.imgSrc} width="260px" height="260px"/>
                        ) : (
                            <vedio>
                                <source src={currentImgSrc.vedioRef}></source>
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

                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <Link className="nav-link " to ='Productdescription'>Productdesciription</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to ='Productspecifications' >Productspecifications</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to ='Productrating'>Productratings</Link>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
};

export default ProductDetails;