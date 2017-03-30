import ScrollableTabView from 'react-native-scrollable-tab-view';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import Panel from '../Panel';
import CommentPanels from './CommentPanels';


export default class TabNav extends Component {
  render() {
    return (
      <ScrollableTabView>
        <CommentPanels tabLabel="Questions" />
        <CommentPanels tabLabel="Answered" />
        <CommentPanels tabLabel="Liked" />
      </ScrollableTabView>
    );
  }
};
