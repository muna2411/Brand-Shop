

const AddProduct = () => {
    return (
        <div>
            <div>

            </div>
            <div className="hero min-h-screen w-[1500px] mx-[130px]" style={{backgroundImage: 'url(https://i.ibb.co/Sm53FD6/29.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div >
    <form >
          <input type="text" name="name" id="" />
          <br/>
          <input type="email" name="email" id="" />
          <br/>
          <input type="email" placeholder="Type here" className="input input-bordered  w-full max-w-xs" name="image" id="" />
          <input type="text" placeholder="Type here" className="input input-bordered  w-full max-w-xs " name="name" id="" />
          <input type="text" placeholder="Type here" className="input input-bordered  w-full max-w-xs" name="brand_name" id="" />

          <textarea placeholder="Bio" className="textarea textarea-bordered textarea-sm w-full max-w-xs" ></textarea>
          <input type="text" placeholder="Type here" className="input input-bordered  w-full max-w-xs" name="brand_name" id="" />
          <input type="text" placeholder="Type here" className="input input-bordered  w-full max-w-xs" name="brand_name" id="" />
          <input type="text" placeholder="Type here" className="input input-bordered  w-full max-w-xs" name="brand_name" id="" />
          <br/>
          <input type="submit" value="Add" />
        </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default AddProduct;