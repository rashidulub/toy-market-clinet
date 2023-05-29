
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container my-5 p-10'>
            <div className='blog-info'>
                <h1>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p> As mentioned, for security purposes, access tokens may be valid for a short amount of time. Once they expire, client applications can use a refresh token to refresh the access token. That is, a refresh token is a credential artifact that lets a client application get new access tokens without having to ask the user to log in again. <br />
                It is important to keep in mind that the OAuth 2.0 specification defines access tokens and refresh tokens. So, if we were to discuss authorization strategies in terms of other identity protocols or frameworks, such as SAML, we would not have the concepts of access tokens or refresh tokens.
                </p>
            </div>
            <div>
                <h1>2. Compare SQL and NoSQL databases?</h1>
                <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables, with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
            </div>
            <div>
                <h1>3. What is express js? What is Nest JS ?</h1>
                <p>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. <br />
                Nest. JS is a framework that helps build Node. JS server-side applications. The Nest framework is built using TypeScript which allows developers to build highly scalable and testable applications.</p>
            </div>
            <div>
                <h1>4. What is MongoDB aggregate and how does it work ?</h1>
                <p>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
            </div>
        </div>
    );
};

export default Blog;