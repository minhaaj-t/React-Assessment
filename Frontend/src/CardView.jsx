import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import InfiniteScroll from 'react-infinite-scroller';
import banner from '../src/images/banner.jpg';

function CardView() {
  const [items, setItems] = useState(Array.from({ length: 5 })); // Initial items
  const [hasMore, setHasMore] = useState(true);

  // Function to load more items
  const loadMore = () => {
    // Simulate loading delay
    setTimeout(() => {
      setItems(prevItems => [...prevItems, ...Array.from({ length: 5 })]); // Add more items
      setHasMore(false); // For demonstration purposes, stop loading more items after one iteration
    }, 4000);
  };

  // Render function for cards
  const renderCards = () => {
    return items.map((_, index) => (
      <React.Fragment key={index}>
        <Card className="news-card">
          <Card.Header className="news-card-header">Special Offers Today</Card.Header>
          <Card.Body className="news-card-body">
            <blockquote className="news-blockquote">
              <p>
                Don't miss out on our special offer! Get 20% off on all products for a limited time only. Upgrade your style today and save big.
              </p>
              <footer className="news-blockquote-footer">
                - Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
        {(index + 1) % 5 === 0 && <img src={banner} className="banner-image" />}
      </React.Fragment>
    ));
  };

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore={hasMore}
      loader={<div className="loader" key={0}>Loading ...</div>}
    >
      {renderCards()}
    </InfiniteScroll>
  );
}

export default CardView;
