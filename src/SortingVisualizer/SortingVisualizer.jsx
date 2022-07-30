import React from 'react';
import './SortingVisualizer.css';
import { mergeSort } from '../sortingAlgorithms/mergeSort';
import { insertionSort } from '../sortingAlgorithms/insertionSort';

export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }

    // On initial app launch call 'resetArray' method
    componentDidMount(){
        this.resetArray();
    }

    // Generates new array of length 100 of random values between 5 and 1000
    resetArray(){
        const array = [];
        for (let i = 0; i < 300; i++){
            array.push(randomIntInRange(5, 900));
        }
        this.setState({array});
    }

mergeSort(){}
quickSort(){}
bubbleSort(){}
heapSort(){}

    render(){
        const {array} = this.state;

        // Iterate thru array and map each value to div element with className 'array-bar'
        // key={idx} to avoid React console warning
        // Place array value in div
        return (
            <div className='array-container'>
                {array.map((barHeight,idx) => (
                    <div
                        className='array-bar' 
                        key={idx}
                        // Height of bar is value px
                        style={{height: `${barHeight}px`}}>
                    </div>
                ))}
                <button className='app-button' onClick={() => this.resetArray()}>
                    Generate New Array
                </button>
                <button className='app-button' onClick={() => this.mergeSort()}>
                    Merge Sort
                </button>
                <button className='app-button' onClick={() => this.quickSort()}>
                    Quick Sort
                </button>
                <button className='app-button' onClick={() => this.bubbleSort()}>
                    Bubble Sort
                </button>
                <button className='app-button' onClick={() => this.heapSort()}>
                    Heap Sort
                </button>
            </div>
        );
    }
}

// From https://stackoverflow.com/questions/4194628/how-to-generate-random-numbers-in-javascript
function randomIntInRange(from, to) {
    // Inclusive (to, from)
    return Math.floor((Math.random()) * (to - from + 1) + from);
  }