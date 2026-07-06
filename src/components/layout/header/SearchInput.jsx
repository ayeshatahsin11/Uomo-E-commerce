import React from "react";
import { Search } from "lucide-react";
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select";
const SearchInput = () => {
  return (
    <>
      <div className="w-136 h-12.5 flex items-center relative">
        <input
          type="text"
          className="w-full h-full bg-white rounded-sm  pl-5"
          placeholder="Search Products..."
        />
        <div className="flex items-center gap-4.25 absolute right-4">
          <NativeSelect
            className="w-30 text-primary-black text-sm font-normal leading-6"
            selectClassName="border-none cursor-pointer"
          >
            <NativeSelectOption value="">All Category</NativeSelectOption>
            <NativeSelectOption value="Fruits">Fruits</NativeSelectOption>
            <NativeSelectOption value="Vegetables">Vegetables</NativeSelectOption>
            <NativeSelectOption value="Nuts">Nuts</NativeSelectOption>
            <NativeSelectOption value="Oil">
              Oil
            </NativeSelectOption>
          </NativeSelect>
          <Search className="cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default SearchInput;
