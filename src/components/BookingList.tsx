"use client"
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeBooking } from "@/redux/features/bookSlice";
import { BookingItem } from "../../interface";

export default function BookingList() {

    const bookItems = useAppSelector((state) => state.bookSlice.bookItems);
    const dispatch = useDispatch();

    if (bookItems.length === 0) {
        return (
            <div className="text-center text-xl font-semibold mt-10">
                No Venue Booking
            </div>
        );
    }

    return (
        <div className="space-y-4 p-5">
            {bookItems.map((item: BookingItem) => (
                <div 
                    key={`${item.venue}-${item.bookDate}-${item.tel}`} 
                    className="bg-slate-100 rounded-lg p-4 shadow-md flex justify-between items-center"
                >
                    <div className="flex flex-col space-y-1">
                        <div className="text-lg font-bold">Name: {item.nameLastname}</div>
                        <div className="text-sm text-gray-600">Contact: {item.tel}</div>
                        <div className="text-sm font-medium text-blue-700">Venue: {item.venue}</div>
                        <div className="text-sm text-gray-500">Date: {item.bookDate}</div>
                    </div>

                    <button
                        onClick={() => dispatch(removeBooking(item))}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                    >
                        Cancel Booking
                    </button>
                </div>
            ))}
        </div>
    );
}