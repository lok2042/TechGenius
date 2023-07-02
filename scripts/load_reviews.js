"use_strict";

const reviews = [
  {
    title: "Fantastic!",
    content: "This product exceeded my expectations. Highly recommended!",
    rating: 4.5,
    author: "Lizzy Chaplan",
    authorImg: "../reviews/client1.jpg",
    mediaType: "text",
    media: "",
    timestamp: "2023-06-19",
  },
  {
    title: "Great Product!",
    content: "Such a fantastic product!",
    rating: 4,
    author: "Christine Kinsley",
    authorImg: "../reviews/client2.jpg",
    mediaType: "video",
    media: "../reviews/video1.mp4",
    timestamp: "2023-06-18",
  },
  {
    title: "Amazing Service!",
    content: "Thanks seller, everything fine. ",
    rating: 3.5,
    author: "Robert Kiyosaki",
    authorImg: "../reviews/client3.jpg",
    mediaType: "image",
    media: "../reviews/image1.jpg",
    timestamp: "2023-06-17",
  },
  {
    title: "Impressive!",
    content:
      "I'm blown away by the quality of this product. Definitely worth every penny!",
    rating: 4.8,
    author: "Marcus Brown",
    authorImg: "../reviews/client4.jpg",
    mediaType: "text",
    media: "",
    timestamp: "2023-06-16",
  },
  {
    title: "Outstanding!",
    content:
      "This product has exceeded my expectations in every way. I can't recommend it enough!",
    rating: 4.9,
    author: "David Mitchell",
    authorImg: "../reviews/client5.jpg",
    mediaType: "video",
    media: "../reviews/video2.mp4",
    timestamp: "2023-06-15",
  },
  {
    title: "Highly Satisfied!",
    content: "I'm extremely happy with my purchase. The quality is top-notch!",
    rating: 4.7,
    author: "Sophia Anderson",
    authorImg: "../reviews/client6.jpg",
    mediaType: "image",
    media: "../reviews/image2.jpg",
    timestamp: "2023-06-14",
  },
  {
    title: "Excellent Quality!",
    content:
      "This product has exceeded my expectations. The craftsmanship is outstanding!",
    rating: 4.6,
    author: "Emily Rose",
    authorImg: "../reviews/client7.jpg",
    mediaType: "text",
    media: "",
    timestamp: "2023-06-13",
  },
  {
    title: "Absolutely Impressed!",
    content:
      "I'm amazed by the performance of this product. It's definitely a game-changer!",
    rating: 4.9,
    author: "Olivia Scott",
    authorImg: "../reviews/client8.jpg",
    mediaType: "video",
    media: "../reviews/video3.mp4",
    timestamp: "2023-06-12",
  },
  {
    title: "Great Service!",
    content:
      "The seller provided excellent service. I'm really satisfied with my purchase.",
    rating: 4.3,
    author: "Karen White",
    authorImg: "../reviews/client9.jpg",
    mediaType: "image",
    media: "../reviews/image3.jpg",
    timestamp: "2023-06-11",
  },
  {
    title: "Fantastic Experience!",
    content:
      "Using this product has been an absolute delight. Highly recommended!",
    rating: 4.8,
    author: "Will Turner",
    authorImg: "../reviews/client10.jpg",
    mediaType: "text",
    media: "",
    timestamp: "2023-06-10",
  },
];

function generateProductReviews() {
  const reviewGallery = document.getElementById("review-gallery");

  reviews.forEach((review) => {
    const reviewItem = document.createElement("div");
    reviewItem.classList.add("review");

    // Header
    const reviewHeader = document.createElement("div");
    reviewHeader.classList.add("review-header");

    // Author's Image
    const authorImg = document.createElement("img");
    authorImg.classList.add("author-img");
    authorImg.src = review.authorImg;
    authorImg.alt = "Author Image";

    // Author's Name
    const authorName = document.createElement("p");
    authorName.classList.add("author-name");
    authorName.textContent = review.author;

    reviewHeader.appendChild(authorImg);
    reviewHeader.appendChild(authorName);
    reviewItem.appendChild(reviewHeader);

    // Content
    const reviewContent = document.createElement("div");
    reviewContent.classList.add("review-content");

    // Title
    const reviewTitle = document.createElement("h3");
    reviewTitle.textContent = review.title;

    // Caption
    const reviewText = document.createElement("p");
    reviewText.textContent = review.content;

    // Rating
    const reviewRating = document.createElement("div");
    reviewRating.classList.add("review-rating");
    const ratingIcon = document.createElement("span");
    ratingIcon.classList.add("rating-icon");
    ratingIcon.innerHTML = "&#9733;";
    ratingIcon.style.color = "gold";
    const ratingValue = document.createElement("span");
    ratingValue.classList.add("rating-value");
    ratingValue.textContent = review.rating.toFixed(1);
    reviewRating.appendChild(ratingIcon);
    reviewRating.appendChild(ratingValue);

    reviewContent.appendChild(reviewRating);
    reviewContent.appendChild(reviewTitle);
    reviewContent.appendChild(reviewText);
    reviewItem.appendChild(reviewContent);

    // Timestamp
    const reviewTimestamp = document.createElement("p");
    reviewTimestamp.classList.add("review-timestamp");
    reviewTimestamp.textContent = review.timestamp;

    reviewItem.appendChild(reviewTimestamp);

    // Media
    if (review.mediaType === "video") {
      const videoReview = document.createElement("video");
      videoReview.classList.add("review-video");
      videoReview.src = review.media;
      videoReview.controls = true;
      reviewItem.appendChild(videoReview);
    } else if (review.mediaType === "image") {
      const imageReview = document.createElement("img");
      imageReview.classList.add("review-image");
      imageReview.src = review.media;
      imageReview.alt = "Review Image";
      reviewItem.appendChild(imageReview);
    }

    reviewGallery.appendChild(reviewItem);
  });
}

generateProductReviews();
