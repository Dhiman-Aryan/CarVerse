// pages/Products.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: "all",
    priceRange: "all",
    sortBy: "featured",
  });
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Simulate API call to fetch products
    const mockProducts = [
      // Tesla (Electric) - 5 cars
      {
        id: 1,
        name: "Tesla Model S Plaid",
        brand: "Tesla",
        category: "electric",
        price: 7884170, // $94,990 → ₹78,84,170
        image:
          "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description:
          "The quickest production car in the world with unprecedented performance",
        featured: true,
        specifications: {
          range: "396 miles",
          acceleration: "1.99s 0-60 mph",
          topSpeed: "200 mph",
          power: "1,020 hp",
          seating: "5 adults",
          drive: "All-Wheel Drive",
        },
      },
      {
        id: 2,
        name: "Tesla Model 3 Long Range",
        brand: "Tesla",
        category: "electric",
        price: 3900170, // $46,990 → ₹39,00,170
        image:
          "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Electric sedan with long range and premium features",
        featured: false,
        specifications: {
          range: "358 miles",
          acceleration: "3.1s 0-60 mph",
          topSpeed: "145 mph",
          power: "450 hp",
          seating: "5 adults",
          drive: "Dual Motor All-Wheel Drive",
        },
      },
      {
        id: 3,
        name: "Tesla Model X",
        brand: "Tesla",
        category: "electric",
        price: 8299170, // $99,990 → ₹82,99,170
        image:
          "https://media.ed.edmunds-media.com/tesla/model-x/2025/oem/2025_tesla_model-x_4dr-suv_plaid_fq_oem_1_1600.jpg",
        description:
          "Electric SUV with falcon wing doors and spacious interior",
        featured: true,
        specifications: {
          range: "348 miles",
          acceleration: "2.5s 0-60 mph",
          topSpeed: "163 mph",
          power: "1,020 hp",
          seating: "7 adults",
          drive: "All-Wheel Drive",
        },
      },
      {
        id: 4,
        name: "Tesla Model Y Performance",
        brand: "Tesla",
        category: "electric",
        price: 4564170, // $54,990 → ₹45,64,170
        image:
          "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Compact electric SUV with impressive performance",
        featured: false,
        specifications: {
          range: "303 miles",
          acceleration: "3.5s 0-60 mph",
          topSpeed: "155 mph",
          power: "456 hp",
          seating: "7 adults",
          drive: "All-Wheel Drive",
        },
      },
      {
        id: 5,
        name: "Tesla Cybertruck",
        brand: "Tesla",
        category: "electric",
        price: 6631700, // $79,900 → ₹66,31,700
        image:
          "data:image/jpeg;base64,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",
        description: "All-electric pickup truck with exoskeleton design",
        featured: true,
        specifications: {
          range: "500+ miles",
          acceleration: "2.9s 0-60 mph",
          topSpeed: "130 mph",
          power: "800 hp",
          seating: "6 adults",
          drive: "All-Wheel Drive",
        },
      },

      // BMW - 5 cars
      {
        id: 6,
        name: "BMW i8",
        brand: "BMW",
        category: "hybrid",
        price: 12242500, // $147,500 → ₹1,22,42,500
        image:
          "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description:
          "Sports hybrid with stunning design and futuristic technology",
        featured: true,
        specifications: {
          engine: "1.5L Turbocharged 3-cylinder + Electric Motor",
          horsepower: "369 hp",
          acceleration: "4.2s 0-60 mph",
          topSpeed: "155 mph",
          fuelEconomy: "69 MPGe",
          drive: "All-Wheel Drive",
        },
      },
      {
        id: 7,
        name: "BMW 7 Series",
        brand: "BMW",
        category: "luxury",
        price: 7212700, // $86,900 → ₹72,12,700
        image:
          "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Flagship luxury sedan with cutting-edge technology",
        featured: false,
        specifications: {
          engine: "3.0L Turbocharged Inline-6",
          horsepower: "335 hp",
          acceleration: "5.3s 0-60 mph",
          topSpeed: "130 mph",
          fuelEconomy: "25 mpg combined",
          drive: "Rear-Wheel Drive",
        },
      },
      {
        id: 8,
        name: "BMW X5",
        brand: "BMW",
        category: "suv",
        price: 5096200, // $61,400 → ₹50,96,200
        image:
          "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description:
          "Midsize luxury SUV with sporty handling and premium interior",
        featured: true,
        specifications: {
          engine: "3.0L Turbocharged Inline-6",
          horsepower: "335 hp",
          acceleration: "5.3s 0-60 mph",
          topSpeed: "130 mph",
          fuelEconomy: "23 mpg combined",
          drive: "All-Wheel Drive",
        },
      },
      {
        id: 9,
        name: "BMW M4 Competition",
        brand: "BMW",
        category: "sports",
        price: 6382700, // $76,900 → ₹63,82,700
        image:
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "High-performance sports coupe with track capabilities",
        featured: false,
        specifications: {
          engine: "3.0L Twin-Turbo Inline-6",
          horsepower: "503 hp",
          acceleration: "3.8s 0-60 mph",
          topSpeed: "155 mph",
          fuelEconomy: "19 mpg combined",
          drive: "Rear-Wheel Drive",
        },
      },
      {
        id: 10,
        name: "BMW i4",
        brand: "BMW",
        category: "electric",
        price: 4639700, // $55,900 → ₹46,39,700
        image:
          "https://www.bmw.in/content/dam/bmw/common/all-models/i-series/i4/onepager-new/bmw-i4-edrive-40-onepager-gallery-i4-exterior-videos-02.jpg",
        description: "All-electric gran coupe with BMW performance DNA",
        featured: true,
        specifications: {
          range: "301 miles",
          acceleration: "3.3s 0-60 mph",
          topSpeed: "140 mph",
          power: "536 hp",
          seating: "5 adults",
          drive: "All-Wheel Drive",
        },
      },

      // Mercedes-Benz - 5 cars
      {
        id: 11,
        name: "Mercedes-Benz S-Class",
        brand: "Mercedes-Benz",
        category: "luxury",
        price: 9213000, // $111,000 → ₹92,13,000
        image:
          "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description:
          "The pinnacle of luxury with advanced technology and comfort",
        featured: true,
        specifications: {
          engine: "3.0L Inline-6 Turbo with EQ Boost",
          horsepower: "429 hp",
          acceleration: "4.9s 0-60 mph",
          topSpeed: "130 mph",
          fuelEconomy: "23 mpg combined",
          drive: "All-Wheel Drive",
        },
      },
      {
        id: 12,
        name: "Mercedes-Benz EQS",
        brand: "Mercedes-Benz",
        category: "electric",
        price: 8491730, // $102,310 → ₹84,91,730
        image:
          "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "All-electric luxury sedan with Hyperscreen display",
        featured: false,
        specifications: {
          range: "350 miles",
          acceleration: "4.1s 0-60 mph",
          topSpeed: "130 mph",
          power: "516 hp",
          seating: "5 adults",
          drive: "Rear-Wheel Drive",
        },
      },
      {
        id: 13,
        name: "Mercedes-AMG GT",
        brand: "Mercedes-Benz",
        category: "sports",
        price: 9619700, // $115,900 → ₹96,19,700
        image:
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "High-performance sports car with aggressive styling",
        featured: true,
        specifications: {
          engine: "4.0L Twin-Turbo V8",
          horsepower: "469 hp",
          acceleration: "3.9s 0-60 mph",
          topSpeed: "189 mph",
          fuelEconomy: "18 mpg combined",
          drive: "Rear-Wheel Drive",
        },
      },
      {
        id: 14,
        name: "Mercedes-Benz GLE",
        brand: "Mercedes-Benz",
        category: "suv",
        price: 4726850, // $56,950 → ₹47,26,850
        image:
          "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Midsize luxury SUV with advanced safety features",
        featured: false,
        specifications: {
          engine: "2.0L Turbo Inline-4",
          horsepower: "255 hp",
          acceleration: "7.0s 0-60 mph",
          topSpeed: "130 mph",
          fuelEconomy: "23 mpg combined",
          drive: "All-Wheel Drive",
        },
      },
      {
        id: 15,
        name: "Mercedes-Benz C-Class",
        brand: "Mercedes-Benz",
        category: "luxury",
        price: 3614650, // $43,550 → ₹36,14,650
        image:
          "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Compact executive sedan with premium features",
        featured: true,
        specifications: {
          engine: "2.0L Turbo Inline-4",
          horsepower: "255 hp",
          acceleration: "5.9s 0-60 mph",
          topSpeed: "130 mph",
          fuelEconomy: "27 mpg combined",
          drive: "Rear-Wheel Drive",
        },
      },

      // Audi - 5 cars
      {
        id: 16,
        name: "Audi e-tron GT",
        brand: "Audi",
        category: "electric",
        price: 8499200, // $102,400 → ₹84,99,200
        image:
          "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "All-electric grand tourer with stunning design",
        featured: true,
        specifications: {
          range: "238 miles",
          acceleration: "3.9s 0-60 mph",
          topSpeed: "152 mph",
          power: "522 hp",
          seating: "4 adults",
          drive: "All-Wheel Drive",
        },
      },
      {
        id: 17,
        name: "Audi Q7",
        brand: "Audi",
        category: "suv",
        price: 4556700, // $54,900 → ₹45,56,700
        image:
          "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Three-row luxury SUV with advanced technology",
        featured: false,
        specifications: {
          engine: "2.0L Turbocharged Inline-4",
          horsepower: "248 hp",
          acceleration: "6.9s 0-60 mph",
          topSpeed: "130 mph",
          fuelEconomy: "21 mpg combined",
          drive: "All-Wheel Drive",
        },
      },
      {
        id: 18,
        name: "Audi R8",
        brand: "Audi",
        category: "sports",
        price: 12342100, // $148,700 → ₹1,23,42,100
        image:
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Mid-engine supercar with exhilarating performance",
        featured: true,
        specifications: {
          engine: "5.2L V10",
          horsepower: "562 hp",
          acceleration: "3.4s 0-60 mph",
          topSpeed: "205 mph",
          fuelEconomy: "16 mpg combined",
          drive: "All-Wheel Drive",
        },
      },
      {
        id: 19,
        name: "Audi A6",
        brand: "Audi",
        category: "luxury",
        price: 4556700, // $54,900 → ₹45,56,700
        image:
          "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description:
          "Executive sedan with virtual cockpit and premium amenities",
        featured: false,
        specifications: {
          engine: "2.0L Turbocharged Inline-4",
          horsepower: "248 hp",
          acceleration: "6.1s 0-60 mph",
          topSpeed: "130 mph",
          fuelEconomy: "27 mpg combined",
          drive: "All-Wheel Drive",
        },
      },
      {
        id: 20,
        name: "Audi Q5",
        brand: "Audi",
        category: "suv",
        price: 3643700, // $43,900 → ₹36,43,700
        image:
          "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Compact luxury SUV with quattro all-wheel drive",
        featured: true,
        specifications: {
          engine: "2.0L Turbocharged Inline-4",
          horsepower: "261 hp",
          acceleration: "5.7s 0-60 mph",
          topSpeed: "130 mph",
          fuelEconomy: "25 mpg combined",
          drive: "All-Wheel Drive",
        },
      },

      // Porsche - 5 cars
      {
        id: 21,
        name: "Porsche 911 Carrera",
        brand: "Porsche",
        category: "sports",
        price: 8399600, // $101,200 → ₹83,99,600
        image:
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Iconic sports car with rear-engine design",
        featured: true,
        specifications: {
          engine: "3.0L Twin-Turbo Flat-6",
          horsepower: "379 hp",
          acceleration: "4.0s 0-60 mph",
          topSpeed: "182 mph",
          fuelEconomy: "21 mpg combined",
          drive: "Rear-Wheel Drive",
        },
      },
      {
        id: 22,
        name: "Porsche Taycan",
        brand: "Porsche",
        category: "electric",
        price: 6880700, // $82,900 → ₹68,80,700
        image:
          "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "All-electric sports sedan with Porsche performance",
        featured: false,
        specifications: {
          range: "225 miles",
          acceleration: "5.1s 0-60 mph",
          topSpeed: "143 mph",
          power: "402 hp",
          seating: "4 adults",
          drive: "Rear-Wheel Drive",
        },
      },
      {
        id: 23,
        name: "Porsche Cayenne",
        brand: "Porsche",
        category: "suv",
        price: 5801700, // $69,900 → ₹58,01,700
        image:
          "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Luxury performance SUV with sports car DNA",
        featured: true,
        specifications: {
          engine: "3.0L Turbocharged V6",
          horsepower: "335 hp",
          acceleration: "5.9s 0-60 mph",
          topSpeed: "150 mph",
          fuelEconomy: "20 mpg combined",
          drive: "All-Wheel Drive",
        },
      },
      {
        id: 24,
        name: "Porsche Panamera",
        brand: "Porsche",
        category: "luxury",
        price: 7461700, // $89,900 → ₹74,61,700
        image:
          "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Four-door grand tourer with sports car performance",
        featured: false,
        specifications: {
          engine: "2.9L Twin-Turbo V6",
          horsepower: "325 hp",
          acceleration: "5.6s 0-60 mph",
          topSpeed: "160 mph",
          fuelEconomy: "22 mpg combined",
          drive: "All-Wheel Drive",
        },
      },
      {
        id: 25,
        name: "Porsche Macan",
        brand: "Porsche",
        category: "suv",
        price: 4556700, // $54,900 → ₹45,56,700
        image:
          "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Compact luxury SUV with sporty handling",
        featured: true,
        specifications: {
          engine: "2.0L Turbocharged Inline-4",
          horsepower: "261 hp",
          acceleration: "6.0s 0-60 mph",
          topSpeed: "144 mph",
          fuelEconomy: "22 mpg combined",
          drive: "All-Wheel Drive",
        },
      },
    ];

    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
  }, []);

  useEffect(() => {
    let results = products;

    // Apply search filter
    if (searchTerm) {
      results = results.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (filters.category !== "all") {
      results = results.filter(
        (product) => product.category === filters.category
      );
    }

    // Apply price filter (updated for Indian rupees)
    if (filters.priceRange !== "all") {
      switch (filters.priceRange) {
        case "under-30k":
          results = results.filter((product) => product.price < 3000000); // Under ₹30 lakh
          break;
        case "30k-50k":
          results = results.filter(
            (product) => product.price >= 3000000 && product.price < 5000000 // ₹30-50 lakh
          );
          break;
        case "50k-80k":
          results = results.filter(
            (product) => product.price >= 5000000 && product.price < 8000000 // ₹50-80 lakh
          );
          break;
        case "over-80k":
          results = results.filter((product) => product.price >= 8000000); // Over ₹80 lakh
          break;
        default:
          break;
      }
    }

    // Apply sorting
    switch (filters.sortBy) {
      case "price-low":
        results = [...results].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        results = [...results].sort((a, b) => b.price - a.price);
        break;
      case "name":
        results = [...results].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default: // featured
        results = [...results].sort((a, b) => b.featured - a.featured);
        break;
    }

    setFilteredProducts(results);
  }, [searchTerm, filters, products]);

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  // Format price in Indian numbering system
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN").format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Our Vehicle Collection
        </h1>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search for vehicles..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <i className="fas fa-search absolute right-3 top-3 text-gray-400"></i>
            </div>

            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filters.sortBy}
              onChange={(e) => handleFilterChange("sortBy", e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.category}
                onChange={(e) => handleFilterChange("category", e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="electric">Electric</option>
                <option value="hybrid">Hybrid</option>
                <option value="suv">SUV</option>
                <option value="sports">Sports</option>
                <option value="luxury">Luxury</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price Range
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.priceRange}
                onChange={(e) =>
                  handleFilterChange("priceRange", e.target.value)
                }
              >
                <option value="all">All Prices</option>
                <option value="under-30k">Under ₹30 lakh</option>
                <option value="30k-50k">₹30 lakh - ₹50 lakh</option>
                <option value="50k-80k">₹50 lakh - ₹80 lakh</option>
                <option value="over-80k">Over ₹80 lakh</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Reset Filters
              </label>
              <button
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors"
                onClick={() => {
                  setFilters({
                    category: "all",
                    priceRange: "all",
                    sortBy: "featured",
                  });
                  setSearchTerm("");
                }}
              >
                Clear All Filters
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-md car-card"
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {product.category.charAt(0).toUpperCase() +
                        product.category.slice(1)}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-700">
                      ₹{formatPrice(product.price)}
                    </span>
                    <Link
                      to={`/product/${product.id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View Details <i className="fas fa-arrow-right ml-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <i className="fas fa-search text-4xl text-gray-400 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-700">
              No vehicles found
            </h3>
            <p className="text-gray-500 mt-2">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
