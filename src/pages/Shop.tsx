import { useState } from "react";
import { Link } from "react-router-dom";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { products, categories } from "@/data/products";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = products.filter(
    (product) => selectedCategory === "All" || product.category === selectedCategory
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h1>
        <p className="text-lg text-muted-foreground">
          Discover our complete range of premium cashew products
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Categories</h2>
          <Button
            variant="outline"
            size="sm"
            className="md:hidden"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        
        <div className={`flex flex-wrap gap-2 ${isFilterOpen ? "block" : "hidden md:flex"}`}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Product Count */}
      <div className="mb-6">
        <p className="text-muted-foreground">
          Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-warm transition-all duration-300 group">
            <div className="relative aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <Badge 
                className="absolute top-2 right-2 bg-primary"
                variant="default"
              >
                {product.category}
              </Badge>
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Badge variant="destructive">Out of Stock</Badge>
                </div>
              )}
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl font-bold text-primary">₹{product.price}</span>
                <span className="text-sm text-muted-foreground">{product.weight}</span>
              </div>
              <Button 
                className="w-full" 
                disabled={!product.inStock}
                asChild
              >
                <Link to={`/product/${product.id}`}>
                  {product.inStock ? "View Details" : "Out of Stock"}
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">
            No products found in this category.
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => setSelectedCategory("All")}
          >
            View All Products
          </Button>
        </div>
      )}
    </div>
  );
};

export default Shop;