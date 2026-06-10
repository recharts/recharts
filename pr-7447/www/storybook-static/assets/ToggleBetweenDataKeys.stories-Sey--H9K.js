import{r as n,R as t}from"./iframe-Cd3J5nRN.js";import{L as p}from"./LineChart-BIvfILPn.js";import{R as s}from"./zIndexSlice-wIODfcHB.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DkXjOA93.js";import{X as d}from"./XAxis-CAq4kERr.js";import{Y as y}from"./YAxis-D2-38tFq.js";import{L as u}from"./Legend-CxtUytsz.js";import{L as h}from"./Line-AwPNXD7j.js";import{T as g}from"./Tooltip-Bya51qbO.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-4JmG_mcb.js";import"./index-CLQBN1dD.js";import"./index-DkbQm4bl.js";import"./index-DYlcgjqt.js";import"./index-BK5to_p5.js";import"./immer-D6_cV7mT.js";import"./get-CrzYsNNZ.js";import"./renderedTicksSlice-DUoWqaFq.js";import"./axisSelectors-BTr0cSxw.js";import"./d3-scale-DxsYWkxB.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-BAOUvy4N.js";import"./isWellBehavedNumber-jGn4h3zq.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-QShZ6Qyv.js";import"./chartDataContext-DQMMfvFX.js";import"./CategoricalChart-z0DLkqJ1.js";import"./CartesianAxis-CQodEWot.js";import"./Layer-C0-faibl.js";import"./Text-BQiCL8pu.js";import"./DOMUtils-C0pcSgNu.js";import"./Label-x5qCkJ5y.js";import"./ZIndexLayer-DbYdMZ0m.js";import"./types-DvVhAiRy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-B3gqvmhr.js";import"./symbol-Be66DzCH.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BXO3AwQl.js";import"./uniqBy-Jzi4tC7w.js";import"./iteratee-DiK7xQH2.js";import"./Curve-B0MYcAMh.js";import"./step-CxP-HNru.js";import"./AnimatedItems-Dhj62weC.js";import"./useAnimationId-Bd8ziSRa.js";import"./ActivePoints-IkVOH40p.js";import"./Dot-DwJjJto9.js";import"./RegisterGraphicalItemId-DPItxssW.js";import"./ErrorBarContext-DfRZ0VKD.js";import"./GraphicalItemClipPath-CZRSWXrI.js";import"./SetGraphicalItem-DYeKk97u.js";import"./getRadiusAndStrokeWidthFromDot-DvmlTDI9.js";import"./ActiveShapeUtils-DEonU6C1.js";import"./Cross-cjU0TZ8e.js";import"./Rectangle-4Sd8JCB6.js";import"./Sector-CDZyVLLc.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
