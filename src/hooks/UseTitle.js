const { useEffect } = require("react")

const useTitle = title => {
    useEffect(() => { 
        document.title = `${title} - TireX`;
    }, [title])
};
export default useTitle; 