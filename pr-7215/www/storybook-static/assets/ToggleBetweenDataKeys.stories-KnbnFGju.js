import{r as n,e as t}from"./iframe-BzU5tZG5.js";import{L as p}from"./LineChart-CfaB7d4n.js";import{R as s}from"./arrayEqualityCheck-BsfMiBB8.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-tw-k3o28.js";import{X as d}from"./XAxis-B-W2dzi3.js";import{Y as y}from"./YAxis-l0f4JbWK.js";import{L as h}from"./Legend-CHiKHR1L.js";import{L as u}from"./Line-Ct73r5ic.js";import{T as g}from"./Tooltip-CkKhvLwf.js";import{R as K}from"./RechartsHookInspector-DCXeAgKX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BbxErU3E.js";import"./index-De8EN-cC.js";import"./immer-C0fwLmkH.js";import"./hooks-BZ9lkAel.js";import"./axisSelectors-Cxfo6rVo.js";import"./d3-scale-DcKEztNx.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-Bd6-3QTP.js";import"./renderedTicksSlice-HvaIjOyz.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BVGWETT1.js";import"./chartDataContext-DW4aeEtj.js";import"./CategoricalChart-FYUpa-sB.js";import"./resolveDefaultProps-DmGz1ogE.js";import"./CartesianAxis--HQls11E.js";import"./Layer-BoRDeEOm.js";import"./Text-CmxtkjMm.js";import"./DOMUtils-Bnb5Olzx.js";import"./Label-hToV_gRB.js";import"./ZIndexLayer-x07EvPLC.js";import"./types-BbKBmvI2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BOk-75a6.js";import"./symbol-CgkrJkl1.js";import"./step-fSDMrmBj.js";import"./useElementOffset-B9cyi7EM.js";import"./uniqBy-Ck23Gndn.js";import"./iteratee-CmTECnc1.js";import"./AnimatedItems-DpJzQnXc.js";import"./useAnimationId-D2sjwezL.js";import"./ActivePoints-OqIedk1P.js";import"./Dot-DzV-VpNB.js";import"./RegisterGraphicalItemId-B44_OcBQ.js";import"./ErrorBarContext-B_54DcZB.js";import"./GraphicalItemClipPath-CjoeLGJT.js";import"./SetGraphicalItem-D8FHaqBq.js";import"./getRadiusAndStrokeWidthFromDot-D38YSDE-.js";import"./ActiveShapeUtils-DAfXePCg.js";import"./isPlainObject-DeEpFnEl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dql0fF0Y.js";import"./Trapezoid-Du0ZEVwP.js";import"./Sector-CPh9calM.js";import"./Curve-DQMyibMX.js";import"./Cross-yJz91fpS.js";import"./index-BxJbg6c2.js";import"./ChartSizeDimensions-CVqRiDUJ.js";import"./OffsetShower-0OLqDfEA.js";import"./PlotAreaShower-C8OLz8bs.js";const xt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Rt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Rt as __namedExportsOrder,xt as default};
