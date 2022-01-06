import './style.css'

export const PostCard = ({title, body, cover, id}) => (
        <div className="post-content">
                    <img src={cover} alt={title} />
                    <div className="post-card">
                      <h2>{title}</h2>
                      <p>{body}</p>
                    </div>
        </div>
    )
