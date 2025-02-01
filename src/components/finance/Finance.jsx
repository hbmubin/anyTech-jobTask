import financeImg from "../../assets/image/finance-img.png";
import bg from "../../assets/finace/background.svg";
import fr from "../../assets/finace/foreground.png";
import bank from "../../assets/finace/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg";
import card from "../../assets/finace/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg";
import trade from "../../assets/finace/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg";
const Finance = () => {
  return (
    <section className="pt-[62px]">
      <div className="default-container grid grid-cols-2 gap-4">
        <div>
          <header>
            <h6 className="default-subTitle text-blueLight mb-6">POWERING THE FUTURE OF FINANCE</h6>
            <h2 className="default-title text-blueDeep">Uncovering new ways to delight customers</h2>
          </header>
          <div className="mt-8">
            <p className="default-para font-semibold text-blueMedium mb-6">
              AnyTech is revolutionising financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial services.
            </p>
            <p className="default-para text-blueMedium">
              Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="flex justify-center">
            <figure className="trade-img-shadow">
              <img className="w-[428px]" src={financeImg} alt="finance-img" />
            </figure>
          </div>
          <figure className="absolute top-12 right-2 ">
            <img className="" src={bank} alt="" />
          </figure>
          <figure className="absolute top-22 left-8 ">
            <img className="" src={card} alt="" />
          </figure>
          <figure className="absolute top-52 left-28 ">
            <img className="" src={trade} alt="" />
          </figure>
          <figure className="absolute -top-20 w-full left-0 -z-10">
            <img src={bg} alt="" />
          </figure>
          <figure className="absolute -bottom-24 w-full left-7 ">
            <img src={fr} alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Finance;
