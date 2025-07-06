//'use client'
import { useEffect, useState } from "react"

const msInSecond = 1000
const msInMinute = 60 * msInSecond
const msInHour = 60 * msInMinute
const msInDay = 24 * msInHour

const getPartsOfTimeDuration = (duration: number) => {
    const days = Math.floor(duration / msInDay)
    const hours = Math.floor((duration % msInDay) / msInHour)
    const minutes = Math.floor((duration % msInHour) / msInMinute)
    const seconds = Math.floor((duration % msInMinute) / msInSecond)
    return { days, hours, minutes, seconds }
}

interface Countdown2Props {
    endDateTime?: Date
}

export default function Countdown2({ endDateTime }: Countdown2Props) {
    const [timeDif, setTimeDif] = useState(() => {
        const now = Date.now()
        let end = endDateTime ? endDateTime.getTime() : (() => {
            const d = new Date()
            d.setDate(d.getDate() + 2)
            return d.getTime()
        })()
        return end - now
    })

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeDif((prev) => {
                const updatedTime = prev - 1000
                if (updatedTime <= 0) {
                    clearInterval(interval)
                    return 0
                }
                return updatedTime
            })
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    const timeParts = getPartsOfTimeDuration(timeDif > 0 ? timeDif : 0)

    return null
}
