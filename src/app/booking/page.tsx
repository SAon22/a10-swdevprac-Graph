import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import getUserProfile from "@/libs/getUserProfile";

export default async function ManageBookings() {

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)
    
    return (
        <main className="bg-slate-100 m-5 p-5">
            <div className="text-2xl">{profile.data.name}</div>
            <table className="table-auto border-seperate border-spacing-2"><tbody>
                <tr>
                    <td>Email:</td>
                    <td>{profile.data.email}</td>
                </tr>
                <tr>
                    <td>Tel.:</td>
                    <td>{profile.data.tel}</td>
                </tr>
                <tr>
                    <td>Member Since:</td>
                    <td>{createdAt.toString()}</td>
                </tr>
            </tbody></table>
        </main>
    );
}
// import DateReserve from "@/components/DateReserve"
// import { TextField, Select, MenuItem } from "@mui/material"
// export default function Bookings() {
//     return (
//         <main className="w-[100%] flex flex-col items-center space-y-4">
//             <div className="text-xl font-medium">New Booking</div>

//             <TextField variant="standard" name="Name-Lastname" label="Name-Lastname"/>

//             <TextField variant="standard" name="Contact-Number" label="Contact-Number"/>

//             <Select variant="standard" id="venue"
//             className="h-[2em] w-[200px]">
//                 <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
//                 <MenuItem value="Spark">Spark Space </MenuItem>
//                 <MenuItem value="GrandTable">The Grand Table</MenuItem>
//             </Select>

//             <DateReserve/>

//             <button name="Book Venue"
//             className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
//             text-white shadow-sm">
//                 Book Venue
//             </button>

//         </main>
//     );
// }