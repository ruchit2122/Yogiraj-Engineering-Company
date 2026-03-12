"use client";

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "../../hooks/useLenis";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Shield,
  Award,
  ArrowRight,
  CheckCircle2,
  Factory,
  Wrench,
} from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  images: string[];
  features?: string[];
  specifications?: { [key: string]: string };
}

const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Expansion Joints",
    category: "Process Equipment",
    description:
      "Engineered pumping systems for process, utility, and transfer applications across refineries, chemical plants, and water treatment facilities.",
    longDescription:
      "We design and supply complete pumping solutions for industrial duty from selection and sizing to skid fabrication, testing, and on-site commissioning. Built with precision engineering and premium materials for maximum reliability in harsh environments.",
    features: [
      "Advanced hydraulic design",
      "Energy-efficient operation",
      "Robust construction",
      "Low maintenance requirements",
      "Customizable configurations",
      "Extended operational life",
    ],
    specifications: {
      "Flow Rate": "50-500 GPM",
      Pressure: "Up to 300 PSI",
      Material: "Stainless Steel 316",
      Power: "5-50 HP",
      Warranty: "5 Years",
    },
    images: ["/h1.jpg", "/h2.jpg", "/h3.jpg"],
  },
  {
    id: 2,
    name: "Precision Pipeline Components",
    category: "Engineered Parts",
    description:
      "Custom-engineered parts for OEMs and heavy industry, manufactured to drawing with rigorous quality control and certified inspection.",
    longDescription:
      "High-precision machined components manufactured to drawing with rigorous quality control. Ideal for critical applications across process plants, power, and infrastructure.",
    features: [
      "High-precision manufacturing",
      "Premium grade materials",
      "Strict quality control",
      "Excellent durability",
      "Custom design options",
      "Technical support",
    ],
    specifications: {
      Tolerance: '±0.001"',
      Material: "Aerospace Grade Aluminum",
      Finish: "Anodized Type III",
      Testing: "100% Inspected",
      Certification: "ISO 9001",
    },
    images: ["/h2.jpg", "/h3.jpg", "/h1.jpg"],
  },
];

const ProductCard = React.memo(
  ({
    product,
    index,
    openProductModal,
  }: {
    product: Product;
    index: number;
    openProductModal: (product: Product) => void;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <div className="relative bg-white rounded-2xl overflow-hidden border border-slate-200 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-1">
        {/* Category Label */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider rounded-md">
            <Factory className="w-3 h-3" />
            {product.category}
          </span>
        </div>

        {/* Product Image */}
        <div className="relative h-72 md:h-80 overflow-hidden bg-slate-100">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {/* Bottom gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        {/* Product Info */}
        <div className="p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-5 line-clamp-2">
            {product.description}
          </p>

          {/* Key Features - compact pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {product.features
              ?.slice(0, 3)
              .map((feature: string, idx: number) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium rounded-md"
                >
                  <CheckCircle2 className="w-3 h-3 text-blue-600" />
                  {feature}
                </span>
              ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-slate-100 mb-5" />

          {/* Actions */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={() => openProductModal(product)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors"
            >
              <Wrench className="w-4 h-4" />
              View Specifications
            </button>
            <Link to="/contact">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 shadow-sm hover:shadow-md">
                Request Quote
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  ),
);

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"overview" | "specifications">(
    "overview",
  );
  useLenis();

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setSelectedImageIndex(0);
  };

  return (
    <div className="bg-slate-50">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            <Factory className="w-3.5 h-3.5" />
            Our Products
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Engineering Solutions & Products
          </h2>
          <div className="mx-auto w-16 h-1 bg-blue-600 rounded-full mb-5" />
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Turnkey mechanical and process solutions engineered for
            reliability across plants and Pipelines
          </p>
        </motion.div>
      </div>

      {/* Products Grid */}
      <div id="products-grid" className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {sampleProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              openProductModal={openProductModal}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-md">
                    {selectedProduct.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    {selectedProduct.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-2 rounded-lg hover:bg-slate-200 transition-colors"
                >
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>

              <div className="overflow-y-auto max-h-[calc(90vh-64px)]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Gallery */}
                  <div className="bg-slate-100 p-6">
                    <div className="relative aspect-square rounded-xl overflow-hidden bg-white shadow-inner">
                      <img
                        src={
                          selectedProduct.images[selectedImageIndex] ||
                          "/placeholder.svg"
                        }
                        alt={selectedProduct.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />

                      {/* Image Navigation */}
                      {selectedProduct.images.length > 1 && (
                        <div className="absolute inset-0 flex items-center justify-between p-3">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() =>
                              setSelectedImageIndex(
                                selectedImageIndex === 0
                                  ? selectedProduct.images.length - 1
                                  : selectedImageIndex - 1,
                              )
                            }
                            className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-md hover:bg-white transition-colors"
                          >
                            <ChevronLeft className="w-4 h-4 text-slate-700" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() =>
                              setSelectedImageIndex(
                                (selectedImageIndex + 1) %
                                  selectedProduct.images.length,
                              )
                            }
                            className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-md hover:bg-white transition-colors"
                          >
                            <ChevronRight className="w-4 h-4 text-slate-700" />
                          </motion.button>
                        </div>
                      )}
                    </div>

                    {/* Thumbnail Gallery */}
                    <div className="flex gap-2 mt-4">
                      {selectedProduct.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImageIndex(index)}
                          className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                            selectedImageIndex === index
                              ? "border-blue-600 ring-2 ring-blue-200"
                              : "border-slate-300 hover:border-slate-400"
                          }`}
                        >
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`${selectedProduct.name} ${index + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-6 md:p-8 space-y-5">
                    {/* Trust Badges */}
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-md">
                        <Shield className="w-3.5 h-3.5" />
                        <span className="text-xs font-semibold">
                          5-Year Warranty
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 border border-blue-100 text-blue-700 rounded-md">
                        <Award className="w-3.5 h-3.5" />
                        <span className="text-xs font-semibold">
                          ISO 9001:2015
                        </span>
                      </div>
                    </div>

                    {/* Tabs */}
                    <div className="border-b border-slate-200">
                      <div className="flex gap-6">
                        <button
                          onClick={() => setActiveTab("overview")}
                          className={`pb-3 text-sm font-semibold border-b-2 transition-colors ${
                            activeTab === "overview"
                              ? "border-blue-600 text-blue-700"
                              : "border-transparent text-slate-500 hover:text-slate-700"
                          }`}
                        >
                          Overview
                        </button>
                        <button
                          onClick={() => setActiveTab("specifications")}
                          className={`pb-3 text-sm font-semibold border-b-2 transition-colors ${
                            activeTab === "specifications"
                              ? "border-blue-600 text-blue-700"
                              : "border-transparent text-slate-500 hover:text-slate-700"
                          }`}
                        >
                          Technical Specifications
                        </button>
                      </div>
                    </div>

                    {/* Tab Content */}
                    <div className="min-h-[180px]">
                      {activeTab === "overview" && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="space-y-5"
                        >
                          <p className="text-slate-600 text-sm leading-relaxed text-left">
                            {selectedProduct.longDescription}
                          </p>

                          <div>
                            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
                              Key Capabilities
                            </h4>
                            <div className="grid grid-cols-1 gap-2">
                              {selectedProduct.features?.map(
                                (feature, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center gap-2.5"
                                  >
                                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                    <span className="text-sm text-slate-700">
                                      {feature}
                                    </span>
                                  </div>
                                ),
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeTab === "specifications" && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <div className="rounded-lg border border-slate-200 overflow-hidden">
                            {selectedProduct.specifications &&
                              Object.entries(
                                selectedProduct.specifications,
                              ).map(([key, value], idx) => (
                                <div
                                  key={key}
                                  className={`flex justify-between px-4 py-3 text-sm ${
                                    idx % 2 === 0 ? "bg-slate-50" : "bg-white"
                                  }`}
                                >
                                  <span className="font-semibold text-slate-800">
                                    {key}
                                  </span>
                                  <span className="text-slate-600">
                                    {value}
                                  </span>
                                </div>
                              ))}
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Action Button */}
                    <div className="pt-4">
                      <Link to="/contact" className="block">
                        <motion.button
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-blue-700 text-white rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg font-semibold text-sm"
                        >
                          Request a Quote
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;
