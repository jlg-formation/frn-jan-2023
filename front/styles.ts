import {StyleSheet} from 'react-native';

const borderRadius = 7;

export const gs = StyleSheet.create({
  text: {
    color: 'black',
  },
  form: {
    width: '100%',
    gap: 10,
  },
  label: {},
  textInput: {
    borderRadius: borderRadius,
    backgroundColor: '#eee',
  },
  submitButton: {
    marginTop: 40,
    backgroundColor: 'black',
    padding: 15,
    alignItems: 'center',
    borderRadius: borderRadius,
  },

  submitButtonText: {
    color: 'white',
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  paragraph: {
    marginTop: 10,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  error: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
  },
});
