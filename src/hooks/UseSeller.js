const { useState, useEffect } = require("react")

const UseSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const[isSellerLoading, setIsSellerLoading] = useState(true);
    useEffect(()=>{
        fetch(`http://localhost:5000/users/seller/${email}`)
        .then(res => res.json())
        .then(data => {
            console.log('seller data',data)
            setIsSeller(data.isSeller);
            setIsSellerLoading(false);
        })
    },[email])
    return [isSeller, isSellerLoading];
}
export default UseSeller;