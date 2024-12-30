import { CornerLeftUp } from "lucide"

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen my-auto text-[4rem]">
        <p>404</p>
        <p>Page not found</p>
        <button className="bg-purple-400">
            Go Home
            <CornerLeftUp/>
        </button>
    </div>
  )
}

export default NotFound