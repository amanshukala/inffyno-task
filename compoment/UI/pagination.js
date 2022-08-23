import { useEffect, useState } from "react";

import ReactPaginate from 'react-paginate';  

const pagination = () => {
  const [pageCount, setpageCount] = useState(58);

  
  const handlePageClick = async (data) => {
    console.log(data.selected);

  };

  return (
    <div>
       <ReactPaginate  
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick} 
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        containerClassName={"flex mt-[64px] pb-[101px] justify-center  gap-x-[27px]"}
        pageClassName={"flex items-center justify-center w-[36px] bg-[#FFFFFF] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB]"}
        
        pageLinkClassName= {"font-[500] text-[14px] text-[#555770]"}

        previousClassName={"bg-[#8F90A6] hover:bg-blue flex items-center justify-center w-[36px]  rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB]"}
        previousLinkClassName={""}
        nextClassName={"bg-black flex items-center justify-center w-[36px]  rounded-[6px] h-[36px] border-[1px] border-solid text-[white] border-[#E4E4EB]"}
        nextLinkClassName={""}
        breakClassName={"flex items-center justify-center w-[36px] bg-[#FFFFFF] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB]"}
        activeLinkClassName	={"text-blue"}
        activeClassName="border-black border-[2px] bg-[yellow] "

        
      />   
    </div>
  )
}

export default pagination;










