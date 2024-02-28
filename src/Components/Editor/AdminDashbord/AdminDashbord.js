import React from "react";
const AdminDashbord = () => {
    const apiData = [{
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere ",
        "body": "quia et suscipit\nsusc"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "sunt aut facere ",
        "body": "quia et suscipit\nsusc"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "sunt aut facere ",
        "body": "quia et suscipit\nsusc"
    },
    {
        "userId": 1,
        "id": 4,
        "title": "sunt aut facere ",
        "body": "quia et suscipit\nsusc"
    },
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere ",
        "body": "quia et suscipit\nsusc"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "sunt aut facere ",
        "body": "quia et suscipit\nsusc"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "sunt aut facere ",
        "body": "quia et suscipit\nsusc"
    },
    {
        "userId": 1,
        "id": 4,
        "title": "sunt aut facere ",
        "body": "quia et suscipit\nsusc"
    }
    ]
    const apiData1 = [
        {
            name: 'rakesh',
            project: [
                {
                    projectName: 'demo',
                    task: 'hello',
                    Billable: 'yes',
                    consumed_H: 0
                },
                {
                    projectName: 'demo',
                    task: 'hello',
                    Billable: 'yes',
                    consumed_H: 0
                }
            ]
        },
        {
            name: 'Shaw',
            project: [
                {
                    projectName: 'flutter',
                    task: 'flutter hello',
                    Billable: 'no',
                    consumed_H: 0
                },
                {
                    projectName: 'demo',
                    task: 'hello',
                    Billable: 'yes',
                    consumed_H: 0
                }
            ]
        },
        {
            name: 'rakesh',
            project: [
                {
                    projectName: 'React',
                    task: 'Angular',
                    Billable: 'yes',
                    consumed_H: 10
                },
            ]
        }
    ]
    return (
        <div className="flex flex-col ml-6 lg:ml-8 mr-2 lg:mr-5 mt-2 lg:mt-5 mb-2 lg:mb-5 overflow-auto scrollbar-hide" style={{ height: '700px' }}>
            <div>
                <span className="text-lg lg:text-3xl font-medium text-slate-500">Welcome, Rakesh Shaw</span>
            </div>
            <div className="mt-1">
                <span className="text-sm lg:text-xl font-base text-slate-500">Editor</span>
            </div>
            <div className=" w-full rounded-md bg-white mt-3 lg:mt-5 shadow-2xl ">
                <div className="flex justify-between ml-2 lg:ml-4 mr-3 lg:mr-10 mt-1">
                    <h3 className="font-bold text-base lg:text-xl text-slate-800">Direct Repotees Timesheet</h3>
                    <div className='relative inline-flex px-0 py-0 border-solid border-2 border-gray-400'>
                        <select className="outline-none hover:bg-gray-200 py-0.5">
                            <option>2023</option>
                            <option>2022</option>
                        </select>
                    </div>
                </div>
                <div className="w-11/12 h-0.5 bg-slate-200 rounded-full ml-3 lg:ml-5 mt-1 lg:mt-2"></div>
                <div className="grid grid-cols-2 lg:flex lg:justify-evenly lg:gap-2 ml-1 lg:ml-3 mb-1 lg:mb-4 overflow-y-auto lg:overflow-none h-60 lg:h-48">
                    <div className="flex flex-col justify-center items-center ">
                        <div className="flex flex-col justify-center items-center lg:gap-3 h-20 w-20 lg:h-28 lg:w-28 mt-3 lg:mt-6 mb-2 lg:mb-3 rounded-full border-solid border-2 border-gray-400">
                            <span className="font-bold">0</span>
                            <span className="font-semibold text-xs text-gray-500">Not Start</span>
                        </div>
                        <div>
                            <span className="font-normal text-xs">Last drafted on</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center ">
                        <div className="flex flex-col justify-center items-center lg:gap-3 h-20 w-20 lg:h-28 lg:w-28 mt-3 lg:mt-6 mb-2 lg:mb-3 rounded-full border-solid border-2 border-gray-400">
                            <span className="font-bold">0</span>
                            <span className="font-semibold text-xs text-orange-400">Drafts</span>
                        </div>
                        <div>
                            <span className="font-normal text-xs">Last drafted on</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-col justify-center items-center lg:gap-3 h-20 w-20 lg:h-28 lg:w-28 mt-3 lg:mt-6 mb-2 lg:mb-3 rounded-full border-solid border-2 border-gray-400">
                            <span className="font-bold">0</span>
                            <span className="font-semibold text-xs text-blue-600 ">Submited</span>
                        </div>
                        <div>
                            <span className="font-normal text-xs">Last submited on</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-col justify-center items-center lg:gap-1 h-20 w-20 lg:h-28 lg:w-28 mt-3 lg:mt-6 mb-2 lg:mb-3 rounded-full border-solid border-2 border-gray-400">
                            <span className="font-bold">0</span>
                            <div className="flex flex-col justify-center items-center">
                                <span className="font-normal lg:font-semibold text-xs text-sky-400">Partially</span>
                                <span className="font-normal lg:font-semibold text-xs text-sky-400">submitted</span>
                            </div>
                        </div>
                        <div className="ml-6 lg:ml-0">
                            <span className="font-normal text-xs ">Last partially submited on</span>
                        </div>
                        {/* <span className="font-normal text-xs">on</span> */}
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-col justify-center items-center lg:gap-3 h-20 w-20 lg:h-28 lg:w-28 mt-0 lg:mt-6 mb-2 lg:mb-3 rounded-full border-solid border-2 border-gray-400">
                            <span className="font-bold">0</span>
                            <span className="font-semibold text-xs text-emerald-600">Approved</span>
                        </div>
                        <div>
                            <span className="font-normal text-xs">Last drafted on</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="container flex flex-col justify-center items-center lg:gap-1 h-20 w-20 lg:h-28 lg:w-28 mt-3 lg:mt-6 mb-2 lg:mb-3 rounded-full border-solid border-2 border-gray-400">
                            <span className="font-bold">0</span>
                            <div className="flex flex-col justify-center items-center">
                                <span className="font-normal lg:font-semibold text-xs text-green-500">Partially</span>
                                <span className="font-normal lg:font-semibold text-xs text-green-500">Approved</span>
                            </div>
                        </div>
                        <div className="ml-6 lg:ml-0">
                            <span className="font-normal text-xs">Last partially approved on</span>
                        </div>
                        {/* <span className="font-normal text-xs">on</span> */}
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="container flex flex-col justify-center items-center lg:gap-3 h-20 w-20 lg:h-28 lg:w-28 mt-3 lg:mt-6 mb-2 lg:mb-3 rounded-full border-solid border-2 border-gray-400">
                            <span className="font-bold">0</span>
                            <span className="font-semibold text-xs text-red-600">Rejected</span>
                        </div>
                        <div>
                            <span className="font-normal text-xs">Last rejected on</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-6 w-full">
                <div className="w-full lg:w-1/3 h-40 lg:h-80 rounded-md bg-white mt-2 lg:mt-4 shadow-2xl overflow-x-auto">
                    <h3 className="font-bold text-base lg:text-xl text-slate-800 mb-1 mt-1 px-6">All Repotees</h3>
                    <div className="w-11/12 h-0.5 bg-slate-200 rounded-full ml-3 lg:ml-4"></div>
                </div>
                <div className=" w-full lg:w-2/3 h-60 lg:h-80 rounded-md bg-white mt-2 lg:mt-4 shadow-2xl">
                    <div className="flex justify-between ml-4 mr-10 mt-1">
                        <h3 className="font-bold text-base lg:text-xl text-slate-800">Claimed Task</h3>
                        <div className='relative inline-flex px-0 py-0 border-solid border-2 border-gray-400'>
                            <select className="outline-none hover:bg-gray-200 py-0.5">
                                <option>2023</option>
                                <option>2022</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-11/12 h-0.5 bg-slate-200 rounded-full ml-5 mt-2"></div>
                    <div className="flex flex-col">
                        <div className="flex justify-between gap-2 lg:gap-0">
                            <span className="w-1/5 py-1 font-semibold text-center text-xs">Name</span>
                            <span className="w-1/5 py-1 font-semibold text-center text-xs">Project</span>
                            <span className="w-1/5 py-1 font-semibold text-center text-xs">Task</span>
                            <span className="w-1/5 py-1 font-semibold text-center text-xs">Billable</span>
                            <span className="w-1/5 py-1 font-semibold text-center text-xs">Consumed Hours</span>
                        </div>
                        <div className="px-1 lg:px-0 overflow-auto scrollbar-hide h-32 lg:h-60">
                            {/* {apiData1.map((e, i) => (
                                <div key={i} className="flex justify-between gap-2 lg:gap-0 mb-2">
                                    <span className="w-1/5 py-1 text-xs text-center font-normal">{e.name}</span>
                                     {e.project.map((tasks, index)=>{
                                        <div key={index} className="flex w-4/5 h-28 overflow-auto">
                                        <span className="w-1/5 py-1 text-xs text-center font-normal">{tasks.projectName}</span>
                                         <span className="w-1/5 py-1 text-xs text-center font-normal">{tasks.task}</span>
                                         <span className="w-1/5 py-1 text-xs text-center font-normal">{tasks.Billable}</span>
                                         <span className="w-1/5 py-1 text-xs text-center font-normal">{tasks.consumed_H}</span>
                                        </div>
                                     })}
                                </div>
                            ))} */}
                            
            {apiData1.map((person, index) => (
                <div key={index} className="flex">
                    <span className="w-1/5 py-1 text-xs text-center font-normal">{person.name}</span>
                    
                        {person.project.map((project, projIndex) => (
                             <div key={projIndex} className="flex w-4/5 h-28 overflow-auto">
                             <span className="w-1/5 py-1 text-xs text-center font-normal">{project.projectName}</span>
                              <span className="w-1/5 py-1 text-xs text-center font-normal">{project.task}</span>
                              <span className="w-1/5 py-1 text-xs text-center font-normal">{project.Billable}</span>
                              <span className="w-1/5 py-1 text-xs text-center font-normal">{project.consumed_H}</span>
                             </div>
                        ))}
                    
                </div>
            ))}
       
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-6 w-full">
                <div className="w-full lg:w-1/3 h-40 lg:h-80 rounded-md bg-white mt-2 lg:mt-4 shadow-2xl overflow-x-auto">
                    <h3 className="font-bold text-base lg:text-xl text-slate-800 mb-1 mt-1 px-6">All Repotees</h3>
                    <div className="w-11/12 h-0.5 bg-slate-200 rounded-full ml-3 lg:ml-4"></div>
                </div>
                <div className=" w-full lg:w-2/3 h-60 lg:h-80 rounded-md bg-white mt-2 lg:mt-4 shadow-2xl">
                    <div className="flex justify-between ml-4 mr-10 mt-1">
                        <h3 className="font-bold text-base lg:text-xl text-slate-800">Claimed Task</h3>
                        <div className='relative inline-flex px-0 py-0 border-solid border-2 border-gray-400'>
                            <select className="outline-none hover:bg-gray-200 py-0.5">
                                <option>2023</option>
                                <option>2022</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-11/12 h-0.5 bg-slate-200 rounded-full ml-5 mt-2"></div>
                    <div className="flex flex-col">
                        <div className="flex justify-between gap-2 lg:gap-0">
                            <span className="w-1/5 py-1 font-semibold text-center text-xs">Name</span>
                            <span className="w-1/5 py-1 font-semibold text-center text-xs">Week</span>
                            <span className="w-1/5 py-1 font-semibold text-center text-xs">Total Hours</span>
                            <span className="w-1/5 py-1 font-semibold text-center text-xs">Status</span>
                            <span className="w-1/5 py-1 font-semibold text-center text-xs"></span>
                        </div>
                        <div className="px-1 lg:px-0 overflow-auto scrollbar-hide h-32 lg:h-60">
                            {apiData.map((e, i) => (
                                <div className="flex justify-between gap-2 lg:gap-0 mb-2">
                                    <span className="w-1/5 py-1 text-xs text-center font-normal">{e.title}</span>
                                    <span className="w-1/5 py-1 text-xs text-center font-normal">{e.title}</span>
                                    <span className="w-1/5 py-1 text-xs text-center font-normal">{e.body}</span>
                                    <span className="w-1/5 py-1 text-xs text-center font-normal">{e.title}</span>
                                    <span className="w-1/5 py-1 text-xs text-center font-normal">{e.body}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AdminDashbord;
