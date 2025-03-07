import PropTypes from 'prop-types';
import CountUp from 'react-countup';

const StatisticItem = ({ end, symbol, label }) => (
    <div className="statistic">
    <span className="count">
      <CountUp end={end} duration={2} enableScrollSpy={true} scrollSpyOnce={true} />
    </span>
        <span className="symbol">{symbol}</span>
        <p>{label}</p>
    </div>
);

StatisticItem.propTypes = {
    end: PropTypes.number.isRequired,
    symbol: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

const Statistics = () => (
    <div className="statistics">
        <StatisticItem end={200} symbol="+" label="Visitors Daily" />
        <StatisticItem end={400} symbol="+" label="Deliveries Monthly" />
        <StatisticItem end={100} symbol="%" label="Positive Feedback" />
        <StatisticItem end={40} symbol="+" label="Awards & Honors" />
    </div>
);

export default Statistics;