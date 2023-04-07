const App = () => (
    <div>
        <FirstComp />
        <NamedComp name="Denis" />
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);