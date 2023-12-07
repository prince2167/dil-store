import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
      <div className="flex flex-shrink-0 items-center">
        <Link href="/">
          <h2 className="text-red-500 text-3xl font-bold">Dils-Store</h2>
        </Link>
      </div>
    </div>
  );
};

export default Logo;
