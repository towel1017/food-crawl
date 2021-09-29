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
                    console.log("sss",$(this).find('a.blink span.ctxt').last().toString().replace(/(<span class="ctxt">|<\/span>)/gi, "").split(">")[2])
                    foodStoreList[index] = {
                        storeName: $(this).find("a.blink span.btxt").text(),
                        storeScore: $(this).find('p.favor-review span.point').text(),
                        storeType: $(this).find('a.blink span.stxt').first().text(),
                        storeAddress: $(this).find('a.blink span.ctxt').last().toString().replace(/(<span class="ctxt">|<\/span>)/gi, "").split(">")[2]
                    }
                })
                foodStoreList = foodStoreList.filter(v => v.storeName !== "")
                
                return foodStoreList;
            })
            return res || [];
        },
    })
})