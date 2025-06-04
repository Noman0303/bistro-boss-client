import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useCart from '../../../Hooks/useCart';
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const Cart = () => {
    const [cart,refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });

                        }
                    })
            }
        });
    }
    return (
        <div>
            <SectionTitle
                subHeading={"---My Cart---"}
                heading={"WANNA ADD MORE?"}
            ></SectionTitle>
            <div className='bg-gray-50 mx-25'>
                <div className='p-8 my-10' >
                    <div className='flex justify-between'>
                        <h2 className="text-xl lg:text-2xl xl:text-3xl uppercase">Total Orders: {cart.length}</h2>
                        <h2 className="text-xl lg:text-2xl xl:text-3xl uppercase">Total price: ${totalPrice}</h2>
                        <button className='btn bg-[#D1A054] text-white'>PAY</button>
                    </div>

                    <div className='overflow-x-auto mt-6 '>
                        <table className='table '>
                            <thead className='bg-[#D1A054] text-white '>
                                <th></th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </thead>
                            <tbody >
                                {
                                    cart.map((item, index) =>
                                        <tr
                                            key={item._id}
                                        >
                                            <td className='font-bold text-lg'>{index + 1}</td>
                                            <td><img src={item.image}
                                                className=" h-18 w-18 rounded-xl border shadow-xl"
                                                alt="" /></td>
                                            <td >{item.name}</td>
                                            <td>${item.price}</td>
                                            <td><button
                                                onClick={() => handleDelete(item._id)}
                                                className='bg-[#B91C1C] text-white p-3 rounded-lg btn'><RiDeleteBinLine /></button></td>
                                        </tr>


                                    )
                                }

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;