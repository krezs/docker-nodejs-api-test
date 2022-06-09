import { getConnection } from "./../database/database";

const getCategories = (req, res) => {
    res.json("product category list");

}

export const methods = {
    getCategories
}