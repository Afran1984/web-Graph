
import { AiFillCarryOut } from "react-icons/ai";

const Featur = ({feature}) => {
    return (
        <div>
            <p  className="flex items-center"><AiFillCarryOut className="m-3"></AiFillCarryOut>{feature}</p>
        </div>
    );
};

export default Featur;