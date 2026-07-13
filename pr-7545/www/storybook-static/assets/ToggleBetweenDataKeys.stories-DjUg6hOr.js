import{r as n,R as t}from"./iframe-DMOF2lK6.js";import{L as p}from"./LineChart-BMzNPlr1.js";import{R as s}from"./zIndexSlice-DhTc22fH.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BJ2-NyAB.js";import{X as d}from"./XAxis-D4z0E1S_.js";import{Y as y}from"./YAxis-RrgtBsUU.js";import{L as u}from"./Legend-Bb7zjNIJ.js";import{L as h}from"./Line-D1OIUFwm.js";import{T as g}from"./Tooltip-DaOMdjzm.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-OXven1HQ.js";import"./index-D6CqkTNp.js";import"./index-CZ5vZ9qb.js";import"./index-CPzx0qn0.js";import"./index-DMOQZokV.js";import"./throttle-DdV_xgY5.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-Ba4-qyoV.js";import"./axisSelectors-CxjdpUYQ.js";import"./resolveDefaultProps-y8-G4ZMe.js";import"./isWellBehavedNumber-dZNNr5ol.js";import"./d3-scale-fRi62pfH.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dri7Y6-1.js";import"./chartDataContext-CTH0eIlx.js";import"./CategoricalChart-C3YmcWt7.js";import"./CartesianAxis-B3U1UDpz.js";import"./Layer-7eLuysDW.js";import"./Text-Diu2UmEV.js";import"./DOMUtils-BbhpPFQ_.js";import"./Label-BEoMP2Su.js";import"./ZIndexLayer-DUULPtO2.js";import"./types-CpWsykXF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BPG1JSvh.js";import"./symbol-BHRYy0Uh.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DpfPFtuA.js";import"./uniqBy-BlzluoM8.js";import"./iteratee-BqDUwzTx.js";import"./Curve-DysNMUK1.js";import"./step-DvpijsBX.js";import"./AnimatedItems-BdaIVj2C.js";import"./useAnimationId-Djm7sZoE.js";import"./ActivePoints-Dw1JugLI.js";import"./Dot-DSdOAVgn.js";import"./RegisterGraphicalItemId-CeE9Z4_x.js";import"./ErrorBarContext-B97mauET.js";import"./GraphicalItemClipPath-BUGzJbXN.js";import"./SetGraphicalItem-B-lQGR6o.js";import"./getRadiusAndStrokeWidthFromDot-EOdI7GLa.js";import"./ActiveShapeUtils-CJ8DXgxz.js";import"./Cross-DIerFCl2.js";import"./Rectangle-Czy0xVaV.js";import"./util-Dxo8gN5i.js";import"./Sector-CDZAuxi0.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
