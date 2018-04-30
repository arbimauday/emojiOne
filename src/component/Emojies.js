import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import 'emoji-mart/css/emoji-mart.css'
import {Picker} from 'emoji-mart'
import * as actions from '../../actions';
import * as constant from '../../lib/const';
import * as config from '../../lib/config';

class Emojies extends Component {

    static propTypes = {}

    constructor() {
        super();
        this.state = {

            index: 0

        }
    }

    handleEmojiPicked = (emoji,event)=>{
        this.props.addInputValue(this.props.currentChatId, emoji.native);
    }

    render() {
        let cardClass = this.props.visible ? 'card stickers-container stickers-visible' : 'card stickers-container';
        const SETS = ['apple', 'google', 'twitter', 'emojione', 'messenger', 'facebook']
        return (
            <div className={cardClass}>

                <div className="card-body">
                    <ul className="nav nav-tabs">
                    </ul>

                    <div className="tab-content">
                        <Picker  onClick={(emoji,event)=>{
                                    this.handleEmojiPicked(emoji,event)
                                }}
                                 native={false}
                                 set={'apple'}
                                 emojiSize={28}
                                 perLine={9}
                                 defaultSkin={1}
                                 color={'#43a5e8'}
                                 showPreview={false}
                                 showSkinTones={true}/>
                    </div>
                </div>

            </div>

        );
    }

}

const mapStateToProps = (state) => {
    return {
        currentChatId: state.chat.chatId,
        visible: state.chatUI.stickersViewState,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (messageType, content) => dispatch(actions.chat.sendMessage(messageType, content)),
        addInputValue: (chatId, value) => dispatch(actions.chat.addInputValue(chatId, value)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Emojies);
