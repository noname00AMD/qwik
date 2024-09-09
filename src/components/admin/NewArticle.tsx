"use client";
import ImgInput from "@/components/ImgInput";
import { createarticle } from "@/app/actions";
import { useState, useEffect, useRef } from "react";
import { textToSlug, textToTag } from "@/utils/helper";
export default function NewArticle() {
    var timeRef = useRef();
    var dateRef = useRef();
    var ttsRef = useRef();
    var thumbImgRef = useRef();
    var [useTts, setUseTts] = useState(false);
    var categoryRef = useRef();
    var thumbTypeRef = useRef();
    var langRef = useRef();
    var [title, setTitle] = useState("");
    var [slug, setSlug] = useState("");
    var [description, setDescription] = useState("");
    var [excerpt, setExcerpt] = useState("");
    var [status, setStatus] = useState("public");
    const [input, setInput] = useState("");
    const [tags, setTags] = useState([]);
    const [tts, setTts] = useState(false);
    const [isKeyReleased, setIsKeyReleased] = useState(false);
    var [thumbImg, setThumbImg] = useState();

    var changeStatus = (e) => {
        if (e.target.value === "public") {
            timeRef.current.setAttribute("disabled", true);
            dateRef.current.setAttribute("disabled", true);
        }
        if (e.target.value === "hidden") {
            timeRef.current.setAttribute("disabled", true);
            dateRef.current.setAttribute("disabled", true);
        }
        if (e.target.value === "schedule") {
            timeRef.current.removeAttribute("disabled");
            dateRef.current.removeAttribute("disabled");
            dateRef.current.value = today;
            timeRef.current.value = displayTime;
        }
        // timeRef.current.setAttribute()
        setStatus(e.target.value);
    };
    var changeTts = (e) => {
        setTts(!tts);
    };
    var handleTitle = (e) => {
        setTitle(e.target.value);
        setSlug(textToSlug(e.target.value));
    };
    var handleSlug = (e) => {
        setSlug(textToSlug(e.target.value));
    };

    var handleDescription = (e) => {
        setDescription(e.target.value);
    };
    var handleExcerpt = (e) => {
        setExcerpt(e.target.value);
    };
    const handleTag = (e) => {
        setInput(e.target.value);
    };
    const deleteTag = (index) => {
        setTags((prevState) => prevState.filter((tag, i) => i !== index));
    };
    const onKeyDown = (e) => {
        const { key } = e;
        const trimmedInput = textToTag(input);

        if (
            (key === "," || key === "Enter") &&
            trimmedInput.length &&
            !tags.includes(trimmedInput)
        ) {
            e.preventDefault();
            setTags((prevState) => [...prevState, trimmedInput]);
            setInput("");
        }

        if (
            key === "Backspace" &&
            !input.length &&
            tags.length &&
            isKeyReleased
        ) {
            const tagsCopy = [...tags];
            const poppedTag = tagsCopy.pop();
            e.preventDefault();
            setTags(tagsCopy);
            setInput(poppedTag);
        }
    };
    const onKeyUp = () => {
        setIsKeyReleased(true);
    };
    const onAddBtn = (e) => {
        const trimmedInput = textToTag(input);
        if (trimmedInput.length && !tags.includes(trimmedInput)) {
            setTags((prevState) => [...prevState, trimmedInput]);
            setInput("");
        }
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
        <div className="grid grid-cols-12 gap-4 mb-36">
            <div className="col-start-1 col-span-10">
                <form>
                    <label for="title" className="w-full">
                        <div>
                            <span aria-required="true">
                                Title <span className="text-red-600"> *</span>
                            </span>
                        </div>
                        <input
                            required
                            id="title"
                            autoFocus
                            placeholder="Title ..."
                            type="text"
                            className="block w-full input text-lg"
                            maxlenght={120}
                            onChange={textToSlug}
                            minlenght={16}
                        />
                    </label>
                    <label for="slug" className="w-full">
                        <div>
                            <span aria-required="true">
                                Slug<span className="text-red-600"> *</span>
                            </span>
                        </div>

                        <input
                            required
                            id="slug"
                            maxlenght={120}
                            minlenght={16}
                            type="text"
                            placeholder="Slug ..."
                            className="block w-full input text-lg"
                        />
                    </label>
                    <label for="description">
                        <span aria-required="true">
                            Description:
                            <span className="text-red-600"> *</span>
                        </span>
                        <textarea
                            required
                            id="description"
                            className="p-2 block w-full textarea min-h-32"
                            placeholder="Description ..."
                            maxlenght="500"
                            minlenght={16}
                        ></textarea>
                    </label>
                    <label for="excerpt">
                        <span aria-required="true"> Excerpt (Brief): </span>
                        <textarea
                            required
                            id="excerpt"
                            className="p-2 block w-full textarea min-h-32"
                            placeholder="Excerpt for on-page SEO..."
                            maxlenght="500"
                            minlenght={16}
                        ></textarea>
                    </label>
                    <label for="">
                        <span>
                            Content: <span className="text-red-600"> *</span>
                        </span>
                        <textarea
                            name="content"
                            placeholder="Content ..."
                            className="p-2 block w-full rounded-2xl min-h-36 textarea "
                            id=""
                            cols="30"
                            rows="10"
                        ></textarea>
                    </label>
                    <div>
                        <input
                            type="checkbox"
                            name="use_tts"
                            className={"use_tts w-4 h-4 accent-blue-500"}
                            onChange={changeTts}
                        />
                        <label for="use_tts">Text to speech </label>
                    </div>
                    <textarea
                        disabled={!tts}
                        name="tts"
                        className="tts textarea"
                    ></textarea>
                    <ImgInput
                        change={(v) => {
                            setThumbImg(v);
                        }}
                        type="thumb"
                    ></ImgInput>

                    <label for="tags">
                        <span>Add tag:</span>
                        <input placeholder="Fill in a tag ..." />
                        <input
                            type="button"
                            value="Add tag"
                            className="input input-bordered input"
                        />
                    </label>
                    <div className="tagInput">
                        <span>Tags list :</span>
                      
                    </div>
                    <div className="tag_box text-sm"></div>
                </form>
            </div>
            <div className="col-start-11 col-span-2">
                <div className="top-1 ">
                    <label style={{ margin: "5px" }} for="status">
                        <span> Status: </span>
                        <select
                            onChange={changeStatus}
                            name="status"
                            className={status}
                        >
                            <option value="public">Public</option>
                            <option value="hidden">Hidden</option>
                            <option value="schedule">schedule</option>
                        </select>
                    </label>
                    <input
                        style={{
                            display: "block",
                            padding: "5px",
                            fontSize: "25px",
                        }}
                        ref={timeRef}
                        disabled
                        type="time"
                        name="time"
                        className={"time"}
                    />
                    <input
                   
                        ref={dateRef}
                        disabled
                        type="date"
                        name="date"
                        value={date}
                    />
                    <label style={{ display: "block" }} for="lang">
                        <span>Lang :</span>
                        <select required name="lang" className="lang">
                           
                           
                        </select>
                    </label>
                    <label
                        for="category"
                        style={{ margin: "5px", display: "block" }}
                        name="category"
                    >
                        <label for=""> Category: </label>
                        <select
                            ref={categoryRef}
                            className="category"
                            required
                        >
       
                        </select>
                    </label>
                    <button className="btn done btn-outline mt-2">
                        <strong>Post</strong>
                    </button>
                </div>
            </div>
        </div>
    );
}


// {tags.map((tag, ind) => (
//     <div
//         key={ind}
//         className="tag"
//         style=" display: inline-block; margin: 0 10px"
//     >
//         {tag}
//         <button
//             style=" padding:  5px 10px; marginLeft: 10px"
//             onClick={() => deleteTag(ind)}
//         >
//             &#10006;
//         </button>
//     </div>
// ))}

 {/*  {
                    props.siteInfo.langSupport.map((lang, index) => {
                    return (
        
                    <option key={index} value={lang}>
                        {lang}
                    </option>
        
                    )
                    })
                    } 
                </select>
            </label>
            <label className="block" for="thumbtype">
                <span>
                    Thumb type :
                </span>
                <select required name="thumbType" className="thumbType">
                  {
    
                props.siteInfo.thumbTypes.map((item, index) => {
                return (
                <option value={item} key={index}>
                    {item}
                </option>
                )
                })}*/}

                     {/*  {props.categories.map((category, index) => {
                if (category.type == "category") {
                var sub = props.categories.filter(cate => {
                return ((cate.parent === category.id) && (cate.type === "subcategory"))
                })
                if (sub.length > 0) {
                return (<Fragment key={index}>
                    <option style=" fontWeight: " bold" value={category.id}>
                        {category.cate_name}
                    </option>
                    <optgroup label={">> " + category.cate_name}>
                        {sub.map((subcate, index1) => {
                        return (
                        <option key={subcate.id} value={subcate.id}>
                            {subcate.cate_name}
                        </option>
                        )
                        })
                        }
                    </optgroup>
                </Fragment>)
                } else {
                return (
                <option key={index} style=" fontWeight: " bold" value={category.id}>
                    {category.cate_name}
                </option>
                )
                }
                }
                })
                } */}





