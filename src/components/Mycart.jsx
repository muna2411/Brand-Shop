import { useLoaderData } from "react-router-dom";


const Mycart = () => {

    const loadedUsers = useLoaderData();
    return (
        <div>
          <p>{loadedUsers.length}</p>
        </div>
    );
};

export default Mycart;