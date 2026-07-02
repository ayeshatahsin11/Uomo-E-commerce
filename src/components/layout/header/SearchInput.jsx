import React from "react";
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select";
const SearchInput = () => {
  return (
    <>
      <input
        type="text"
        className="w-136 bg-white rounded-sm h-12.5 pl-5"
        placeholder="Search Products..."
      />
      <div>
        <NativeSelect className="w-30 text-primary-black text-sm ">
          <NativeSelectOption value="">All Category</NativeSelectOption>
          <NativeSelectOption value="apple">Apple</NativeSelectOption>
          <NativeSelectOption value="banana">Banana</NativeSelectOption>
          <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
          <NativeSelectOption value="pineapple">Pineapple</NativeSelectOption>
        </NativeSelect>
      </div>
    </>
  );
};

export default SearchInput;
