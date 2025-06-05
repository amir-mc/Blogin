"use server"


import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const getPosts = async () => {
    const result = await prisma.post.findMany({ include: { images: true } })
    return result
}

export const getPostsbyApi = async () => {
    const result = await fetch('/api/posts')
    const response = await result.json()
    return response
}

export const getPostbyId = async (id: string) => {
    const result = await prisma.post.findUnique({
        where: { id },
        include: { images: true }
    })
    if (!result) {
        return null
    }
    return result
}

export const upsertPost = async (post: {
    id?: string;
    title: string;
    excerpt: string;
    content: string;
    blockquote: string;
}) => {
    const { id } = post
    let result
    
    if (id) {
        result = await prisma.post.update({
            where: { id },
            data: post
        })
    } else {
        result = await prisma.post.create({
            data: post
        })
    }
    
    revalidatePath('/dashboard/news')
    return result
}

export const deletePost = async (id: string) => {
    const post = await prisma.post.findUnique({ where: { id } })
    if (!post) {
        throw new Error("Post not found")
    }

    await prisma.post.delete({ where: { id } })
    
}