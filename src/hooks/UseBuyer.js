const { useState, useEffect } = require("react")

const UseBuyer = email => {
    const [isBuyer, setIsBuyer] = useState(false);
    const[isBuyerLoading, setIsBuyerLoading] = useState(true);
    useEffect(()=>{
        fetch(`https://tirex-server.vercel.app/users/buyer/${email}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setIsBuyer(data.isBuyer);
            setIsBuyerLoading(false);
        }) 
    },[email])
    return [isBuyer, isBuyerLoading];
}
export default UseBuyer;