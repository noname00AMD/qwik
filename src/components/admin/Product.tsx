export default function Article({admin_path}) {
    return (
        <>
                <h1>Product list:</h1>
                <ul className="col-9">
                    {/* {props.article.map((item, index) => {
                        return (
                            
                        <li key={index}>
                        <span>{item.id}</span>
                        <span>{item.post_title}</span>
                        <span>{item.post_date}</span>
                        </li>
                        )
                        })} */}
                </ul>
        </>
    );
}
