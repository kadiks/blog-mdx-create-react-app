import React from "react";
import {
  Sandpack,
  SandpackRunner,
  SandpackProvider,
  SandpackCodeViewer,
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview
} from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";

export default function App() {
  return (
    <>
      <div>
        <h1>Sandpack without configuration</h1>
        <Sandpack />

        <h1>Sandpack with configurations</h1>
        <Sandpack
          options={{
            showLineNumbers: true,
            // showInlineErrors: true,
            showTabs: true
          }}
          theme="sandpack-dark"
          template="react"
        />
        <h1>SandpackRunner without configuration</h1>
        <SandpackRunner />

        <h1>SandpackRunner with configuration</h1>
        <SandpackRunner
          template="react"
          theme="night-owl"
          customSetup={{
            dependencies: {},
            files: {
              "/App.js": `
            export default function App() {
              return <>
              <h1>Custom setup</h1>
              </>
            }            
            `
            }
          }}
        />

        <h1>Adding a dependency</h1>
        <Sandpack
          template="react"
          theme="monokai-pro"
          options={{
            showLineNumbers: true,
            // showInlineErrors: true,
            editorHeight: 460,
            showTabs: false
          }}
          customSetup={{
            dependencies: {
              "@codesandbox/sandpack-react": "^0.10.6"
            },
            files: {
              "/App.js": `import {Sandpack} from '@codesandbox/sandpack-react'
import "@codesandbox/sandpack-react/dist/index.css";

export default function App() {
  return <>
  <h1>Custom setup</h1>
  <Sandpack />
  </>
}
`
            }
          }}
        />

        <h1>Custom setup</h1>
        <SandpackProvider template="react-ts">
          <SandpackLayout theme="sandpack-dark">
            <SandpackCodeViewer />
            <SandpackPreview />
            <SandpackCodeEditor />
          </SandpackLayout>
        </SandpackProvider>
      </div>
    </>
  );
}
