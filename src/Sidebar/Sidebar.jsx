
const Sidebar = () => {
    return (
        <div className="w-1/4">
            <div className="bg-white ml-3 p-6 rounded-lg">
                <h3 className="text-[#2F80ED] font-bold text-2xl mb-4">Credit Hour Remaining 7 hr</h3>
                <hr className="mb-4 border-[1.5px]" />
                <h1 className="font-bold text-[26px] mb-5">Course Name</h1>
                <div className="mb-5 text-lg font-medium">
                    <ol>
                        <li>Introduction to c programming</li>
                    </ol>
                </div>
                <hr className="border-[1px]" />
                <h2 className="my-5 text-xl font-medium">Total Credit Hour : 13</h2>
                <hr className="border-[1px]" />
                <h2 className="mt-4 text-xl font-semibold">Total Price : 48000 USD</h2>
            </div>
        </div>
    );
};

export default Sidebar;