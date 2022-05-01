import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';


const Blog = () => {
    return (
        <div>
            <PageTitle title="Blog"></PageTitle>
            <div className='mt-4 text-center '>
                <h1>This is Question Answer Section</h1>
            </div>
            <div className='mt-4'>
                <h4 className='text-primary'>Question: 1 Difference between javascript and nodejs?</h4>
                <h5>Answer: JavaScript<p>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the
                    ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype
                    inheritance.Javascript is a programming language that is used for writing scripts on the website.It is basically used on the client-side.</p></h5>
                <h5> NodeJS<p>NodeJS is a cross-platform and open source Javascript runtime environment that allows the javascript to be run on the server-side.
                    Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.NodeJS is a Javascript runtime environment.mostly used on the server-side</p></h5>
            </div>
            <div className='mt-4'>
                <h4 className='text-primary'>Question: 2 When should you use nodejs and when should you use mongodb?</h4>
                <h5>Answer: Node.js <p>I should use Node.js is for non-blocking, event-driven servers, due to its single-threaded nature.
                    It's used for traditional web sites and back-end API services,designed with real-time.</p></h5>
                <h5> MongoDB<p>I should use MongoDB because it is the most popular of the new breed of non-relational NoSQL databases.When my data is document-centric
                    and does not fit well into the schema of a relational database, when I need to accommodate massive scale, when I am
                    rapidly prototyping, and many other cases we need to use mongodb.</p></h5>
            </div>
            <div className='mt-4'>
                <h4 className='text-primary'>Question: 3 Differences between sql and nosql databases?</h4>
                <h5>Answer: SQL databases <p>SQL databases are relational,
                    SQL databases use structured query language and have a predefined schema.
                    SQL databases are vertically scalable,
                    SQL databases are table-based,
                    SQL databases are better for multi-row transactions.</p></h5>
                <h5> NoSQL databases<p> NoSQL databases are non-relational. NoSQL databases have dynamic schemas for
                    unstructured data.NoSQL databases are horizontally scalable.NoSQL databases are document, key-value, graph, or wide-column stores.NoSQL is better for unstructured data like documents or JSON</p></h5>
            </div>
            <div className='mt-4'>
                <h4 className='text-primary'>Question: 4 What is the purpose of jwt and how does it work?</h4>
                <h5>Answer: JWT<p>JWT, is an open standard used to share security information between two parties - a client and a server.
                    Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure
                    that the claims cannot be altered after the token is issued.</p></h5>
            </div>
        </div>
    );
};

export default Blog;