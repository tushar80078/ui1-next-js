import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, Heart, MapPin } from "lucide-react";

const RightBar = () => {
  const imgData1 = [
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA2oASENe7GdCli1KnAl6cnDnuD6lGT60txQ",
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFagkhiRUI_szhGmq3tdsgyZ0KmGPpagBezQ",
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQO2ga7Jsm-619O8lg9wp5S0uZtqppyDakw",
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5SJbcM-L0_s4SmG-mfHrFeD42ep48m06cw",
    },
  ];

  const imgData2 = [
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOvul_u2vgBl3uvEC63PMlvP5KtDWv90KjaA",
      placeName: "Afganistan",
      event: "Nature Lake",
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7qjElzcnK49MctczufLygG8H-IkK0bb7NAA",
      placeName: "SriLanka",
      event: "Camel Ride",
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUaIxhFdBdLg7ERu9qOWhKXt69terEQ4hRJA",
      placeName: "Brazil",
      event: "Mid Forest",
    },
  ];
  return (
    <div className="w-[22%]  h-[100vh]  text-black pt-4 ">
      {/* ------------ Location And User Icon ---------------- */}
      <div className=" flex justify-between w-full items-center pl-4 pr-4 ">
        <div className="flex items-center gap-1 ">
          <MapPin
            className="fill-slate-300 text-slate-300"
            size={18}
            strokeWidth={0.5}
          />
          <text className="text-[14px] font-medium">Ind/MH</text>
        </div>
        <div className="flex items-center gap-5">
          <div className=" relative border rounded-full p-2 ">
            <div className="bg-rose-500 w-2 h-2 rounded-full absolute right-0 top-0"></div>
            <Bell className="fill-[#13353d]    " size={16} />
          </div>
          <div className="">
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                className="h-8 w-8 object-cover rounded-full "
              />
              <AvatarFallback>Cn</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      {/* ------------ Highlighted Image -------------------- */}
      <div className="mt-5 relative ">
        <div className="absolute right-5 top-3 bg-sky-100 rounded-full p-1">
          <Heart size={16} className="fill-rose-600 text-rose-600" />
        </div>
        <img
          src="https://img.freepik.com/free-vector/gradient-tropical-sunset-background_52683-131844.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712880000&semt=ais"
          className="w-full pl-2 pr-2 rounded-[30px]"
        />
        <div className="absolute  bottom-3   w-[100%]  flex justify-center  h-14   ">
          <div className="bg-white w-[80%] rounded-2xl bg-opacity-60 flex justify-around items-center">
            {imgData1?.map((ele) => {
              return (
                <div className="">
                  <img
                    src={ele.imgUrl}
                    alt=""
                    className="w-12 h-10 rounded-lg"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ------------ Price And Discription ----------------------- */}
      <div className="mt-3 ml-2 flex flex-col">
        <text className="font-semibold text-[16px]">Brazil Forest</text>
        <text className="text-sm  ml-2 mr-3 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi
        </text>
      </div>

      <div className="flex justify-between mt-7 ml-3 mr-5">
        <div className="flex flex-col justify-center items-center">
          <text className="text-sm text-slate-500">per/person</text>
          <text className="font-bold text-xl text-[#13353d]">$ 1540</text>
        </div>

        <div className="flex items-center justify-center">
          <Button size={"sm"} className="text-xs rounded-full">
            Book Travel
          </Button>
        </div>
      </div>

      {/* --------------- Extra Images And Info ----------------------- */}
      <div className="mt-10 ml-4 mr-3 flex flex-col flex-1 ">
        {imgData2?.map((ele) => {
          return (
            <div className="flex mt-3">
              <img
                src={ele.imgUrl}
                alt=""
                className="w-24 h-16 rounded-2xl object-cover"
              />

              <div className="ml-3 flex flex-col justify-center">
                <text className="text-black text-sm">{ele.event}</text>
                <div className="flex">
                  <MapPin className="text-slate-300 fill-slate-300" size={15} />
                  <text className="text-xs text-slate-400 ml-1">
                    {ele.placeName}
                  </text>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RightBar;
