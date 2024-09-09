var os = require("os");
export default function Dashboard({ admin_path }) {
    return (
        <>
            <h1>Dashboard : </h1>
            <p>
                <span>address : </span>
                {os.networkInterfaces()?.eth0[0]?.address || "~"}
            </p>
            <p>
                <span>netmask : </span>
                {os.networkInterfaces()?.eth0[0]?.netmask || "~"}
            </p>
            <p>
                <span>family : </span>
                {os.networkInterfaces()?.eth0[0]?.family || "~"}
            </p>
            <p>
                <span>mac : </span>
                {os.networkInterfaces()?.eth0[0]?.mac || "~"}
            </p>
            <p>
                <span>cidr : </span>
                {os.networkInterfaces()?.eth0[0]?.cidr || "~"}
            </p>
            <p>
                <span>Machine : </span>
                {os.machine() || "~"}
            </p>
            <p>
                <span>release : </span>
                {os.release() || "~"}
            </p>
            <p>
                <span>platform : </span>
                {os.platform() || "~"}
            </p>
            <p>
                <span>Dir : </span>
                {os.homedir() || "~"}
            </p>
            <div>
                <span>Hostname : </span>
                {os.hostname() || "~"}
            </div>
            <div>
                <span>Arch : </span>
                {os.arch() || "~"}
            </div>
            <div>
                <span>Free mem : </span>
                {os.freemem() || "~"}
            </div>
            <div>
                <span>Total mem : </span>
                {os.totalmem() || "~"}
            </div>
            <div>
                <span>Os type: </span>
                {os.type() || "~"}
            </div>
            <div>
                <span>Os version: </span>
                {os.version() || "~"}
            </div>
            <div>
                <span>Uptime: </span>
                {os.uptime() || "~"}
            </div>
            <div>
                <span>user info: </span>
                {os.userInfo()?.username || "~"}
            </div>
            <div>
                <span>user uid: </span>
                {os.userInfo()?.uid || "~"}
            </div>
            <div>
                <span>user shell: </span>
                {os.userInfo()?.shell || "~"}
            </div>
            <div>
                <span>user gid: </span>
                {os.userInfo()?.gid || "~"}
            </div>
            <p>
                <span>cpus : </span>
                {os.cpus()?.length || "~"}
            </p>
            <p>
                <span>cpus model : </span>
                {os.cpus()[0]?.model || "~"}
            </p>

            <p>
                <span>cpus speed : </span>
                {os.cpus()[0]?.speed || "~"}
            </p>
            <p>
                <span>cpus times ide: </span>
                {os.cpus()[0]?.times.idle || "~"}
            </p>
            <p>
                <span>cpus times nice: </span>
                {os.cpus()[0]?.times.nice || "~"}
            </p>
            <p>
                <span>cpus times sys : </span>
                {os.cpus()[0]?.times.sys || "~"}
            </p>
            <p>
                <span>cpus times user : </span>
                {os.cpus()[0]?.times.user || "~"}
            </p>
            <p>
                <span>cpus times irq : </span>
                {os.cpus()[0]?.times.irq || "~"}
            </p>
        </>
    );
}
