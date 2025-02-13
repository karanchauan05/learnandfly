import React from 'react';

const BlogPost = ({ image, title }) => (
  <div className="flex flex-col text-5xl text-black max-md:mt-10 max-md:max-w-full">
    <img
      loading="lazy"
      src={image}
      alt=""
      className="object-contain w-full aspect-[1.5] max-md:mr-0.5 max-md:max-w-full"
    />
    <div className="self-start mt-3.5 max-md:max-w-full">
      {title}
      <br />
      <br />
      <span className="text-2xl text-red-600 underline">Read More</span>
    </div>
  </div>
);

const BlogSection = () => {
  const blogPosts = [
    { image: "https://cdn.builder.io/api/v1/image/assets/1ba08e15231f47ac95175203e3ca154e/27bdd0adf06047cb546dc35aeba5114f1b79e664c3fd8751b7a0553b667ca458?apiKey=1ba08e15231f47ac95175203e3ca154e&", title: "Unleash your wings and create beauty" },
    { image: "https://cdn.builder.io/api/v1/image/assets/1ba08e15231f47ac95175203e3ca154e/790562a75db0fe2f32ec9243e5fd1dcc1f56c61b4c04f922aa827f7d8c96cf80?apiKey=1ba08e15231f47ac95175203e3ca154e&", title: "How to be better at writing an essay" },
    { image: "https://cdn.builder.io/api/v1/image/assets/1ba08e15231f47ac95175203e3ca154e/1a649340b096feeeac7f1ec1db385cbd5b8407e294461b96b09531ce6c30f9f4?apiKey=1ba08e15231f47ac95175203e3ca154e&", title: "A splash of colours can add life to even the rocks" },
    { image: "https://cdn.builder.io/api/v1/image/assets/1ba08e15231f47ac95175203e3ca154e/27bdd0adf06047cb546dc35aeba5114f1b79e664c3fd8751b7a0553b667ca458?apiKey=1ba08e15231f47ac95175203e3ca154e&", title: "Unleash your wings and create beauty" },
    { image: "https://cdn.builder.io/api/v1/image/assets/1ba08e15231f47ac95175203e3ca154e/790562a75db0fe2f32ec9243e5fd1dcc1f56c61b4c04f922aa827f7d8c96cf80?apiKey=1ba08e15231f47ac95175203e3ca154e&", title: "How to be better at writing an essay" },
    { image: "https://cdn.builder.io/api/v1/image/assets/1ba08e15231f47ac95175203e3ca154e/1a649340b096feeeac7f1ec1db385cbd5b8407e294461b96b09531ce6c30f9f4?apiKey=1ba08e15231f47ac95175203e3ca154e&", title: "A splash of colours can add life to even the rocks" }
  ];

  return (
    <section className="mt-24 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-5xl text-center text-black mb-16">
        BLOGS
        <br />
        Some bite-sized coaching for you...
      </h2>
      <div className="mt-16 mb-0 w-full max-w-[1739px] max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5">
          {blogPosts.map((post, index) => (
            <div key={index} className="w-1/3 max-md:w-full">
              <BlogPost {...post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;