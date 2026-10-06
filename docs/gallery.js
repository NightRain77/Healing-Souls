// Gallery data
const galleryData = [
{
    title: "Winter",
    category: "nature",
    image:
      "images/winter1.jpeg"
  },
{
    title: "Winter",
    category: "nature",
    image:
      "images/winter2.jpeg"
  },
{
    title: "Winter",
    category: "nature",
    image:
      "images/winter3.jpeg"
  },
{
    title: "Winter",
    category: "nature",
    image:
      "images/winter4.jpeg"
  },
{
    title: "Winter",
    category: "still-life",
    image:
      "images/winter5.jpeg"
  },
{
    title: "Winter",
    category: "still-life",
    image:
      "images/winter6.jpeg"
  },
{
    title: "Winter",
    category: "still-life",
    image:
      "images/winter7.jpeg"
  },
{
    title: "Winter",
    category: "still-life",
    image:
      "images/winter8.jpeg"
  },
{
    title: "Magnolia",
    category: "nature",
    image:
      "images/magnolia2.jpeg"
  },
{
    title: "Magnolia",
    category: "nature",
    image:
      "images/magnolia3.jpeg"
  },
 {
    title: "Magnolia",
    category: "nature",
    image:
      "images/magnolia4.jpeg"
  },
 {
    title: "Magnolia",
    category: "nature",
    image:
      "images/magnolia5.jpeg"
  },
 {
    title: "Magnolia",
    category: "nature",
    image:
      "images/magnolia6.jpeg"
  },
 {
    title: "Magnolia",
    category: "nature",
    image:
      "images/magnolia7.jpeg"
  },
  {
    title: "Bo",
    category: "animal",
    image:
      "images/dog1.jpeg"
  },
  {
    title: "Bo",
    category: "animal",
    image:
      "images/dog2.jpeg"
  },
  {
    title: "Bo",
    category: "animal",
    image:
      "images/dog3.jpeg"
  },
  {
    title: "Ellie",
    category: "animal",
    image:
      "images/dog4.jpeg"
  },
  {
    title: "Barley",
    category: "animal",
    image:
      "images/dog5.jpeg"
  },
  {
    title: "Barley",
    category: "animal",
    image:
      "images/dog6.jpeg"
  },
  {
    title: "Barley",
    category: "animal",
    image:
      "images/dog7.jpeg"
  },
  {
    title: "Barley",
    category: "animal",
    image:
      "images/dog8.jpeg"
  },
  {
    title: "Virginia",
    category: "still-life",
    image:
      "images/va1.jpeg"
  },
  {
    title: "Virginia",
    category: "still-life",
    image:
      "images/va2.jpeg"
  },
  {
    title: "Virginia",
    category: "nature",
    image:
      "images/va3.jpeg"
  },
  {
    title: "Virginia",
    category: "nature",
    image:
      "images/va4.jpeg"
  },
  {
    title: "Virginia",
    category: "nature",
    image:
      "images/va5.jpeg"
  },
  {
    title: "Virginia",
    category: "nature",
    image:
      "images/va6.jpeg"
  },
  {
    title: "Virginia",
    category: "nature",
    image:
      "images/va7.jpeg"
  },
  {
    title: "Virginia",
    category: "nature",
    image:
      "images/va8.jpeg"
  },
  {
    title: "Barley",
    category: "animal",
    image:
      "images/va9.jpeg"
  },
    {
    title: "After the Storm",
    category: "nature",
    image:
      "images/storm1.jpeg"
  },
    {
    title: "After the Storm",
    category: "nature",
    image:
      "images/storm2.jpeg"
  },
  {
    title: "After the Storm",
    category: "nature",
    image:
      "images/storm3.jpeg"
  },
    {
    title: "After the Storm",
    category: "nature",
    image:
      "images/storm4.jpeg"
  },
  {
    title: "Bluebird",
    category: "animals",
    image:
      "images/storm5.jpeg"
  },
  {
    title: "2024 Solar Eclipse",
    category: "nature",
    image:
      "images/eclipse1.jpeg"
  },
    {
    title: "Ellie",
    category: "animals",
    image:
      "images/eclipse2.jpeg"
  },
  {
    title: "Bo",
    category: "animals",
    image:
      "images/eclipse3.jpeg"
  },
  ];

// DOM elements
const tabs = document.querySelectorAll(".tab");
const galleryContainer = document.getElementById("gallery");

// Function to generate gallery items
function generateGalleryItems(items) {
  galleryContainer.innerHTML = "";

  if (items.length === 0) {
    galleryContainer.innerHTML =
      '<div class="no-results">No images found in this category.</div>';
    return;
  }

  items.forEach((item, index) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item";
    galleryItem.setAttribute("data-category", item.category);
    galleryItem.style.animationDelay = `${index * 0.1}s`;

    galleryItem.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <div class="item-info">
                        <h3>${item.title}</h3>
                    </div>
                `;

    galleryContainer.appendChild(galleryItem);
  });
}

// Function to filter gallery by category
function filterGallery(category) {
  if (category === "all") {
    generateGalleryItems(galleryData);
  } else {
    const filteredItems = galleryData.filter(
      (item) => item.category === category
    );
    generateGalleryItems(filteredItems);
  }
}

// Event listeners for tabs
tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    // Remove active class from all tabs
    tabs.forEach((t) => t.classList.remove("active"));

    // Add active class to clicked tab
    this.classList.add("active");

    // Filter gallery
    const category = this.getAttribute("data-category");
    filterGallery(category);
  });
});

// Initialize gallery with all items
generateGalleryItems(galleryData);

// Back to Top button behavior
const backToTop = document.getElementById('backToTop');
function handleScroll() {
  if (!backToTop) return;
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
}
window.addEventListener('scroll', handleScroll);
backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});