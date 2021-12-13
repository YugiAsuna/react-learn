import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            city: 'hangzhou',
            sex: 'female',
            loves: ['游泳', '跑步', '足球'],
            selectedLoves: []
        }
    }

    handleChange(e) {
        const name = e.target.name
        let value = e.target.value
        if(e.target.type === 'checkbox'){
            if(e.target.checked){
                 value = [...this.state.selectedLoves, value]
            } else {
                value = this.state.selectedLoves.filter(item => item !== value)
            }
        }
        this.setState({
            [name]: value
        })
    }

    render() {
        const loves = this.state.loves.map(item =>
            <label key={item}>
                <input type="checkbox" name="selectedLoves" value={item}
                       checked={this.state.selectedLoves.includes(item)} onChange={e => {
                    this.handleChange(e)
                }}/> {item}
            </label>
        )
        return (
            <div style={{color: '#fff'}}>
                <p>
                    <label>
                        姓名:
                        <input type="text" name="name" value={this.state.name} onChange={e => {
                            this.handleChange(e)
                        }}/>
                    </label>
                </p>
                <p>
                    <label>
                        城市:
                        <select name="city" value={this.state.city} onChange={e => {
                            this.handleChange(e)
                        }}>
                            <option value="shanghai">上海</option>
                            <option value="beijing">北京</option>
                            <option value="hangzhou">杭州</option>
                        </select>
                    </label>
                </p>
                <p>
                    性别:
                    <label>
                        <input type="radio" name="sex" value="male" checked={this.state.sex === 'male'} onChange={e => {
                            this.handleChange(e)
                        }}/> 男
                    </label>
                    <label>
                        <input type="radio" name="sex" value="female" checked={this.state.sex === 'female'}
                               onChange={e => {
                                   this.handleChange(e)
                               }}/> 女
                    </label>
                </p>
                <p>
                    爱好:
                    {loves}
                </p>
                <button onClick={() => {
                    console.log(this.state)
                }}>提交表单
                </button>
            </div>
        );
    }
}

export default Form;