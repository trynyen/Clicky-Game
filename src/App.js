import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    topScore: 0,
    clickedFriend: [],
    alert: "Click an image to begin!"
  };

  shuffleAndScore = id => {
    // assign the state of the empty array to a let to be updated
    let clickedFriend = this.state.clickedFriend;
    let score = this.state.score;
    let topScore = this.state.topScore;
  
    // this.setState({
    //   showAlert: 0
    // });
    if (clickedFriend.indexOf(id) === -1){
      clickedFriend.push(id);
      this.handleIncrement();
      this.state.friends.sort(() => Math.random() - 0.5);
    }
    else if (this.state.score === 12){
      this.setState({
        score: 0,
        clickedFriend: []
      })
    }
    else{
      this.setState({
        score:0,
        clickedFriend:[]
      })
      this.state.friends.sort(() => Math.random() - 0.5);
    }

    if(score >= topScore){
      this.setState({
        topScore: score +1
      })
    }
  }

  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
  };
  
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (

      <Wrapper>

        <Navbar score = {this.state.score} topScore={this.state.topScore}>
      
        </Navbar>

        <Heading>
          <h3>Clicky Game!</h3>
          <p>Click on an image to earn points, but don't click on any more than once</p>
        </Heading>

          {this.state.friends.map(friend => (
          <FriendCard
            shuffleAndScore={this.shuffleAndScore}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
