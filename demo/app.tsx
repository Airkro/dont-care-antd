import { DemoLayout } from './components/demo-layout.tsx';
import { useTreeSelection } from './hooks/use-tree-selection.ts';

export function App() {
  const { value, onChange, options, exampleKey, setExampleKey } =
    useTreeSelection();

  return (
    <DemoLayout
      exampleKey={exampleKey}
      onChange={onChange}
      options={options}
      setExampleKey={setExampleKey}
      value={value}
    />
  );
}
