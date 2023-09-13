import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className="container lg:px-12 md:px-8 px-6 my-8 flex justify-between mx-auto items-center border-b-2 border-primaryColor"> 
             <h1 className="lg:text-[40px] text-2xl font-bold text-primaryColor mb-4">Knowledge Cafe</h1>
             <img className="w-[60px] h-[60px] mb-4" src={profile}  alt="" /> 
        </div>
        
    );
};

export default Header; 