import{r as n,R as t}from"./iframe-DNYOsiJO.js";import{L as p}from"./LineChart-BGiKUXuB.js";import{R as s}from"./zIndexSlice-BYsyPOtl.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CYh_vFtl.js";import{X as d}from"./XAxis-Dc7egqDj.js";import{Y as y}from"./YAxis-BYx3TtuN.js";import{L as u}from"./Legend-YlSkelU_.js";import{L as h}from"./Line-R4OFP3LB.js";import{T as g}from"./Tooltip-B0pZWCVU.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D4XAWs0V.js";import"./index-BghJ0rJu.js";import"./index-DN5tCymc.js";import"./index-CpvOcg5A.js";import"./index-B-scg1za.js";import"./throttle-DhLz3mrQ.js";import"./get-DvCBXc2H.js";import"./renderedTicksSlice-B3G44Ect.js";import"./axisSelectors-BU0FKw5j.js";import"./d3-scale-Cm3hMOK_.js";import"./resolveDefaultProps-BPA_kNXr.js";import"./isWellBehavedNumber-BdiH4iwW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CJ0aqbjB.js";import"./chartDataContext-ALZLxkDM.js";import"./CategoricalChart-Dgn8q3Cx.js";import"./CartesianAxis-DB2jJ2Vg.js";import"./Layer-BZEyjxjb.js";import"./Text-COQ57Hvt.js";import"./DOMUtils-DMxex0QR.js";import"./Label-DBVLreiQ.js";import"./ZIndexLayer-B6YZY0_d.js";import"./types-CfyGDdUv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-I2yRXz2U.js";import"./symbol-ba0mQzRy.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cw6InSRv.js";import"./uniqBy-Dqcc81ao.js";import"./iteratee-BmMaIqc5.js";import"./Curve-C7WD3Hug.js";import"./step-BkXisL-y.js";import"./AnimatedItems-CfNYG8xc.js";import"./useAnimationId-DniHu15m.js";import"./ActivePoints-B0cX4VGQ.js";import"./Dot-DPYiTUdf.js";import"./RegisterGraphicalItemId-PRQMqBjc.js";import"./ErrorBarContext-8ntzOtYf.js";import"./GraphicalItemClipPath-C8T0qCgO.js";import"./SetGraphicalItem-DQ-8Rtbz.js";import"./getRadiusAndStrokeWidthFromDot-D7oiSawd.js";import"./ActiveShapeUtils-Dv5sca8G.js";import"./Cross-CUFgV_gL.js";import"./Rectangle-D0fmCEGG.js";import"./util-Dxo8gN5i.js";import"./Sector-DgmjtNh6.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
