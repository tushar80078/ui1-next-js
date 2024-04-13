import PageContent from "@/components/homepage/content/page-content";
import LeftNavbar from "@/components/homepage/leftnavbar/left-navbar";
import RightBar from "@/components/homepage/rightbar/right-bar";

const HomePage = () => {
  return (
    <div className="w-full h-[100vh]">
      <div className="w-full  flex">
        {/* ------------- Left Navbar ------------- */}
        <LeftNavbar />

        {/* ------------- Content ---------------- */}
        <PageContent />

        {/* ------------ Right-Content ----------- */}
        <RightBar />
      </div>
    </div>
  );
};

export default HomePage;
