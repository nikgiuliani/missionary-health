import { useParams } from "react-router-dom";

const Resources = () => {
  const { mood } = useParams();
  return (
    <div style={{ padding: "10px" }}>
      {mood === "happy" && (
        <div className="body">
          <h1 className="h1">Congrats on doing so good! Keep it up!</h1>
          <br></br>
          <br></br>
          <img
            src="/happy.png"
            alt="happy"
            style={{ width: "450px", height: "400px" }}
          ></img>
          <p className="p">
            Consider checking in on your companion to see how they are doing and
            if you can help them. <br></br>Remember that the mental health
            journey has its ups and downs, so keep coming back to this app as
            you need.
          </p>
        </div>
      )}
      {mood === "okay" && (
        <div>
          <p className="p">
            Life gets hard, but remember that the Savior is there for you.
          </p>
          <a href="https://www.churchofjesuschrist.org/study/new-era/2016/07/enduring-to-the-end?lang=eng#p6">
            Here's a conference talk you can read
          </a>
        </div>
      )}
      {mood === "anxious" && (
        <div>
          <p>
            Missionary work can produce anxiety. Whether it's home sickness or
            having to talk to strangers, missionary work will stretch you.
            Review some resources in{" "}
            <a href="https://www.churchofjesuschrist.org/study/manual/resource-booklet-adjusting-to-missionary-life/resource-booklet?lang=eng">
              Adjusting to Missionary Life
            </a>{" "}
            and remember how much you are helping your Father in Heaven.
          </p>
          <a href="https://www.churchofjesuschrist.org/study/new-era/2016/07/enduring-to-the-end?lang=eng#p6">
            Here's a conference talk you can read
          </a>
        </div>
      )}
      {mood === "sad" && (
        <div>
          <p>
            Missionary work and the conditions associated with it can be
            discouraging. Remember: God sees every tear, and He has the power to
            comfort you. Your family and friends are praying for you. You're
            never alone.
          </p>
          <a href="https://www.churchofjesuschrist.org/study/new-era/2016/07/enduring-to-the-end?lang=eng#p6">
            Here's a conference talk you can read
          </a>
        </div>
      )}
      {mood === "depressed" && (
        <div>
          <p>
            Missionary work and the conditions associated with it can be
            discouraging. Sometimes in our lives, we may even fall in a state of
            constant sadness. Just remember: God sees every tear, and He has the
            power to comfort you. Your family and friends are praying for you.
            You're never alone. Feeling this way, we recommend you talk to
            someone you trust, like your mission president or companion, or get
            the help you need.
          </p>
          <a href="https://www.churchofjesuschrist.org/study/new-era/2016/07/enduring-to-the-end?lang=eng#p6">
            Here's a conference talk you can read
          </a>
        </div>
      )}
    </div>
  );
};
export default Resources;
