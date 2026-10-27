import{r as p,R as t}from"./iframe-B87OnEHe.js";import{L as n}from"./LineChart-CR0dorHT.js";import{R as s}from"./zIndexSlice-CayLxsD5.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-2Uj5TCaq.js";import{X as d}from"./XAxis-P4dvE_Lf.js";import{Y as y}from"./YAxis-CIV2IRSG.js";import{L as u}from"./Legend-DWHYJm5C.js";import{L as h}from"./Line-CNmt-EGB.js";import{T as g}from"./Tooltip-BGTHTN15.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C4kU4M5n.js";import"./resolveDefaultProps-BO6btQ4Q.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DZJywaTf.js";import"./throttle-DxXe2fSX.js";import"./index-BAzLdDjX.js";import"./index-DvKC7fGa.js";import"./polarAxisSelectors-DUkdlQZC.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BoPllMsy.js";import"./index-BmBjwPgJ.js";import"./index-Cizw57Lu.js";import"./renderedTicksSlice-Db8-13BV.js";import"./index-DKiqyqcX.js";import"./CartesianChart-B_5wOWKW.js";import"./ZIndexPortal-BhrD04L0.js";import"./CategoricalChart-DOgCDtrc.js";import"./CartesianAxis-O93eF2fQ.js";import"./Layer-B5mZFZkh.js";import"./Text-DwFYMnaM.js";import"./pageBackground-CO_WqCks.js";import"./ZIndexLayer-v9eepHO2.js";import"./Label-CCuY2Era.js";import"./dataEntryStyles-B54Iq7xi.js";import"./types-CvQS_eYG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-C5l9Kmbi.js";import"./symbol-Bou66IFx.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BRYlrKrP.js";import"./uniqBy-V2CyeYbI.js";import"./iteratee-BGK8_Z9h.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CzFk349I.js";import"./step-Dlj9Cqyz.js";import"./LabelList-DteE4Y6d.js";import"./ActivePoints-Bws5v7as.js";import"./Dot-5T458_dG.js";import"./activeStyles-gtCHrDIH.js";import"./useAnimationId-DHS0idNw.js";import"./RegisterGraphicalItemId-CXcrjxG2.js";import"./ErrorBarContext-DgiLcLgY.js";import"./SetGraphicalItem-t5mD_xbz.js";import"./getRadiusAndStrokeWidthFromDot-tXoAwvPO.js";import"./ActiveShapeUtils-KYdt019M.js";import"./useEffectiveDataKey-D32F3nXW.js";import"./Cross-DlkNvcOC.js";import"./Rectangle-XssNjNyZ.js";import"./util-Dxo8gN5i.js";import"./Sector-DlmqajRv.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
