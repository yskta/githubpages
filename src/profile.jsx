import React from 'react';
import './profile.css'; // 別途スタイルを読み込む

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <h1>YK's Profile</h1>

      <h2>About</h2>
      <div className="padding-box">
        <p>
          - Kyoto University Eng. B5<br/>
          - 42 Tokyo Student<br/>
          - Web Engineer
        </p>
      </div>
      <h2>Education</h2>
      <div className="padding-box">
        <p>
          - 2019.4 ~ 2024.3<br/>
          - Faculty of Engineering, Kyoto University <br/>
          - Major in Industrial Chemistry <br/>
          - Research Topic: Finding a Constitutive Relation from Nonlinear Rheological Data using a Sparse Identification Method<br/>
          - Keywords: Rheology, Sparse Identification, Machine Learning
        </p>
        <p>
          - 2024.4 ~ <br/>
          - Graduate School of Information Engineering, Kyoto University <br/>
        </p>
      </div>
      <h2>Skills</h2>
        <div className="padding-box">
          <h3>Language</h3>
            <p>
              - Japanese :  Native<br/>
              - English : TOEIC 820/TOEFL iBT 79<br/>
            </p>
          <h3>Programming Language</h3>
            <p>
              - C<br/>
              - Python<br/>
              - TypeScript
            </p>
          <h3>Frameworks/Tools</h3>
            <p>
              - NestJS<br/>
              - React<br/>
              - Docker
            </p>
          </div>
      <h2>Experiences</h2>
      <div className="padding-box">
        <p>- Software Engineer Internship @TrustHub</p>
      </div>
      <h2>Interests</h2>
      <div className="padding-box">
        <p>Coming soon...</p>
      </div>
      <h2>Contact</h2>
      <div className="padding-box">
        <p>Coming soon...</p>
      </div>
    </div>
  );
}

export default ProfilePage;