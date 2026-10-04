import { useEffect, useState } from "react"
import Post from "./Post"
import './Pagination.css'

type Photo = { id: string; author: string; download_url: string }

const Pagination = () => {
    const [data, setData] = useState<Photo[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const previousButtons = [currentPage - 3, currentPage - 2, currentPage - 1].filter(p => p >= 1)
    const nextButtons = [currentPage + 1, currentPage + 2, currentPage + 3]

    useEffect(() => {
        setLoading(true)
        fetch(`https://picsum.photos/v2/list?page=${currentPage}&limit=5`)
            .then((res) => res.json())
            .then((result) => setData(result))
            .finally(() => setLoading(false))
    }, [currentPage])

    return (
        <div className="pagination-container">
            <Post data={data} loading={loading} />
            <div className="pagination-controls">
                <button onClick={() => setCurrentPage(p => p - 1)} disabled={currentPage <= 1}>{'<'}</button>
                {previousButtons.map((page) => (
                    <button key={page} onClick={() => setCurrentPage(page)}>{page}</button>
                ))}
                <button className="active">{currentPage}</button>
                {nextButtons.map((page) => (
                    <button key={page} onClick={() => setCurrentPage(page)}>{page}</button>
                ))}
                <button onClick={() => setCurrentPage(p => p + 1)} disabled={data.length === 0}>{'>'}</button>
            </div>
        </div>
    )
}

export default Pagination
