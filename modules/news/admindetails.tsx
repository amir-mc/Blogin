'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Plus,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Package
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

type Post = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  blockquote: string;
  created_at: Date;
};

export function AdminDetails() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0); // New state for total count
  const postsPerPage = 5;
  const router = useRouter();


  // Fetch posts from API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `/api/posts?page=${currentPage}&limit=${postsPerPage}&search=${searchTerm}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }

        const { data, pagination } = await response.json();
        
        setPosts(data || []);
        setTotalPosts(pagination?.total || 0);
        
      } catch (error) {
        console.error('Error fetching posts:', error);
        toast.error('Failed to fetch posts');
        setPosts([]);
        setTotalPosts(0);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage, searchTerm]);
  


  // Handle post deletion
  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        toast.success("Post deleted successfully");
        setPosts(posts.filter(post => post.id !== id));
      } else {
        throw new Error("Failed to delete post");
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Deletion failed");
    }
  };

  // Pagination logic
    const filteredPosts = posts.filter(post => 
    post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate total pages safely
  const totalPages = Math.ceil(totalPosts / postsPerPage) || 1;

  return (
    <div className="rounded-md border shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <Package className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold">News Management</h2>
        </div>
        <div className="flex gap-2">
          <Input 
            placeholder="Search news..." 
            className="max-w-xs" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button asChild variant="default" size="sm">
            <Link href="/dashboard/news/new">
              <Plus className="w-4 h-4 mr-2" />
              Add News
            </Link>
          </Button>
        </div>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px]">News ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Excerpt</TableHead>
            <TableHead>Quotation</TableHead>
            <TableHead>Created</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-4">
                Loading...
              </TableCell>
            </TableRow>
          ) : filteredPosts.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-4">
                No posts found
              </TableCell>
            </TableRow>
          ) : (
            filteredPosts.map((post) => (
              <TableRow key={post.id}>
                <TableCell className="font-medium">{post.id.slice(0, 8)}...</TableCell>
                <TableCell className="max-w-[200px] truncate">{post.title}</TableCell>
                <TableCell className="max-w-[200px] truncate">{post.excerpt}</TableCell>
                <TableCell className="max-w-[200px] truncate">
                  {post.blockquote || "-"}
                </TableCell>
                <TableCell>
                  {new Date(post.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/dashboard/news/${post.id}`}>
                        <Edit className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleDelete(post.id)}
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex items-center justify-between p-4 border-t">
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-medium">{(currentPage - 1) * postsPerPage + 1}</span> to{" "}
          <span className="font-medium">
            {Math.min(currentPage * postsPerPage, totalPosts)}
          </span> of{" "}
          <span className="font-medium">{totalPosts}</span> posts
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
          >
            <ChevronsLeft className="w-4 h-4" />
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm">
            {currentPage}
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
          >
            <ChevronsRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}