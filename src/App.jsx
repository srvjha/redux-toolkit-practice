import React,{useEffect} from 'react';
import products from './products.json';
import { useSelector,useDispatch } from 'react-redux';
import { addToCart, removeFromCart,totalCart } from './redux/slices/cartSlice';

function App() {
   const cart = useSelector((s=>s.cart));
   console.log(cart);
    const dispatch = useDispatch();
    
    
  return (
    <>
    <div>

      {/* Navbar */}
      <div className='bg-gray-100 p-2 h-24'>
        <div className="flex flex-row mt-5 ">
        <div className="text-xl font-bold ml-10 w-[400px] text-orange-600">Ecommerce App</div>
        <div className="flex flex-row"> 
          <div className="ml-[1100px] flex flex-row text-xl">   
        <div className=" cursor-pointer">Profile</div>
        <div className="ml-8 flex flex-row">
          
          <div className=" cursor-pointer">Cart</div>
          <div className="-mt-5 flex bg-black text-white h-8 rounded-full w-8 p-1 justify-center items-center ">
            <div>{cart.totalCart}</div>
          </div>
        </div>
        </div>  
        </div>
      </div>
      </div>

      {/* Main */}
      <h1 className=" text-2xl font-bold mt-5 ml-7">Products</h1>
      <div className="bg-gray-300 mt-5">
       {/* Product List */}
       <div className=' grid grid-cols-4 gap-4'>
       {products.products.map((product) => (
        
          <div key={product.id} className="flex flex-row space-x-10 p-5">
          <div className="bg-white rounded-md p-5 w-64 h-[340px]">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROxNeobSXYoNRS0Q05773BHuOcK_ilTrcdg&s" alt={product.title} className="w-32 h-32 ml-10"/>
            <div className="text-sm font-semibold  text-center overflow-hidden h-8 " >{product.title}</div>
            <div className="text-sm font-medium">₹{product.price}</div>
            <div className="text-sm font-semibold overflow-hidden mt-2 h-16">{product.description}</div>
            <div className="bg-black text-white rounded-md p-2 mt-3 w-full">
              <div className='space-x-12 flex flex-row justify-center items-center'>
              <button className='text-2xl' onClick={()=>dispatch(removeFromCart(product.id))}>-</button>
              <span className='text-xl'>{cart.cartItems[product.id] || 0}</span>
              <button className='text-2xl' onClick={()=>dispatch(addToCart(product.id))}>+</button>
              </div>
            </div>
          </div>
          </div>
         

        
       ))}
        </div>
      </div>


    </div>
    </>
  )
}

export default App
