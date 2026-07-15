"use client";
import ReactPaginate from "react-paginate";
import React, { useState, useEffect, useRef } from "react";

const Paginate = ({
  items = [],
  itemsPerPage = 8,
  renderItem,
  wrapperClassName = "",
}) => {
  const [itemOffset, setItemOffset] = useState(0);
  const sectionRef = useRef(null); // product grid er top ke target korbo

  useEffect(() => {
    setItemOffset(0);
  }, [items]);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);

    // document top er bodole, ei component er nijer top e scroll hobe
    // (mane hero banner na dekhiye, sorasori "sort/view bar" ba grid er top e niye jabe)
    if (sectionRef.current) {
      const yOffset = -100; // fixed header er height baad dewar jonno, offset adjust koro
      const y =
        sectionRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  if (!items.length) {
    return (
      <p className="text-sm text-gray-500 text-center py-10">
        No products found.
      </p>
    );
  }

  return (
    <div ref={sectionRef}>
      <div className={wrapperClassName}>
        {currentItems.map((item) => renderItem(item))}
      </div>

      {pageCount > 1 && (
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel="< Previous"
          renderOnZeroPageCount={null}
          forcePage={itemOffset / itemsPerPage}
          className="flex items-center justify-center gap-4 mt-10 text-sm"
          pageLinkClassName="size-9 flex items-center justify-center rounded-full bg-[#F5EDDF] text-secondary  border border-gray-300 hover:bg-gray-100 duration-200 cursor-pointer"
          activeLinkClassName="!bg-secondary !text-[#F5EDDF] !border-[#22331F]"
          previousLinkClassName="px-3 py-2 border border-gray-300 bg-[#F5EDDF] text-secondary font-bold  rounded-full hover:bg-gray-100 duration-200 cursor-pointer"
          nextLinkClassName="px-3 py-2 border border-gray-300 bg-[#F5EDDF] text-secondary font-bold rounded-full hover:bg-gray-100 duration-200 cursor-pointer"
          breakLinkClassName="px-2"
          disabledLinkClassName="opacity-60 cursor-not-allowed!"
        />
      )}
    </div>
  );
};

export default Paginate;