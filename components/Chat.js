import React from 'react';
import ReactDOM from 'react-dom';
import { 
  Button,
  Media

} from 'reactstrap';

const rawData = [
  ["Dec 5, 12:30", "greta", "think they're losing momentum?"],
  ["Dec 5, 12:30", "ralph", "google all the way!"],
  ["Dec 5, 12:30", "greenbeans", "$SPY 450 you heard it here first"],
  ["Dec 5, 12:30", "faceplant65", "@greenbeans you're dreaming"],
  ["Dec 5, 12:31", "toontown", "new bear market definitely"],
  ["Dec 5, 12:31", "greg1974", "maybe apple can turn things around?"],
  ["Dec 5, 12:31", "gorevidal", "man crazy day in the markets"],
  ["Dec 5, 12:31", "jake", "i'm definitely selling lol good luck to you bulls"],
  ["Dec 5, 12:31", "hobotae", "follow me on seekingalpha"],
  ["Dec 5, 12:31", "koalasara", "when do earnings come out?"],
  ["Dec 5, 12:31", "sueylicious", "you suck! HA"],
  ["Dec 5, 12:31", "jesshsu", "think this is the beginning of the end"],
  ["Dec 5, 12:31", "andrewthemarine", "you suck!"],
  ["Dec 5, 12:31", "bogene", "no way you suck!"],
  ["Dec 5, 12:31", "ralphnader", "george bush senior RIP"],
  ["Dec 5, 12:31", "monicabonica", "trump is destroying this country"],
  ["Dec 5, 12:31", "yeahyeah", "china backed down!"],
  ["Dec 5, 12:31", "yousucklol", "$SPY will rebound soon"]
]

const formatChat = rawData.map(element => {
  return (
    <Media border="border border-primary" className="tweetbox">
      <Media left href="#">
        <Media object data-src="holder.js" alt="img" />
      </Media>
      <Media body>
        {element[0]}
        <Media heading>
          {element[1]}
        </Media>
        {element[2]}
      </Media>
    </Media>

  )
})


class Chatbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chat: []
    }
  }

  componentDidMount() {
    for (let i = 0; i < formatChat.length; i++) {
      setTimeout(() => {this.state.chat = [...this.state.chat, formatChat[i]]
        this.setState({state: this.state})
      }, 2000 * (i + 1));

    }
    console.log(this.state.chat)
    
  }

  render() {
    return(
      <div className="chat" >Tweet here!
        <Media list className="tweets" ref="tweets">
          { this.state.chat }
        </Media>
        <input type="text" id="name" name="name"></input>
        <Button color="danger">Submit!</Button>
        <style jsx>{`
            .tweetbox {
               border: 1px solid #C9C1D5;
            }
          `}</style>
      </div>

    )
  }


}

export default Chatbox