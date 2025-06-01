'use client'
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { upsertPost } from "@/modules/services";

type PostFormData = {
    id?: string;
    title: string;
    excerpt: string;
    content: string;
    blockquote: string;
}

export function InputData(props: { post: PostFormData | null }) {
    const router = useRouter()
    const { post } = props
    const { register, handleSubmit, setValue } = useForm<PostFormData>()
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        if (post?.id) {
            setValue("id", post.id)
            setValue("title", post.title)
            setValue("excerpt", post.excerpt)
            setValue("content", post.content)
            setValue("blockquote", post.blockquote)
        }
    }, [post, setValue])

    const onSubmitForm = async (data: PostFormData) => {
        setIsSubmitting(true)
        
        try {
            const toastId = toast.loading(post?.id ? 'Updating post...' : 'Creating post...')
            
            await upsertPost(data)
            
            toast.success(post?.id ? 'Post updated successfully!' : 'Post created successfully!', {
                id: toastId
            })
            
            router.push('/dashboard/news')
        } catch (error) {
            toast.error('Failed to save post')
            console.error('Error saving post:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmitForm)} className="max-w-2xl mx-auto p-6 rounded-lg shadow-md">
            <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">
                    {post?.id ? 'Edit Post' : 'Create New Post'}
                </h2>
                
                {/* Title */}
                <div>
                    <label htmlFor="title" className="block text-sm font-medium mb-2">
                        Title
                    </label>
                    <Input
                        id="title"
                        {...register('title', { required: true })}
                        placeholder="Enter post title"
                        disabled={isSubmitting}
                    />
                </div>

                {/* Excerpt */}
                <div>
                    <label htmlFor="excerpt" className="block text-sm font-medium mb-2">
                        Excerpt
                    </label>
                    <Input
                        id="excerpt"
                        {...register('excerpt', { required: true })}
                        placeholder="Enter post excerpt"
                        disabled={isSubmitting}
                    />
                </div>

                {/* Content */}
                <div>
                    <label htmlFor="content" className="block text-sm font-medium mb-2">
                        Content
                    </label>
                    <Textarea
                        id="content"
                        {...register('content', { required: true })}
                        placeholder="Enter post content"
                        className="min-h-[200px]"
                        disabled={isSubmitting}
                    />
                </div>

                {/* Blockquote */}
                <div>
                    <label htmlFor="blockquote" className="block text-sm font-medium mb-2">
                        Blockquote
                    </label>
                    <Textarea
                        id="blockquote"
                        {...register('blockquote')}
                        placeholder="Enter blockquote (optional)"
                        className="min-h-[100px]"
                        disabled={isSubmitting}
                    />
                </div>

                {/* Form Actions */}
                <div className="flex justify-between items-center">
                    <Button 
                        type="button" 
                        variant="outline"
                        onClick={() => router.back()}
                        disabled={isSubmitting}
                    >
                        Back
                    </Button>

                    <div className="flex gap-4">
                        <Button 
                            type="button" 
                            variant="outline"
                            onClick={() => router.push('/dashboard/news')}
                            disabled={isSubmitting}
                        >
                            Cancel
                        </Button>
                        <Button 
                            type="submit" 
                            disabled={isSubmitting}
                        >
                            {isSubmitting 
                                ? (post?.id ? 'Updating...' : 'Creating...') 
                                : (post?.id ? 'Update Post' : 'Create Post')}
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    )
}