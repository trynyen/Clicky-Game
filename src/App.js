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
    status: "Click an image to begin!"
  };


  shuffleAndScore = id => {
    // Assign state
    let clickedFriend = this.state.clickedFriend;
    // let score = this.state.score;
    // let topScore = this.state.topScore;


    //If id hasn't got chosen (not in array), push id to array
    //and shuffle cards
    if (clickedFriend.indexOf(id) === -1) {
      clickedFriend.push(id);
      this.handleIncrement();
      this.state.friends.sort(() => Math.random() - 1);
    }
    //If user has guessed correctly all 12 cards, reset state
    else if (this.state.score === 12) {
      this.setState({
        score: 0,
        clickedFriend: [],
        status: "You won!!! Click an image to try again"
      })
    }
    //Otherwise, reset state and alert user that they guessed wrong then shuffle cards
    else {
      this.setState({
        score: 0,
        clickedFriend: [],
        status: "You guessed incorrectly"
      })
      this.state.friends.sort(() => Math.random() - 1);
    }

    // //If score is higher than top Score, update top score to cscurrent score
    // if (score > topScore) {
    //   this.setState({
    //     topScore: score + 1
    //   })
    // }
  }

  //Everytime user guesses right, add point to score
  handleIncrement = () => {
    let score = this.state.score;
    let topScore = this.state.topScore;
    //If score is higher than top Score, update top score to cscurrent score
    if (score > topScore) {
      this.setState({
        topScore: score + 1
      })
    }
    this.setState({
      status: "You guessed correctly",
      score: this.state.score + 1
    });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (

      <Wrapper>
        {/* This is where points and game staus show */}
        <Navbar score={this.state.score} status={this.state.status} topScore={this.state.topScore}>

        </Navbar>

        <Heading>
          <h4>Clicky Game!</h4>
          <h5>Click on an image to earn points, but don't click on any more than once</h5>
        </Heading>

        {/* assign value to each card */}
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
