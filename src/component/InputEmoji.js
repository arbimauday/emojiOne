import React, {Component} from 'react';

/* Start Emojicons for typing message */
import $ from 'jquery';
import 'emojionearea/dist/emojionearea.js';
import 'emojionearea/dist/emojionearea.css';
/* End Emojicons for typing message */

/*Star for view, example :smile:*/
import Emojify from 'react-emojione';
/*End for view, example :smile:*/

export default class InputEmoji extends Component{
    constructor(props){
        super(props);
        this.state = {
            messageText: ''
        }
    }

    clickTest(){
        var emojiElt = $("#txtMessage").emojioneArea({
            type: 'string',
            default: 'unicode',
            accepts_values: 'shortname',
            shortnames: true
        });

        // Get text
        var text = emojiElt.data("emojioneArea").getText();
        console.log('message Input :', text);

        this.setState({messageText:text});
        // Get html
        var html = emojiElt.data("emojioneArea").editor.html();
        console.log('html :', html);

        // Reset Emoji field
        emojiElt.data("emojioneArea").setText('');

    }

    render(){

        return(
            <div>
                <div style={{
                    textAlign:'left',
                    margin: '0 auto',
                    width: '400px',
                }}>
                    <input
                        id="txtMessage"
                        name="messForView"
                        value={this.state.messForView}
                        onChange={event => this.typingMess(event)}
                        onKeyPress={e => this.delete(e)}
                    />
                </div>
                <button onClick={(e)=>this.clickTest(e)}>clickTest</button>
                <br/>
                <br/>
                {/*untuk menampilkan pesan atau parsing data colons, contoh :smile:*/}
                <Emojify>
                    {this.state.messageText}
                </Emojify>
            </div>
        );
    }



    componentDidMount(){
        // make tag for input
        $("#txtMessage").emojioneArea({
            placeholder: 'Write something..',
            pickerPosition: "top",
            tones: false,
            autocomplete: true,
            type: 'string',
            default: 'unicode',
            accepts_values: 'shortname',
            shortnames: true,
            // autocomplete: 'on',
            // accepts_values: 'shortname',
            saveEmojisAs: 'shortname',
            useInternalCDN: true
        });
    }

}