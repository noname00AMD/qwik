import prisma from '../prisma/prisma';
import { bigintToString } from "../helper"
import { PostType } from "@prisma/client"
var post = {}
post.create = function (postData) {
    return new Promise(async (resolve, reject) => {
        try {

            var post_arr = await prisma.post.create({
                data: {
                    post_status: 'elsa@prisma.io',
                    post_title: 'Elsa Prisma',
                }
            })
            resolve(post_arr)
        } catch (error) {
            reject(error)
        }
    })
}


post.findAll = function (limit = 20) {
    return new Promise(async (resolve, reject) => {
        try {

            var post_arr = bigintToString(await prisma.post.findMany({ take: limit }))
            resolve(post_arr)
        } catch (error) {
            reject(error)
        }
    })
}
post.findAllMedia = function (limit = 20) {
    return new Promise(async (resolve, reject) => {
        try {

            var post_arr = bigintToString(await prisma.post.findMany({
                take: limit,
                where: {
                    post_type: PostType.MEDIA
                }
            }))
            resolve(post_arr)
        } catch (error) {
            reject(error)
        }
    })
}

export default post
