import { Component } from 'react';
import './App.css';

import { Navbar } from './components/navbar';
import { Header } from './components/header';
import { BMILabel } from './components/bmi-label';
import { BMIInput } from './components/bmi-input';
import { BMIResult } from './components/bmi-result';
import { Footer } from './components/footer'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      height: "",
      weight: "",
      bmiResult: "",
      status: "",
    }
  }

  validInput = e => {
    if (this.state.height === "") {
      alert("Enter Height");
    } 
    else if (this.state.weight === "") {
      alert("Enter Weight");
    } 
    else if (isNaN(this.state.height)) {
      alert("Enter Valid Height");
    } 
    else if (isNaN(this.state.weight)) {
      alert("Enter Valid Weight");
    }
  }

  calculateBMI = e => {
    if (this.state.height === "") {
      alert("Please Enter Height");
    } 
    else if (this.state.weight === "") {
      alert("Please Enter Weight");
    }
    else {
      let bmi = Number(this.state.weight / (this.state.height / 100 ) ** 2).toFixed(2);
      let bmiStatus =  (bmi) => {
        if (bmi < 18.5) return "underweight";
        else if (bmi >= 18.5 && bmi < 24.9) return "normal";
        else if (bmi >= 25 && bmi < 29.9) return "overweight";
        else return "obese";
      }
        this.setState({ bmiResult: bmi});
        this.setState({ status: bmiStatus(bmi) });
    }
  }

  handleHeight = e => {
    this.setState({ height: e.target.value })
    if (isNaN(this.state.height)) {
      alert("Please Enter Valid Height");
      this.setState({ height: "" })
    } 
  }

  handleWeight = e => {
    this.setState({ weight: e.target.value })
    if (isNaN(this.state.weight)) {
      alert("Please Enter Valid Weight");
      this.setState({ weight: "" })
    }
  }

  clearBMI = e => {
    this.setState({
      height: "",
      weight: "",
      bmiResult: "",
      status: "",
    })
  }


  render() {
    const { height, weight, bmiResult, status } = this.state;

    return ( 
      <>
      <Navbar />
      <div className="pt-28 md:pt-16 bg-gradient-to-b from-white to-gray-100 pb-32 md:pb-20 ">
        <Header />

        <div className="mt-12 sm:mt-16 w-11/12 md:w-1/2 mx-auto">
          <div className="mx-auto w-full">
            <div className="bg-white py-10 px-6 shadow-lg rounded-lg sm:px-14">

            {bmiResult && (<BMIResult result={bmiResult} status={status}/> )}
            
              <div className="space-y-6">
                <div>
                  <BMILabel label='Height' />
                  <BMIInput 
                    placeholder="Enter Height in CM" 
                    change={this.handleHeight}
                    value={height} 
                  />
                </div>

                <div>
                  <BMILabel label='Weight' />
                  <BMIInput 
                    placeholder="Enter Weight in KG" 
                    change={this.handleWeight}
                    value={weight} 
                  />
                </div>

                <div className="flex justify-around pt-4">

                  <div className="w-full mr-2">
                    <button
                        type='button'
                        onClick={this.calculateBMI}
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                        Calculate
                    </button>
                  </div>
                  <div className="w-full ml-2">
                    <button 
                        type="button"
                        onClick={this.clearBMI}
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-800 hover:bg-pink-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                        Clear
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
    );
  }
}

export default App;