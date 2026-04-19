import{r as n,e as t}from"./iframe-dL2OVy5F.js";import{L as p}from"./LineChart-PeNK8VCY.js";import{R as s}from"./arrayEqualityCheck-CaMvItyo.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BWHNj_Eu.js";import{X as d}from"./XAxis-B86_r9Ch.js";import{Y as y}from"./YAxis-BsWm2FVM.js";import{L as h}from"./Legend-DPzIZPc1.js";import{L as u}from"./Line-Dq6GxaVC.js";import{T as g}from"./Tooltip-BGNMLgA6.js";import{R as K}from"./RechartsHookInspector-BZsexvc_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-2xnsmZbF.js";import"./index-C8r_0QEC.js";import"./immer-DHklT898.js";import"./hooks-CtDQVu0u.js";import"./axisSelectors-Do7BkVsn.js";import"./d3-scale-3VqrHCN7.js";import"./zIndexSlice-DAYnIbZH.js";import"./renderedTicksSlice-D7ViyujS.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CQEHzqI9.js";import"./chartDataContext-BXPlG8LR.js";import"./CategoricalChart-BZHJ_HjV.js";import"./resolveDefaultProps-7Zncxn1v.js";import"./CartesianAxis-BKf97Rvg.js";import"./Layer-BrlL2tOs.js";import"./Text-Bwe6nLXh.js";import"./DOMUtils-Ci6QTQ3e.js";import"./Label-C6izcScL.js";import"./ZIndexLayer-BvENavnS.js";import"./types-LCDeNazI.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-3zNmirWo.js";import"./symbol-BGt6k0O8.js";import"./step-CSrZegzj.js";import"./useElementOffset-DKr_-hTa.js";import"./uniqBy--BozFN4q.js";import"./iteratee-BlkE-BhU.js";import"./ReactUtils-A9WQzOkM.js";import"./ActivePoints-BcsZ0pU5.js";import"./Dot-DNIsMwyQ.js";import"./RegisterGraphicalItemId-BLl1AU5h.js";import"./ErrorBarContext-Ba1R8w21.js";import"./GraphicalItemClipPath-B9R00R0l.js";import"./SetGraphicalItem-CczBCiBC.js";import"./useAnimationId-C4Vc8PxM.js";import"./getRadiusAndStrokeWidthFromDot-Dsgl31AO.js";import"./ActiveShapeUtils-6me4R15I.js";import"./isPlainObject-O_SkrgJ1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-XiX3CaBX.js";import"./Trapezoid-Jy6pnob6.js";import"./Sector-4mD4Ykg7.js";import"./Curve-DLwP9u8w.js";import"./Cross-Bx37bdEN.js";import"./index-D_cVMinZ.js";import"./ChartSizeDimensions-CL0i_3ns.js";import"./OffsetShower-CTFYQb52.js";import"./PlotAreaShower-CS9RsVg8.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
