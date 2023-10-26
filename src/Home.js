//import { event } from "jquery";
import { Link } from 'react-router-dom';
import { useState } from "react";
function Home() {
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
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/w/3/-original-imaghxcpnf8aay8h.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/b/z/-original-imaghxcpwuhbghgh.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/a/q/n/-original-imagh2gw4zqxyzst.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/i/7/-original-imaguypzzhbzm5an.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/f/h/-original-imaguypztg4ddpes.jpeg?q=70'
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
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/w/3/-original-imaghxcpnf8aay8h.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/b/z/-original-imaghxcpwuhbghgh.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/a/q/n/-original-imagh2gw4zqxyzst.jpeg?q=70'
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
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/w/3/-original-imaghxcpnf8aay8h.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/b/z/-original-imaghxcpwuhbghgh.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/a/q/n/-original-imagh2gw4zqxyzst.jpeg?q=70'
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
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/w/3/-original-imaghxcpnf8aay8h.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/b/z/-original-imaghxcpwuhbghgh.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/a/q/n/-original-imagh2gw4zqxyzst.jpeg?q=70'
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
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/w/3/-original-imaghxcpnf8aay8h.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/b/z/-original-imaghxcpwuhbghgh.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/a/q/n/-original-imagh2gw4zqxyzst.jpeg?q=70'
            ]
        },
    ]
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredproducts,setFilteredproducts] = useState(products);
    const searchProducts = (value) => {
        setSearchQuery(value);
        console.log(searchQuery);
        setFilteredproducts(products.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase())));


    };
    
    
    return(
        <div className = "container">
            <div className = "row my-4">
                <div className = "col-sm-6 mx-auto">
                <div className="mb-3">
                    <input type="text" value={searchQuery} onChange={(event) => searchProducts(event.target.value)} className="form-control" id="searchQuery" placeholder="search for mobile here.."/>
                </div>
                </div>
                </div>
            {filteredproducts.map(product => (
                <div className = "row my-3 py-2 border-bottom" key={products.id}>
                <div className = "col-sm-3 text-center">
                    <img className ="img-fluid" width="150px" src = {product.imgSrc} alt="product image"></img>
                </div>
                <div className = "col-sm-6">
                    <h3><Link to = {`productDetails/${product.id}/Productdescription?name=${product.name}&price=${product.price}`}>{product.name}</Link></h3>
                    <p>{product.rating}</p>
                    <ul>
                        {product.specifications.map(specification =>(
                            <li key={specification}>{specification}</li>

                        ))}
                    </ul>

                </div>
                <div className = "col-sm-3">
                    <h3>{product.price}</h3>
                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
            ))}
            
        </div>
    )
};
export default Home;




                
          