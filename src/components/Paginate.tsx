import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Paginate = ({
  items,
  getCurrentItems,
}: {
  items: any;
  getCurrentItems: Function;
}) => {
  const data = items.slice(0, 10);
  console.log(data);
  const [currentItems, setCurrentItems] = useState(data);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(10);
  const itemsPerPage = 10;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
    getCurrentItems(currentItems);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        containerClassName="pagination"
        pageLinkClassName="page__num"
        previousLinkClassName="page__prev"
        nextLinkClassName="page__prev"
        activeLinkClassName="page__active"
        // @ts-ignore
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Paginate;
