import React , {Component} from 'react'
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

export default class Emoji_ii extends Component{

    render(){
        return(
            <div>
                <Picker set='emojione' />
                <Picker onClick={this.addEmoji} />
                <Picker title='Pick your emoji…' emoji='point_up' />
                <textarea>
                </textarea>
            </div>
        )
    }
}