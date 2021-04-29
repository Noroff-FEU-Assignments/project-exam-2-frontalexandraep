import Heading from "../../common/Heading";

function Confirmation() {
  return (
    <div className="booking-confirmation">
      <Heading size="1" content="Thank you for choosing us!" />
      <Heading
        size="2"
        content="Your booking was successful. You will receive a booking confirmation with all details within 24 hours."
      />
    </div>
  );
}

export default Confirmation;
