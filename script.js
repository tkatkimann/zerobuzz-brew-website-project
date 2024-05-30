function showSidebar(){
    const sidebar = document.querySelector ('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector ('.sidebar')
    sidebar.style.display = 'none'
  }


  function toggleDropdown(event, dropdownId) {
    event.preventDefault();
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle('active');
  }
  
  function showSidebar() {
    document.querySelector('.sidebar').style.display = 'flex';
  }
  
  function hideSidebar() {
    document.querySelector('.sidebar').style.display = 'none';
  }
  
  