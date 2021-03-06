/*
 Copyright (c) 2016-present, salesforce.com, inc. All rights reserved.

 Redistribution and use of this software in source and binary forms, with or without modification,
 are permitted provided that the following conditions are met:
 * Redistributions of source code must retain the above copyright notice, this list of conditions
 and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list of
 conditions and the following disclaimer in the documentation and/or other materials provided
 with the distribution.
 * Neither the name of salesforce.com, inc. nor the names of its contributors may be used to
 endorse or promote products derived from this software without specific prior written
 permission of salesforce.com, inc.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
 IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY
 WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
 /**
 * @flow
 */

'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} = ReactNative;


// Keep this list in sync with UIExplorerIntegrationTests.m
var TESTS = [
  require('./IntegrationTestSmartStoreBridgeTest')
];

TESTS.forEach(
  (test) => AppRegistry.registerComponent(test.displayName, () => test)
);


type Test = any;

class IntegrationTestsApp extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Start you development server</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 40,
    margin: 15,
  },
  row: {
    padding: 10,
  },
  testName: {
    fontWeight: '500',
  },
  separator: {
    height: 1,
    backgroundColor: '#bbbbbb',
  },
});

AppRegistry.registerComponent('SmartSyncExplorerReactNative', () => IntegrationTestsApp);
