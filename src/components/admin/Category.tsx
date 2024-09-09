"use client";
import ImgInput from "@/components/ImgInput";

import { useState ,useRef} from "react";
export default function Category(props) {
    var [categoryName, setCategoryName] = useState("");
    var [slug, setSlug] = useState("");
    var [description, setDescription] = useState("");
    var [status, setStatus] = useState(true);
    var subCategoryRef = useRef();
    var messrel = useRef();
    var [thumbImg, setThumbImg] = useState();
    var [mess, setMess] = useState();

    var submit = (e) => {
        e.preventDefault();

        var category = subCategoryRef.current.value || null;
        if (thumbImg.size > 1024 * 300) {
            alert("thumb img < 300kb");
            return;
        }
        var formData = new FormData();
        formData.append("categoryName", categoryName);
        formData.append("description", description);
        formData.append("status", status);
        thumbImg.forEach((elm) => {
            formData.append("thumbImg", elm);
        });
        fetch(props.host + "/api/category/add", {
            method: "post",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {},
            referrerPolicy: "no-referrer",
            body: formData,
        })
            .then(async (res) => {
                console.log(res.ok);
                var a = await res.json();
                setMess(a.test);
            })
            .catch((e) => {
                console.error(e);
            });
    };

    var handleCategory = (e) => {
        setCategoryName(e.target.value);
        setSlug(textToSlug(e.target.value));
    };
    var handleSlug = (e) => {
        setSlug(textToSlug(e.target.value));
    };

    var handleDescription = (e) => {
        setDescription(e.target.value);
    };

    var changeStatus = (e) => {
        setStatus(e.target.value);
    };

    var date = new Date();

    var day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear(),
        hour = date.getHours(),
        min = date.getMinutes();

    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;

    var today = year + "-" + month + "-" + day,
        displayTime = hour + ":" + min;

    return (
        <>
        <div className="grid grid-cols-12 gap-4">

         
                <div className={"col-span-6  " + "style.newcategory"}>
                <div ref={messrel}>{mess}</div>
                <form action="submit" onSubmit={submit}>
                    <label aria-required="true" for="category">
                        Category:{" "}
                    </label>
                    <input
                        id="category"
                        required
                        className={"style.title"}
                        onChange={handleCategory}
                        maxLength="120"
                        value={categoryName}
                        minLength="16"
                        type="text"
                    />
                    <label aria-required="true" for="slug">
                        Slug:{" "}
                    </label>
                    <div className={"style.slug"}>
                        <input
                            required
                            id="slug"
                            className={"style.slug1"}
                            onChange={handleSlug}
                            value={slug}
                            maxLength="120"
                            minLength="16"
                            type="text"
                        />
                        <svg
                            className={"style.slugGenerate"}
                            style={{
                                position: "absolute",
                                cursor: "pointer",
                                right: "8px",
                                top: "8px",
                            }}
                            width="1.4em"
                            height="1.4em"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M15.681 2.804A9.64 9.64 0 0011.818 2C6.398 2 2 6.48 2 12c0 5.521 4.397 10 9.818 10 2.03 0 4.011-.641 5.67-1.835a9.987 9.987 0 003.589-4.831 1.117 1.117 0 00-.664-1.418 1.086 1.086 0 00-1.393.676 7.769 7.769 0 01-2.792 3.758 7.546 7.546 0 01-4.41 1.428V4.222h.002a7.492 7.492 0 013.003.625 7.61 7.61 0 012.5 1.762l.464.551-2.986 3.042a.186.186 0 00.129.316H22V3.317a.188.188 0 00-.112-.172.179.179 0 00-.199.04l-2.355 2.4-.394-.468-.02-.02a9.791 9.791 0 00-3.239-2.293zm-3.863 1.418V2v2.222zm0 0v15.556c-4.216 0-7.636-3.484-7.636-7.778s3.42-7.777 7.636-7.778z"
                                fill="#212134"
                            ></path>
                        </svg>
                    </div>
                    <label aria-required="true" for="description">
                        Description:{" "}
                    </label>
                    <textarea
                        required
                        className={"style.description"}
                        value={description}
                        onChange={handleDescription}
                        maxLength="500"
                        minLength="16"
                    ></textarea>
                    <label
                        for="parent"
                        style={{ margin: "5px", display: "block" }}
                        name="category"
                    >
                        Parent Category:{" "}
                    </label>
                    <select
                        ref={subCategoryRef}
                        className={"style.category"}
                        // aria-placeholder="select category"
                        required
                    >
                        {/* {props.categories.map((category, index) => {
                                if (category.type == "category") {
                                    return (
                                        <option key={index} style={{ fontWeight: "bold" }} value={category.id}>
                                            {category.cate_name}
                                        </option>
                                    )
                                }
                            })
                            } */}
                    </select>

                    <ImgInput
                        change={(v) => {
                            setThumbImg(v);
                        }}
                        type="thumb"
                    />

                    <label style={{ margin: "5px" }} for="status">
                        Status:{" "}
                    </label>
                    <select
                        onChange={changeStatus}
                        name="status"
                        className={"style.status"}
                    >
                        <option value={true}>Public</option>
                        <option value={false}>Hidden</option>
                    </select>
                    <button className={"style.done"} type="submit">
                        <strong>Done</strong>
                    </button>
                </form>
            </div>
            <ul className="col-span-6 col-start-7" >
                <h1>Category list :</h1>
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
    )
}
