
import { Link } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import { component$, useSignal } from "@builder.io/qwik";

export default component$<any>((props)=> {
    // console.log(props);
    var imgRef = useSignal<Element>()
    var reviewRef = useSignal<Element>()
    var dropboxRef = useSignal<Element>()
    var dragover = (e:any) => {

        // e.stopPropagation();
        e.preventDefault();
    }
    var drop = (e:any) => {
        // e.stopPropagation();
        e.preventDefault();
        console.log(e.dataTransfer);
        imgRef.value = e.dataTransfer.files
        changeImg()
    }

    var changeImg = (e:any) => {

        var stop = false
        var Imgs = imgRef.value?.files
        if (Imgs.length === 0) {
            props.change(null)
            stop = true
        }
        if (props.type === "thumb" && Imgs[0].size > 1024 * 300) {
            alert("thumb img < 300kb")
            stop = true
            Imgs = Array.of(Imgs[0])
        }
        if (props.type === "media") {
            for (var i = 0; i < Imgs.length; i++) {
                var element = Imgs[i]
                if (element.size > 1024 * 1024) {
                    stop = true
                    alert("media < 1Mb")
                }
            }
        }
        while (reviewRef.value?.firstChild) {
            reviewRef.value?.removeChild(reviewRef.value.firstChild);
        }
        if (stop === true) {
            return
        }
        props.change(Array.from(Imgs))
        for (var i = 0; i < Imgs.length; i++) {
            var Img = Imgs[i]
            const para = document.createElement('p');
            para.textContent = `File: ${Img.name} || Filesize: ${(Img.size / (1024)).toFixed(1)}kb.`;
            const image = document.createElement('img');
            image.src = URL.createObjectURL(Img);
            image.height = 122
            image.style.display = "block"
            image.style.margin = "0 auto"
            reviewRef.value?.appendChild(image);
            reviewRef.value?.appendChild(para);
        }


    }
    return (<>

        <label aria-required="true" for="Img">Img :</label>
        <div class={"style.dropbox"} ref={dropboxRef} onDrop$={drop} onDragOver$={dragover} onDragEnter$={dragover} >
            {
                props.type === "media" ?
                    <input ref={imgRef} multiple onChange$={changeImg} required accept="image/*" type="file" name="Img" class={"style.Img"} />
                    :
                    <input ref={imgRef} onChange$={changeImg} required accept="image/*" type="file" name="Img" class={"style.Img"} />
            }

            <p >Drop image here ...</p>
            <div ref={reviewRef} class={"style.preview"}></div>
        </div>

    </>)
}
