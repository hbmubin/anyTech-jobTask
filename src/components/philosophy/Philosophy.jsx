import philosophy from "../../assets/image/philosphy-img.png"
import philoMobile from "../../assets/image/philo-mobile.png"
import philo1 from "../../assets/icons/philo-1.png"
import philo2 from "../../assets/icons/philo-2.png"
import philo3 from "../../assets/icons/philo-3.png"
const Philosophy = () => {
    return (
      <section>
        <div className="default-container pb-[128px]">
          <header className="text-center">
            <h6 className="default-subTitle text-blueLight mb-6">OUR PHILOSOPHY</h6>
            <h2 className="default-title text-blueDeep">Human-centred innovation</h2>
          </header>
          <figure className="sm:block hidden py-8">
            <img className="w-full" src={philosophy} alt="philosophy" />
          </figure>
          <figure className="sm:hidden block py-8">
            <img className="w-full" src={philoMobile} alt="philosophy" />
          </figure>
          <div>
            <ul className="grid grid-cols-3 gap-[30px]">
              <li className="p-8 bg-[#F7FBFE] rounded-[20px]">
                <figure><img src={philo1} alt="philo-icon" /></figure>
                <h4 className="my-6 default-cardTitle">Full-suite solutions</h4>
                <p className="default-para text-blueMedium">Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.</p>
              </li>
              <li className="p-8 bg-[#F7FBFE] rounded-[20px]">
                <figure><img src={philo2} alt="philo-icon" /></figure>
                <h4 className="my-6 default-cardTitle">Simplify the complex</h4>
                <p className="default-para text-blueMedium">Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.</p>
              </li>
              <li className="p-8 bg-[#F7FBFE] rounded-[20px]">
                <figure><img src={philo3} alt="philo-icon" /></figure>
                <h4 className="my-6 default-cardTitle">Cutting-edge tech</h4>
                <p className="default-para text-blueMedium">We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
};

export default Philosophy;