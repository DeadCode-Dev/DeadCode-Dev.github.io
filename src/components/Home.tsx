import ContactIcons from "./ContactIcons";

const Home = () => {
  return (
    
    <section id="home" className="bg-[url('/home.png')] bg-cover bg-primary bg-center h-screen flex items-center justify-center">
        <ContactIcons className="absolute left-0 sm:left-4" limit={4}/>
        <div className="text-center mb-40">
            <h1 className="text-4xl md:text-6xl font-bold text-font mb-4 font-decorative">hello samurai</h1>
            <p className="text-lg md:text-xl text-font font-decorative">I am Antonious Youssef</p>
        </div>
    </section>
  );
}
export default Home;