import financeImg from "../../assets/image/finance-img.png";
import bg from "../../assets/finace/background.svg";
import fr from "../../assets/finace/foreground.png";
import fr2 from "../../assets/finace/foreground2.png";
import bank from "../../assets/finace/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg";
import card from "../../assets/finace/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg";
import trade from "../../assets/finace/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg";
const Finance = () => {
  return (
    <section className="pt-[62px]">
      <div className="default-container grid lg:grid-cols-2 gap-4">
        <div>
          <header>
            <h6 className="default-subTitle text-blueLight mb-6">POWERING THE FUTURE OF FINANCE</h6>
            <h2 className="default-title text-blueDeep">Uncovering new ways to delight customers</h2>
          </header>
          <div className=" w-full grid place-items-center lg:hidden">
            <div className=" pt-[60px] pb-8 px-14 relative">
              <figure className="trade-img-shadow">
                <img className="w-full max-w-[318px]" src={financeImg} alt="finance-img" />
              </figure>
              <figure className="absolute top-[24%] right-[0%] w-[26%] ">
              <img className="w-full" src={bank} alt="" />
            </figure>

            <figure className="absolute top-[28%] left-[4%] w-[17%]">
              <img className="w-full" src={card} alt="" />
            </figure>

            <figure className="absolute top-[46%] left-[20%] w-[20%]">
              <img className="w-full" src={trade} alt="" />
            </figure>

            <figure className="absolute top-0 w-full -left-0 -z-10">
              <img className="w-full" src={bg} alt="" />
            </figure>

            <figure className="absolute right-0 -bottom-[9%] w-[95%] ">
              <img className="w-full" src={fr2} alt="" />
            </figure>
            </div>
          </div>

          <div className="mt-8">
            <p className="default-para font-semibold text-blueMedium mb-6">
              AnyTech is revolutionising financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial services.
            </p>
            <p className="default-para text-blueMedium">
              Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success.
            </p>
          </div>
        </div>
        <div className="relative lg:block hidden">
          <div className="flex justify-center">
            <figure className="trade-img-shadow">
              <img className="xl:w-[428px] lg:w-[370px]" src={financeImg} alt="finance-img" />
            </figure>
          </div>
          <figure className="absolute top-12 xl:right-2 right-0">
            <img className="" src={bank} alt="" />
          </figure>
          <figure className="absolute top-22 xl:left-8 left-4">
            <img className="" src={card} alt="" />
          </figure>
          <figure className="absolute xl:top-52 top-48 left-28 ">
            <img className="" src={trade} alt="" />
          </figure>
          <figure className="absolute -top-20 w-full left-0 -z-10">
            <img src={bg} alt="" />
          </figure>
          <figure className="absolute xl:-bottom-24 -bottom-12 w-full left-7">
            <img className="max-w-full" src={fr} alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Finance;
