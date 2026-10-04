type Photo = { id: string; author: string; download_url: string }

const Post = ({ data, loading }: { data: Photo[], loading: boolean }) => {
    if (loading) {
        return (
            <div className="skeleton-grid">
                {Array(5).fill(null).map((_, i) => (
                    <div key={i} className="skeleton-card" />
                ))}
            </div>
        )
    }

    return (
        <div className="posts-grid">
            {data.map((d) => (
                <div key={d.id} className="post-card">
                    <img src={d.download_url} alt={d.author} />
                    <span>{d.author}</span>
                </div>
            ))}
        </div>
    )
}

export default Post
