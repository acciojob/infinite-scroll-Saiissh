// Get the list element
const list = document.getElementById('infi-list');

// Add initial list items
for (let i = 0; i < 10; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = `List Item ${i + 1}`;
  list.appendChild(listItem);
}

// Function to add more list items
function addListItems() {
  for (let i = 0; i < 2; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `List Item ${list.children.length + 1}`;
    list.appendChild(listItem);
  }
}

// Function to check if user has reached the end of list
function checkEndOfList() {
  const listRect = list.getBoundingClientRect();
  const listBottom = listRect.top + listRect.height;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  const distanceToBottom = listBottom - viewportHeight - scrollPosition;

  if (distanceToBottom < 2) {
    addListItems();
  }
}

// Event listener for scrolling
window.addEventListener('scroll', checkEndOfList);
