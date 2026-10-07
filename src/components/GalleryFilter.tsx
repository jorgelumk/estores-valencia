"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";

interface GalleryItem {
  category: string;
  title: string;
  image: string;
  room: string;
}

interface GalleryFilterProps {
  items: GalleryItem[];
  filters: string[];
}

export function GalleryFilter({ items, filters }: GalleryFilterProps) {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredItems =
    activeFilter === "Todos"
      ? items
      : items.filter((item) => item.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <div className="space-y-8">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                isActive
                  ? "bg-[#0F3D5E] text-white shadow-md"
                  : "bg-white text-[#4A6378] border border-[#DCE8F2] hover:bg-[#F5F8FB]"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, idx) => (
          <div
            key={idx}
            className="card-brand overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            <div className="relative h-60 w-full overflow-hidden bg-[#E1EEF8]">
              <Image
                src={item.image}
                alt={`Idea decorativa estores valencia ${item.title}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#0F3D5E] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                {item.category}
              </div>
            </div>
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs text-[#2A7DB8] font-bold uppercase">{item.room}</span>
                <h3 className="font-heading font-bold text-base text-[#0F3D5E] group-hover:text-[#2A7DB8] transition-colors">
                  {item.title}
                </h3>
              </div>
              <div className="pt-2 border-t border-[#F5F8FB]">
                <Link
                  href="/presupuesto/"
                  className="text-xs font-bold text-[#2A7DB8] hover:underline flex items-center justify-between"
                >
                  <span>Pedir este estilo a medida</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
