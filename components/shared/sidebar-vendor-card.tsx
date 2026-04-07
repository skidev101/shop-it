import Image from "next/image";

export interface SidebarVendorCardProps {
  name: string;
  category: string;
  location: string;
  image: string;
}

export function SidebarVendorCard({
  name,
  category,
  location,
  image,
}: SidebarVendorCardProps) {
  return (
    <div className="flex items-center gap-5 group cursor-pointer">
      <div className="h-16 w-16 bg-[#F5F5F7] rounded-2xl overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover p-2 mix-blend-multiply"
        />
      </div>
      <div>
        <h4 className="text-[15px] font-bold text-[#1A1A1A] group-hover:text-[#0047FF] transition-colors line-clamp-1">
          {name}
        </h4>
        <p className="text-[10px] text-[#999999] font-medium mt-0.5 tracking-tight">
          Certified from {location}
        </p>
        <span className="text-[9px] font-black text-[#E5E5E5] group-hover:text-[#0047FF]/20 uppercase tracking-[0.2em] block mt-1 transition-colors">
          {category}
        </span>
      </div>
    </div>
  );
}
