"use client"
import { useState } from "react"
import { TextField, Select, MenuItem, Button, FormControl, InputLabel } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Dayjs } from "dayjs"
import { useDispatch } from "react-redux"
import { addBooking } from "@/redux/features/bookSlice" // ปรับ path ตามจริง
import { BookingItem } from "../../../interface"

export default function BookingPage() {
    
    const dispatch = useDispatch()

    const [nameLastname, setNameLastname] = useState("")
    const [tel, setTel] = useState("")
    const [venue, setVenue] = useState("")
    const [bookDate, setBookDate] = useState<Dayjs | null>(null)

    const handleBooking = () => {
        if (nameLastname && tel && venue && bookDate) {
            const item: BookingItem = {
                nameLastname: nameLastname,
                tel: tel,
                venue: venue,
                bookDate: bookDate.format("YYYY/MM/DD")
            }
            dispatch(addBooking(item))
            //alert("Booking Successful!")
        } else {
            alert("Please fill all information")
        }
    }

    return (
        <main className="p-5 flex flex-col items-center space-y-4">
            <h1 className="text-2xl font-bold">Book a Venue</h1>
            
            <TextField variant="outlined" label="Name-Lastname" name="Name-Lastname"
            value={nameLastname} onChange={(e) => setNameLastname(e.target.value)}
            fullWidth/>

            <TextField variant="outlined" label="Contact-Number" name="Contact-Number"
            value={tel} onChange={(e) => setTel(e.target.value)}
            fullWidth />

            <FormControl fullWidth>
                <InputLabel id="venue-label">Venue</InputLabel>
                <Select labelId="venue-label" id="venue" value={venue} label="Venue"
                onChange={(e) => setVenue(e.target.value)}>
                    <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                    <MenuItem value="Spark">Spark Space</MenuItem>
                    <MenuItem value="GrandTable">The Grand Table</MenuItem>
                </Select>
            </FormControl>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Booking Date" value={bookDate}
                onChange={(newValue) => setBookDate(newValue)}
                sx={{ width: '100%' }}/>
            </LocalizationProvider>

            <Button variant="contained" name="Book Venue" 
            onClick={handleBooking}
            fullWidth>
                Book Venue
            </Button>
        </main>
    )
}