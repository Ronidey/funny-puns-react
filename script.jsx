function Star({
  value,
  color,
  handleMouseEnter,
  handleMouseLeave,
  handleClick,
  isFilled
}) {
  if (!handleMouseEnter) {
    return (
      <svg
        style={{ fill: color }}
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        className="star"
      >
        <g>
          <rect fill="none" />
          {isFilled ? (
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          ) : (
            <path d="M12 7.13l.97 2.29.47 1.11 1.2.1 2.47.21-1.88 1.63-.91.79.27 1.18.56 2.41-2.12-1.28-1.03-.64-1.03.62-2.12 1.28.56-2.41.27-1.18-.91-.79-1.88-1.63 2.47-.21 1.2-.1.47-1.11.97-2.27M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z" />
          )}
        </g>
      </svg>
    );
  }
  return (
    <svg
      value={value}
      style={{ fill: color }}
      className="star"
      onMouseEnter={() => handleMouseEnter(value)}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleClick(value)}
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <g>
        <rect fill="none" />
        {isFilled ? (
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        ) : (
          <path d="M12 7.13l.97 2.29.47 1.11 1.2.1 2.47.21-1.88 1.63-.91.79.27 1.18.56 2.41-2.12-1.28-1.03-.64-1.03.62-2.12 1.28.56-2.41.27-1.18-.91-.79-1.88-1.63 2.47-.21 1.2-.1.47-1.11.97-2.27M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z" />
        )}
      </g>
    </svg>
  );
}

// RATINGS Component
class Ratings extends React.Component {
  static defaultProps = { max: 5, star: 0 };
  constructor(props) {
    super(props);
    this.state = {
      ratingsCount: props.star,
      value: 0
    };
    this._colors = {
      1: '#f34c4c',
      2: '#ff6b00',
      3: '#ff9a00',
      4: '#ffbd00',
      5: '#ffec00'
    };

    this._meanings = {
      0: '🚫 No ratings',
      1: 'Worst😡',
      2: 'Bad🤮',
      3: 'OK🙂',
      4: 'Great😃',
      5: 'Amazing😍'
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleClick(value) {
    this.setState({ ratingsCount: value, value });
  }

  handleMouseEnter(value) {
    this.setState({ ratingsCount: value });
  }

  handleMouseLeave() {
    this.setState({ ratingsCount: this.state.value });
  }

  render() {
    const { ratingsCount } = this.state;
    const stars = [];
    const max = this.props.max;

    for (let i = 1; i <= max; i++) {
      stars.push(
        <Star
          key={i}
          value={i}
          isFilled={i <= ratingsCount}
          color={this._colors[ratingsCount]}
          handleClick={this.handleClick}
          handleMouseEnter={this.handleMouseEnter}
          handleMouseLeave={this.handleMouseLeave}
        />
      );
    }

    return (
      <div>
        <p className="ratings-meaning">{this._meanings[ratingsCount]}</p>
        {stars}
      </div>
    );
  }
}

function PunCard(props) {
  return (
    <div className="pun-card">
      <div className="pun-card_header">
        <p>{props.pun}</p>
      </div>
      <div className="pun-card_footer">
        <Ratings />
      </div>
    </div>
  );
}

function PunCardsList() {
  const puns = [
    "Light travels faster than sound. That's why some people appear bright until you hear them speak",
    'I was wondering why the ball was getting bigger. Then it hit me',
    'I have a few jokes about unemployed people, but none of them work',
    "I Renamed my iPod The Titanic, so when I plug it in, it says 'The Titanic is syncing.'",
    'How do you make holy water? You boil the hell out of it',
    'Last night, I dreamed I was swimming in an ocean of orange soda. But it was just a Fanta sea',
    "Did you hear about the guy whose whole left side was cut off? He's all right now",
    'My dad farted in an elevator, it was wrong on so many levels',
    "A police officer just knocked on my door and told me my dogs are chasing people on bikes. That's ridiculous. My dogs don't even own bikes"
  ];

  const punCards = puns.map((pun, index) => <PunCard key={index} pun={pun} />);

  return <div className="pun-cards-wrapper">{punCards}</div>;
}

function App() {
  return (
    <div className="app">
      <h1>Funny Puns 😂</h1>
      <PunCardsList />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
