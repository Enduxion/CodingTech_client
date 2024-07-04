import ReadMore from "../../../components/ReadMore/ReadMore";
import { ComputerAboutSVG } from "../../../components/SVG/SVG";

export default function SectionAbout() {
  return (
    <div className="w-full flex flex-col p-8 bg-white">
      <span className="w-full flex flex-col text-3xl font-bold">
        <span className="font-roboto">About Us <i className="far fa-address-card"></i></span>
        <span className="w-full bg-[linear-gradient(90deg,#16157a_0%,#16157a_50%)] h-1"></span>
      </span>
      <div className="w-full flex flex-row py-4 gap-4">
        <div className="w-3/5 flex flex-col gap-2">
          <ReadMore className="line-clamp-[15] text-justify" href="/about" rmClassName="bg-primary text-white w-fit px-4 py-1 rounded-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus labore molestias ipsam, impedit quos nemo blanditiis quasi quaerat maxime vel exercitationem odit magnam temporibus error vero ex eos animi officia corporis aspernatur quae accusantium. Quod, quos omnis? Veritatis id necessitatibus sapiente doloribus aliquid? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident quod sunt impedit fugit aspernatur. Ipsum porro adipisci voluptas, enim similique consequatur magnam omnis! Mollitia sunt facere quos repudiandae sapiente ratione ipsa sint odit dolorum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cupiditate vel, impedit nesciunt quo nulla voluptatibus ex enim quia illum, excepturi, eveniet in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facilis impedit possimus nulla officiis! Voluptas, earum reiciendis! Debitis corrupti soluta dicta numquam consequuntur suscipit porro similique officiis ipsum ad atque a quae voluptate consequatur quos iste, laudantium magnam qui voluptatum, maiores nesciunt aliquam autem recusandae placeat! Aliquam expedita iste praesentium veniam quam alias laboriosam. Alias atque sint necessitatibus tenetur quaerat.
          </ReadMore>
        </div>
        <div className="w-2/5 flex overflow-hidden">
          <ComputerAboutSVG className="rounded-xl" />
        </div>
      </div>
    </div>
  );
}