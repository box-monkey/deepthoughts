import { useQuery } from "@apollo/client";
import { QUERY_THOUGHTS } from "../utils/queries";
import React from "react";
import ThoughtList from '../components/ThoughtList';

const Home = () => {
  // use usequery hook to make query request
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  // ? = new optional chaining operator, only usable in browsers.
  // store in thoughts const if theres data, if not store garbage in an empty array. since that data will be undefined.
  const thoughts = data?.thoughts || [];
  console.log(thoughts);

  return (
    <main>
    <div className="flex-row justify-space-between">
      <div className="col-12 mb-3">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ThoughtList thoughts={thoughts} title="Some Feed for Thought(s)..." />
        )}
      </div>
    </div>
  </main>
  );
};

export default Home;
