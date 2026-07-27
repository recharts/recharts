import{r as n,R as t}from"./iframe-aNoK1EMe.js";import{L as p}from"./LineChart-BIYPCEMs.js";import{R as s}from"./zIndexSlice-DOhDXvjb.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CJxsBUSc.js";import{X as d}from"./XAxis-BsEbRcU-.js";import{Y as y}from"./YAxis-flrMIfza.js";import{L as u}from"./Legend-DY60V5f9.js";import{L as h}from"./Line-2K1Q72AI.js";import{T as g}from"./Tooltip-DyXF2ljh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-k_DNRHdW.js";import"./index-D5XON-Gh.js";import"./index-BdDC1fi3.js";import"./index-DU0cxzai.js";import"./index-Bu0CjtZ3.js";import"./throttle-dDtgRmGr.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-D-IRHrV3.js";import"./axisSelectors-Bs_-tFvB.js";import"./resolveDefaultProps-DbC1kYAP.js";import"./isWellBehavedNumber-DwwkvD-i.js";import"./d3-scale-_Xy_yJsZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-9qcKzyck.js";import"./chartDataContext-DZNoVeTg.js";import"./CategoricalChart-xLJxNslX.js";import"./CartesianAxis-CeEjLShX.js";import"./Layer-BCtIHmhS.js";import"./Text-Dek-bfvO.js";import"./DOMUtils-B40T5FB1.js";import"./Label-DiB3OAIB.js";import"./ZIndexLayer-DGcx9JLL.js";import"./types-Be_2sCPa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-C4JyYuKh.js";import"./symbol-DCUtDS89.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BI3734qt.js";import"./uniqBy-Bcy6VBQs.js";import"./iteratee-BF5VjlC5.js";import"./Curve-CJs4LUT2.js";import"./step-vVmdNkhc.js";import"./AnimatedItems-b0afIUOt.js";import"./useAnimationId-B-ZOGiBc.js";import"./ActivePoints-CZoVwwe_.js";import"./Dot-BDrL_0u-.js";import"./RegisterGraphicalItemId-DSvg4gFN.js";import"./ErrorBarContext-Dauct7TC.js";import"./GraphicalItemClipPath-De0s7P9u.js";import"./SetGraphicalItem-CpE1XAUN.js";import"./getRadiusAndStrokeWidthFromDot-EFIJD7AT.js";import"./ActiveShapeUtils-CWDfkNMB.js";import"./Cross-VSrUK5-b.js";import"./Rectangle-DLQWIh8f.js";import"./util-Dxo8gN5i.js";import"./Sector-Bt7ISiQZ.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Et=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Et as __namedExportsOrder,Ct as default};
