// Content for each navbar option
const contentData = {
    "Edit Profile": {
      title: "Edit Profile",
      content: `
        <h2>Change Your Profile Information</h2>
        <form>
          <label for="username">Username:</label><br>
          <input type="text" id="username" name="username"><br><br>
          <label for="email">Email:</label><br>
          <input type="email" id="email" name="email"><br><br>
          <label for="password">Password:</label><br>
          <input type="password" id="password" name="password"><br><br>
          <input type="submit" value="Save Changes">
        </form>
      `
    },
    "Notifications": {
      title: "Manage Notifications",
      content: `
        <h2>Notification Preferences</h2>
        <form>
          <label><input type="checkbox"> Receive email notifications</label><br><br>
          <label><input type="checkbox"> Receive SMS notifications</label><br><br>
          <label><input type="checkbox"> App notifications</label><br><br>
          <input type="submit" value="Save Preferences">
        </form>
      `
    },
    "Account Privacy": {
      title: "Account Privacy Settings",
      content: `
        <h2>Control Who Sees Your Information</h2>
        <form>
          <label><input type="radio" name="privacy" value="public"> Public</label><br><br>
          <label><input type="radio" name="privacy" value="friends"> Friends Only</label><br><br>
          <label><input type="radio" name="privacy" value="private"> Private</label><br><br>
          <input type="submit" value="Save Privacy Settings">
        </form>
      `
    },
    "Help": {
      title: "Help & Support",
      content: `
        <h2>Find Help and Support</h2>
        <p>If you have any issues, you can refer to the following:</p>
        <ul>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Contact Support</a></li>
          <li><a href="#">User Guide</a></li>
        </ul>
      `
    },
    "About": {
      title: "About Us",
      content: `
        <h2>About the Platform</h2>
        <p>This platform is designed to provide seamless user experience for managing your account settings, privacy, and notifications. Learn more about us on our <a href="#">official page</a>.</p>
      `
    }
  };
  
  // Function to update the content area
  function loadContent(option) {
    const titleElement = document.getElementById('content-title');
    const contentElement = document.getElementById('content-text');
  
    // Update the title and content based on the clicked option
    titleElement.textContent = contentData[option].title;
    contentElement.innerHTML = contentData[option].content;
  }
  
  // Logout function
  function logout() {
    const confirmLogout = confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      // Simulate logging out (e.g., you can clear session or local storage)
      alert("You have been logged out.");
  
      // Optionally clear session or local storage if you're using it
      // sessionStorage.clear(); // Uncomment if needed
      // localStorage.clear();   // Uncomment if needed
  
      // Redirect to a login page or home page after logging out
      window.location.href = "login.html"; // Adjust to the correct path for your login page
    }
  }