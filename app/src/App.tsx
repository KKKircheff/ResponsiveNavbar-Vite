import Navigation from './components/Navigation.component';
import './App.css';

export interface Item {
    name: string;
    url?: string;
    children?: Item[];
}

const items: Item[] = [
    { name: 'Home', url: '/home' },
    {
        name: 'Tutorials',
        children: [
            { name: 'Beginner', url: '/tutorials/beginner' },
            { name: 'Intermediate', url: '/tutorials/intermediate' },
            { name: 'Advanced', url: '/tutorials/advanced' },
        ],
    },
    { name: 'About us', url: '/about' },
    {
        name: 'Tutorials2',
        children: [
            { name: 'Beginner2', url: '/tutorials/beginner' },
            { name: 'Intermediate2', url: '/tutorials/intermediate' },
            { name: 'Advanced2', url: '/tutorials/advanced' },
        ],
    },
    { name: 'Contact', url: '/contact' },
];

function App() {
    return (
        <div className="App">
            <Navigation items={items} />
        </div>
    )
}

export default App;
