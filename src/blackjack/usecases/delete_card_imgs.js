/**
 * Delete the card's images.
 */

export const deleteCardImgs = () => {
    const imgs = document.querySelectorAll('img');
    for (const img of imgs) {
      img.parentNode.removeChild(img);
    }
  };