import { useState, useEffect } from 'react';
import product1 from './images/product-1.jpg'
import product2 from './images/product-2.jpg'
import product3 from './images/product-3.jpg'
import product4 from './images/product-4.jpg'
import Nav from './nav'

function App() {
    const [clickImg, setClickImg] = useState(product1)

    const [val, setVal] = useState(1)
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(150)

    const handleIncrease = () => {
        setVal(val + 1);
        setPrice(val * price)
        console.log(val)
        console.log(price)
        console.log(val * price)
        // setQuantity(quantity + 1)
        // handlePrice(quantity)
    }

    const handlePrice = () => {
        setPrice(quantity * price)
        console.log(quantity)
        console.log(price)
    }

    const handleDecrease = () => {
        if (val > 0) {
            setVal(val - 1);
            setPrice(val * price)
        }
    }


    return (
        <main>
            <Nav />
            <div className="grid lg:grid-cols-2 py-4 lg:py-10">
                <div className="lg:w-2/4 mx-auto p-8 lg:p-0">
                    <img src={clickImg} className="rounded-xl " alt="" />
                    <div className="flex flex-wrap flex-row justify-between mt-4">
                        <img src={product1} onClick={() => setClickImg(product1)} className="w-20 mb-3 rounded-xl cursor-pointer" alt="" />
                        <img src={product2} onClick={() => setClickImg(product2)} className="w-20 mb-3 rounded-xl cursor-pointer" alt="" />
                        <img src={product3} onClick={() => setClickImg(product3)} className="w-20 mb-3 rounded-xl cursor-pointer" alt="" />
                        <img src={product4} onClick={() => setClickImg(product4)} className="w-20 mb-3 rounded-xl cursor-pointer" alt="" />
                    </div>
                </div>

                <div className="my-4 px-6 lg:w-3/4 mt-8 lg:mt-0">
                    <h1 className="text-lg uppercase tracking-widest text-red-500">sneaker company</h1>
                    <h1 className="text-3xl lg:text-6xl capitalize font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">fall limited edition sneakers</h1>
                    <p className="py-6 text-lg">These low-profile sneakers are your perfect casula wear companion. featuring a durable rubber outer sole. They will withstand everything the weather can offer .</p>

                    <div className="">
                        <div className="flex flex-row items-center">
                            <h1 className="text-4xl font-bold">${price}</h1>
                            <h1 className="text-lg ml-4 bg-red-200 p-1 rounded-md">-50%</h1>
                        </div>
                        <h1 className="text-xl text-gray-500 line-through font-bold">$300.00</h1>
                    </div>

                    <div className="flex flex-wrap flex-row justify-between pt-8 items-center">
                        <div className="w-2/6 mb-3 lg:w-1/2 py-1 flex flex-wrap flex-row justify-around mr-2 rounded-xl bg-gray-200 shadow-md">
                            <button className="text-2xl lg:text-4xl font-bold text-red-500" onClick={handleDecrease}>-</button>
                            <h1 className="text-xl lg:text-3xl font-bold">{val}</h1>
                            <button className="text-2xl lg:text-4xl font-bold text-red-500" onClick={handleIncrease}>+</button>
                        </div>
                        <button className="w-2/6 mb-3 rounded-xl py-2 bg-blue-600 text-gray-50 text-lg lg:text-2xl filter shadow-xl">Add to cart</button>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default App;
