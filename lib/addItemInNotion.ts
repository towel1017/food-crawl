import { Client } from "@notionhq/client";

interface storeInfoType {
    storeName: string
    storeScore: string
    storeAddress: string
    storeType : string
}

interface storeTypeArrayItemType {
    name : string
}

const notion = new Client({ auth: "secret_bu4kVSchBagkp4hdBojRlHTBUZmEkr0Wu9CNGwePvsl" });
const databaseId = "b0bfc04c67074ab6b9b2548fdaf8e59e";

export const addItemInNotion = async ({
    storeName,
    storeScore,
    storeAddress,
    storeType
}: storeInfoType) => {
    const storeTypeArray: storeTypeArrayItemType[] = storeType.split(",").map(v => {
        const obj = {
            name : v.trim()
        }
        return obj;
    })
    const name = storeName.split(".")[1].trim()
    const response = await notion.pages.create({
                parent: {
                    database_id : databaseId
                },
                properties: {
                    Name: {
                        title: [
                        {
                            text: {
                                content: name,
                            },
                        },
                        ],
                    },
                    Star: {
                        rich_text: [
                        {
                            text: {
                            content: storeScore,
                            },
                        },
                        ],
                    },
                    Address: {
                        rich_text: [
                        {
                            text: {
                            content: storeAddress
                            },
                        },
                        ],
                    },
                    Type: {
                        multi_select: [
                            ...storeTypeArray
                        ]
                    },
                },
            })
    console.log(response)
}