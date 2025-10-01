import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dasboard.css"; // We'll put your CSS here


const Dashboard = () => {
  const navigate = useNavigate();
  // Profile state
  const [name, setName] = useState("Subhash Mehta");
  const [bio, setBio] = useState("Web Developer | Tech Enthusiast");
  const [photo, setPhoto] = useState("https://via.placeholder.com/150");

  // Stats state
  const [posts, setPosts] = useState(120);
  const [followers, setFollowers] = useState(350);
  const [following, setFollowing] = useState(180);

  // Theme switcher removed; dashboard always follows site theme

  // Section state
  const [activeSection, setActiveSection] = useState("profile");
  const [menuOpen, setMenuOpen] = useState(false);
  // Registered users state
  const [registeredUsers, setRegisteredUsers] = useState([]);

  // Message state
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch messages from localStorage (only for current device)
    const messages = JSON.parse(localStorage.getItem("messages") || "[]");
    setMessages(messages);
    // Fetch registered users
    const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    setRegisteredUsers(users);
  }, [activeSection]);

  // Project state
  const [projects, setProjects] = useState([]);
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [projectFile, setProjectFile] = useState(null);
  const [projectTags, setProjectTags] = useState("");
  const [projectViewLink, setProjectViewLink] = useState("");
  const [projectGoLink, setProjectGoLink] = useState("");

  // Settings state
  const [tempName, setTempName] = useState(name);
  const [tempBio, setTempBio] = useState(bio);
  const [tempPhoto, setTempPhoto] = useState(photo);

  // Handlers

  const handleNameChange = (e) => setTempName(e.target.value);
  const handleBioChange = (e) => setTempBio(e.target.value);

  const handlePhotoChange = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => setTempPhoto(event.target.result);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleUpdateProfile = () => {
    setName(tempName);
    setBio(tempBio);
    setPhoto(tempPhoto);
    alert("Profile updated successfully!");
  };

  const handleAddProject = () => {
    if (projectTitle && projectDesc && projectFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProjects([
          ...projects,
          {
            title: projectTitle,
            desc: projectDesc,
            img: event.target.result,
            tags: projectTags.split(",").map(tag => tag.trim()).filter(Boolean),
            viewLink: projectViewLink,
            goLink: projectGoLink,
          },
        ]);
        setProjectTitle("");
        setProjectDesc("");
        setProjectFile(null);
        setProjectTags("");
        setProjectViewLink("");
        setProjectGoLink("");
      };
      reader.readAsDataURL(projectFile);
    } else {
      alert("Please fill all fields and select an image.");
    }
  };

  return (
    <div className={`dashboard`}> 
      {/* Mobile menu button */}
      <button className="dashboard-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰ Menu
      </button>
      <div className={`sidebar${menuOpen ? " open" : ""}`}>
        <h2>Dashboard</h2>
        <a 
          className={activeSection === "profile" ? "active" : ""} 
          onClick={() => { setActiveSection("profile"); setMenuOpen(false); }}
        >
          Profile
        </a>
        <a 
          className={activeSection === "register" ? "active" : ""} 
          onClick={() => { setActiveSection("register"); setMenuOpen(false); }}
        >
          Register
        </a>
        <a 
          className={activeSection === "messages" ? "active" : ""} 
          onClick={() => { setActiveSection("messages"); setMenuOpen(false); }}
        >
          Messages
        </a>
        <a 
          className={activeSection === "projects" ? "active" : ""} 
          onClick={() => { setActiveSection("projects"); setMenuOpen(false); }}
        >
          Projects
        </a>
        <a 
          className={activeSection === "settings" ? "active" : ""} 
          onClick={() => { setActiveSection("settings"); setMenuOpen(false); }}
        >
          Settings
        </a>
        <a 
          className={activeSection === "logout" ? "active" : ""} 
          onClick={() => {
            setMenuOpen(false);
            if (window.confirm("Are you sure you want to logout?")) {
              setActiveSection("logout");
              navigate("/login");
            }
          }}
        >
          Logout
        </a>
      </div>

      <div className="main-content">
        {/* Profile Section */}
        {activeSection === "profile" && (
          <div className="profile-card card">
            <img src={photo} alt="Profile" />
            <h3>{name}</h3>
            <p>{bio}</p>
            <div className="stats">
              <div
                className="stat"
                onClick={() => alert(`Posts: ${posts}`)}
              >
                <h4>{posts}</h4>
                <p>Posts</p>
              </div>
              <div
                className="stat"
                onClick={() => alert(`Followers: ${followers}`)}
              >
                <h4>{followers}</h4>
                <p>Followers</p>
              </div>
              <div
                className="stat"
                onClick={() => alert(`Following: ${following}`)}
              >
                <h4>{following}</h4>
                <p>Following</p>
              </div>
            </div>

            <div className="project-section">
              {projects.map((proj, idx) => (
                <div key={idx} className="project-card">
                  <img src={proj.img} alt={proj.title} />
                  <div className="project-tags">
                    {proj.tags && proj.tags.map((tag, i) => (
                      <span key={i} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  <h4>{proj.title}</h4>
                  <p>{proj.desc}</p>
                  <div>
                    <a href={proj.viewLink || '#'} target="_blank" rel="noopener noreferrer" className="project-btn view">View more</a>
                    <a href={proj.goLink || '#'} target="_blank" rel="noopener noreferrer" className="project-btn">Go to Project</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Register Section */}
        {activeSection === "register" && (
          <div className="register-list card">
            <h3>Registered Users</h3>
            {registeredUsers.length === 0 ? (
              <div style={{color:'#aaa'}}>No users registered yet.</div>
            ) : (
              <table style={{width:'100%',borderCollapse:'collapse',background:'#181f2f',color:'#fff'}}>
                <thead>
                  <tr style={{background:'#232b3e'}}>
                    <th style={{padding:'8px',border:'1px solid #2c3654'}}>Name</th>
                    <th style={{padding:'8px',border:'1px solid #2c3654'}}>Email</th>
                    <th style={{padding:'8px',border:'1px solid #2c3654'}}>Password</th>
                  </tr>
                </thead>
                <tbody>
                  {registeredUsers.map((user, idx) => (
                    <tr key={idx}>
                      <td style={{padding:'8px',border:'1px solid #2c3654'}} data-label="Name">{user.name}</td>
                      <td style={{padding:'8px',border:'1px solid #2c3654'}} data-label="Email">{user.email}</td>
                      <td style={{padding:'8px',border:'1px solid #2c3654'}} data-label="Password">{user.password}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* Projects Section */}
        {activeSection === "projects" && (
          <div className="projects card">
            <h3>Add New Project</h3>
            <label>Project Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setProjectFile(e.target.files[0])}
            />
            <label>Project Title:</label>
            <input
              type="text"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              placeholder="Project Title"
            />
            <label>Project Description:</label>
            <textarea
              value={projectDesc}
              onChange={(e) => setProjectDesc(e.target.value)}
              placeholder="Project Description"
            ></textarea>
            <label>Project Tags (comma separated):</label>
            <input
              type="text"
              value={projectTags}
              onChange={(e) => setProjectTags(e.target.value)}
              placeholder="e.g. HTML, CSS, JavaScript"
            />
            <label>View More Link:</label>
            <input
              type="text"
              value={projectViewLink}
              onChange={(e) => setProjectViewLink(e.target.value)}
              placeholder="https://view-more-link.com"
            />
            <label>Go to Project Link:</label>
            <input
              type="text"
              value={projectGoLink}
              onChange={(e) => setProjectGoLink(e.target.value)}
              placeholder="https://go-to-project-link.com"
            />
            <button onClick={handleAddProject} style={{marginTop: '1rem'}}>Add Project</button>

            {/* Uploaded projects in a separate div */}
            {projects.length > 0 && (
              <div className="uploaded-projects">
                <h3>Your Projects</h3>
                {projects.map((proj, idx) => (
                  <div key={idx} className="project-card">
                    <img src={proj.img} alt={proj.title} />
                    <div className="project-tags">
                      {proj.tags && proj.tags.map((tag, i) => (
                        <span key={i} className="project-tag">{tag}</span>
                      ))}
                    </div>
                    <h4>{proj.title}</h4>
                    <p>{proj.desc}</p>
                    <div>
                      <a href={proj.viewLink || '#'} target="_blank" rel="noopener noreferrer" className="project-btn view">View more</a>
                      <a href={proj.goLink || '#'} target="_blank" rel="noopener noreferrer" className="project-btn">Go to Project</a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Messages Section */}
        {activeSection === "messages" && (
          <div className="messages card">
            <h3>Inbox</h3>
            {messages.map((msg, idx) => {
              const dateObj = msg.date ? new Date(msg.date) : null;
              const formatted = dateObj ? `${dateObj.toLocaleDateString()} ${dateObj.toLocaleTimeString()}` : "";
              return (
                <div
                  key={idx}
                  className="message-item"
                  onClick={() => {
                    setSelectedMessage(msg);
                    setActiveSection("message-detail");
                  }}
                >
                  <strong>{msg.sender}</strong> <span style={{color:'#888'}}>&lt;{msg.email}&gt;</span>: {msg.content}
                  <div style={{fontSize:'0.85rem',color:'#aaa',marginTop:'2px'}}>Received: {formatted}</div>
                </div>
              );
            })}
          </div>
        )}

        {/* Message Detail */}
        {activeSection === "message-detail" && selectedMessage && (
          <div className="message-detail card">
            <button className="back-btn" onClick={() => setActiveSection("messages")}> 
              ← Back to Inbox
            </button>
            <h3>{selectedMessage.sender} <span style={{color:'#888',fontSize:'1rem'}}>&lt;{selectedMessage.email}&gt;</span></h3>
            <p>{selectedMessage.content}</p>
          </div>
        )}

        {/* Settings Section */}
        {activeSection === "settings" && (
          <div className="settings card">
            <h3>Settings</h3>
            
            {/* Theme controls removed */}

            <label>Update Name:</label>
            <input
              type="text"
              value={tempName}
              onChange={handleNameChange}
              placeholder="Enter new name"
            />

            <label>Update Profile Photo:</label>
            <input type="file" onChange={handlePhotoChange} />

            <label>Change Title/Bio:</label>
            <input
              type="text"
              value={tempBio}
              onChange={handleBioChange}
              placeholder="Enter new title"
            />

            <button onClick={handleUpdateProfile} className="update-btn">
              Update Profile
            </button>
          </div>
        )}

        {/* Logout */}
        {activeSection === "logout" && (
          <div className="logout-screen card">
            <h2>You have been logged out.</h2>
            <p>Thank you for visiting! 👋</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
