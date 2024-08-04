import React from "react";

function PersonalInfo() {
  return (
    <div className="personal_info">
      <img src="/picture2.jpg" alt="image" className="personal_info--picture" />
      <h1 className="personal_info--name">Tinotenda Dauti</h1>
      <h3 className="personal_info--job">Frontend Developer</h3>
      <p className="personal_info--website">tinod.website</p>

      <a href="#" className="personal_info--email">
        <img src="/Mail.svg" alt="mail" className="personal_info--mail_svg" />
        <span>Email</span>
      </a>
    </div>
  );
}

export default PersonalInfo;
