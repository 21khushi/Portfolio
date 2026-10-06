'use client';

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProjectFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-16">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 border ${
            activeCategory === category
              ? 'bg-[#7B6EF6] border-[#7B6EF6] text-white shadow-[0_0_20px_rgba(123,110,246,0.3)]'
              : 'bg-[#141414] border-[#2A2A2A] text-[#888780] hover:border-[#3A3A3A] hover:text-white'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
