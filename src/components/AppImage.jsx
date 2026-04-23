import React from 'react';

function Image({
  src,
  alt = "Image Name",
  className = "",
  loading = "lazy",
  decoding = "async",
  fetchPriority = "auto",
  ...props
}) {

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      onError={(e) => {
        e.target.src = "/assets/images/no_image.png"
      }}
      {...props}
    />
  );
}

export default Image;
