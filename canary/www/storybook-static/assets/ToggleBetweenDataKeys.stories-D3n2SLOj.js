import{r as n,R as t}from"./iframe-BMarL12M.js";import{L as p}from"./LineChart-C2oSte0z.js";import{R as s}from"./zIndexSlice-C3zFoeWv.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Z6_HDZb4.js";import{X as d}from"./XAxis-HDWpUUwS.js";import{Y as y}from"./YAxis-hUo2hZ05.js";import{L as u}from"./Legend-CLxa5TeL.js";import{L as h}from"./Line-BwUTPDsI.js";import{T as g}from"./Tooltip-PdFdRuoZ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C2ncjDjR.js";import"./index-rELjxh9R.js";import"./index-vTpJvilY.js";import"./index-Dlh6vJO1.js";import"./index-D9BBRgqz.js";import"./throttle-szqIxzqv.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DONKf7kg.js";import"./resolveDefaultProps-C6wBzGKi.js";import"./isWellBehavedNumber-DBs0imhW.js";import"./d3-scale-C4M2cZc9.js";import"./renderedTicksSlice-BGVDzAbm.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bsi6NNhA.js";import"./chartDataContext-BcZuDILO.js";import"./CategoricalChart-D3itWTr1.js";import"./CartesianAxis-CxMr6rDg.js";import"./Layer-DPtUoMDp.js";import"./Text-CGkcqRdd.js";import"./DOMUtils-DSG72bMg.js";import"./useBackwardsCompatibleTheme-DDTyJRfe.js";import"./Label-wMX0Bukp.js";import"./ZIndexLayer-4Y9-7gYz.js";import"./types-B-ESMolm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C84cErrU.js";import"./symbol-haaQYdDX.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CbVTphV2.js";import"./uniqBy-CCOUcI7g.js";import"./iteratee-CBPiPp_w.js";import"./Curve-CqaRxmR5.js";import"./step-B2Vat6Ch.js";import"./AnimatedItems-BsByAcaR.js";import"./useAnimationId-W_lOfRkr.js";import"./ActivePoints-CaZ5IFfg.js";import"./Dot-BRm5AFxN.js";import"./RegisterGraphicalItemId-CxNs_80A.js";import"./ErrorBarContext-GzARO3dP.js";import"./GraphicalItemClipPath-CUFqqD93.js";import"./SetGraphicalItem-B6tJU4_Z.js";import"./getRadiusAndStrokeWidthFromDot-qR9Ssn50.js";import"./ActiveShapeUtils-_BzuEdws.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-C37vXQe-.js";import"./Rectangle-C589zoI3.js";import"./util-Dxo8gN5i.js";import"./Sector-BRX9jJbJ.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const wt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
