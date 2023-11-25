

const DashboardTitle = ({ heading, subheading }) => {
    return (
        <div>
            <h2 className="text-3xl font-medium">{heading}
                <span className="text-orange-600">{subheading}</span>
            </h2>
        </div>
    );
};

export default DashboardTitle;