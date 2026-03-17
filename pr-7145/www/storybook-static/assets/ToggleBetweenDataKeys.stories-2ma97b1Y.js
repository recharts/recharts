import{r as n,e as t}from"./iframe-BTtdS09W.js";import{L as p}from"./LineChart-FIvbi4LX.js";import{R as s}from"./arrayEqualityCheck-Cr7uheU5.js";import{C as c}from"./CartesianGrid-DSOp2x3E.js";import{X as l}from"./XAxis-BIGryZaf.js";import{Y as d}from"./YAxis-CGeIp8Ig.js";import{L as y}from"./Legend-CcmMXJ4b.js";import{L as h}from"./Line-BlgG3M-A.js";import{T as u}from"./Tooltip-CSxEhPUY.js";import{R as g}from"./RechartsHookInspector-CAlJBqiK.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CVSfFbBC.js";import"./index-qoIXPrbj.js";import"./immer-h2tBWHbd.js";import"./hooks-D1OOIbEZ.js";import"./axisSelectors-C-C-XPOd.js";import"./d3-scale-cMqm19h5.js";import"./zIndexSlice-upTe-uMW.js";import"./renderedTicksSlice-DJkpJNhd.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-ClmLpAb4.js";import"./chartDataContext-ByF2cza-.js";import"./CategoricalChart-DC4azccj.js";import"./resolveDefaultProps-BNjLFhbQ.js";import"./CartesianAxis-Bttov5cI.js";import"./Layer-CG03jz1V.js";import"./Text-bWAVTtUg.js";import"./DOMUtils-WKcDWUte.js";import"./Label-DQKpHpKK.js";import"./ZIndexLayer-CbMDIpL4.js";import"./types-DbbwF8j4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DPD-AVYc.js";import"./symbol-C5fxreGH.js";import"./step-8k9vNXVF.js";import"./useElementOffset-CBCTXrKZ.js";import"./uniqBy-i0BZM8rB.js";import"./iteratee-sVBPIoKX.js";import"./ReactUtils-DVOsTE35.js";import"./ActivePoints-B3QE05Z9.js";import"./Dot-PYiq21Zo.js";import"./RegisterGraphicalItemId-3lWinSBd.js";import"./ErrorBarContext-amKR2pcK.js";import"./GraphicalItemClipPath-5TXw2OKP.js";import"./SetGraphicalItem-BR57Hu8e.js";import"./useAnimationId-D12e2U_3.js";import"./getRadiusAndStrokeWidthFromDot-B3UN4p5A.js";import"./ActiveShapeUtils-BJOC9-wX.js";import"./isPlainObject-LS29Qx7o.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CIL45UrG.js";import"./Trapezoid-DqH5uCSa.js";import"./Sector-U4JfKldd.js";import"./Curve-DdtOV6ZM.js";import"./Cross-DiwCuDy9.js";import"./index-DrM9enLn.js";import"./ChartSizeDimensions-DNML0thn.js";import"./OffsetShower-CC2yWEZE.js";import"./PlotAreaShower-4F-cactL.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
