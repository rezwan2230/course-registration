import PropTypes from 'prop-types';


const Sidebar = ({credit, remaining, totalPrice, selects}) => {

        // const notify = () => toast("Wow so easy!");
    return (
        <div className="w-1/4">
            <div className="bg-white ml-3 p-6 rounded-lg">
                <h3 className="text-[#2F80ED] font-bold text-2xl mb-4">Credit Hour Remaining {remaining} hr</h3>
                <hr className="mb-4 border-[1.5px]" />
                <h1 className="font-bold text-[26px] mb-5">Course Name</h1>
                <div className="mb-5 text-[20px] font-medium leading-9 text-[#1C1B1B99]">
                    {
                        selects.map((select, indx)=><ol key={indx}>{indx+1}{". "}{select.course_name}</ol>)
                    }
                </div>
                <hr className="border-[1px]" />
                <h2 className="my-5 text-[21px] font-medium">Total Credit Hour : {credit}</h2>
                <hr className="border-[1px]" />
                <h2 className="mt-4 text-[22px] font-semibold">Total Price : {totalPrice} USD</h2>
            </div>
        </div>
    );
};


Sidebar.propTypes = {
    credit:PropTypes.number,
    remaining:PropTypes.number,
    totalPrice:PropTypes.number,
    selects:PropTypes.array
}

export default Sidebar;