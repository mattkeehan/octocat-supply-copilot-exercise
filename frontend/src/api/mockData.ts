// Mock data for GitHub Pages deployment
// This matches the same data structure used in the API seedData.ts

export interface Product {
  productId: number;
  name: string;
  description: string;
  price: number;
  imgName: string;
  sku: string;
  unit: string;
  supplierId: number;
}

// Mock products data - matches api/src/seedData.ts
export const mockProducts: Product[] = [
    {
        productId: 1,
        supplierId: 1,
        name: "PowerTool Pro X1",
        description: "High-performance powertool",
        price: 1299.99,
        sku: "PWR-001",
        unit: "piece",
        imgName: "powertool.png"
    },
    {
        productId: 2,
        supplierId: 1,
        name: "Webcam Pro",
        description: "Ergonomic webcam",
        price: 49.99,
        sku: "WEB-001",
        unit: "piece",
        imgName: "webcam.png"
    },
    {
        productId: 3,
        supplierId: 2,
        name: "Rugged Hard Drive",
        description: "Advanced storage solution",
        price: 99.99,
        sku: "HDD-001",
        unit: "piece",
        imgName: "harddrive.png"
    },
    {
        productId: 4,
        supplierId: 2,
        name: "Mic Pro",
        description: "Advanced audio mic",
        price: 29.99,
        sku: "MIC-001",
        unit: "piece",
        imgName: "mic.png"
    }
];