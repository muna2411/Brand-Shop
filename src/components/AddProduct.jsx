import Swal from 'sweetalert2'

const AddProduct = () => {

  const handleAddProduct = event =>{
    event.preventDefault();
    const form = event.target;
    const id = form.id.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const types= form.types.value;
    const price = form.price.value;
    const description = form.description.value;
    const ratings = form.ratings.value;
    const image = form.image.value;

    const user = {id,name,brand,types,price,description,ratings,image};
    console.log(user);
  
    fetch('https://brandshop-server-72yncchhw-munas-projects.vercel.app/users',{
      method: 'POST',
      headers:{
        'content-type' : 'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Done!',
          text: 'Information added successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      }
      form.reset();
    });
}

    return (
        <div>
   <div className="hero min-h-screen lg:w-[1450px] sm:w-[630px] lg:mx-[130px] sm:mx-[0px]" style={{backgroundImage: 'url(https://i.ibb.co/Sm53FD6/29.jpg)'}}>
  <div className="hero-overlay bg-opacity-60 bg-white"></div>
  <div >
    <div >
    <form onSubmit={handleAddProduct} className="grid lg:grid-cols-3 sm:grid-cols-1 lg:m-[50px] sm:m-[10px]">

              <div className="form-control m-[50px]">
                <label className="label">
                  <span className="label-text text-[20px] text-black font-semibold">ID</span>
                </label>
                <input type="text" placeholder="Type id" name="id" className="input input-bordered " style={{ border: "3px solid black" }} required />
              </div>

              <div className="form-control m-[50px]">
                <label className="label">
                  <span className="label-text text-[20px] text-black font-semibold">Name</span>
                </label>
                <input type="text" placeholder="Type name" name="name" className="input input-bordered " style={{ border: "3px solid black" }} required />
              </div>

              <div className="form-control m-[50px]">
                <label className="label">
                  <span className="label-text text-[20px] text-black font-semibold">Brand Name</span>
                </label>
                <input type="text" placeholder="Type Brand name" name="brand" className="input input-bordered"  style={{ border: "3px solid black" }} required />
              </div>

              <div className="form-control m-[50px]">
                <label className="label">
                  <span className="label-text text-[20px] text-black font-semibold">Type</span>
                </label>
                <input type="text" placeholder="Type types" name="types" className="input input-bordered" style={{ border: "3px solid black" }} required />
              </div>

              <div className="form-control m-[50px]">
                <label className="label">
                  <span className="label-text text-[20px] text-black font-semibold">Price</span>
                </label>
                <input type="text" placeholder="Type price" name="price" className="input input-bordered" style={{ border: "3px solid black" }} required />
              </div>

              <div className="form-control m-[50px]">
                <label className="label">
                  <span className="label-text text-[20px] text-black font-semibold">Description</span>
                </label>
                <input type="text" placeholder="Type description" name="description" className="input input-bordered" style={{ border: "3px solid black" }} required />
              </div>

              <div className="form-control m-[50px]">
                <label className="label">
                  <span className="label-text text-[20px] text-black font-semibold">Ratings</span>
                </label>
                <input type="text" placeholder="Type rating" name="ratings" className="input input-bordered" style={{ border: "3px solid black" }} required />
              </div>

              <div className="form-control m-[50px] lg:w-[850px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-black font-semibold">Image</span>
                </label>
                <input type="text" placeholder="Import Image" name="image" className="input input-bordered" style={{ border: "3px solid black" }} required />
              </div>

              <input type="submit" value="ADD" className="btn bg-black text-white form-control lg:mt-[200px] sm:mt-[50px] w-[120px] h-[60px] ml-[300px]"  style={{ border: "3px solid black" }}/>
          
        </form> 
    </div>
  </div>
</div>
        </div>
    );
};

export default AddProduct;