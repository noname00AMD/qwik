import prisma from "~/../prisma/prisma";
import { PostCommentStatus ,PostMimeType, PostStatus,PostType } from "@prisma/client";
export const findAricle = async (slug) => {
    const item = await prisma.posts.findUnique({
        where: {
            post_slug: slug,
        },
    });
    return item;
};
export const addArticle = async (article) => {
    const item = await prisma.posts.create({
        data: {
            post_title: article.title,
            post_slug: article.slug,
            post_user_id  :0,     
            post_user_ip     :"", 
            post_category_id   :0,
            post_content      :article.contant||"",
            post_excerpt       : article.excerpt||"",
            post_status        : PostStatus.public,
            post_comment_status :PostCommentStatus.enable,
            post_mime_type      :PostMimeType.text,
            post_type          :PostType.article,
            post_thumb        :"",
            post_view         :0,
            post_like          :0,
            post_password      :"",
            post_comment_count:0
         

        },
    });
    return item;
};
