function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg p-4 sm:p-8 md:max-w-xs md:max-w-md">
      <img src="https://via.placeholder.com/150" alt="User" className="w-36 h-36 md:w-24 sm:h-24 sm:rounded-full mx-auto" />
      <h1 className="text-xl text-blue-800 my-4 text-lg sm:text-xl md">John Doe</h1>
      <p className="text-base text-gray-600 text-sm sm:text-base md">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;