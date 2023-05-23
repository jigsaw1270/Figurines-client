import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div tabIndex={0} className="my-6 text-white bg-teal-600 border collapse collapse-arrow border-base-300 rounded-box">
  <div className="text-xl font-medium collapse-title">
  What is an access token and refresh token? How do they work and where should we store them on the client-side?
  </div>
  <div className="collapse-content">
    <p>Access Token: An access token is a type of credential that denotes the permission given to a client (such as a user or an application) to make use of a particular resource or carry out a particular action on the user's behalf. It normally has a short lifespan and a related expiration time. Requests for secured server resources are authenticated and authorized using access tokens.

Refresh Token: When an access token expires, a refresh token is a durable credential that may be used to get a new one. The refresh token is normally held privately on the client-side and is not intended to be shared with the server or other clients, unlike the access token. It is utilized to seek a fresh access and verify the client's identity.</p>
  </div>
</div>
            <div tabIndex={0} className="my-6 text-white bg-teal-600 border collapse collapse-arrow border-base-300 rounded-box">
  <div className="text-xl font-medium collapse-title">
  Compare SQL and NoSQL databases?
  </div>
  <div className="collapse-content">
    <p>While NoSQL databases scale horizontally, SQL databases scale vertically. While NoSQL databases are document, key-value, graph, or wide-column stores, SQL databases are table-based. While NoSQL databases are better for unstructured data like documents or JSON, SQL databases are superior for multi-row transactions.
</p>
  </div>
</div>
            <div tabIndex={0} className="my-6 text-white bg-teal-600 border collapse collapse-arrow border-base-300 rounded-box">
  <div className="text-xl font-medium collapse-title">
  What is express js? What is Nest JS ?
  </div>
  <div className="collapse-content">
    <p>Express is a simple, adaptable, and minimalist framework with a sizable development community. Contrarily, NestJS is a more recent framework that offers more capabilities including dependency injection, a modular architecture, and an easy-to-use CLI.
</p>
  </div>
</div>
            <div tabIndex={0} className="my-6 text-white bg-teal-600 border collapse collapse-arrow border-base-300 rounded-box">
  <div className="text-xl font-medium collapse-title">
  What is MongoDB aggregate and how does it work?
  </div>
  <div className="collapse-content">
    <p>What in MongoDB is Aggregation? Aggregation is the process of going through various phases with a huge collection of documents to process them. A pipeline is made up of the several stages. Filtering, sorting, grouping, reshaping, and altering documents as they move through a pipeline are all possible.

</p>
  </div>
</div>
        </div>
    );
};

export default Blogs;