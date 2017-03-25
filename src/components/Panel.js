
import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Animated } from 'react-native';

class Panel extends Component {
    constructor(props) {
        super(props);

        this.icons = {
            'up': require('./img/arrowUp.png'),
            'down': require('./img/downArrow.png'),
            'heartFilled': require('./img/heartFilled.png'),
            'hearUnfilled': require('./img/heatUnfilled.png'),
            'questionBox': require('./img/questionBox.png'),
        };

        this.hearts = {
            'heartFilled': require('./img/heartFilled.png'),
            'hearUnfilled': require('./img/heatUnfilled.png'),
        }

        this.state = {
            title: props.title,
            expanded: false,
            animation: new Animated.Value()
        };
    }

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

        let hearts = this.hearts['heartFilled'];

        if (this.props.loveCounter < 1) {
            hearts = this.hearts['hearUnfilled'];
        }

        return (
            <View style={styles.hmmm}>
                <Animated.View
                    style={[styles.container, { height: this.state.animation }]}>
                    <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
                        <Text style={styles.title}>{this.state.title}</Text>
                    </View>

                    <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                        {this.props.children}

                    </View>

                </Animated.View>
                <View style={styles.bottom}>
                    <View style={styles.things}>
                        <View style={styles.imgs}>
                            <Image source={hearts} />
                        </View>
                        <Text style={styles.counters}>{this.props.loveCounter} people sent love</Text>
                    </View>

                    <View style={styles.things}>
                        <View style={styles.imgs}>
                            <Image source={require('./img/questionBox.png')} style={styles.imgs} />
                        </View>
                        <Text style={styles.counters}>{this.props.responseCounter} responses</Text>
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
        margin: 10,
        backgroundColor: 'white',
        opacity: 1,
        overflow: 'hidden',
        borderRadius: 4,
    },
    title: {
        flex: 1,
        padding: 10,
        color: '#000',
        fontWeight: 'bold',
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
    },
    counters: {
        fontFamily: "Avenir",
        fontSize: 16,

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
    }
});

export default Panel;