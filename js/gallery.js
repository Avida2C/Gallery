/**
 * Updates the main image in the gallery with the specified image path.
 * @param {string} imagePath - The path of the image to be displayed.
 * @returns None
 */
function updateGallery(imagePath) {
    document.getElementById('mainImage').src = imagePath;
}