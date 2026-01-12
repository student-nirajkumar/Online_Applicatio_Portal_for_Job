// import React from 'react'
// import { Badge } from './ui/badge'
// import { useNavigate } from 'react-router-dom'

// const LatestJobCards = ({job}) => {
//     const navigate = useNavigate();
//     return (
//         <div onClick={()=> navigate(`/description/${job._id}`)} className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
//             <div>
//                 <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
//                 <p className='text-sm text-gray-500'>India</p>
//             </div>
//             <div>
//                 <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
//                 <p className='text-sm text-gray-600'>{job?.description}</p>
//             </div>
//             <div className='flex items-center gap-2 mt-4'>
//                 <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position} Positions</Badge>
//                 <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
//                 <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary}LPA</Badge>
//             </div>

//         </div>
//     )
// }

// export default LatestJobCards


import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { toast } from "sonner"

const LatestJobCards = ({ job }) => {
    const navigate = useNavigate()

    const saveJobHandler = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(
                `http://localhost:8000/api/jobs/save/${job._id}`,
                {},
                { withCredentials: true }
            )
            if (res.data.success) {
                toast.success("Job saved for later")
            }
        } catch (error) {
            toast.error("Failed to save job")
        }
    }

    return (
        <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">

            {/* CLICKABLE JOB CARD */}
            <div
                onClick={() => navigate(`/description/${job._id}`)}
                className="cursor-pointer"
            >
                <div>
                    <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>

                <div>
                    <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                    <p className='text-sm text-gray-600'>{job?.description}</p>
                </div>

                <div className='flex items-center gap-2 mt-4'>
                    <Badge className='text-blue-700 font-bold' variant="ghost">
                        {job?.position} Positions
                    </Badge>
                    <Badge className='text-[#F83002] font-bold' variant="ghost">
                        {job?.jobType}
                    </Badge>
                    <Badge className='text-[#7209b7] font-bold' variant="ghost">
                        {job?.salary} LPA
                    </Badge>
                </div>
            </div>

            {/* SAVE BUTTON (OUTSIDE CLICKABLE CARD) */}
            <div className="mt-4">
                <button
                    onClick={saveJobHandler}
                    className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                >
                    Save For Later
                </button>
            </div>

        </div>
    )
}

export default LatestJobCards
