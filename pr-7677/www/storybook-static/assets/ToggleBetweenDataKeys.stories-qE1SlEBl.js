import{r as n,R as t}from"./iframe-DVtjH5ZC.js";import{L as p}from"./LineChart-BMqNprZF.js";import{R as s}from"./zIndexSlice-CT5rKc6V.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CVAPsQVq.js";import{X as d}from"./XAxis-jQ3mwiM2.js";import{Y as y}from"./YAxis-B5n5P7NC.js";import{L as u}from"./Legend-cbzAprNX.js";import{L as h}from"./Line-CCpZ7Nx1.js";import{T as g}from"./Tooltip-Kl_3CgqO.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-UF711Qsb.js";import"./index-WzbbmlbG.js";import"./index-Dy7HbM4f.js";import"./index-DA6wIi6Z.js";import"./index-fmYZM9xu.js";import"./throttle-CXnXR6c-.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CCCeYC9z.js";import"./resolveDefaultProps-CEFHSu3W.js";import"./isWellBehavedNumber-CxtTyBKU.js";import"./d3-scale-DlNy7vWv.js";import"./renderedTicksSlice-P35kIKoD.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C3qyBmwB.js";import"./chartDataContext-C1lTg_Bk.js";import"./CategoricalChart-CCltYxzM.js";import"./CartesianAxis-MYuvHf2c.js";import"./Layer-CJUEZ1CI.js";import"./Text-DwaUpb0m.js";import"./DOMUtils-Dd9Mj9i5.js";import"./useId-uEfLXIRi.js";import"./useBackwardsCompatibleTheme-9zZd94Fp.js";import"./Label-CW5Nfot0.js";import"./ZIndexLayer-AEwL3kC6.js";import"./types-BYtifQxH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-RhNIRJfp.js";import"./symbol-Bj9pXaRF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DhnL9i8I.js";import"./uniqBy-lLim1SQG.js";import"./iteratee-DPVBHhbI.js";import"./Curve-CxVQkJLl.js";import"./step-h8OzX5q7.js";import"./AnimatedItems-rgrg930R.js";import"./useAnimationId-byXPA3hL.js";import"./ActivePoints-DSobnptb.js";import"./Dot-v10q4iwn.js";import"./RegisterGraphicalItemId-CGQFc64E.js";import"./ErrorBarContext-gvSK-T7w.js";import"./GraphicalItemClipPath-CFsYcU3O.js";import"./SetGraphicalItem-DVUS6WUr.js";import"./getRadiusAndStrokeWidthFromDot-DVbQTreU.js";import"./ActiveShapeUtils-BGtP_9iK.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-w2H0kF5t.js";import"./Rectangle-x3uoudl5.js";import"./util-Dxo8gN5i.js";import"./Sector-DZV2I517.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
