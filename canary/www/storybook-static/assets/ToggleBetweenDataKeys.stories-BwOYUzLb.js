import{r as n,e as t}from"./iframe-C3UZ-t_V.js";import{L as p}from"./LineChart-CyVw2tte.js";import{R as s}from"./arrayEqualityCheck-DIL50JWa.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D2p0Ir6T.js";import{X as d}from"./XAxis-DMAObJwa.js";import{Y as y}from"./YAxis-B5LKtkqe.js";import{L as h}from"./Legend-BAX1K06t.js";import{L as u}from"./Line-gDEmZD-v.js";import{T as g}from"./Tooltip-BtNIb_6F.js";import{R as K}from"./RechartsHookInspector-BFtfPmXC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bsvy-j69.js";import"./index-ClWM-yv2.js";import"./immer-Bf7Gcqi0.js";import"./hooks-DPl2sBv5.js";import"./axisSelectors-DmOEhaOy.js";import"./d3-scale-UHw6FirY.js";import"./zIndexSlice-Dx4k4ZlJ.js";import"./renderedTicksSlice-CLnyFrSg.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BmK7YYly.js";import"./chartDataContext-BmElG8Xh.js";import"./CategoricalChart-DaGR7SKz.js";import"./resolveDefaultProps-aaXGpNRZ.js";import"./CartesianAxis-CYGD0r1r.js";import"./Layer-CI6sC4Pl.js";import"./Text-DPTsyd0A.js";import"./DOMUtils-BUXVBs_y.js";import"./Label-BrcoQVek.js";import"./ZIndexLayer-D78RDR2e.js";import"./types-5hKD9RW5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DCi2amY7.js";import"./symbol-DGgXQDAi.js";import"./step-mUeGDqfh.js";import"./useElementOffset-Ck5QmzIm.js";import"./uniqBy-Bm8Zesxj.js";import"./iteratee-tmynXvCY.js";import"./ReactUtils-BnJyydkM.js";import"./ActivePoints-Donj28kx.js";import"./Dot-CQmFG6vz.js";import"./RegisterGraphicalItemId-CRHVW6BC.js";import"./ErrorBarContext-D1tpAEu1.js";import"./GraphicalItemClipPath-CM4WNw68.js";import"./SetGraphicalItem-aZjM1KWs.js";import"./useAnimationId-DB48Qg13.js";import"./getRadiusAndStrokeWidthFromDot-Cj9gBiC7.js";import"./ActiveShapeUtils-faJHcahZ.js";import"./isPlainObject-CwlSp2ia.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DGuVg7wO.js";import"./Trapezoid-VJ5gUEBt.js";import"./Sector-BhwWS5u1.js";import"./Curve-C7Xh0Uh3.js";import"./Cross-WoMoQ1i4.js";import"./index-iiKok6sI.js";import"./ChartSizeDimensions-C9L6kdtQ.js";import"./OffsetShower-DbJZQebV.js";import"./PlotAreaShower-B5C3jvki.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
