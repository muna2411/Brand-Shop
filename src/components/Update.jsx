import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const user = useLoaderData();
    const { _id, name, brand, types, price, image, ratings } = user;

    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const types = form.types.value;
        const price = form.price.value;
        const image = form.image.value;
        const ratings = form.ratings.value;

        const updated = { _id, name, brand, types, price, image, ratings }

        console.log(updated);

  
        fetch(`https://brandshop-server-miwq8mlu8-munas-projects.vercel.app/users/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updated)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Data Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
                form.reset();
            })
    }
    return (
        <div>
        <div className="hero min-h-screen lg:w-[1400px] lg:h-[1000px] sm:w-[630px] lg:mx-[130px] sm:mx-[0px] " >
       <div className="hero"></div>
       <div className="flex justify-between items-center">
       <div className="m-[50px]">
       <img className="w-[300px]" src="https://i.ibb.co/0mgnXbr/1.jpg" alt="Your GIF" />
       <img className="w-[300px]" src="https://i.ibb.co/LPtWbCv/2.jpg" alt="Your GIF" />
       </div>
         <div >
         <form onSubmit={handleUpdateProduct} className="grid lg:grid-cols-1 sm:grid-cols-1 ">
                   <div className="form-control m-[10px]">
                     <label className="label">
                       <span className="label-text text-[20px] text-black font-semibold">Name</span>
                     </label>
                     <input type="text" placeholder="Type name" name="name" defaultValue={name} className="input input-bordered " style={{ border: "2px solid black" }} required />
                   </div>
     
                   <div className="form-control m-[10px]">
                     <label className="label">
                       <span className="label-text text-[20px] text-black font-semibold">Brand Name</span>
                     </label>
                     <input type="text" placeholder="Type Brand name" name="brand" defaultValue={brand} className="input input-bordered"  style={{ border: "2px solid black" }} required />
                   </div>
     
                   <div className="form-control m-[10px]">
                     <label className="label">
                       <span className="label-text text-[20px] text-black font-semibold">Type</span>
                     </label>
                     <input type="text" placeholder="Type types" name="types" defaultValue={types} className="input input-bordered" style={{ border: "2px solid black" }} required />
                   </div>
     
                   <div className="form-control m-[10px]">
                     <label className="label">
                       <span className="label-text text-[20px] text-black font-semibold">Price</span>
                     </label>
                     <input type="text" placeholder="Type price" name="price" defaultValue={price} className="input input-bordered" style={{ border: "2px solid black" }} required />
                   </div>
     
                   
     
                   <div className="form-control m-[10px]">
                     <label className="label">
                       <span className="label-text text-[20px] text-black font-semibold">Ratings</span>
                     </label>
                     <input type="text" placeholder="Type rating" name="ratings" defaultValue={ratings} className="input input-bordered" style={{ border: "2px solid black" }} required />
                   </div>
     
                   <div className="form-control m-[10px] ">
                     <label className="label">
                       <span className="label-text text-[20px] text-black font-semibold">Image</span>
                     </label>
                     <input type="text" placeholder="Import Image" name="image" defaultValue={image} className="input input-bordered" style={{ border: "2px solid black" }} required />
                   </div>
     
                   <input type="submit" value="Submit" className="btn bg-black text-white form-control mt-[100px] w-[120px] h-[60px] lg:ml-[400px] sm:ml-[170px]"  style={{ border: "2px solid black" }}/>
               
             </form>
     
               
         </div>
         <div className="m-[50px]">
       <img className="w-[300px]" src="https://i.ibb.co/D71hk5n/3.jpg" alt="Your GIF" />
       <img className="w-[300px]" src="https://i.ibb.co/qWNtnHN/4.jpg" alt="Your GIF" />
       </div>
       </div>
     </div>
             </div>
         );
     };

export default Update;