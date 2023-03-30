import React from 'react';
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personne: {
        fullname: 'cheima',
        bio: 'student in GOMYCODE',
        imgsrc: "https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg"
      },
      shows: true,
      mountingTime: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ mountingTime: this.state.mountingTime + 0.5 });
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  change = () => {
    this.setState({
      shows: !this.state.shows,
      mountingTime: 0,
    });
  };

  render() {
    return (
      <div>
        {this.state.shows && (
          <>
            <h1>My name is: {this.state.personne.fullname}</h1>
            <h1>I'm a: {this.state.personne.bio}</h1>
            <img src={this.state.personne.imgsrc} alt="personne" />
          </>
        )}
        <p>Time: {this.state.mountingTime}</p>
        <button onClick={this.change}>Toggle</button>
      </div>
    );
  }
}

export default Card;
