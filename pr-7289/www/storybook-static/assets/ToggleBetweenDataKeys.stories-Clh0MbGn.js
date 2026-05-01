import{r as n,e as t}from"./iframe-BLDR2_i0.js";import{L as p}from"./LineChart-CoUxRJbJ.js";import{R as s}from"./arrayEqualityCheck-CvNQEz9w.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DbVsK7fZ.js";import{X as d}from"./XAxis-DtQQBd2y.js";import{Y as y}from"./YAxis-D1KSMWgt.js";import{L as h}from"./Legend-BMZplj7G.js";import{L as u}from"./Line-D-dTaVGT.js";import{T as g}from"./Tooltip-C2VwN8xA.js";import{R as K}from"./RechartsHookInspector-B1GuqCEe.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Ct1BBYFn.js";import"./index-CFbRxLRx.js";import"./immer-BKFNBdyg.js";import"./hooks-CtJRBtxo.js";import"./axisSelectors-BB17965m.js";import"./d3-scale-BhFvmkin.js";import"./zIndexSlice-yBBB4uSb.js";import"./renderedTicksSlice-BSzl6y0x.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-LlNtHt9D.js";import"./chartDataContext-Bphfe7Jq.js";import"./CategoricalChart-DdO_PfYZ.js";import"./resolveDefaultProps-BRIlCLrP.js";import"./CartesianAxis-BPi0jvIf.js";import"./Layer-Bg4znOhy.js";import"./Text-Z-_UHMZw.js";import"./DOMUtils-CzTi80AG.js";import"./Label-BeUhNh6s.js";import"./ZIndexLayer-7ToExptV.js";import"./types-DW7k3YBY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BPbqFGSD.js";import"./symbol-BlMgqIva.js";import"./step-CJMvDBr8.js";import"./useElementOffset-BZPwPb6Z.js";import"./uniqBy-B3VFxQDg.js";import"./iteratee-BJQ0nu2N.js";import"./ReactUtils-BZwBYxFJ.js";import"./ActivePoints-rdhL3F9r.js";import"./Dot-DzHpuORN.js";import"./RegisterGraphicalItemId-BAO_-1Fe.js";import"./ErrorBarContext-DJptcZIz.js";import"./GraphicalItemClipPath-iX6Zf2o8.js";import"./SetGraphicalItem-DTwOd3dX.js";import"./useAnimationId-CuonZP-E.js";import"./getRadiusAndStrokeWidthFromDot-BdzGGcnE.js";import"./ActiveShapeUtils-Bx3IdaBV.js";import"./isPlainObject-Bgs7IkK4.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CFLqOtC4.js";import"./Trapezoid-DytqB0t5.js";import"./Sector-DJtO2zeV.js";import"./Curve-Dso7sD8l.js";import"./Cross-D3Vs3zNI.js";import"./index-CTEoDz69.js";import"./ChartSizeDimensions-CoOcLq9u.js";import"./OffsetShower-C2FYUo8c.js";import"./PlotAreaShower-toIN3X0K.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
