
db.users.insertMany([
    {
      _id: ObjectId("507f1f77bcf86cd799439011"),
      username: "john_doe",
      email: "john@example.com",
      password: "$2b$10$hashedpassword",
      profile: {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        gender: "male",
        avatar: "https://example.com/avatar1.jpg"
      },
      address: [
        {
          type: "home",
          street: "123 Main St",
          city: "New York",
          state: "NY",
          zipCode: "10001",
          country: "USA",
          coordinates: {
            type: "Point",
            coordinates: [-73.935242, 40.730610] 
          }
        },
        {
          type: "work",
          street: "456 Office Blvd",
          city: "New York",
          state: "NY",
          zipCode: "10002",
          country: "USA"
        }
      ],
      preferences: {
        newsletter: true,
        notifications: {
          email: true,
          sms: false,
          push: true
        },
        language: "en",
        currency: "USD"
      },
      roles: ["customer", "premium"],
      tags: ["vip", "early-adopter"],
      wallet: {
        balance: 1500.50,
        currency: "USD",
        transactions: []
      },
      socialMedia: {
        facebook: "john.doe",
        twitter: "@johndoe",
        linkedin: "johndoe"
      },
      loginHistory: [
        { timestamp: new Date("2024-10-01T10:00:00Z"), ip: "192.168.1.1", device: "mobile" },
        { timestamp: new Date("2024-10-05T14:30:00Z"), ip: "192.168.1.1", device: "desktop" }
      ],
      stats: {
        totalOrders: 25,
        totalSpent: 5400.75,
        averageOrderValue: 216.03,
        lifetimeValue: 5400.75
      },
      createdAt: new Date("2023-01-15T08:00:00Z"),
      updatedAt: new Date("2024-10-10T12:00:00Z"),
      lastLogin: new Date("2024-10-10T09:00:00Z"),
      isActive: true,
      isVerified: true,
      accountStatus: "active"
    },
    {
      _id: ObjectId("507f1f77bcf86cd799439012"),
      username: "jane_smith",
      email: "jane@example.com",
      password: "$2b$10$hashedpassword2",
      profile: {
        firstName: "Jane",
        lastName: "Smith",
        age: 28,
        gender: "female",
        avatar: "https://example.com/avatar2.jpg"
      },
      address: [
        {
          type: "home",
          street: "789 Park Ave",
          city: "Los Angeles",
          state: "CA",
          zipCode: "90001",
          country: "USA",
          coordinates: {
            type: "Point",
            coordinates: [-118.243683, 34.052235]
          }
        }
      ],
      preferences: {
        newsletter: false,
        notifications: {
          email: true,
          sms: true,
          push: false
        },
        language: "en",
        currency: "USD"
      },
      roles: ["customer"],
      tags: ["new-user"],
      wallet: {
        balance: 250.00,
        currency: "USD"
      },
      stats: {
        totalOrders: 5,
        totalSpent: 890.50,
        averageOrderValue: 178.10,
        lifetimeValue: 890.50
      },
      createdAt: new Date("2024-08-20T10:00:00Z"),
      updatedAt: new Date("2024-10-12T15:00:00Z"),
      lastLogin: new Date("2024-10-12T14:00:00Z"),
      isActive: true,
      isVerified: true,
      accountStatus: "active"
    }
  ]);
  

  db.products.insertMany([
    {
      _id: ObjectId("607f1f77bcf86cd799439021"),
      name: "iPhone 15 Pro",
      slug: "iphone-15-pro",
      description: "Latest flagship smartphone from Apple",
      category: "Electronics",
      subCategory: "Smartphones",
      brand: "Apple",
      sku: "IPHONE15PRO256",
      price: 999.99,
      originalPrice: 1099.99,
      discount: {
        type: "percentage",
        value: 9,
        startDate: new Date("2024-10-01T00:00:00Z"),
        endDate: new Date("2024-10-31T23:59:59Z")
      },
      currency: "USD",
      stock: {
        quantity: 150,
        warehouse: "NYC-01",
        reserved: 10,
        available: 140
      },
      specifications: {
        color: "Titanium Blue",
        storage: "256GB",
        ram: "8GB",
        screenSize: "6.1 inch",
        battery: "4000mAh",
        weight: "187g",
        dimensions: {
          length: 146.6,
          width: 70.6,
          height: 8.25,
          unit: "mm"
        }
      },
      images: [
        { url: "https://example.com/iphone1.jpg", isPrimary: true, alt: "iPhone 15 Pro front" },
        { url: "https://example.com/iphone2.jpg", isPrimary: false, alt: "iPhone 15 Pro back" }
      ],
      ratings: {
        average: 4.7,
        count: 1250,
        distribution: {
          5: 900,
          4: 250,
          3: 70,
          2: 20,
          1: 10
        }
      },
      reviews: [
        {
          userId: ObjectId("507f1f77bcf86cd799439011"),
          rating: 5,
          title: "Amazing phone!",
          comment: "Best phone I've ever owned",
          helpful: 45,
          verified: true,
          createdAt: new Date("2024-09-15T10:00:00Z")
        }
      ],
      tags: ["flagship", "5G", "premium", "bestseller"],
      features: ["Face ID", "5G", "Wireless Charging", "Water Resistant"],
      warranty: {
        duration: 12,
        unit: "months",
        type: "manufacturer"
      },
      shipping: {
        weight: 0.5,
        dimensions: {
          length: 15,
          width: 10,
          height: 5,
          unit: "cm"
        },
        freeShipping: true,
        estimatedDays: 3
      },
      seo: {
        title: "iPhone 15 Pro - Buy Now",
        description: "Get the latest iPhone 15 Pro",
        keywords: ["iphone", "apple", "smartphone"]
      },
      supplier: {
        name: "Apple Inc.",
        id: "SUPPLIER001",
        contact: "supplier@apple.com"
      },
      isActive: true,
      isFeatured: true,
      viewCount: 15420,
      salesCount: 342,
      createdAt: new Date("2024-01-01T00:00:00Z"),
      updatedAt: new Date("2024-10-10T12:00:00Z")
    },
    {
      _id: ObjectId("607f1f77bcf86cd799439022"),
      name: "Samsung Galaxy S24",
      slug: "samsung-galaxy-s24",
      description: "Premium Android smartphone",
      category: "Electronics",
      subCategory: "Smartphones",
      brand: "Samsung",
      sku: "GALAXYS24128",
      price: 799.99,
      originalPrice: 799.99,
      currency: "USD",
      stock: {
        quantity: 200,
        warehouse: "LA-01",
        reserved: 5,
        available: 195
      },
      specifications: {
        color: "Phantom Black",
        storage: "128GB",
        ram: "8GB",
        screenSize: "6.2 inch",
        battery: "4100mAh"
      },
      images: [
        { url: "https://example.com/samsung1.jpg", isPrimary: true, alt: "Galaxy S24" }
      ],
      ratings: {
        average: 4.5,
        count: 890,
        distribution: {
          5: 600,
          4: 200,
          3: 60,
          2: 20,
          1: 10
        }
      },
      tags: ["android", "5G", "premium"],
      features: ["5G", "Fast Charging", "Water Resistant"],
      isActive: true,
      isFeatured: false,
      viewCount: 8900,
      salesCount: 198,
      createdAt: new Date("2024-02-01T00:00:00Z"),
      updatedAt: new Date("2024-10-08T10:00:00Z")
    },
    {
      _id: ObjectId("607f1f77bcf86cd799439023"),
      name: "Sony WH-1000XM5",
      slug: "sony-wh-1000xm5",
      description: "Premium noise-cancelling headphones",
      category: "Electronics",
      subCategory: "Audio",
      brand: "Sony",
      sku: "SONYWH1000XM5",
      price: 349.99,
      originalPrice: 399.99,
      discount: {
        type: "fixed",
        value: 50,
        startDate: new Date("2024-10-01T00:00:00Z"),
        endDate: new Date("2024-12-31T23:59:59Z")
      },
      currency: "USD",
      stock: {
        quantity: 75,
        warehouse: "NYC-01",
        reserved: 3,
        available: 72
      },
      specifications: {
        color: "Black",
        connectivity: "Bluetooth 5.2",
        batteryLife: "30 hours",
        weight: "250g"
      },
      images: [
        { url: "https://example.com/sony1.jpg", isPrimary: true, alt: "Sony headphones" }
      ],
      ratings: {
        average: 4.8,
        count: 2100,
        distribution: {
          5: 1800,
          4: 250,
          3: 40,
          2: 8,
          1: 2
        }
      },
      tags: ["audio", "noise-cancelling", "wireless", "premium"],
      features: ["Active Noise Cancellation", "30hr Battery", "Multipoint Connection"],
      isActive: true,
      isFeatured: true,
      viewCount: 12500,
      salesCount: 456,
      createdAt: new Date("2024-03-01T00:00:00Z"),
      updatedAt: new Date("2024-10-09T08:00:00Z")
    }
  ]);