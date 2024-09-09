import { unstable_cache } from "next/cache";
import prisma from "@/../prisma/prisma";
export const getAllCategory = unstable_cache(
    async (id) => {
        var item = await prisma.categories.findMany({
            orderBy: {
                cate_order: 'asc'
            },
        });

        return item;
    },
    ["category"],
    {
        tags: "allcategory",
        revalidate: 60 * 60 * 24,
    }
);
