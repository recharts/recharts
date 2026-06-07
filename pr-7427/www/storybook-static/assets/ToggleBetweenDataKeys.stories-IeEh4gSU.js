import{r as n,R as t}from"./iframe-gLXjAGh2.js";import{L as p}from"./LineChart-Bq3Yqggi.js";import{R as s}from"./zIndexSlice-BiRgg5Ku.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B_jcyNg_.js";import{X as d}from"./XAxis-DwB13nw6.js";import{Y as y}from"./YAxis-sdrrSkAr.js";import{L as u}from"./Legend-B6WdNlEd.js";import{L as h}from"./Line-CYHfJ8Mx.js";import{T as g}from"./Tooltip-CuqSWY1W.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BAyuf4sH.js";import"./index-BffiaVbp.js";import"./index-DhIjfNMc.js";import"./index-M9vhh8Qk.js";import"./index-konkIWth.js";import"./immer-JN2QralJ.js";import"./get-Qcb7JOLO.js";import"./renderedTicksSlice-xzybHrTF.js";import"./axisSelectors-CZIlY7LR.js";import"./d3-scale-Ce8TMAGR.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-CF7N32I5.js";import"./isWellBehavedNumber-CiIySEg5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BlBRmLbV.js";import"./chartDataContext-ClIe94X6.js";import"./CategoricalChart-2uN7uMEr.js";import"./CartesianAxis-FCBmPftJ.js";import"./Layer-BmcxLaEj.js";import"./Text-CQFVpw6C.js";import"./DOMUtils-yWa5RV4F.js";import"./Label-CJgHZQsX.js";import"./ZIndexLayer-BnXfcGJ6.js";import"./types-BTt0M0gg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-CO1Km2T0.js";import"./symbol-Bq_9R8Y2.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BY9xe1Fd.js";import"./uniqBy-DwtP5gK0.js";import"./iteratee-Dfb5foZq.js";import"./Curve-D6HNQ0fs.js";import"./step-DHNiqqKo.js";import"./AnimatedItems-BahKKeqN.js";import"./useAnimationId-Cl5wMxi-.js";import"./ActivePoints-gwX5g1ZR.js";import"./Dot-B_5lkSZo.js";import"./RegisterGraphicalItemId-Dn8a3wZC.js";import"./ErrorBarContext-DTXTD-Qt.js";import"./GraphicalItemClipPath-0uk6nwou.js";import"./SetGraphicalItem-Ce5UA7yP.js";import"./getRadiusAndStrokeWidthFromDot--8r5PZrP.js";import"./ActiveShapeUtils-C5UVGI0p.js";import"./Cross-CrYY4UWB.js";import"./Rectangle-DMbb_PeV.js";import"./Sector-gyVqqxj3.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ct=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Ct as __namedExportsOrder,vt as default};
