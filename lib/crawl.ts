import axios from "axios"

export const getHTMLFile = async (keyword : string) => {
    try {
        return await axios(`https://www.diningcode.com/list.php?query=${keyword}&lat=37.503004&lng=127.050757&dis=500`)
    } catch (error) {
        console.log(error)
    }
}
//https://www.diningcode.com/list.php?query=%ED%95%9C%EC%8B%9D&lat=37.503004&lng=127.050757&dis=500