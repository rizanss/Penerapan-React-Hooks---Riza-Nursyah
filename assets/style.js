import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },

  teks: {
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#4a90e2',
    borderRadius: 8,
    backgroundColor: '#e1f5fe',
    color: '#007aff',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },

  input: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderColor: '#4a90e2',
    borderRadius: 8,
    height: 50,
    backgroundColor: '#e1f5fe',
    color: '#007aff',
    fontSize: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    marginBottom: 20,
  },
});

export { styles };
