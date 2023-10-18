
const About = () => {
    return (
        <div className="flex justify-between items-center bg-black my-[100px]">
            <div>
                <img className="w-[700px] h-[900px] " src="https://i.ibb.co/WB5BqjP/113.jpg" ></img>
                
            </div>
            <div className="text-white text-center mr-[200px] ">
                <h2 className="text-[40px]">Exclusive Designs Crafed by Experts</h2>
                <i className="text-[18px]">High Quality</i>
                <div className="divider h-[2px]" style={{ backgroundColor: 'white' }}></div>
                <p className="text-white text-center">At our fashion company, we have created a harmonious fusion of timeless elegance and<br/>
                                                         contemporary style. Our commitment to sustainability runs deep, as we meticulously <br/>
                                                         source eco-friendly materials and implement responsible production practices. With a <br/>
                                                         wide array of designs and inclusive sizing, we ensure that everyone can confidently <br/>
                                                         embrace their unique style, celebrating individuality and fostering self-expression <br/>
                                                         through our clothing collections. We believe that fashion should empower, and our company <br/>
                                                         is dedicated to making that belief a reality, allowing our customers to feel both stylish <br/>
                                                         and environmentally conscious.</p>
                </div>
        </div>
    );
};

export default About;