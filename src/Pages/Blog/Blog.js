import React from 'react';

const Blog = () => {
    return (
        <div className='w-7/12 mx-auto grid gap-4 my-16'>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 rounded-box bg-gray-100">
                <div className="collapse-title text-sm font-medium">
                    <p>What are the different ways to manage a state in a React application?</p>
                </div>
                <div className="collapse-content">
                    <p className='text-xs text-gray-500'>The Four Kinds of React State to Manage. <br />
                        Local state. Global state. Server state. URL state.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-gray-100 rounded-box">
                <div className="collapse-title text-sm font-medium">
                    <p>How does prototypical inheritance work?</p>
                </div>
                <div className="collapse-content">
                    <p className='text-xs text-gray-500'>How does prototypical inheritance work in react?
                        Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. All JavaScript objects inherit properties and methods from a prototype: Date objects inherit from Date.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-gray-100 rounded-box">
                <div className="collapse-title text-sm font-medium">
                    <p>What is a unit test? Why should we write unit tests?</p>
                </div>
                <div className="collapse-content">
                    <p className='text-xs text-gray-500'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-gray-100 rounded-box">
                <div className="collapse-title text-sm font-medium">
                    <p>React vs. Angular vs. Vue?</p>
                </div>
                <div className="collapse-content">
                    <p className='text-xs text-gray-500'>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;