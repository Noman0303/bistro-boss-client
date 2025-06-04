import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useCart = () => {
    // Authcontext theke user nibo, jehetu amra user er agains e cart e data show korte chachhi. ar ejonno amra useAuth() hook call kore dibo (shortcut hook call korchi)
    const {user} = useAuth();
    // stack query
    const axiosSecure = useAxiosSecure(); 
    // from useAxiosSecure hook
    const { refetch,data: cart = [] } = useQuery({
        queryKey: ['cart',user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data;
        }
    })
    return [cart,refetch]
};

export default useCart;