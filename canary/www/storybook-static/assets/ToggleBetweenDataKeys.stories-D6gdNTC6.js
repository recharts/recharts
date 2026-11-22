import{r as p,R as t}from"./iframe-CLIhRm7R.js";import{L as n}from"./LineChart-Bhva9G4x.js";import{R as s}from"./zIndexSlice-cURKLlYU.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BN53D3nn.js";import{X as d}from"./XAxis-ClFJPrvR.js";import{Y as y}from"./YAxis-CpKr4jH1.js";import{L as u}from"./Legend-BwvE44zk.js";import{L as h}from"./Line-CEDpZoGH.js";import{T as g}from"./Tooltip-DLIwj_AL.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DwQg3ppC.js";import"./resolveDefaultProps-D-eAHaNk.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CDU9IwIv.js";import"./throttle-B7ykPIAJ.js";import"./index-DR1HnwII.js";import"./index-BUNiVZYu.js";import"./polarAxisSelectors-D5qsDUBS.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D44QmEnt.js";import"./index-BRcZtsT0.js";import"./index-B_FXaL58.js";import"./renderedTicksSlice-BBFFs0IH.js";import"./index-CQ513AnM.js";import"./fillDefinitions-Y1HmkZBg.js";import"./CartesianChart-Cfp3axNC.js";import"./chartDataContext-CnJguSW_.js";import"./CategoricalChart-RViwWBSb.js";import"./CartesianAxis-xu52TX6T.js";import"./Layer-BbygySlV.js";import"./Text-JwQNyxYp.js";import"./ZIndexLayer-CVT-3Kt6.js";import"./Label-DearAakw.js";import"./types-B-D67JLt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CL9eWqJw.js";import"./symbol-DfjzGj-p.js";import"./path-BBMZd4YL.js";import"./useElementOffset-Dhc2h3vn.js";import"./uniqBy-CxU7f0Dn.js";import"./iteratee-uHzYhx_d.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-4sZTg9_Z.js";import"./Curve-BOeChXDU.js";import"./step-b64WSsG3.js";import"./dataEntryStyles-BrgkWZuf.js";import"./ActivePoints-C9r-WFdJ.js";import"./Dot-C3ytqCXy.js";import"./activeStyles-DkO8dKQi.js";import"./useAnimationId-CFCPoirY.js";import"./ErrorBarContext-D47utnLy.js";import"./SetGraphicalItem-Byj-zkni.js";import"./ActiveShapeUtils-B5F3agWS.js";import"./useEffectiveDataKey-B6ZXrXvv.js";import"./Cross-D7p88CJS.js";import"./Rectangle-_VT99gpA.js";import"./util-Dxo8gN5i.js";import"./Sector-CRfs2O2v.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [dataKey, setDataKey] = useState('pv');
    return <>
        <button type="button" onClick={() => {
        if (dataKey === 'pv') {
          setDataKey('uv');
        } else {
          setDataKey('pv');
        }
      }}>
          Change Data Key
        </button>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={400} data={pageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
