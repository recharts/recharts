import{r as p,R as t}from"./iframe-BoIdwylW.js";import{L as n}from"./LineChart-bS6_-KnL.js";import{R as s}from"./zIndexSlice-PMZXbuz8.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B5vMehIg.js";import{X as d}from"./XAxis-ClVSu1zU.js";import{Y as y}from"./YAxis-GNczrVGv.js";import{L as u}from"./Legend-BpOD1-XB.js";import{L as h}from"./Line-C9V6t-D9.js";import{T as g}from"./Tooltip-BZSYLkSX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-KwWkpOaO.js";import"./resolveDefaultProps-CtzWd-qA.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CnNiq6Rh.js";import"./throttle-DJovDE6i.js";import"./index-DNtzd00k.js";import"./index-D93QOL6W.js";import"./polarAxisSelectors-BUrHoreM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Asjkzq2w.js";import"./index-Cb6O7Zhr.js";import"./index-DeVO3TjK.js";import"./renderedTicksSlice-BcY34TaC.js";import"./index-DLxdIIWm.js";import"./fillDefinitions-CK96g-PQ.js";import"./CartesianChart-RjOUEsRj.js";import"./chartDataContext-XVkCEP1D.js";import"./CategoricalChart-8Ce8TnvZ.js";import"./CartesianAxis-DE9aH7XM.js";import"./Layer-DnLGFXqh.js";import"./Text-D_S4fT48.js";import"./ZIndexLayer-BYJgF0xG.js";import"./Label-B2lBcb4D.js";import"./types-D0djA_gg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Cpgbh6kd.js";import"./symbol-ChnJAo1F.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DHSsrRA3.js";import"./uniqBy-C09z32gb.js";import"./iteratee-C-EJIXKE.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BucXWP1n.js";import"./step-cn3vFhcC.js";import"./dataEntryStyles-CG-hLtdl.js";import"./ActivePoints-Dv9hEuIy.js";import"./Dot-CLBNcaQB.js";import"./activeStyles-kk8IGRJt.js";import"./useAnimationId-BZtpw3X8.js";import"./ErrorBarContext-DqGqKTxS.js";import"./SetGraphicalItem-B5MmjNJa.js";import"./getRadiusAndStrokeWidthFromDot-DvyJSF9f.js";import"./ActiveShapeUtils-BK27ZWgW.js";import"./useEffectiveDataKey-QRSJB29_.js";import"./Cross-CMokWgug.js";import"./Rectangle-Cws0XjiK.js";import"./util-Dxo8gN5i.js";import"./Sector-CcN-T5T3.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
