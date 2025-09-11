const Profile = () => {
  return (
    <div id="profile">
      <div className="profile-img">
        <img src="FB_IMG_1694539020185.jpg" alt="profile" />
      </div>
      <div className="profile-info">
        <p className="red-text">Hello, I'm Abheesh</p>
        <h2>Software Engineer</h2>
        <p>
        Software Engineer with a strong background in business analysis and Web development. Experienced in gathering and analyzing requirements,
        engaging stakeholders, and translating business needs into effective technical solutions. 
        Skilled in building and maintaining responsive React applications, optimizing user experience, and ensuring alignment between business goals and 
        software delivery.
        </p>
        <button className="red-btn">About Me</button>
      </div>
    </div>
  );
};

export default Profile;
