import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h3 className='text-center my-4'>FAQ</h3>
            <h2 className='text-center my-4'>Frequently Asked <span className='text-danger'>Questions</span></h2>
            <div className='my-3'>
                <h2>Question 1:</h2>
                <h4>Difference between authorization and authentication.</h4>
                <p> <strong>Answer:</strong> Authentication and Authorization are often used for protect a website from cyber-attacks. But There are some similarities between these two but the work of these two is different. Authentication is mainly used for verifying a user. It is the process of recognizing a user's identity. on the other hand Authorization is the function of specifying access rights/privileges to resources. If I explain in a simpler way that Authorization is the process of giving someone the ability to access a resource. You can verify what specific application files, data has been accessed by a user. Authentication works through passwords, pins, biometric information. Authorization works the way an organization has develope or implement it.</p>
            </div>
            <div className='my-3'>
                <h2>Question 2:</h2>
                <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p> <strong>Answer:</strong> Firebase is a platform developed by Google. The reason I use Firebase Authentication because it gives us many features also a great security. Firebase Authentication provides backend services, easy-to-use SDKs. With firebase, we can do email password authentication. In addition, if a user wants, he / she can sign in with GitHub and Facebook or Twitter, and many more. With Firebase we can do Email address and password-based authentication, Phone number identity verification also we can do Custom Auth too. Firebase also provides free services at the initial level. Which is another big advantage for us. Firebase also provides very good security. The identity of the user is important for maintaining the security of an application or website. In addition to Firebase, there are some excellent authentication like Auth0, Passport, Amazon Cognito, Okta, Back4app. They also provide reliable authentication services.</p>
            </div>
            <div className='my-3'>
                <h2>Question 3:</h2>
                <h4>What other services does firebase provide other than authentication?</h4>
                <p> <strong>Answer:</strong> Firebase provides many services including authentication. We can create Mobile and Computer applications through Firebase. It is specially made for business apps. We can get some more services besides Firebase authentication like Cloud firestore, Cloud Functions, Hosting, Database, Google Analytics, Predictions, Cloud Messaging. Firebase also provides free services at the initial level. Which is another big advantage for us. Firebase provide reliable and powerful databases for mobile and computer applications. Also they provide secure and fast hosting too. Google analytics is another great service we can get from Firebase. It shows you the analytics of a user how users are behaving towards their mobile and web applications.</p>
            </div>
        </div>
    );
};

export default Blogs;