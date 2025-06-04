import React, { useContext } from 'react';

import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';


const FoodCard = ({ item }) => {
    const { user } = useAuth();
    const location = useLocation();
    const { _id, name, image, price, recipe } = item;
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart()

    const handleAddToCart = () => {
        if (user && user.email) {
            // send item to the database
            // console.log(user,food)
            const cartItem = {
                itemId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)

                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {

                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch cart to update the cart items count
                        refetch();


                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Log in"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            });
        }

    }

    return (
        <div>
            <div className='text-center bg-[#F3F3F3] relative '>
                <img src={image} className='w-full h-72 ' alt="" />
                <div className='px-10 h-60'>
                    <h3 className='md:text-3xl mt-8 mb-2'>{name}</h3>
                    <p>{recipe}</p>
                    <button
                        onClick={() => { handleAddToCart(item) }}
                        className='btn btn-outline border-0 border-b-4 mt-6 mb-8 text-xl rounded-lg uppercase text-[#BB8506] border-b-[#BB8506] hover:bg-[#111827]'>add to cart</button>
                </div>
                <p className="text-white bg-[#111827] font-semibold py-2.5 px-6 w-22 absolute top-5   right-5">${price}</p>
            </div>

        </div>
    );
};

export default FoodCard;