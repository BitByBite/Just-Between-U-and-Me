
import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Animated } from 'react-native';

class Panel extends Component {
    constructor(props) {
        super(props);

        this.icons = {
            'up': require('./img/arrowUp.png'),
            'down': require('./img/downArrow.png'),
        };
        /*
        this.hearts = {
            'heartFilled': require('./img/heartFilled.png'),
            'hearUnfilled': require('./img/heatUnfilled.png'),
        }
        */
        this.state = {
            title: props.title,
            responseCounter: props.responseCounter,
            loveCounter: props.loveCounter,
            expanded: false,
            animation: new Animated.Value(),
            isClicked: false,
        };

        activateButton = isClicked => {
            const newState = Object.assign(
                {},
                {
                    isClicked: false
                },
                { isClicked: true },
            )
            this.setState(newState);
        }

    }
    /*
    _onClick() {
        if (this.clicked == false) {
            this.clicked = true;
        }
        else {
            this.clicked = false;
        }
        this.render();
    }
    */

    toggle() {
        let initialValue = this.state.expanded ? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue = this.state.expanded ? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        this.setState({
            expanded: !this.state.expanded
        });

        this.state.animation.setValue(initialValue);
        Animated.spring(
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start();
    }

    _setMaxHeight(event) {
        this.setState({
            maxHeight: event.nativeEvent.layout.height
        });
    }

    _setMinHeight(event) {
        this.setState({
            minHeight: event.nativeEvent.layout.height
        });
    }

    render() {
        let icon = this.icons['down'];

        if (this.state.expanded) {
            icon = this.icons['up'];
        }
        /*
        let hearts = this.hearts['hearUnfilled'];

        if (this.clicked == true) {
            hearts = this.hearts['heartFilled'];
            console.log("hi")
        }
        else {
            hearts = this.hearts['hearUnfilled'];
            console.log("bye")
        }
        */
        const { isClicked } = this.state

        return (
            <View style={styles.hmmm}>
                <Animated.View
                    style={[styles.container, { height: this.state.animation }]}>
                    <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
                        <Text style={styles.title}>{this.state.title}</Text>
                    </View>

                    <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                        {this.props.children}
                        <Text style={styles.counters}>{this.props.body}</Text>
                        <View style={styles.answer}>
                            <Text style={styles.counters} onPress={null}>Answer Question</Text>
                        </View>
                    </View>

                </Animated.View>
                <View style={styles.bottom}>
                    <View style={styles.things}>
                        <TouchableHighlight style={styles.imgs} onPress={() => activateButton('isCLicked')}>
                            <Image source={isClicked ? require('./img/heartFilled.png') : require('./img/heatUnfilled.png')} />
                        </TouchableHighlight>
                        <Text style={styles.counters}>{this.state.loveCounter} people sent love</Text>
                    </View>

                    <View style={styles.things}>
                        <View style={styles.imgs}>
                            <Image source={require('./img/questionBox.png')} style={styles.imgs} />
                        </View>
                        <Text style={styles.counters}>{this.state.responseCounter} responses</Text>
                    </View>

                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.toggle.bind(this)}
                        underlayColor="transparent">
                        <Image
                            style={styles.buttonImage}
                            source={icon}
                        ></Image>
                    </TouchableHighlight>
                </View>
            </View >
        );
    }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        overflow: 'hidden',
        opacity: 1,
    },
    titleContainer: {
        flexDirection: 'row',
    },
    hmmm: {
        flexDirection: 'column',
        margin: 7,
        backgroundColor: 'white',
        opacity: 1,
        overflow: 'hidden',
        borderRadius: 4,
    },
    title: {
        flex: 1,
        padding: 10,
        color: '#D3D3D3',
        fontWeight: 'normal',
        fontSize: 18,
        fontFamily: "Avenir",
    },
    button: {
        paddingTop: 0,
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 30
    },
    buttonImage: {
        resizeMode: 'contain',
    },
    body: {
        padding: 10,
        paddingTop: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .2,
    },
    bottom: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: "space-between",
        paddingTop: 10,
        paddingBottom: 10
    },
    counters: {
        fontFamily: "Avenir",
        fontSize: 16,
        color: '#D3D3D3'
    },
    imgs: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 7,
        paddingRight: 4,
        paddingBottom: 2,
    },
    things: {
        flexDirection: 'row',
        paddingBottom: 5,
    },
    answer: {
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Panel;