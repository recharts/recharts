import{r as n,e as t}from"./iframe-Dq5DdRfA.js";import{L as p}from"./LineChart-ScypDhnW.js";import{R as s}from"./arrayEqualityCheck-qGR3MUeV.js";import{C as c}from"./CartesianGrid-CK5HKDGi.js";import{X as l}from"./XAxis-CZx-cxt6.js";import{Y as d}from"./YAxis-BfiaHiWI.js";import{L as y}from"./Legend-WPQY1pFr.js";import{L as h}from"./Line-CSsDn3Jn.js";import{T as u}from"./Tooltip-Cac0gHCt.js";import{R as g}from"./RechartsHookInspector-hbHSdV_4.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-vGlNcTAG.js";import"./index-KC-eWLnl.js";import"./immer-BgAF4C3H.js";import"./hooks-BxbNPqIZ.js";import"./axisSelectors-BFeCG5Ru.js";import"./d3-scale-DI2YC43N.js";import"./zIndexSlice-DPv0Xhij.js";import"./renderedTicksSlice-DP9i4nv6.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BaePTbzD.js";import"./chartDataContext-CXein_ih.js";import"./CategoricalChart-BcQURnMq.js";import"./resolveDefaultProps-DHlsVcqU.js";import"./CartesianAxis-D7oRmpa0.js";import"./Layer-xEbSwsN4.js";import"./Text-CZ8K0x5S.js";import"./DOMUtils-C3M38rM5.js";import"./Label-RkqWKdyr.js";import"./ZIndexLayer-CmxjkRKY.js";import"./types-D0iVcQvS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-4l3uCecX.js";import"./symbol-DApxb55n.js";import"./step-Cni1WXw7.js";import"./useElementOffset-EIWIV3Vm.js";import"./uniqBy-cRfk3nMJ.js";import"./iteratee-BBm-pYg1.js";import"./ReactUtils-Cob9khRk.js";import"./ActivePoints-CNP7zn1d.js";import"./Dot-DzScFwGr.js";import"./RegisterGraphicalItemId-DlkbZouM.js";import"./ErrorBarContext-Bj_DbTGw.js";import"./GraphicalItemClipPath-BA8J5QwR.js";import"./SetGraphicalItem-nN4OlGtN.js";import"./useAnimationId-D_Jb4Dtq.js";import"./getRadiusAndStrokeWidthFromDot-B8rTEkIw.js";import"./ActiveShapeUtils-BEqpyM3Z.js";import"./isPlainObject-C_fJeprc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DwxhPvUN.js";import"./Trapezoid-CVP_TvCO.js";import"./Sector-D0MGcgsD.js";import"./Curve-tqjOY4Pq.js";import"./Cross-CNFJAK17.js";import"./index-DD51iIl-.js";import"./ChartSizeDimensions-CU3eWKS2.js";import"./OffsetShower-6LrCHYpG.js";import"./PlotAreaShower-BdkOHlKt.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
