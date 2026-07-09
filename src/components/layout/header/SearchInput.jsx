// import React from "react";
// import { Search } from "lucide-react";
// import {
//   NativeSelect,
//   NativeSelectOptGroup,
//   NativeSelectOption,
// } from "@/components/ui/native-select";
// const SearchInput = () => {
//   return (
//     <>
//       <div className={`hidden md:flex w-136 h-12.5  items-center relative`}>
//         <input
//           type="text"
//           className="w-full h-full bg-white rounded-sm  pl-5"
//           placeholder="Search Products..."
//         />
//         <div className="flex items-center gap-4.25 absolute right-4">
//           <NativeSelect
//             className="w-30 text-primary-black text-sm font-normal leading-6"
//             selectClassName="border-none cursor-pointer"
//           >
//             <NativeSelectOption value="">All Category</NativeSelectOption>
//             <NativeSelectOption value="Fruits">Fruits</NativeSelectOption>
//             <NativeSelectOption value="Vegetables">Vegetables</NativeSelectOption>
//             <NativeSelectOption value="Nuts">Nuts</NativeSelectOption>
//             <NativeSelectOption value="Seeds">
//               Seeds
//             </NativeSelectOption>
//           </NativeSelect>
//           <Search className="cursor-pointer" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default SearchInput;

import React from "react";
import { Search } from "lucide-react";
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select";

const SearchInput = ({ variant = "desktop" }) => {
  const isMobile = variant === "mobile";

  return (
    <div
      className={
        isMobile
          ? "flex w-full h-12 items-center relative"
          : "hidden md:flex w-136 h-12.5 items-center relative"
      }
    >
      <Search className="md:hidden -ml-4 mr-1 cursor-pointer"/>
      <input
        type="text"
        className={`w-full h-full bg-white rounded-sm pl-1 md:pl-5 ${
          isMobile ? "pr-28" : ""
        }`}
        placeholder="Search Products..."
      />
      <div className="flex items-center md:gap-4.25 absolute right-0 md:right-4">
        <NativeSelect
          className="w-30 text-primary-black text-sm font-normal leading-6"
          selectClassName="border-none cursor-pointer"
        >
          <NativeSelectOption value="">All Category</NativeSelectOption>
          <NativeSelectOption value="Fruits">Fruits</NativeSelectOption>
          <NativeSelectOption value="Vegetables">Vegetables</NativeSelectOption>
          <NativeSelectOption value="Nuts">Nuts</NativeSelectOption>
          <NativeSelectOption value="Seeds">Seeds</NativeSelectOption>
        </NativeSelect>
        <Search className="cursor-pointer hidden md:block" />
      </div>
    </div>
  );
};

export default SearchInput;