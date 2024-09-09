"use client";
import { useState, useEffect, useRef } from "react";
import { textToSlug } from "@/utils/helper";
export default function Order(props) {
    var [tagName, setTagname] = useState("");
    var [slug, setSlug] = useState("");
    var [description, setDescription] = useState("");
    var submit = (e) => {
        e.preventDefault();

        fetch(props.host + "/api/addtag", {
            method: "post",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            referrerPolicy: "no-referrer",
            body: JSON.stringify({
                tagName,
                description,
            }),
        });
    };

    var handleTagName = (e) => {
        setTagname(e.target.value);
        setSlug(textToSlug(e.target.value));
    };

    var handleSlug = (e) => {
        setSlug(e.target.value);
    };

    var handleDescription = (e) => {
        setDescription(e.target.value);
    };
    return (
        <>
        
            <div className="grid grid-cols-12 gap-4">
                <div className="col-start-1 col-span-6">
                    <form action="submit">
                        <label className="form-control w-full max-w">
                            <div className="label">
                                <span
                                    aria-required="true"
                                    className="label-text"
                                >
                                    Question
                                    <span className="text-red-600"> *</span>
                                </span>
                            </div>
                            <input
                                required
                                type="text"
                                placeholder="Question ..."
                                className="input input-bordered w-full max-w"
                                maxlenght="120"
                                onChange={textToSlug}
                                minlenght="16"
                            />
                        </label>
                        <label className="form-control w-full max-w">
                            <div className="label">
                                <span
                                    aria-required="true"
                                    className="label-text"
                                >
                                    Article
                                    <span className="text-red-600"> *</span>
                                </span>
                            </div>
                            <input
                                required
                                type="text"
                                placeholder="Article name ..."
                                className="input input-bordered w-full max-w"
                                maxlenght="120"
                                onChange={textToSlug}
                                minlenght="16"
                            />
                            <select
                                className="select w-full text-lg  hidden"
                                name="post"
                            >
                                {/* <option  value="public">drop down here</option> */}
                            </select>
                        </label>
                        <button
                            className="btn done btn-outline mt-2"
                            type="submit"
                        >
                            <strong>Add Question</strong>
                        </button>
                    </form>
                </div>
                <ul className="col-span-6">
                    <h1>Order list :</h1>
                    {/* {props.categories.map((item, index) => {
                        return (

                            <li key={index}>
                                <span>{item.id}</span>
                                <span>{item.cate_name}</span>
                                <span>{item.slug}</span>
                                <span>{item.visible}</span>
                                <span>{item.size}</span>
                                <span>{item.parent}</span>
                                <span>{item.type}</span>
                                <span>{item.description}</span>
                            </li>
                        )
                    })} */}
                </ul>
            </div>
        </>
    );
}
