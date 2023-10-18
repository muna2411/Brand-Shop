

const AddProduct = () => {
    return (
        <div>
   <div className="hero min-h-screen w-[1500px] mx-[130px]" style={{backgroundImage: 'url(https://i.ibb.co/Sm53FD6/29.jpg)'}}>
  <div className="hero-overlay bg-opacity-60 bg-white"></div>
  <div >
    <div >
    <form className="grid lg:grid-cols-3 sm:grid-cols-1 m-[50px]">

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

              <div className="form-control m-[50px] w-[1300px]">
                <label className="label">
                  <span className="label-text text-[20px] text-black font-semibold">Image</span>
                </label>
                <input type="text" placeholder="Import Image" name="image" className="input input-bordered" style={{ border: "3px solid black" }} required />
              </div>


          
             
          
          
          
        </form>
        <div className="form-control mt-6 w-[120px] h-[80px] ml-[700px]">
                <button className="btn bg-black text-white " style={{ border: "3px solid black" }}>
                <input type="submit" value="ADD" />
                </button>
              </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default AddProduct;