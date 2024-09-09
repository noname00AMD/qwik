"use client";
import ImgInput from "@/components/ImgInput"
// import { textToSlug } from "../../helper"
import { useState, useEffect, useRef } from "react"
export default function User(props) {

    var [title, setTitle] = useState('')
    var [media, setMedia] = useState(props.media)
    var submit = (e) => {
        e.preventDefault()
        var formData = new FormData();
        Array.from(media).forEach((elm) => {
            formData.append("media", elm)
        })
        formData.append("title", title)
        fetch(props.host + "/api/media", {
            method: "post",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            referrerPolicy: "no-referrer",
            body: formData
        })
    }


    var handleTitle = (e) => {
        setTitle((e.target.value))
    }


    return (
        <>
        <div className="grid grid-cols-12 gap-4">

           <div className={"col-span-6  " + "style.newmedia"}>
                    <form action="submit" onSubmit={submit}>

                        <ImgInput
                            change={(v) => {
                                setMedia(v)
                            }}
                            type="media"
                        />
                        <button className={"style.done"}
                            type="submit"><strong>Done</strong></button>
                    </form>
                </div>
                <ul className="col-span-6 col-start-7">
                    <h1>Media list :</h1>
                    {/* {props.media_arr.map((item, index) => {
                        return (

                            <li key={index}>
                                <span>{item.id}</span>
                                <span>{item.post_author_id}</span>
                                <span>{item.post_mime_type}</span>
                            </li>
                        )
                    })} */}
                </ul></div>
        </>
    )
}
