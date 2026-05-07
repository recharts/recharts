import{r as n,e as t}from"./iframe-BgwmBjfB.js";import{L as p}from"./LineChart-Sn_wSyEN.js";import{R as s}from"./arrayEqualityCheck-B1qnogVb.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DyPZQOQ_.js";import{X as d}from"./XAxis-BX9DZiaX.js";import{Y as y}from"./YAxis-DL4fvP6H.js";import{L as h}from"./Legend-DBmPCTQS.js";import{L as u}from"./Line-BukzmJmv.js";import{T as g}from"./Tooltip-Sge9soWb.js";import{R as K}from"./RechartsHookInspector-OzbFILx_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BzFnIirW.js";import"./index-Dw-9JZxy.js";import"./immer-L1QYf-NE.js";import"./hooks-BBhaKEpc.js";import"./axisSelectors-p-DsPcsN.js";import"./d3-scale-C0r8W7gC.js";import"./zIndexSlice-9mnJo3WO.js";import"./renderedTicksSlice-kbflTFpl.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C8IYYlhJ.js";import"./chartDataContext-DR_cij4x.js";import"./CategoricalChart-DrEP-5RI.js";import"./resolveDefaultProps-qucNpk_A.js";import"./CartesianAxis-GtFYCfV6.js";import"./Layer-sKAIqvEC.js";import"./Text-D7VqnjvF.js";import"./DOMUtils-CUsjemqf.js";import"./Label-BeTMxE7h.js";import"./ZIndexLayer-DX-nM8qM.js";import"./types-CFdz9x_M.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CqgbDjwG.js";import"./symbol-D69U7vWh.js";import"./step-BxFdL0zf.js";import"./useElementOffset-DX4-4QE5.js";import"./uniqBy-CHNs3q3W.js";import"./iteratee-DJZlIK_6.js";import"./ReactUtils-Dla0XjmI.js";import"./ActivePoints-DDZpcuUc.js";import"./Dot-n89jEX-l.js";import"./RegisterGraphicalItemId-CtttlxaS.js";import"./ErrorBarContext-CLlFokOM.js";import"./GraphicalItemClipPath-bS3Dkt_2.js";import"./SetGraphicalItem-CbRoDUDG.js";import"./useAnimationId-nEXiQ4wd.js";import"./getRadiusAndStrokeWidthFromDot-BAwr8WJt.js";import"./ActiveShapeUtils-Bc3Bo2kR.js";import"./isPlainObject-DCrRKxze.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-xy71HFhS.js";import"./Trapezoid-Ctq3RZiG.js";import"./Sector-B8iCNGe2.js";import"./Curve-D2S6CN-2.js";import"./Cross-CpLRPk6Y.js";import"./index-B_0cWXev.js";import"./ChartSizeDimensions-BOdb3hAs.js";import"./OffsetShower-NinoivPu.js";import"./PlotAreaShower-BvfC-KbU.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
