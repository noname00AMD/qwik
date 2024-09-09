
import Link from 'next/link'
import Image from 'next/image'

export default function GroupHotContent({ posts }) {
    return (
        <>
            <style jsx>{`
                .tag{
                  
                }
            `}</style>
            <div >
                <h2 style={{ marginBottom: "10px" }}>Hot tag :
                    <Link className="title2" href={"/"}>
                        #damcoiminhhang
                    </Link>
                </h2>
                <div className="row" >
                    {
                        Array.from(posts).map((post, i) => {
                            return (
                                <div key={i} className={`special col-4`} >
                                    <div>
                                        <Link href={post.value.path} style={{ display: "inline-block", width: "100%" }}>

                                            <Image className="border" alt='a' width={160} height={100} src={post.value.thumb_img} />

                                        </Link>
                                        <Link href={post.value.path} className="title3" style={{ verticalAlign: "top" }}>
                                            {post.value.title}
                                        </Link>
                                        <span style={{ fontSize: "13px", color: "#777" }}>- 4 gio truoc</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div >
            </div >
        </>
    )
}
