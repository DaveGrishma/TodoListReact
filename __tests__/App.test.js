// Import the functions from the testing-library
import {render, screen, fireEvent} from '@testing-library/react-native'

// Import the component to test
import App from "../App"

describe('App.js Tests', () => {
   it('on initial load, message shows that there are no tasks', () => {
     const { getByText } = render(<App />);
     expect(getByText('Hurray, No tasks to do !')).toBeTruthy();
   });
 
   it('after adding a task, the flatlist is updated', () => {
     const { getByText, getByPlaceholderText } = render(<App />);
     fireEvent.changeText(getByPlaceholderText('Enter Task'), 'New Task');
     fireEvent.press(getByText('Add Task'));
     expect(getByText('New Task')).toBeTruthy();
   });
 });
