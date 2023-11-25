
const SectionTitle = ({Heading, Subheading}) => {
    return (
        <div className="text-center max-w-7xl mx-auto py-10">
            <h2 className="text-4xl font-bold w-1/2 md:w-4/12 mx-auto my-4 py-2"> {Heading} <span className="text-orange-400">{Subheading}</span> </h2>
        </div>
    );
};

export default SectionTitle;