import EditBtn from "./EditBtn";
import RemoveBtn from "./RemoveBtn";


export default function TopicsList() {
    return (
        <div className="p-4 border border-slate-300 rounded-lg flex justify-between">
            <div>
                <h2>Topic Title</h2>
                <p>Topic Description</p>
            </div>
            <div className="flex gap-2">
                <EditBtn />
                <RemoveBtn />
            </div>
        </div>
    )
}
