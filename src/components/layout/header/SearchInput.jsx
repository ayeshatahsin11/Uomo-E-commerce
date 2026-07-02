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
            selectClassName="border-none"
          >
            <NativeSelectOption value="">All Category</NativeSelectOption>
            <NativeSelectOption value="Skin-Care">Skin-care</NativeSelectOption>
            <NativeSelectOption value="Make-up">Make-Up</NativeSelectOption>
            <NativeSelectOption value="Hair">Hair</NativeSelectOption>
            <NativeSelectOption value="Tool & others">
              Tools & others
            </NativeSelectOption>
          </NativeSelect>
          <Search />
        </div>
      </div>
    </>
  );
};

export default SearchInput;
