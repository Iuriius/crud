
export default function EditTopicForm() {
    return (
        <form className="flex flex-col items-center gap-y-2 mt-8">

            <input type="text" placeholder="Topic name" className="input input-bordered input-info w-full max-w-xs" />

            <textarea placeholder="Topic sescription" className="input input-bordered input-info w-full max-w-xs h-80 resize-none" />

            <button className="btn btn-wide btn-info">Update Topic</button>
        </form>
    )
}
