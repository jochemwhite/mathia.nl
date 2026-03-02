import Link from "next/link";
import Image from "next/image";

type CompanyCardProps = {
  img: string;
  name: string;
  href: string;
};

export default function CompanyCard({ img, name, href }: CompanyCardProps) {
  return (
    <Link href={href}>
      <div className="flex flex-row items-center gap-2 relative  h-full w-full">
        <Image width="100" height="100" alt={name} src={img} />
      </div>
    </Link>
  );
}
