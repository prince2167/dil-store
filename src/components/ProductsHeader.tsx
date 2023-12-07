import { sortOptions } from "@/constants";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { Fragment } from "react";

interface Props {
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}
const ProductsHeader = ({ sortBy, setSortBy }: Props) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          New Arrivals
        </h1>

        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
              Sort
              <ChevronDownIcon
                className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {sortOptions.map((option) => (
                  <Menu.Item key={option.name}>
                    <div
                      className={classNames(
                        option.value === sortBy
                          ? "font-medium text-red-500"
                          : "text-gray-500",
                        "block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                      )}
                      onClick={() => setSortBy(option.value)}
                    >
                      {option.name}
                    </div>
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default ProductsHeader;
