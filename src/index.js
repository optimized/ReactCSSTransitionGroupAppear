import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

    var ReactCSSTransitionGroupAppear = React.createClass({

        propTypes: {
            transitionName: React.PropTypes.string.isRequired,
            transitionEnter: React.PropTypes.bool,
            transitionLeave: React.PropTypes.bool,
            transitionAppear: React.PropTypes.bool,
            transitionEnterTimeout: React.PropTypes.number,
            transitionLeaveTimeout: React.PropTypes.number
        },

        getInitialState: function() {
            return {mounted: false}
        },

        getDefaultProps: function() {
            return {
                transitionEnter: true,
                transitionLeave: true,
                transitionAppear: true,
                transitionEnterTimeout: 0,
                transitionLeaveTimeout: 0
            };
        },

        componentDidMount: function() {
            this.setState({ mounted: true });
        },

        render: function (){

            var children;

            if(!this.props.transitionAppear){
                children = this.props.children;
            } else {
                if(this.state.mounted){
                    children = this.props.children;
                }
            }

            return(
                <ReactCSSTransitionGroup
                    transitionName={this.props.transitionName}
                    transitionEnterTimeout={this.props.transitionEnterTimeout}
                    transitionLeaveTimeout={this.props.transitionLeaveTimeout}
                    transitionEnter={this.props.transitionEnter}
                    transitionLeave={this.props.transitionLeave}
                >{children}</ReactCSSTransitionGroup>
            )
        }
    });

export default ReactCSSTransitionGroupAppear
