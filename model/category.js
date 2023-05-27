// import prisma from '../prisma/prisma';
import { bigintToString } from "../helper"
// import { TaxonomyType } from "@prisma/client"
import connectToDatabase from "../database"
var allCategory
var cat = {}

cat.findAll = function () {
    return new Promise(async (resolve, reject) => {
        try {
            const cate = await connectToDatabase().query("SELECT term_taxonomy.term_taxonomy_id, term_taxonomy.taxonomy, term_taxonomy.discription, term_taxonomy.parent, term_taxonomy.count,term_taxonomy.term_id, terms.name,terms.slug,terms.term_group FROM term_taxonomy  INNER JOIN terms ON term_taxonomy.term_id = terms.term_id where term_taxonomy.taxonomy = 'CATEGORY' or  term_taxonomy.taxonomy ='SUBCATEGORY';")
            resolve(bigintToString(cate))
        } catch (error) {
            reject(error)
        }
    })
}

cat.getAll = function () {
    return new Promise(async (resolve, reject) => {
        if (allCategory) {
            return resolve(allCategory)
        }
        cat.findAll().then((rs) => {
            allCategory = rs
            resolve(allCategory)
        }).catch((e) => {
            reject(e)
        })
    })
}

export default cat
