export default function AdminDashboard(props) {
    var onc = () => {

    }
    return (
        <>
                <div className="col-9">
                    <h1>siteInfo</h1>
                    {/* {Object.keys(props.siteInfo).map((key, id) => {
                        return (
                            <div key={id}>
                                <label>{key}</label>
                                <input style={{ outline: "1px solid black" }} onChange={onc} value={props.siteInfo[key]}></input>
                            </div>
                        )
                    })} */}
                </div>
        </>
    )
}
