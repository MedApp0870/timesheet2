import React, { useContext, useEffect, useState } from "react";
import Select from 'react-select';
import Context from '../../../Context/Context';
import axios from "axios";


const EditEmployee = () => {
    const {
        employeeId,
        firstName,
        lastName,
        status,
        leadId,
        leadName,
      } = useContext(Context);

      const [value, setValue]=useState({value: status.status, label: status.status});
      const [leadValue, setLeadValue]=useState({value:leadId.l_id , label: leadName.l_name});
      const [l_option, setL_Option] = useState([]);

      

    const selectStyle = {
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused ? 'none' : 'none',
          padding: 1,
          backgroundColor: "white"
        }),
      }
      const options = [
        { value: 'active', label: 'active' },
        { value: 'inactive', label: 'inactive' }
      ];

   
    //   const handelFetchLead = () => {
    //     axios
    //       .get('https://timesheetapplication.onrender.com/employee')
    //       .then((res) => {
    //         const newOptions = res.data.data.map((e) => ({ value: e.leadId, label: e.leadName }));
    //         setL_Option(newOptions);
    //         console.log(newOptions)
    //       })
    //       .catch((err) => {
    //         console.log('Data Process Error');
    //         console.log(err.message)
    //       });
    //   }



      const handelFetchLead = () => {
        axios
          .get('https://timesheetapplication.onrender.com/employee')
          .then((res) => {
            const uniqueLeads = [];
            const seenIds = new Set();
      
            res.data.data.forEach((lead) => {
              if (!seenIds.has(lead.leadId)) {
                uniqueLeads.push({ value: lead.leadId, label: lead.leadName });
                seenIds.add(lead.leadId);
              }
            });
      
            setL_Option(uniqueLeads);
            console.log(uniqueLeads);
          })
          .catch((err) => {
            console.log('Data Process Error');
            console.log(err.message);
          });
      };

      useEffect(() => { 
         handelFetchLead()
      },[])

    return (
        <div className="flex flex-col px-20 py-12">
            <span className='text-4xl font-medium text-slate-500'>{firstName.fName+' '+lastName.lName}</span>
            <div className="flex flex-col mt-10 px-10 py-8 w-full bg-white rounded-md shadow-2xl">
                <span className='text-2xl font-medium text-slate-500'>Employee Info</span>
                <div className=" flex justify-between items-center w-1/2 mt-5">
                    <span className='font-medium text-lg text-slate-500'>Status</span>
                    <div className=" w-8/12">
                    <Select styles={selectStyle} options={options} defaultValue={value} onChange={setValue} isSearchable />
                    </div>
                </div>
                <div className="w-full h-0.5 bg-slate-200 mt-6 mb-6"></div>
                <div className="mb-4">
                    <span className='text-2xl font-medium text-slate-500'>Lead Info</span>
                </div>
                <div className="grid grid-cols-2 mt-10">
                    <div className=" flex justify-between items-center w-full mb-20">
                        <span className='font-medium text-lg text-slate-500'>Lead</span>
                        <div className="w-8/12">
                        <Select className=" w-80" styles={selectStyle} options={l_option} defaultValue={leadValue} onChange={setLeadValue} isSearchable />
                    
                        </div>
                    </div>
                    <div className=" flex justify-between items-center w-full mb-20">
                        <span className='font-medium text-lg text-slate-500'>Effective Form</span>
                        <div className="w-8/12">
                            <input className='outline-none cursor-pointer border-5 border-gray-400 bg-slate-100  rounded px-4 py-2 mr-2 w-11/12 font-normal text-lg' type="date" />
                            {/* <select className='outline-none border-5 border-gray-400 bg-slate-100  rounded px-20 py-2 mr-2 w-11/12'>
                                <option></option>
                            </select> */}
                        </div>
                    </div>
                    <div className=" flex justify-between items-center w-full">
                        <span className='font-medium text-lg text-slate-500'>Requested By</span>
                        <div className="w-8/12">
                        <Select className="w-80" styles={selectStyle} options={options} defaultValue={value} onChange={setValue} isSearchable />
                        </div>
                    </div>
                    <div className=" flex justify-between items-center w-full">
                        <span className='font-medium text-lg text-slate-500'>Reason</span>
                        <div className="w-8/12">
                        <Select className="w-80" styles={selectStyle} options={options} defaultValue={value} onChange={setValue} isSearchable />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-end gap-10 w-full relative bottom-9 left-0 ... mt-20">
                <button className='relative inline-flex px-8 py-3 bg-gray-200 font-semibold text-xl text-gray-400 traking-widset rounded-full border-solid border-2 border-gray-400 ... mr-12'>Save</button>
                </div>
            </div>
        </div>
    )
}
export default EditEmployee;