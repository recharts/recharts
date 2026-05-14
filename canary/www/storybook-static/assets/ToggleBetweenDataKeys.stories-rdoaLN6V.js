import{r as n,e as t}from"./iframe-BRxwlzhD.js";import{L as p}from"./LineChart-Cx7kIfUg.js";import{R as s}from"./arrayEqualityCheck-CQCuJwd9.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BVkRE_ic.js";import{X as d}from"./XAxis-Dh51v0ko.js";import{Y as y}from"./YAxis-CnCAr5FI.js";import{L as h}from"./Legend-DrmVSKu9.js";import{L as u}from"./Line-1L_TT1FV.js";import{T as g}from"./Tooltip-_6ZtHZzi.js";import{R as K}from"./RechartsHookInspector-B_B-yc0r.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BxIOqnbY.js";import"./index-DRLqonpR.js";import"./immer-Cx9cWUVd.js";import"./hooks-fHD2lOQN.js";import"./axisSelectors-D3m0qTvR.js";import"./d3-scale-Bx12rmbF.js";import"./zIndexSlice-1DtIfeN0.js";import"./renderedTicksSlice-CaDUjXCY.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DCUx-fIz.js";import"./chartDataContext-DyuUFUXu.js";import"./CategoricalChart-C7nGcUHo.js";import"./resolveDefaultProps-CynxUrzr.js";import"./CartesianAxis-B1fxs7Xq.js";import"./Layer-BVhxWlBa.js";import"./Text-lrriYnC0.js";import"./DOMUtils-Dl_fPRop.js";import"./Label-BA79Nyf7.js";import"./ZIndexLayer-S9493XiC.js";import"./types-CSb1fpov.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Cg1rHhLz.js";import"./symbol-DhbO_5Le.js";import"./step-DIees0vo.js";import"./useElementOffset-DZ0xnJbD.js";import"./uniqBy-DBDVCLff.js";import"./iteratee-DSZa7zM1.js";import"./ReactUtils-B9lhcmHi.js";import"./ActivePoints-Cs5vmxH5.js";import"./Dot-Dqr59ASu.js";import"./RegisterGraphicalItemId-C8eWu06V.js";import"./ErrorBarContext-D6ju5024.js";import"./GraphicalItemClipPath-mwssqMPM.js";import"./SetGraphicalItem-DUVzJXp_.js";import"./useAnimationId-BIq3Zr7i.js";import"./getRadiusAndStrokeWidthFromDot-D4qF164R.js";import"./ActiveShapeUtils-D4OjEAgF.js";import"./isPlainObject-BY5Vlzsd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B51QCHw4.js";import"./Trapezoid-LOBSkskr.js";import"./Sector-lTYUfjnl.js";import"./Curve-CgFRM1Qr.js";import"./Cross-BkG-tf_Y.js";import"./index-U7yqHMm0.js";import"./ChartSizeDimensions-VvfCpTvE.js";import"./OffsetShower-CdhB882n.js";import"./PlotAreaShower-DOh-p-fE.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
