import React, {Component} from 'react'
// from 'emoji-picker-textfield'
//import EmojiPicker from 'emoji-picker-react';
import EmojiPicker from 'react-simple-emoji';

export default class Emoji extends Component{

    constructor() {
        super();
        this.state = { text: '', showSelector: false };
        this.handleEmoji = this.handleEmoji.bind(this);
        this.selectEmoji = this.selectEmoji.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    selectEmoji() {
        this.setState({ showSelector: !this.state.showSelector });
    }

    handleInputChange(e) {
        const text = e.target.value;
        this.setState({ text });
    }

    handleKeyDown(e) {
        if (e.keyCode === 13) return this.setState({ text: '' });
    }

    handleEmoji(emojiText) {
        const inpuText = this.state.text;
        this.setState({ text: `${inpuText}:${emojiText}:` });
    }

    render() {
        return (
            <div>
                <textarea
                    value={this.state.text}
                    type="text"
                    onChange={this.handleInputChange}
                    onKeyDown={this.handleKeyDown}
                ></textarea>
                <EmojiPicker
                    show={this.state.showSelector}
                    selector={this.selectEmoji}
                    handleEmoji={this.handleEmoji}
                />
            </div>
        );
    }

}