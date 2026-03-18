"use client"
import BookingList from "@/components/BookingList";

export default function MyBookingPage() {
    return (
        <main className="p-5">
            <h1 className="text-2xl font-bold text-center mb-5">Your Venue Bookings</h1>
            <BookingList/>
        </main>
    )
}