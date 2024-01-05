
const About = () => {
    return (
        <div className="grid justify-between items-center bg-black my-[100px] lg:grid-cols-2 sm:grid-cols-2">
            <div>
                <img className="w-[700px] h-[900px] " src="https://i.ibb.co/WB5BqjP/113.jpg" ></img>
                
            </div>
            <div className="text-white text-center lg:mr-[200px] sm:mr-[0px]">
                <h2 className="text-[40px] ">Exclusive Designs Crafed by Experts</h2>
                <i className="text-[18px] ">High Quality</i>
                <div className="divider h-[2px]" style={{ backgroundColor: 'white' }}></div>
                <p className="text-white text-center ">At our fashion company, we have created a harmonious fusion of timeless elegance<br/> 
                                                         and contemporary style. Our commitment to sustainability runs deep, as we metic-<br/>
                                                         ulously source eco-friendly materials and implement responsible production <br/>
                                                         practices. With a wide array of designs and inclusive sizing, we ensure that <br/>
                                                         everyone can confidently embrace their unique style, celebrating individuality <br/>
                                                         and fostering self-expression through our clothing collections. We believe that <br/>
                                                         fashion should empower, and our company is dedicated to making that belief a re-<br/>
                                                         ality, allowing our customers to feel both stylish and environmentally conscious.</p>
                </div>
        </div>
    );
};

export default About;