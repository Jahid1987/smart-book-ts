"use client";
const TopNavBar = () => {
  return (
    <nav className="shadow-md py-4">
      <div className="container px-1 mx-auto flex justify-between">
        {/* Start  */}
        <div>Logo</div>
        {/* Center  */}
        <div>links</div>
        {/* End  */}
        <div>Profile</div>
      </div>
    </nav>
  );
};

export default TopNavBar;
