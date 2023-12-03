import React from "react";

const DepressionResourcesPage = () => {
  return (
    <div className="body">
      <h1>Missionary Depression Resources</h1>
      <p className="p">
        As an LDS missionary, facing depression can be a unique challenge. It's
        important to remember that seeking help is a sign of strength, and
        support is available to help you through difficult times.
      </p>
      <img src="depression.png" alt="depression"></img>
      <h1>Advice:</h1>
      <ul>
        <li>
          Reach out to your mission president, companion, or a trusted leader to
          discuss your feelings.
        </li>
        <li>
          Continue engaging in personal and companionship prayer to seek
          spiritual guidance.
        </li>
        <li>
          Take time for self-care and ensure you are meeting your physical and
          emotional needs.
        </li>
        <li>
          Utilize mental health resources provided by the Church, including
          counseling services.
        </li>
        <li>
          Stay connected with your support system, including family and friends
          back home.
        </li>
      </ul>
      <h1>You Are Not Alone:</h1>
      <p className="p">
        Remember that many missionaries have faced similar challenges, and it's
        okay to seek help. Your mental health is important, and there are
        resources available specifically for LDS missionaries.
      </p>
      <h1>Resources:</h1>
      <ul>
        <li>
          <a
            className="a"
            href="https://www.churchofjesuschrist.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Church of Jesus Christ of Latter-day Saints
          </a>
        </li>
        <li>
          <a
            className="a"
            href="https://providentliving.churchofjesuschrist.org/self-reliance/mental-emotional-health?lang=eng"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mental and Emotional Health Resources
          </a>
        </li>
        <li>
          <a
            className="a"
            href="https://www.churchofjesuschrist.org/mentalhealth"
            target="_blank"
            rel="noopener noreferrer"
          >
            LDS Mental Health Resources
          </a>
        </li>
        <li>
          <a
            className="a"
            href="https://suicidepreventionlifeline.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            National Suicide Prevention Lifeline
          </a>
        </li>
      </ul>
    </div>
  );
};
export default DepressionResourcesPage;
