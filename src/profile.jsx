import React from 'react';
import './profile.css'; // 別途スタイルを読み込む

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <h1>YK's Profile</h1>

      <h2>About Me</h2>
      <div className="padding-box">
        <ul>
          <li>Kyoto University Eng. B5</li>
          <li>42 Tokyo Student</li>
          <li>Web Engineer</li>
        </ul>
      </div>
      <h2>Education</h2>
      <div className="padding-box">
        <ul>
          <li>
            2019.4 ~ 2024.3
            <ul><li>Faculty of Engineering, Kyoto University</li>
            <li>Major in Industrial Chemistry</li>
            <li>Research Topic: Finding a Constitutive Relation from Nonlinear Rheological Data using a Sparse Identification Method</li>
            <li>Keywords: Rheology, Sparse Identification, Machine Learning</li>
            </ul>
          </li>
          <li>
            2024.4 ~
            <ul>
              <li>Graduate School of Information Engineering, Kyoto University</li>
              <li>Major in System Science</li>
            </ul>
          </li>
        </ul>
      </div>
      <h2>Skills</h2>
        <div className="padding-box">
          <h3>Language</h3>
          <ul>
            <li>TOEIC 820</li>
            <li>TOEFL iBT 79</li>
          </ul>
          <h3>Programming Language</h3>
          <ul>
            <li>C</li>
            <li>Python</li>
            <li>TypeScript</li>
            <li>C++</li>
          </ul>
          <h3>Frameworks/Tools</h3>
          <ul>
            <li>NestJS</li>
            <li>React</li>
            <li>Docker</li>
          </ul>
        </div>
      <h2>Experiences</h2>
      <div className="padding-box">
        <ul>
          <li>2023.9 ~ Software Engineer Internship @TrustHub</li>
        </ul>
      </div>
      <h2>Interests</h2>
      <div className="padding-box">
        <ul>
          <li>Web Development</li>
          <li>Machine Learning</li>
          <li>Statistics</li>
        </ul>
      </div>
      <h2>Contact</h2>
      <div className="padding-box">
        <ul>
          <li><a href="https://twitter.com/kyou_relearn" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://github.com/yskta" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://leetcode.com/yskta/" target="_blank" rel="noopener noreferrer">LeetCode</a></li>
        </ul>
      </div>
    </div>
  );
}

export default ProfilePage;