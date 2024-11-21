'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Products</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Product
        </Button>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          className="pl-10"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample Product Cards */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Card key={item} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">Product {item}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">SKU: PRD-{item}000</p>
                <p className="font-semibold">$299.99</p>
                <p className="text-sm">Stock: 45 units</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}