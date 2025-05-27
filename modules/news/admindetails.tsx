'use client'

import Link from "next/link";


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
  Package,
  DollarSign,
  BarChart2,
  Tag,
  Eye,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { posts } from "@/lib/post";

export function AdminDetails() {

  return (
    <div className="rounded-md border shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <Package className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold">Product Management</h2>
        </div>
        <div className="flex gap-2">
          <Input placeholder="Search products..." className="max-w-xs" />
          <Button asChild variant="default" size="sm">
          <Link href={`/dashboard/news/new`}>
            <Plus className="w-4 h-4 mr-2" />
            
            Add Product
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
            <TableHead>Main Text</TableHead>
            <TableHead >quotation</TableHead>
            <TableHead >excerpt</TableHead>
            <TableHead>Created</TableHead>
            <TableHead >Actions</TableHead>
           
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((p: any) => (
            <TableRow key={p.id}>
              <TableCell className="font-medium">{p.id}</TableCell>
              <TableCell>{p.title}</TableCell>
              <TableCell>{p.excerpt}</TableCell>
              <TableCell> {p.date} </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button asChild variant="outline" size="sm">
                  <Link prefetch href={`/dashboard/product/${p.id}`}>
                    <Edit className="w-4 h-4" />
                    </Link>
                  </Button>
                  {/* <Button onClick={()=>onDeleteHandle(p.id)} variant="outline" size="sm">
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </Button> */}
                  <Button  variant="outline" size="sm">
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </Button>
                </div>
              </TableCell>
            
            </TableRow>
           ))} 
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex items-center justify-between p-4 border-t">
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-medium">1</span> to{" "}
          <span className="font-medium">5</span> of{" "}
          <span className="font-medium">32</span> products
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <ChevronsLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm">
            <ChevronRight className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm">
            <ChevronsRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

