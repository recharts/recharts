import{r as n,e as t}from"./iframe-D2iPyEE3.js";import{L as p}from"./LineChart-CXCIjd6w.js";import{R as s}from"./arrayEqualityCheck-BQ52A-KD.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-ClNpEo5p.js";import{X as d}from"./XAxis-Ca5xFIBT.js";import{Y as y}from"./YAxis-r-zcSEA9.js";import{L as h}from"./Legend-CuUAOZH7.js";import{L as u}from"./Line-0zLbnlDG.js";import{T as g}from"./Tooltip-qnTa-PrY.js";import{R as K}from"./RechartsHookInspector-pMynMK3d.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D9hxchsK.js";import"./index-CGzhf8ES.js";import"./immer-5DUlJX3y.js";import"./hooks-DmQVapf1.js";import"./axisSelectors-Bf33qp9J.js";import"./d3-scale-D333UmOT.js";import"./zIndexSlice-B-uvLuMe.js";import"./renderedTicksSlice-Cw8jJmSY.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C44XCUUQ.js";import"./chartDataContext-B0bZnblU.js";import"./CategoricalChart-kNyVXZoh.js";import"./resolveDefaultProps-B2qn9BK_.js";import"./CartesianAxis-Bd7Gtpgp.js";import"./Layer-CIGoVUHw.js";import"./Text-B4mK5G2Y.js";import"./DOMUtils-BDNid5QK.js";import"./Label-CjmamkRK.js";import"./ZIndexLayer-ClfHdlij.js";import"./types-DfbbSUKg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Dh7LCKpa.js";import"./symbol-DAG115Zm.js";import"./step-NQkLQHEn.js";import"./useElementOffset-CKbI1PfG.js";import"./uniqBy-Dwf19U3R.js";import"./iteratee-BxNvX9m6.js";import"./ReactUtils-DlxpINgd.js";import"./ActivePoints-DO1blp6A.js";import"./Dot-D8o3tU3P.js";import"./RegisterGraphicalItemId-De4zP5NP.js";import"./ErrorBarContext-6PvhO17o.js";import"./GraphicalItemClipPath-oM0pOvEZ.js";import"./SetGraphicalItem-3fLhXJ7X.js";import"./useAnimationId-fkVW7SyB.js";import"./getRadiusAndStrokeWidthFromDot-CFwxR8E8.js";import"./ActiveShapeUtils-cVE6agUq.js";import"./isPlainObject-BVZ5R7gX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BIa7eyeJ.js";import"./Trapezoid-CD49191V.js";import"./Sector-CON_U0ZW.js";import"./Curve-gyPLT6fj.js";import"./Cross-Dj7wEUvN.js";import"./index-DZX1BXuq.js";import"./ChartSizeDimensions-CYgvj-Lj.js";import"./OffsetShower-BwoPAHAo.js";import"./PlotAreaShower-phVVNo9A.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
