import React, { useState,useRef,useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaAngleDown } from 'react-icons/fa';



export default function Checkbox ({carmake}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPersons, setSelectedPersons] = useState([]);
  const [dropDown, setDropDown] = useState(false);

  const people = Object.keys(carmake[0])

  console.log("peplee" ,people)

  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref?.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);

  function isSelected(value) {
    return selectedPersons.find((el) => el === value) ? true : false;
  }

  function handleSelect(value) {
    if (!isSelected(value)) {
      const selectedPersonsUpdated = [
        ...selectedPersons,
        people.find((el) => el === value)
      ];
      setSelectedPersons(selectedPersonsUpdated);
    } else {
      handleDeselect(value);
    }
    setIsOpen(true);
  }

  function handleDeselect(value) {
    const selectedPersonsUpdated = selectedPersons.filter((el) => el !== value);
    setSelectedPersons(selectedPersonsUpdated);
    setIsOpen(true);
  }

  return (
    <div className="flex items-center justify-center mx-[11px]">
      <div className="w-full max-w-xs mx-auto">
        <Listbox
          as="div"
          className="space-y-1"
          value={selectedPersons}
          onChange={(value) => handleSelect(value)}
          open={isOpen}
        >
          {() => (
            <>
              <div className="relative">
                <span className="inline-block w-full rounded-md shadow-sm">
                  <Listbox.Button
                    className="cursor-default relative w-full rounded-[10px] border border-gray-300 bg-white px-[16px] py-[14px] text-left focus:outline-none focus:shadow-outline-blue focus:border-[#FF8800] hover:border-[#FF8800] transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    onClick={() => setIsOpen(!isOpen)}
                    open={isOpen}
                  >
                    <span className="block truncate max-w-[200px] font-[600] text-[14px] leading-[20px] text-[#28293D] ">
                      {selectedPersons.length < 1
                        ? `Select Make`
                        : `${selectedPersons}`}
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                        <FaAngleDown size={16} className={` ${dropDown ?  "rotate-180 fill-[#ff5000] ": "rotate-0 " } transition-all ease-in-out duration-200`} />
                    </span>
                  </Listbox.Button>
                </span>

                <Transition
                  unmount={false}
                  show={isOpen}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  className="absolute mt-1 w-full rounded-md bg-white shadow-lg"
                  onClick={() => setIsOpen(!isOpen)}
                  ref={ref}
                >
                  <Listbox.Options
                    static
                    className="absolute top-[-60px] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white  text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  >
                    {people.map((person) => {
                      const selected = isSelected(person);
                      return (
                        <Listbox.Option key={person} value={person}>
                          {({ active }) => (
                            <div
                              className={`${
                                active
                                  ? "text-[#28293D] bg-[#FAFAFC]  overflow-hidden"
                                  : "text-[#28293D]"
                              } cursor-default select-none relative `}
                            >
                              <span
                                className={`${
                                  selected ? "font-[400] bg-[#FFF3EB]" : "font-normal"
                                } block truncate px-[16px] py-[10px] flex justify-start`}
                              >
                                {person}
                              </span>
                              {selected && (
                                <span
                                  className={`${
                                    active ? "text-white" : "text-blue-600"
                                  } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                                >
                                </span>
                              )}
                            </div>
                          )}
                        </Listbox.Option>
                      );
                    })}
                  </Listbox.Options>
                </Transition>
                {/* <div className="pt-1 text-sm">
                  {selectedPersons.length > 0 && (
                    <>Selected persons: {selectedPersons.join(", ")}</>
                  )}
                </div> */}
              </div>
            </>
          )}
        </Listbox>
      </div>
    </div>
  );
}































































// import React, { useState } from "react";
// import { Listbox, Transition } from "@headlessui/react";

// const people = [
//   "Wade Cooper",
//   "Arlene Mccoy",
//   "Devon Webb",
//   "Tom Cook",
//   "Tanya Fox",
//   "Hellen Schmidt",
//   "Caroline Schultz",
//   "Mason Heaney",
//   "Claudie Smitham",
//   "Emil Schaefer"
// ];

// const Checkbox = ({carmake}) => {

//     const [isOpen, setIsOpen] = useState(false);
//     const [selectedPersons, setSelectedPersons] = useState([]);
  
//     function isSelected(value) {
//       return selectedPersons.find((el) => el === value) ? true : false;
//     }
  
//     function handleSelect(value) {
//       if (!isSelected(value)) {
//         const selectedPersonsUpdated = [
//           ...selectedPersons,
//           people.find((el) => el === value)
//         ];
//         setSelectedPersons(selectedPersonsUpdated);
//       } else {
//         handleDeselect(value);
//       }
//       setIsOpen(true);
//     }
  
//     function handleDeselect(value) {
//       const selectedPersonsUpdated = selectedPersons.filter((el) => el !== value);
//       setSelectedPersons(selectedPersonsUpdated);
//       setIsOpen(true);
//     }
            
  
//   return (
    


// <div className="flex items-center justify-center ">
// <div className="w-full max-w-xs mx-auto">
//   <Listbox
//     as="div"
//     className="space-y-1"
//     value={selectedPersons}
//     onChange={(value) => handleSelect(value)}
//     open={isOpen}
//   >
//     {() => (
//       <>
//         <div className="relative mx-[16px]  mt-[16px]">
//           <span className="inline-block w-full rounded-md shadow-sm">
//             <Listbox.Button
//               className="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-[#FF8800] transition ease-in-out duration-150 sm:text-sm sm:leading-5"
//               onClick={() => setIsOpen(!isOpen)}
//               open={isOpen}
//             >
//               <span className="block truncate">
//                 {selectedPersons.length < 1
//                   ? "Select persons"
//                   : ` ${selectedPersons.join(",")}`}
//               </span>
//               <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
//                 <svg
//                   className="h-5 w-5 text-gray-400"
//                   viewBox="0 0 20 20"
//                   fill="none"
//                   stroke="currentColor"
//                 >
//                   <path
//                     d="M7 7l3-3 3 3m0 6l-3 3-3-3"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </span>
//             </Listbox.Button>
//           </span>

//           <Transition
//             onClick={() => setIsOpen(!isOpen)}
//             unmount={false}
//             show={isOpen}
//             leave="transition ease-in duration-100"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//             className="absolute mt-1 w-full rounded-md bg-white shadow-lg"
//           >
//             <Listbox.Options
//               static
//               className="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
//             >
//               {people.map((person) => {
//                 const selected = isSelected(person);
//                 return (
//                   <Listbox.Option key={person} value={person}>
//                     {({ active }) => (
//                       <div
//                         className={`${
//                           active
//                             ? "text-white bg-blue-600"
//                             : "text-gray-900"
//                         } cursor-default select-none relative py-2 pl-8 pr-4`}
//                       >
//                         <span 
//                           className={`${
//                             selected ? "font-semibold" : "font-normal"
//                           } block truncate`}
//                         >
//                           {person}
//                         </span>
//                         {selected && (
//                           <span
//                             className={`${
//                               active ? "text-white" : "text-blue-600"
//                             } absolute inset-y-0 left-0 flex items-center pl-1.5`}
//                           >
//                             <svg
//                               className="h-5 w-5"
//                               xmlns="http://www.w3.org/2000/svg"
//                               viewBox="0 0 20 20"
//                               fill="currentColor"
//                             >
//                               <path
//                                 fillRule="evenodd"
//                                 d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                                 clipRule="evenodd"
//                               />
//                             </svg>
//                           </span>
//                         )}
//                       </div>
//                     )}
//                   </Listbox.Option>
//                 );
//               })}
//             </Listbox.Options>
//           </Transition>
//           <div className="pt-1 text-sm">
//             {selectedPersons.length > 0 && (
//               <>Selected persons: {selectedPersons.join(", ")}</>
//             )}
//           </div>
//         </div>
//       </>
//     )}
//   </Listbox>
// </div>
// </div>
//   )
// }

// export default Checkbox