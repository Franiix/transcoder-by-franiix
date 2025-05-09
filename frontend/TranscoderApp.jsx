
import { useEffect, useState } from "react"
import { io } from "socket.io-client"

const socket = io()

export default function TranscoderApp() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    socket.on("job_update", (update) => {
      setJobs((prev) => {
        const idx = prev.findIndex((j) => j.id === update.id)
        if (idx !== -1) {
          const newJobs = [...prev]
          newJobs[idx] = { ...newJobs[idx], ...update }
          return newJobs
        } else {
          return [...prev, update]
        }
      })
    })
  }, [])

  return (
    <div>
      <h1>Transcoder by Franiix</h1>
      {jobs.map((job) => (
        <div key={job.id}>
          {job.filename} - {job.progress}%
        </div>
      ))}
    </div>
  )
}
