// pages/ProductDetail.js
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Simulate API call to fetch product details
    const mockProducts = [
      {
        id: 1,
        name: "Tesla Model S Plaid",
        category: "electric",
        price: 7884170, // $94,990 → ₹78,84,170
        images: [
          "",
          "",
          "",
        ],
        description:
          "The Tesla Model S Plaid redefines electric performance, blending cutting-edge aerodynamics, futuristic technology, and raw power. Designed for ultimate efficiency and speed, it offers an unparalleled driving experience with advanced Autopilot features, a luxurious minimalist interior, and groundbreaking acceleration. This flagship Tesla sedan is the perfect combination of everyday usability and track-level performance.",
        features: [
          "Tri Motor All-Wheel Drive",
          "396 miles range",
          "1,020 horsepower",
          "0-60 mph in just 1.99 seconds",
          "17-inch cinematic touchscreen",
          "Top speed of 200 mph",
        ],
        specifications: {
          range: "396 miles",
          topSpeed: "200 mph",
          acceleration: "1.99s 0-60 mph",
          seating: "5 adults",
          power: "1,020 hp",
          drive: "All-Wheel Drive",
        },
      },
      {
        id: 2,
        name: "Tesla Model 3 Long Range",
        category: "electric",
        price: 3900170, // $46,990 → ₹39,00,170
        images: [
          "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        ],
        description:
          "The Tesla Model 3 Long Range is the benchmark for affordable electric luxury, combining practicality, performance, and advanced safety technology. Its minimalist cabin, dominated by a central touchscreen, creates a futuristic driving experience. With exceptional efficiency and range, the Model 3 is perfect for both long-distance travel and daily commutes.",
        features: [
          "Dual Motor All-Wheel Drive",
          "358 miles driving range",
          "450 horsepower",
          "0-60 mph in 3.1 seconds",
          "Top speed 145 mph",
          "Autopilot & Full Self-Driving capability",
        ],
        specifications: {
          range: "358 miles",
          topSpeed: "145 mph",
          acceleration: "3.1s 0-60 mph",
          seating: "5 adults",
          power: "450 hp",
          drive: "All-Wheel Drive",
        },
      },
      {
        id: 3,
        name: "Tesla Model X",
        category: "electric",
        price: 8299170, // $99,990 → ₹82,99,170
        images: [
          "https://images.unsplash.com/photo-1568601342105-dc5e8f5e2c43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1568601342105-dc5e8f5e2c43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1568601342105-dc5e8f5e2c43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        ],
        description:
          "The Tesla Model X is a futuristic electric SUV that combines incredible performance with unmatched practicality. With falcon-wing rear doors, seating for up to seven adults, and advanced safety features, it is designed for families who demand luxury and technology. Its breathtaking acceleration and long range make it one of the most capable electric SUVs ever built.",
        features: [
          "Falcon Wing Doors",
          "348 miles driving range",
          "1,020 horsepower",
          "0-60 mph in 2.5 seconds",
          "Seating for 7 adults",
          "All-Wheel Drive",
        ],
        specifications: {
          range: "348 miles",
          topSpeed: "163 mph",
          acceleration: "2.5s 0-60 mph",
          seating: "7 adults",
          power: "1,020 hp",
          drive: "All-Wheel Drive",
        },
      },
      {
        id: 4,
        name: "Tesla Model Y Performance",
        category: "electric",
        price: 4564170, // $54,990 → ₹45,64,170
        images: [
          "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        ],
        description:
          "The Tesla Model Y Performance is a compact electric SUV that delivers an exceptional blend of practicality, speed, and technology. With a spacious interior, seating for up to seven, and advanced driver-assistance systems, it's designed for modern families. Its quick acceleration and long range ensure that performance is never compromised.",
        features: [
          "Compact electric SUV",
          "303 miles range",
          "456 horsepower",
          "0-60 mph in 3.5 seconds",
          "Seating for up to 7 adults",
          "All-Wheel Drive",
        ],
        specifications: {
          range: "303 miles",
          topSpeed: "155 mph",
          acceleration: "3.5s 0-60 mph",
          seating: "7 adults",
          power: "456 hp",
          drive: "All-Wheel Drive",
        },
      },
      {
        id: 5,
        name: "Tesla Cybertruck",
        category: "electric",
        price: 6631700, // $79,900 → ₹66,31,700
        images: [
          "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        ],
        description:
          "The Tesla Cybertruck is a radical reinvention of the pickup truck, engineered with an ultra-hard stainless-steel exoskeleton and futuristic angular design. Built for durability and utility, it offers extreme performance, massive range, and towing capabilities. Its bold style makes it unlike anything else on the road.",
        features: [
          "Exoskeleton stainless-steel design",
          "500+ miles range",
          "800 horsepower",
          "0-60 mph in 2.9 seconds",
          "Seating for 6 adults",
          "All-Wheel Drive",
        ],
        specifications: {
          range: "500+ miles",
          topSpeed: "130 mph",
          acceleration: "2.9s 0-60 mph",
          seating: "6 adults",
          power: "800 hp",
          drive: "All-Wheel Drive",
        },
      },

      {
        id: 6,
        name: "BMW i4",
        category: "electric",
        price: 4647917, // $55,999 → ₹46,47,917
        images: [
          "https://www.bmw.in/content/dam/bmw/common/all-models/i-series/i4/onepager-new/bmw-i4-edrive-40-onepager-gallery-i4-exterior-videos-02.jpg",
          "https://images.unsplash.com/photo-1637097203995-1a3e3d6b5d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1637097203995-1a3e3d6b5d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ],
        description:
          "The BMW i4 is BMW's first fully electric Gran Coupe, delivering the perfect blend of practicality, luxury, and driving excitement. It offers sporty handling with instant torque from its electric drivetrain, making it a true driver's car while remaining eco-friendly. The i4 comes with a modern, driver-focused interior, cutting-edge infotainment system, and a long electric range, making it a practical daily driver as well as a performance machine.",
        features: [
          "EPA estimated 301-mile range",
          "335 horsepower (i4 eDrive40)",
          "BMW Curved Display with iDrive 8",
          "Fast charging capability (10%–80% in 31 minutes)",
          "Spacious 5-seat Gran Coupe design",
        ],
        specifications: {
          range: "301 miles",
          topSpeed: "118 mph",
          acceleration: "5.5s 0-60 mph",
          seating: "5 adults",
          drive: "Rear-Wheel Drive",
        },
      },

      {
        id: 7,
        name: "BMW iX",
        category: "electric SUV",
        price: 6971917, // $83,999 → ₹69,71,917
        images: [
          "https://images.unsplash.com/photo-1637097203544-7e3a17e8b478?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1637097203544-7e3a17e8b478?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1637097203544-7e3a17e8b478?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ],
        description:
          "The BMW iX is BMW's flagship electric SUV, redefining luxury with futuristic design, advanced technology, and powerful performance. Built with sustainable materials and a focus on innovation, the iX offers an expansive interior with lounge-like comfort and the latest iDrive 8 operating system. With dual electric motors providing all-wheel drive, it delivers both efficiency and exhilarating driving dynamics, making it one of the most advanced SUVs in its class.",
        features: [
          "Dual electric motors with 516 horsepower (xDrive50)",
          "EPA estimated 324-mile range",
          "iDrive 8 infotainment with 14.9-inch display",
          "Luxury lounge interior with sustainable materials",
          "Fast DC charging up to 200 kW",
        ],
        specifications: {
          range: "324 miles",
          topSpeed: "124 mph",
          acceleration: "4.4s 0-60 mph",
          seating: "5 adults",
          drive: "All-Wheel Drive",
        },
      },

      {
        id: 8,
        name: "BMW 3 Series",
        category: "luxury sedan",
        price: 3568917, // $42,999 → ₹35,68,917
        images: [
          "https://images.unsplash.com/photo-1616486338812-3c5d1b21f5f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1616486338812-3c5d1b21f5f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1616486338812-3c5d1b21f5f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ],
        description:
          "The BMW 3 Series is a benchmark in the luxury sports sedan segment, combining agility, comfort, and cutting-edge technology. Known for its sharp handling and refined performance, the 3 Series offers a choice of powerful engines and an interior filled with premium materials. It is designed for driving enthusiasts who demand a balance between everyday usability and dynamic performance. Over the decades, it has remained BMW's best-selling model and continues to set the standard in its class.",
        features: [
          "2.0L turbocharged 4-cylinder engine with 255 hp",
          "Rear-Wheel Drive standard, xDrive AWD optional",
          "10.25-inch central infotainment display",
          "Luxurious interior with premium materials",
          "Excellent handling and driving dynamics",
        ],
        specifications: {
          range: "N/A (gasoline)",
          topSpeed: "155 mph",
          acceleration: "5.6s 0-60 mph",
          seating: "5 adults",
          drive: "Rear-Wheel Drive / All-Wheel Drive",
        },
      },

      {
        id: 9,
        name: "BMW X5",
        category: "luxury SUV",
        price: 5477917, // $65,999 → ₹54,77,917
        images: [
          "https://images.unsplash.com/photo-1629131727037-9f08ecbfd9b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1629131727037-9f08ecbfd9b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1629131727037-9f08ecbfd9b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ],
        description:
          "The BMW X5 is a premium midsize luxury SUV that blends performance, practicality, and advanced technology. Offering a variety of powerful engine options including hybrid variants, the X5 provides strong acceleration, confident handling, and comfortable ride quality. Inside, it boasts a spacious cabin with high-end materials, advanced driver assistance systems, and versatile cargo space. It's a family-friendly SUV that doesn't compromise on BMW's signature driving pleasure.",
        features: [
          "Available plug-in hybrid variant (X5 xDrive45e)",
          "Up to 389 horsepower depending on trim",
          "Spacious interior with 5 or optional 7 seats",
          "Advanced driver assistance features",
          "Premium Harman Kardon sound system (optional)",
        ],
        specifications: {
          range: "Up to 30 miles electric (hybrid model)",
          topSpeed: "151 mph",
          acceleration: "5.3s 0-60 mph",
          seating: "5-7 adults",
          drive: "All-Wheel Drive",
        },
      },

      {
        id: 10,
        name: "BMW M4",
        category: "sports coupe",
        price: 6224917, // $74,999 → ₹62,24,917
        images: [
          "https://images.unsplash.com/photo-1623820917417-9a2f3f17c478?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1623820917417-9a2f3f17c478?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1623820917417-9a2f3f17c478?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ],
        description:
          "The BMW M4 is a high-performance sports coupe that embodies the spirit of BMW's M division. It delivers exhilarating speed, precision handling, and bold styling, making it one of the most exciting cars in its class. Powered by a turbocharged inline-six engine, the M4 offers blistering acceleration and track-ready performance while still being usable as a daily driver. Its aggressive design, advanced aerodynamics, and luxurious interior create a balance between race car thrills and everyday comfort.",
        features: [
          "3.0L Twin-Turbo Inline-6 with up to 503 horsepower (Competition)",
          "0-60 mph in as little as 3.8 seconds",
          "M Sport seats and premium interior",
          "Adaptive M suspension",
          "Advanced aerodynamics and bold styling",
        ],
        specifications: {
          range: "N/A (gasoline)",
          topSpeed: "180 mph (limited)",
          acceleration: "3.8s 0-60 mph",
          seating: "4 adults",
          drive: "Rear-Wheel Drive / All-Wheel Drive",
        },
      },
      // Continuing mockProducts...

      // 11. Mercedes-Benz S-Class
      {
        id: 11,
        name: "Mercedes-Benz S-Class",
        category: "luxury",
        price: 9132917, // $109,999 → ₹91,32,917
        images: [
          "https://images.unsplash.com/photo-1617788138017-80a3c6329a2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1617788138017-80a3c6329a2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1617788138017-80a3c6329a2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        ],
        description:
          "The Mercedes-Benz S-Class is the pinnacle of luxury sedans, representing the perfect blend of tradition, modern technology, and elegance. Known as the benchmark for luxury vehicles worldwide, it delivers unmatched comfort, cutting-edge safety innovations, and refined performance. The interior features opulent materials, advanced ambient lighting, a massive OLED infotainment system, and rear-seat luxury unlike any other. The S-Class continues to set the gold standard in comfort, craftsmanship, and sophistication.",
        features: [
          "E-Active Body Control suspension",
          "MBUX infotainment with 12.8-inch OLED display",
          "Rear Executive Lounge seating",
          "Burmester® 3D Surround Sound System",
          "Advanced Driver Assistance Systems",
        ],
        specifications: {
          engine: "3.0L Inline-6 Turbo with EQ Boost",
          horsepower: "429 hp",
          topSpeed: "155 mph",
          acceleration: "4.8s 0-60 mph",
          seating: "5 adults",
          drive: "All-Wheel Drive",
        },
      },

      // 12. Mercedes-Benz EQS
      {
        id: 12,
        name: "Mercedes-Benz EQS",
        category: "electric",
        price: 8548917, // $102,999 → ₹85,48,917
        images: [
          "https://images.unsplash.com/photo-1632743418934-82af0da8228c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1632743418934-82af0da8228c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1632743418934-82af0da8228c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        ],
        description:
          "The Mercedes-Benz EQS is a flagship electric sedan that redefines sustainable luxury. With its futuristic design, aerodynamic silhouette, and the massive 56-inch MBUX Hyperscreen, the EQS is a marvel of both form and function. It offers a serene driving experience, whisper-quiet cabin, and one of the longest ranges in the EV market. As the electric sibling of the S-Class, the EQS demonstrates Mercedes' commitment to leading in electrification while maintaining their heritage of luxury and innovation.",
        features: [
          "56-inch MBUX Hyperscreen",
          "Long-range battery up to 350+ miles",
          "Rapid DC fast charging",
          "Rear-axle steering for agility",
          "Advanced AI-powered infotainment system",
        ],
        specifications: {
          range: "350+ miles",
          horsepower: "516 hp",
          topSpeed: "130 mph",
          acceleration: "4.1s 0-60 mph",
          seating: "5 adults",
          drive: "All-Wheel Drive",
        },
      },

      // 13. Mercedes-Benz G-Class
      {
        id: 13,
        name: "Mercedes-Benz G-Class",
        category: "suv",
        price: 10935250, // $131,750 → ₹1,09,35,250
        images: [
          "https://images.unsplash.com/photo-1623668933867-1aa54f9b89e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1623668933867-1aa54f9b89e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1623668933867-1aa54f9b89e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        ],
        description:
          "The Mercedes-Benz G-Class, often referred to as the 'G-Wagon,' is an iconic luxury SUV renowned for its boxy design, commanding presence, and off-road prowess. While it looks rugged, the G-Class pampers passengers with supreme luxury inside, featuring handcrafted leather, cutting-edge infotainment, and advanced driver assistance. Its powerful V8 engine ensures effortless performance both on city roads and rugged terrains. A status symbol worldwide, the G-Wagon remains a dream vehicle for many enthusiasts.",
        features: [
          "4.0L twin-turbo V8 engine",
          "Handcrafted Nappa leather interior",
          "Three differential locks for off-roading",
          "Advanced MBUX infotainment system",
          "Burmeister® Surround Sound",
        ],
        specifications: {
          engine: "4.0L V8 Biturbo",
          horsepower: "577 hp",
          topSpeed: "149 mph",
          acceleration: "4.5s 0-60 mph",
          seating: "5 adults",
          drive: "All-Wheel Drive",
        },
      },

      // 14. Mercedes-Benz AMG GT
      {
        id: 14,
        name: "Mercedes-Benz AMG GT",
        category: "sports",
        price: 9843800, // $118,600 → ₹98,43,800
        images: [
          "https://images.unsplash.com/photo-1628191074263-b49f1512f43c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1628191074263-b49f1512f43c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1628191074263-b49f1512f43c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        ],
        description:
          "The Mercedes-AMG GT is a world-class sports car that combines breathtaking performance with German engineering excellence. Designed as a rival to Porsche and Aston Martin, the AMG GT features a long hood, low-slung stance, and aggressive styling. Inside, drivers are treated to an ergonomic cockpit with performance-oriented controls. Its handcrafted AMG engine delivers thrilling acceleration, while adaptive suspension ensures track-ready handling and road comfort. This car embodies the pure DNA of AMG performance.",
        features: [
          "Handcrafted AMG 4.0L V8 Biturbo engine",
          "Active aerodynamics",
          "AMG Ride Control Sport Suspension",
          "Track-ready performance tuning",
          "Luxurious cockpit with racing design",
        ],
        specifications: {
          engine: "4.0L V8 Biturbo",
          horsepower: "523 hp",
          topSpeed: "194 mph",
          acceleration: "3.7s 0-60 mph",
          seating: "2 adults",
          drive: "Rear-Wheel Drive",
        },
      },

      // 15. Mercedes-Benz C-Class
      {
        id: 15,
        name: "Mercedes-Benz C-Class",
        category: "luxury",
        price: 3734917, // $44,999 → ₹37,34,917
        images: [
          "https://images.unsplash.com/photo-1615809917563-6a933e0d8b8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1615809917563-6a933e0d8b8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1615809917563-6a933e0d8b8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        ],
        description:
          "The Mercedes-Benz C-Class is a compact executive sedan that delivers the perfect balance between luxury, technology, and performance. With sleek styling and a refined interior, it offers a premium driving experience at a more accessible price point. The latest C-Class models feature advanced MBUX infotainment, semi-autonomous driving features, and hybrid efficiency. It is often regarded as a baby S-Class, providing much of the flagship's luxury in a more compact and affordable package.",
        features: [
          "MBUX infotainment with voice control",
          "Mild-hybrid powertrain with EQ Boost",
          "Luxury leather interior with ambient lighting",
          "Driver Assistance package",
          "Premium Burmester® sound system",
        ],
        specifications: {
          engine: "2.0L Inline-4 Turbo + EQ Boost",
          horsepower: "255 hp",
          topSpeed: "130 mph",
          acceleration: "5.7s 0-60 mph",
          seating: "5 adults",
          drive: "Rear-Wheel Drive",
        },
      },

      // 16. Audi A8
      {
        id: 16,
        name: "Audi A8",
        category: "luxury",
        price: 7179500, // $86,500 → ₹71,79,500
        images: [
          "https://images.unsplash.com/photo-1618900537207-928f2e4f2740?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1618900537207-928f2e4f2740?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1618900537207-928f2e4f2740?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        ],
        description:
          "The Audi A8 is the flagship luxury sedan from Audi, blending cutting-edge technology with timeless design. Its interior is meticulously crafted, offering a calm and sophisticated driving experience with premium leather, customizable ambient lighting, and advanced digital displays. The A8 comes equipped with adaptive air suspension, Quattro all-wheel drive, and a host of driver-assistance technologies. It is an executive's dream car, built to deliver supreme comfort while also offering exhilarating performance when desired.",
        features: [
          "Quattro all-wheel drive",
          "Adaptive air suspension",
          "MMI touch response dual displays",
          "Driver assistance package",
          "Luxurious interior with massage seats",
        ],
        specifications: {
          engine: "3.0L V6 Turbo",
          horsepower: "335 hp",
          topSpeed: "155 mph",
          acceleration: "5.6s 0-60 mph",
          seating: "5 adults",
          drive: "All-Wheel Drive",
        },
      },

      // 17. Audi e-tron GT
      {
        id: 17,
        name: "Audi e-tron GT",
        category: "electric",
        price: 8706700, // $104,900 → ₹87,06,700
        images: [
          "https://images.unsplash.com/photo-1621981376939-91f50ed8e29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1621981376939-91f50ed8e29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1621981376939-91f50ed8e29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        ],
        description:
          "The Audi e-tron GT is a stunning all-electric performance sedan that combines Audi's design language with Porsche Taycan DNA. With a sleek coupe-like silhouette and futuristic details, it offers exhilarating acceleration, Quattro electric all-wheel drive, and long-range capability. Inside, the cabin emphasizes minimalism with premium sustainable materials and advanced infotainment. The e-tron GT is Audi's bold statement in the EV performance market, delivering excitement without compromising everyday usability.",
        features: [
          "Dual-motor Quattro electric AWD",
          "0-60 mph in 3.9 seconds",
          "Sustainable leather-free interior",
          "800-volt fast-charging system",
          "Driver-oriented digital cockpit",
        ],
        specifications: {
          range: "238 miles",
          horsepower: "469 hp (522 hp boost)",
          topSpeed: "152 mph",
          acceleration: "3.9s 0-60 mph",
          seating: "5 adults",
          drive: "All-Wheel Drive",
        },
      },

      // 18. Audi Q7
      {
        id: 18,
        name: "Audi Q7",
        category: "suv",
        price: 4888700, // $58,900 → ₹48,88,700
        images: [
          "https://images.unsplash.com/photo-1597002917216-92f2189e50ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1597002917216-92f2189e50ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1597002917216-92f2189e50ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        ],
        description:
          "The Audi Q7 is a luxury SUV that delivers versatility, technology, and refinement in one package. With three rows of seating, it comfortably accommodates families while maintaining the driving dynamics Audi is known for. The interior boasts premium craftsmanship with digital displays and a minimalist design. Equipped with Quattro all-wheel drive, adaptive suspension, and semi-autonomous driving aids, the Q7 strikes the perfect balance between luxury comfort and practical utility.",
        features: [
          "Three-row seating for seven",
          "Virtual cockpit digital display",
          "Quattro all-wheel drive",
          "Adaptive air suspension",
          "Driver assistance technologies",
        ],
        specifications: {
          engine: "2.0L Inline-4 Turbo / 3.0L V6 Turbo (optional)",
          horsepower: "248 hp - 335 hp",
          topSpeed: "130 mph",
          acceleration: "5.7s 0-60 mph",
          seating: "7 adults",
          drive: "All-Wheel Drive",
        },
      },

      // 19. Audi RS7
      {
        id: 19,
        name: "Audi RS7",
        category: "sports",
        price: 118500,
        images: [
          "https://images.unsplash.com/photo-1612197523300-5102ed18e3a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1612197523300-5102ed18e3a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1612197523300-5102ed18e3a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        ],
        description:
          "The Audi RS7 is a high-performance sportback that blends breathtaking speed with everyday practicality. Featuring a wide body, aggressive stance, and bold styling, it commands attention on the road. Underneath, it packs a twin-turbocharged V8 engine that launches the RS7 from 0-60 in just 3.5 seconds. Inside, the cabin is both luxurious and sporty, offering premium materials and a driver-focused digital cockpit. It is the perfect blend of power, performance, and usability.",
        features: [
          "Twin-turbo V8 engine",
          "Sportback practicality with 4 doors",
          "Quattro AWD with torque vectoring",
          "Sport seats with honeycomb stitching",
          "Virtual cockpit performance display",
        ],
        specifications: {
          engine: "4.0L Twin-Turbo V8",
          horsepower: "591 hp",
          topSpeed: "190 mph",
          acceleration: "3.5s 0-60 mph",
          seating: "5 adults",
          drive: "All-Wheel Drive",
        },
      },

      // 20. Audi Q5
      {
        id: 20,
        name: "Audi Q5",
        category: "suv",
        price: 45900,
        images: [
          "https://images.unsplash.com/photo-1623227773939-5c91e3f0e0c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1623227773939-5c91e3f0e0c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1623227773939-5c91e3f0e0c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        ],
        description:
          "The Audi Q5 is a best-selling luxury compact SUV that strikes a balance between versatility, performance, and sophistication. Its timeless design and spacious interior make it a practical choice for families and professionals alike. The Q5 comes with advanced infotainment, semi-autonomous driving aids, and Audi’s Quattro all-wheel drive as standard. Offering both gas and hybrid powertrains, it caters to different driving needs while maintaining luxury and performance.",
        features: [
          "Quattro all-wheel drive",
          "Virtual cockpit with MMI navigation",
          "Hybrid powertrain option",
          "Driver assistance package",
          "Premium leather interior",
        ],
        specifications: {
          engine: "2.0L Inline-4 Turbo / Hybrid option",
          horsepower: "261 hp",
          topSpeed: "130 mph",
          acceleration: "5.9s 0-60 mph",
          seating: "5 adults",
          drive: "All-Wheel Drive",
        },
      },
      // 21. Porsche Taycan Turbo S
      {
        id: 21,
        name: "Porsche Taycan Turbo S",
        category: "electric",
        price: 185000,
        images: [
          "https://images.unsplash.com/photo-1597002974308-39ac81e1f21f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1597002974308-39ac81e1f21f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1597002974308-39ac81e1f21f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        ],
        description:
          "The Porsche Taycan Turbo S is the ultimate electric sports car, combining Porsche’s legendary performance with cutting-edge electric mobility. It offers blistering acceleration, sharp handling, and a luxurious interior filled with premium materials. With adaptive air suspension, high-speed charging, and iconic Porsche design, the Taycan Turbo S redefines what a performance EV can be, delivering an unforgettable driving experience.",
        features: [
          "750 horsepower with launch control",
          "0-60 mph in 2.6 seconds",
          "800-volt system for ultra-fast charging",
          "Adaptive air suspension",
          "Luxurious driver-focused cockpit",
        ],
        specifications: {
          range: "238 miles",
          topSpeed: "161 mph",
          acceleration: "2.6s 0-60 mph",
          seating: "4 adults",
          drive: "All-Wheel Drive",
        },
      },

      // 22. Porsche Panamera
      {
        id: 22,
        name: "Porsche Panamera",
        category: "luxury",
        price: 92000,
        images: [
          "https://images.unsplash.com/photo-1590362891991-f776e0d6e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1590362891991-f776e0d6e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1590362891991-f776e0d6e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        ],
        description:
          "The Porsche Panamera blends the excitement of a sports car with the comfort and utility of a luxury sedan. Its sleek design hides a spacious interior, advanced infotainment, and cutting-edge driver assistance technologies. With powerful engine options and sharp handling, the Panamera ensures that both driver and passengers enjoy a ride that’s equal parts thrilling and comfortable, making it one of the most versatile luxury vehicles on the road.",
        features: [
          "Twin-turbocharged V6 engine",
          "8-speed PDK transmission",
          "Four-zone automatic climate control",
          "Premium Bose surround sound system",
          "Adaptive cruise control",
        ],
        specifications: {
          range: "400 miles (combined fuel/electric)",
          topSpeed: "168 mph",
          acceleration: "4.4s 0-60 mph",
          seating: "4 adults",
          drive: "Rear-Wheel Drive",
        },
      },

      // 23. Porsche Cayenne
      {
        id: 23,
        name: "Porsche Cayenne",
        category: "suv",
        price: 69000,
        images: [
          "https://images.unsplash.com/photo-1603386329225-868f18a6c3da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1603386329225-868f18a6c3da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1603386329225-868f18a6c3da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        ],
        description:
          "The Porsche Cayenne is a performance SUV that combines sportscar DNA with practical functionality. Known for its powerful engines, agile handling, and luxurious cabin, the Cayenne delivers driving dynamics that few SUVs can match. With ample cargo space, advanced infotainment, and Porsche’s iconic styling, it’s perfect for families who refuse to compromise between performance and practicality.",
        features: [
          "Turbocharged V6 and V8 engine options",
          "Porsche Active Suspension Management",
          "12.3-inch touchscreen infotainment",
          "Optional rear-axle steering",
          "Ample cargo capacity with luxury finishes",
        ],
        specifications: {
          range: "350 miles (combined fuel)",
          topSpeed: "157 mph",
          acceleration: "4.7s 0-60 mph",
          seating: "5 adults",
          drive: "All-Wheel Drive",
        },
      },

      // 24. Porsche 911 Carrera
      {
        id: 24,
        name: "Porsche 911 Carrera",
        category: "sports",
        price: 101200,
        images: [
          "https://images.unsplash.com/photo-1616217195864-8af9f0e79a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1616217195864-8af9f0e79a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1616217195864-8af9f0e79a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        ],
        description:
          "The Porsche 911 Carrera is an icon in the world of sports cars, representing decades of engineering perfection and design evolution. Its distinctive silhouette, rear-engine layout, and world-class performance make it instantly recognizable. With modern technology, precise steering, and breathtaking acceleration, the 911 Carrera provides an exhilarating driving experience whether on highways or racetracks.",
        features: [
          "Twin-turbocharged flat-six engine",
          "8-speed PDK dual-clutch transmission",
          "Classic 911 design with modern refinements",
          "Adaptive suspension with drive modes",
          "High-performance brakes and lightweight chassis",
        ],
        specifications: {
          range: "340 miles (combined fuel)",
          topSpeed: "182 mph",
          acceleration: "4.0s 0-60 mph",
          seating: "4 (2+2 layout)",
          drive: "Rear-Wheel Drive",
        },
      },

      // 25. Porsche Macan
      {
        id: 25,
        name: "Porsche Macan",
        category: "suv",
        price: 54000,
        images: [
          "https://images.unsplash.com/photo-1605540048235-ef0d29950d23?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1605540048235-ef0d29950d23?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1605540048235-ef0d29950d23?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        ],
        description:
          "The Porsche Macan is a compact luxury SUV designed for those who want everyday practicality combined with Porsche’s trademark driving excitement. With sharp handling, sporty engines, and a refined interior, the Macan feels like a sports car disguised as an SUV. It is agile in city driving, stable on highways, and versatile enough for small families, making it one of Porsche’s best-selling models.",
        features: [
          "Turbocharged inline-4 and V6 engine options",
          "Sport Chrono package available",
          "Luxurious yet compact SUV design",
          "10.9-inch touchscreen display",
          "Agile handling with Porsche DNA",
        ],
        specifications: {
          range: "310 miles (combined fuel)",
          topSpeed: "144 mph",
          acceleration: "5.0s 0-60 mph",
          seating: "5 adults",
          drive: "All-Wheel Drive",
        },
      },
    ];

    const foundProduct = mockProducts.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);

    // Find similar products (same category)
    if (foundProduct) {
      const similar = mockProducts.filter(
        (p) => p.category === foundProduct.category && p.id !== foundProduct.id
      );
      setSimilarProducts(similar);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="car-loader mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    // Show success message or notification
  };
  // Format price in Indian numbering system
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN").format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <i className="fas fa-chevron-right text-gray-400 mx-2"></i>
                <Link
                  to="/products"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Products
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <i className="fas fa-chevron-right text-gray-400 mx-2"></i>
                <span className="text-gray-500">{product.name}</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Images */}
            <div>
              <div className="h-80 bg-gray-200 rounded-lg overflow-hidden mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    className={`h-24 bg-gray-200 rounded-lg overflow-hidden cursor-pointer border-2 ${
                      selectedImage === index
                        ? "border-blue-500"
                        : "border-transparent"
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mb-2 inline-block">
                {product.category.charAt(0).toUpperCase() +
                  product.category.slice(1)}
              </span>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-2xl font-bold text-blue-700 mb-6">
                ₹{formatPrice(product.price)}
              </p>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p className="text-gray-600">{product.description}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Key Features</h2>
                <ul className="list-disc pl-5 text-gray-600">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Specifications</h2>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div key={key} className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-500 capitalize">
                          {key}
                        </p>
                        <p className="font-medium">{value}</p>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <label htmlFor="quantity" className="text-lg font-medium">
                  Quantity:
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  >
                    -
                  </button>
                  <span className="px-4 py-1">{quantity}</span>
                  <button
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    onClick={() => setQuantity((prev) => prev + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                onClick={handleAddToCart}
              >
                <i className="fas fa-shopping-cart mr-2"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Similar Vehicles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md car-card"
                >
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={product.images[0]}
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
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {product.description}
                    </p>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
