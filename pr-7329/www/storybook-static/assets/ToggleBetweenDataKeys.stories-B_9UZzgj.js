import{r as n,e as t}from"./iframe-BhgNWdm2.js";import{L as p}from"./LineChart-CkiRtqER.js";import{R as s}from"./arrayEqualityCheck-BPYeEWp9.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-ELcwD5_F.js";import{X as d}from"./XAxis-B0Y5mjm9.js";import{Y as y}from"./YAxis-DimmepAM.js";import{L as h}from"./Legend-D0RS8kqE.js";import{L as u}from"./Line-1_aSh1us.js";import{T as g}from"./Tooltip-C68vnTfz.js";import{R as K}from"./RechartsHookInspector-BwLyLCbr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D_AVgKr-.js";import"./index-CqC_U7ug.js";import"./immer-B8rRfUkI.js";import"./hooks-jOaINvHQ.js";import"./axisSelectors-CZf8mr5P.js";import"./d3-scale-D8GbsE5m.js";import"./zIndexSlice-Lcr8coq9.js";import"./renderedTicksSlice-D9cY7pVC.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D0cl_oJT.js";import"./chartDataContext-Cguc2YyF.js";import"./CategoricalChart-DQs5NoOs.js";import"./resolveDefaultProps-D43Wpvex.js";import"./CartesianAxis-BduEHTva.js";import"./Layer-BkasUZxz.js";import"./Text-2yWCgbKe.js";import"./DOMUtils-Cxmm0Icy.js";import"./Label-BRyOnYfu.js";import"./ZIndexLayer-Do4fofgT.js";import"./types-Bn2_ZBIB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CuqnOXh1.js";import"./symbol-CDKmn_1O.js";import"./step-CB53NYyG.js";import"./useElementOffset-BHpwKCLe.js";import"./uniqBy-CGarLzH6.js";import"./iteratee-dQXRLNjz.js";import"./ReactUtils-BDMzm1YE.js";import"./ActivePoints-tcDNwRIU.js";import"./Dot-CYDciASH.js";import"./RegisterGraphicalItemId-Db3TPLUh.js";import"./ErrorBarContext-CdlIyLD3.js";import"./GraphicalItemClipPath-BH2oacZ_.js";import"./SetGraphicalItem-C_WqfzHK.js";import"./useAnimationId-Bo7L-9bR.js";import"./getRadiusAndStrokeWidthFromDot-DorA-DYi.js";import"./ActiveShapeUtils-C2ogWYAN.js";import"./isPlainObject-B6h9wQ2y.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-jY469onx.js";import"./Trapezoid-DpB5l6Kj.js";import"./Sector-DfYOmxzx.js";import"./Curve-CxXqlxgs.js";import"./Cross-DsZaFKHb.js";import"./index-owEklC_q.js";import"./ChartSizeDimensions-J0Tmkxsz.js";import"./OffsetShower-C_q72LRF.js";import"./PlotAreaShower-CDcLHpUT.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
