import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  Bell,
  EllipsisVertical,
  Heart,
  MapPin,
  Search,
  SlidersHorizontal,
  Star,
} from "lucide-react";

const PageContent = () => {
  const imageData = [
    {
      imgUrl:
        "https://images.nightcafe.studio/jobs/ncLCr9cLdxrDwtW2IVSL/ncLCr9cLdxrDwtW2IVSL.jpg?tr=w-1600,c-at_max",
      title: "Moonlight Night",
      location: "Canada",
      rating: "4.7",
    },
    {
      imgUrl:
        "https://pics.craiyon.com/2023-10-28/0f0c639e74fe48a699283ab6f324ca7d.webp",
      title: "Sahara Deset",
      location: "Africa",
      rating: "4.9",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnaHQlMjBjYW1waW5nfGVufDB8fDB8fHww",
      title: "Night Camping",
      location: "New York",
      rating: "3.0",
    },
    {
      imgUrl:
        "https://img.freepik.com/free-photo/hiking-men-conquer-mountain-peak-adventure-awaits-generative-ai_188544-7877.jpg",
      title: "Trekking",
      location: "China",
      rating: "4.0",
    },
  ];

  const calendarData = [
    { day: "Mo", date: "12", isSelected: false },
    { day: "Tu", date: "13", isSelected: true },
    { day: "We", date: "14", isSelected: false },
    { day: "Th", date: "15", isSelected: false },
    { day: "Fy", date: "16", isSelected: false },
    { day: "St", date: "17", isSelected: false },
    { day: "Su", date: "18", isSelected: false },
    { day: "Mo", date: "19", isSelected: false },
    { day: "Tu", date: "20", isSelected: false },
    { day: "We", date: "21", isSelected: false },
  ];

  return (
    <div className="w-[70%] h-[100vh] pl-8">
      {/* ------------- Search Bar ----------------- */}
      <div className="flex justify-center items-center mt-3">
        <div className="relative w-[100%]  flex bg-sky-100 justify-center mr-10 items-center rounded-full overflow-hidden pl-4 pr-5  focus-within:shadow-md focus-within:shadow-rose-100 border-[#13353d]">
          <Search fill="#13353d" color="#13353d" size={20} />
          <Input placeholder="Search for places" />
        </div>
        <div className="bg-[#13353d] p-2 rounded-full">
          <SlidersHorizontal color="white" size={18} />
        </div>
      </div>

      {/* ------------- Heading and filtera -------------*/}
      <div className="text-[#13353d] mt-4">
        <div>
          <text className=" font-semibold text-2xl">Discover World</text>
        </div>
        <div className="flex text-slate-400 pt-1 ">
          <div className="cursor-pointer text-xs hover:bg-slate-200 pt-2 pb-2 pl-2 pr-2 mr-4 hover:text-black  rounded-full">
            Recommended
          </div>
          <div className="cursor-pointer text-xs hover:bg-slate-200 pt-2 pb-2 pl-2 pr-2 mr-4 hover:text-black  rounded-full">
            Popular Place's
          </div>
          <div className="cursor-pointer text-xs hover:bg-slate-200 pt-2 pb-2 pl-2 pr-2 mr-4 hover:text-black  rounded-full">
            Trips
          </div>
        </div>
      </div>

      {/* ------------- Image Cards ------------- */}
      <div className="mt-2 flex w-[100%] cursor-pointer ">
        {imageData?.map((ele) => (
          <div className="w-[22%] mr-8 transition ease-in-out delay-150 -500 hover:-translate-y-1 hover:scale-110  duration-200">
            <div
              className={cn(
                "relative  w-[100%] h-[35vh] border rounded-[40px] overflow-hidden shadow-2xl  "
              )}
            >
              <img
                src={ele.imgUrl}
                alt="Example Image"
                className="object-cover w-full h-full"
              />

              <span className="absolute top-4 right-4 text-red-500 p-1 rounded-full bg-sky-50">
                <Heart color="#13353d" fill="#13353d" size={18} />
              </span>
            </div>

            <div className="mt-2 ml-3">
              <span className="text-[#13353d] font-semibold text-[14px]">
                {ele.title}
              </span>
              <div className=" flex mt-1">
                <div className="flex items-center mr-2">
                  <MapPin
                    className="fill-slate-300 text-slate-300"
                    size={14}
                    strokeWidth={0.5}
                  />
                  <span className="text-slate-700  text-xs">
                    {ele.location}
                  </span>
                </div>
                <div className="flex items-center">
                  <Star className="fill-yellow-300 text-yellow-300" size={17} />
                  <span className="text-black text-xs">{ele.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ------------- Event Dates ------------- */}

      <div className="mt-4">
        <div className="text-[#13353d] text-lg  font-semibold">Event Dates</div>

        <div className="flex mt-3 w-[100%] overflow-x-auto justify-between">
          {calendarData?.map((ele) => (
            <div
              className={cn(
                "text-[#13353d]  rounded-full p-4",
                ele.isSelected === true && "bg-[#13353d] text-white "
              )}
            >
              <div className="text-xs font-semibold ">{ele.day}</div>

              <div className="font-bold text-sm mt-5">{ele.date}</div>
            </div>
          ))}
        </div>

        {/* ------------- Places Cards ------------- */}

        <div className="w-[100%] mt-4 flex">
          <div className="w-[50%] bg-[#13353d] rounded-3xl flex items-center justify-between ">
            <div className="flex items-center">
              <div className=" p-3 overflow-hidden rounded-3xl ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFwEtVPlKNpsMQscjzo9eanxXC6tZs4y7bjwu_eJFUUw&s"
                  className="h-16 w-16 rounded-2xl object-cover"
                />
              </div>
              <div className="ml-4">
                <span className="text-white">Netherlands Travel Tour</span>
                <div className="flex mt-1 rounded-sm">
                  <Star
                    className="fill-yellow-300 text-yellow-300 "
                    size={15}
                  />
                  <span className="text-xs ml-1 text-slate-200">4.6</span>
                </div>
              </div>
            </div>
            <div className=" mr-3 bg-[#FFD34E] pt-1 pb-1 rounded-lg">
              <EllipsisVertical color="#13353d" />
            </div>
          </div>
          <div className="text-black flex items-center justify-around w-[70%]">
            {imageData?.map((ele) => (
              <div>
                {" "}
                <img
                  src={ele.imgUrl}
                  alt=""
                  className="h-20 w-20 rounded-2xl object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
