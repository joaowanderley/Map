import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  content: {
    flexDirection: 'row',
  },
  buttonSim: {
    width: 80,
    height: 40,
    marginTop: 20,
    marginRight: 10,
    backgroundColor: 'green',
    alignItems: 'center'
  },
  buttonNao: {
    width: 80,
    height: 40,
    marginTop: 20,
    marginRight: 10,
    backgroundColor: 'red',
    alignItems: 'center'
  }

})

export default styles