import { atom, atomFamily, selector, selectorFamily } from "recoil"
import { getHTMLFile } from "../lib/crawl"
import cheerio from "cheerio"


export const keywordState = atom({
    key: "searchKeyword",
    default : ""
})

export const foodStoreState = atomFamily<any, any[]|string>({
    key: "foodStoreList",
    default: selectorFamily({
        key: "loadFoodStore",
        get: (keyword: string) => async ({get}) => {
            let foodStoreList: any[] = [];
            const res = await getHTMLFile(keyword).then(res => {
                const $ = cheerio.load(res?.data)
                //section-scrollbox
                const foodStoreListBody = $("div.localeft-cont").children("div.lc-list").children("ul#div_list").children("li")
                foodStoreListBody.each(function (index: number, content) {
                    foodStoreList[index] = {
                        storeName: $(this).find("a.blink span.btxt").text()
                    }
                })
                foodStoreList = foodStoreList.filter(v => v.storeName !== "")
                
                return foodStoreList;
            })
            return res || [];
        },
    })
})