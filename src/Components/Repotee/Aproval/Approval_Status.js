import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GrNext } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import Show_Table from "./Show_Table";
import DatePicker from "react-datepicker";
import Context from "../../../Context/Context";
import { AiOutlineMail } from "react-icons/ai";
import { CiCircleCheck } from "react-icons/ci";
import 'react-datepicker/dist/react-datepicker.module.css';
import { format, startOfWeek, endOfWeek, addWeeks, subWeeks, addDays } from 'date-fns';
const Approval_Status = () => {
    const nav = useNavigate();
    const {approvals_Week,approvals_Id,approvals_TaskStatus,approvals_TotalHours,approvals_Task,approvals_EmpName,approvals_EmpEmail} = useContext(Context);
     const [data,setData] = useState(approvals_Task.task);
  
    const [selectedDate, setSelectedDate] = useState(new Date(approvals_Week.startDate));

    const startWeek = startOfWeek(selectedDate);
    const endWeek = endOfWeek(selectedDate);
    console.log(selectedDate);

    const getStatusColor = (status) => {
        switch (status) {
            case 'submit':
                return 'text-blue-500'; // Blue color
            case 'draft':
                return 'text-yellow-500'; // Yellow color
            case 'rejected':
                return 'text-red-500'; // Red color
            case 'approved':
            default:
                return 'text-green-500'; // Green color
        }
    }

     const handleEdit = (taskStatus) => {
        console.log('rakesh')
        // var u_date=new Date();
        // var updateDate=`${u_date.getFullYear()}-${u_date.getMonth+1}-${u_date.getDay}`
       axios
    .put(`https://timesheetapplication.onrender.com/updateApproval/${approvals_Id.id}`, {

            status:taskStatus
    })
    .then(res => {
     nav('/repotingLead/approvals')
      console.log('rohit shaw')
  
    })
    .catch(err => alert(err))
    }
  
  useEffect(() => {
    console.log(approvals_Task.task);
  },[]);
    return (
        <div className="flex flex-col mt-8 pl-6 pr-3 lg:px-12 lg:py-0 py-0" style={{ height: '700px' }}>
           <div className="flex justify-between">
           <span className="text-3xl font-medium text-slate-500">{approvals_EmpName.name}</span>
           <span className="text-xl font-medium text-slate-500">Total Hours</span>
           </div>
           <div className="flex justify-between">
           <div className=" flex gap-20 mt-6">
           <div className="flex items-centre justify-between  gap-4 ">
                  <AiOutlineMail  className="text-3xl font-medium text-slate-500"/>
                {/* <span className="text-xl font-medium text-slate-500">email icon </span> */}
                <span className="text-xl font-medium text-slate-500">{approvals_EmpEmail.email}</span>
            </div>
            <div className="flex justify-between items-center ">
                <div className="flex justify-between items-center">
                <SlCalender className="text-2xl ml-4 mr-4 font-medium text-slate-500" />
                    {/* <DatePicker className='invisible' selected={selectedDate} dateFormat="dd/MM/y" /> */}
                    <span className="text-xl font-medium text-slate-500">{`${format(startWeek, 'dd/MM/yyyy')} - ${format(endWeek, 'dd/MM/yyyy')}`}</span>

                </div>
                
            </div>
            <div className="flex items-center gap-4 ">
            <CiCircleCheck className="text-3xl font-medium text-slate-500" />
            
                <span  className={`text-xl font-medium ${getStatusColor(approvals_TaskStatus.status)}`}>{approvals_TaskStatus.status}</span>
            </div>
           
           </div>
           <div className="mt-6 ">
            <span className=" text-2xl font-medium text-slate-500"> {`${approvals_TotalHours.totalHours}h`} </span>
           </div>
           </div>
            <div className="flex mt-4" style={{ backgroundColor: `#b0c4de` }}>
                <div className="flex justify-center items-center py-4 w-5/12">
                    <span className="text-xl font-medium">Task</span>
                </div>
                <div className="flex w-8/12">
                    {[...Array(7)].map((_, index) => {
                        const currentDate = addDays(startWeek, index);
                        return (
                            <div className={`flex flex-col justify-center items-center px-8 ${index % 2 === 0 ? 'bg-slate-400' : ''}`} key={index}>
                                <span className="font-normal text-base">{format(currentDate, 'dd')}</span>
                                <span className="font-normal text-base">{format(currentDate, 'EEE')}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="flex flex-col bg-white overflow-auto scrollbar-hide pb-5" style={{ height: '400px' }}>
                {
                    data.map((e, index) => {
                        return <Show_Table
                            key={index}
                            index={index}
                            status={approvals_TaskStatus.status}
                            taskinfo={e}
                            // onDelete={deleteShowTable}
                            showDel={data.length > 1}
                            handleData={(weeklyHours, weeklyNotes, taskId, taskName) => {
                                const newData = [...data];
                                newData[index] = { weeklyHours, weeklyNotes, taskId, taskName };
                                setData(newData);
                            }} />
                    })
                }
            </div>
            <div className="flex justify-between items-center w-full mt-5">
                <div className="flex gap-3 items-center w-2/3">
                    <span className="text-lg font-normal text-slate-600">Upload file</span>
                    <div className="flex flex-col justify-center gap-2 bg-white border-solid border-2 border-gray-400 w-1/3 py-3 px-2">
                        <span className="text-xs">This is nothing attach</span>
                        <span className="text-xs">Attach file</span>
                    </div>
                    <span className="text-lg font-normal text-slate-600">View Upload:</span>
                </div>
                <div className='flex justify-end gap-10'>
                  {approvals_TaskStatus.status === 'submit' ?   <button className={true ? 'relative inline-flex px-8 py-3 bg-gray-200 font-semibold text-xl text-gray-400 traking-widset rounded-full border-solid border-2 border-gray-400 ' : 'relative inline-flex px-8 py-3 font-semibold text-xl traking-widset bg-slate-400  hover:bg-slate-600 hover:text-white rounded-full bg-gray-300' } onClick={()=>handleEdit('approved')} >Approved</button>: null}
                  {approvals_TaskStatus.status === 'submit' ||  approvals_TaskStatus.status === 'approved'?    <button className='relative inline-flex px-8 py-3 font-semibold text-xl traking-widset bg-slate-400  hover:bg-slate-600 hover:text-white rounded-full bg-gray-300 mr-10 ' onClick={()=>handleEdit('rejected')}>Reject</button>:  null}
                </div>
            </div>
        </div>
    )
}
export default Approval_Status;

 