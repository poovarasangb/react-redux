import "scss/init.scss";

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import store from "./store/store";
import { Counter } from "js/components/counter";

const mainElement = document.createElement('main');
document.body.appendChild(mainElement);
document.title = 'React Redux - Study';

const root = createRoot(mainElement);
root.render(
    <Provider store={store}>
        <Counter />
    </Provider>
);
