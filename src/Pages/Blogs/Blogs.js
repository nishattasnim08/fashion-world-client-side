import React from 'react';
import { Table } from 'react-bootstrap';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container my-5 text-center'>
            <div>
                <h2 className='my-3 pt-3 text-center'>Q1. Difference between javascript and node js</h2>

                <div className='devide'></div>

                <div className='w-75 mx-auto my-5'>
                    <Table responsive striped bordered hover variant="dark" className='text-center'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>JavaScript</th>
                                <th>Node Js</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Javascript is a computer language that may be used to create website scripts.</td>
                                <td>NodeJS is a runtime environment for Javascript.</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Javascript is only available in browsers.</td>
                                <td>With NodeJS, we can run Javascript outside of the browser.</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>It's mostly used on the client's end.</td>
                                <td>It's mostly used on the server's end.</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Javascript has the ability to add HTML and manipulate the DOM.</td>
                                <td>Nodejs does not support the addition of HTML tags.</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Javascript can run in any browser engine, such as Safari's JS core and Firefox's Spidermonkey.</td>
                                <td>Node's Javascript engine is called V8. js that parses Javascript and executes it.</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>In front-end development, Javascript is implemented.</td>
                                <td>In server-side programming, Nodejs is implemented.</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>RamdaJS, TypedJS, and others are some javascript frameworks.</td>
                                <td>Lodash, express, and other Nodejs modules are examples. These modules will be downloaded through npm.</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>It's a newer version of ECMA script that makes use of Chrome's C++-based V8 engine.</td>
                                <td>C, C++, and Javascript are used to create Nodejs.</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <div>
                <h2 className='my-3 pt-3 text-center'>Q2. When should you use nodejs and when should you use mongodb?</h2>

                <div className='devide w-100'></div>

                <div className='text-start'>
                    <div className='w-75 mx-auto'>
                        <h3 className='py-3'>
                            <ul>
                                <li>When should you use nodejs</li>
                            </ul>
                        </h3>
                        <p>
                            In order to gain the greatest application speed, we'll try to figure out when to utilize Node.js and what Node.js is used for in web development.
                        </p>
                        <ul>
                            <li className='py-3'><b>Real-time applications: </b>Since Node.js is recognized for its speed and performance, one of the most common Node.js use cases is real-time messaging or chatting. The environment can handle high volumes of brief messages or chatrooms where messages are presented to numerous people at once.</li>
                            <li className='py-3'><b>IoT applications: </b>The Node.js IoT synergy is the finest for implementing IoT development projects. <br /> First of all, Node js is quick and strong, making it capable of managing enormous data flows. Second, Node.js is simple to connect with IoT protocols (the integration with MQTT and WebSockets can be a good example). <br /> Finally, the Node Package Manager, as briefly mentioned above, contains a large number of useful IoT modules that aid in the implementation of even the most ambitious IoT projects. <br /> These are just a handful of the reasons why several major corporations, such as Microsoft, are already utilizing Node.js for IoT development.</li>
                            <li className='py-3'><b>Collaborative tools: </b>This Node.js use case illustrates the language's ability to process real-time flows. Trello, a project management platform popular among software development firms, should be familiar to you. Trello, on the other hand, was built using Node.js and benefited from its event-driven, non-blocking paradigm. Node.js is ideal for applications that require frequent updates, such as collaboration tools and online documentation libraries.</li>
                            <li className='py-3'><b>Data streaming applications: </b>The word "streaming" refers to transferring huge volumes of data in tiny batches rather than in one large batch. This is particularly important for audio and video streaming applications. With built-in modules that enable data streaming and the ability to generate both reading and write data streams, Node.js is ideal for this purpose. You may imagine how strong this environment is when we consider that Netflix, a worldwide video service provider, employs Node.js.</li>
                            <li className='py-3'><b>Applications relying on scalability: </b>For projects that must sustain high peak loads, Node.js' excellent scalability answers the question "why Node.js?" This is why Uber picked Node.js for its app development. The worldwide taxi network is always developing and expanding; yet, the nature of the taxi sector produces significant demand peaks over the holidays. These difficulties are efficiently handled by Node.js.</li>
                        </ul>

                        <h3 className='py-3'>
                            <ul>
                                <li>When should you use mongodb</li>
                            </ul>
                        </h3>
                        <ul>
                            <li className='py-3'>MongoDB is an excellent database for online applications, particularly those that serve a large number of users that do not communicate with one another. Consider financial services apps, where customers just require access to their own information. Users may log in and create/edit their own blogs with a blogging program. The main conclusion is that users do not engage with one another.A relational database would need storing information about a user in several tables. When the user signs on, the application will need to run many queries, or sophisticated JOIN queries, to get all of that person's information. You may store all of a user's information in one place with MongoDB's schemaless document database. This allows for a single query to a single collection, with the front-end handling the data presentation and modification.</li>
                            <li className='py-3'>Another great application for MongoDB is combining many datasets. Its schemaless architecture lets you to store your data as you like. As a result, you may collect data from a variety of sources (websites, databases, RSS feeds, and so on) and analyze it all using services built on top of your new database. Integrate.io, for example, provides this MongoDB integration.</li>
                            <li className='py-3'>MongoDB is an excellent database for combining geographical and non-geospatial data. MongoDB supports GeoJSON types, so you can store latitude and longitudes effectively if "location" is a piece of metadata you're working with. MongoDB also supports 2DSphere Indexes, which speed up sphere geometric computations.</li>
                        </ul>

                    </div>
                </div>
            </div>
            <div>
                <h2 className='my-3 pt-3 text-center'>Q3. Differences between sql and nosql databases.</h2>

                <div className='devide'></div>

                <div className='w-75 mx-auto my-5'>
                    <Table responsive striped bordered hover variant="dark" className='text-center'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>SQL</th>
                                <th>NoSQL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>System for managing relational databases (RDBMS)</td>
                                <td>Database system that is non-relational or distributed.</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>These databases have a predetermined schema that is fixed, static, or both.</td>
                                <td>They have dynamic schema</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>These databases are not designed to store hierarchical data.</td>
                                <td>These databases are ideal for storing data in hierarchical order.</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Complex queries benefit from these databases.</td>
                                <td>Complex searches are not well-suited to these databases.</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Vertically Scalable</td>
                                <td>Horizontally Scalable</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Follows ACID property</td>
                                <td>Follows CAP (consistency, availability, partition tolerance)</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <div>
                <h2 className='my-3 pt-3 text-center'>Q4. What is the purpose of jwt and how does it work?</h2>

                <div className='devide'></div>

                <div className='w-75 mx-auto text-start py-3'>
                    <p>
                        JWT (JSON Web Token) is an open standard that allows two parties — a client and a server — to communicate security information. JSON items, containing a set of claims, are encoded in each JWT. JWTs use a cryptographic technique to ensure that the claims cannot be changed after the token has been issued.
                        <br />
                        JWTs are unique among web tokens in that they include a set of claims. Claims are a type of communication between two parties. The nature of these assertions is determined by the use case at hand. A claim might specify who issued the token, how long it is valid, or what permissions the client has been given.
                        <br />
                        A JWT is a serialized string made up of three components separated by dots (.). The JWT is formatted as xxxxx.yyyyy.zzzzz in the most common serialization type, compact serialization.
                        <br />
                        <br />
                        We'll obtain two JSON strings after decoding:
                        <br />
                        <ol>
                            <li>The header and the payload.</li>
                            <li>The signature. </li>
                        </ol>
                        The kind of token — JWT in this example — and the signature technique are both specified in the JOSE (JSON Object Signing and Encryption) header.
                        <br />
                        <br />
                        The claims are contained in the payload. To keep the JWT small, this is shown as a JSON string with no more than a dozen fields. The server normally uses this information to verify that the user has authorization to do the activity requested.
                        <br />
                        A JWT does not have any obligatory claims, but overlying standards may make them mandatory. For example, iss, sub, aud, and exp must all be present when utilizing JWT as a bearer access token under OAuth2.0. There are some that are more frequent than others.
                        <br />
                        The signature verifies that the token was not tampered with. The person who produces the JWT signs the header and payload with a secret that both the issuer and receiver know about, or with a private key that only the sender knows about. The receiving party checks that the header and payload match the signature when the token is utilized.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;