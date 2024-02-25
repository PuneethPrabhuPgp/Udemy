
// Higher order Component
const withPromotedLabel = (RestroCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-gray-600 text-white mt-10 py-1 px-2 rounded-sm text-sm ">
          Promoted
        </label>
        <RestroCard {...props} />
      </div>
    );
  }
}

export default withPromotedLabel;
