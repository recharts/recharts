import{r as n,e as t}from"./iframe-CsUpRRwn.js";import{L as p}from"./LineChart-rzDUuTcm.js";import{R as s}from"./arrayEqualityCheck-Df4uzLw-.js";import{C as c}from"./CartesianGrid-Da4wFyBU.js";import{X as l}from"./XAxis-DUx64kuA.js";import{Y as d}from"./YAxis-FNiiJ-AQ.js";import{L as y}from"./Legend-BQzNsk6O.js";import{L as h}from"./Line-DYNNhevV.js";import{T as u}from"./Tooltip-Cci384Tu.js";import{R as g}from"./RechartsHookInspector-D2kAWSRM.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-zi21JKPF.js";import"./hooks-DRsri2Tq.js";import"./axisSelectors-DgM-VaIw.js";import"./zIndexSlice-Cey6hWeC.js";import"./resolveDefaultProps-ZLsJ9Xuo.js";import"./PolarUtils-B4KHlE6s.js";import"./CartesianChart-k_KAObT0.js";import"./chartDataContext-DdVHUCw_.js";import"./CategoricalChart-dx0iu6Gx.js";import"./CartesianAxis-BncnjfCs.js";import"./Layer-DS1Wp5Ew.js";import"./Text-5TnWPMA2.js";import"./DOMUtils-CimXgsHI.js";import"./Label-B_KIKWwL.js";import"./ZIndexLayer-VR9NNsxL.js";import"./types-B0LA1FfJ.js";import"./Symbols-DiPp8IeL.js";import"./Curve-qa4VelFY.js";import"./useElementOffset-nroK-080.js";import"./iteratee-DLO5uZfD.js";import"./ReactUtils-BcCnPuvu.js";import"./ActivePoints-DQjt83jb.js";import"./Dot-z1jDOX5V.js";import"./RegisterGraphicalItemId-CxpIkg19.js";import"./ErrorBarContext-DPfvolDE.js";import"./GraphicalItemClipPath-CasRTjDB.js";import"./SetGraphicalItem-6nFc_yGt.js";import"./useAnimationId-LktXmMrZ.js";import"./getRadiusAndStrokeWidthFromDot-nlMGx5GO.js";import"./ActiveShapeUtils-BaTMfdg_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BbT4XfPo.js";import"./Trapezoid-BXYnhgSX.js";import"./Sector-B6CpJ8fc.js";import"./Cross-F5wBhIgo.js";import"./index-DOefsbVi.js";import"./ChartSizeDimensions-DjP1Vw_U.js";import"./OffsetShower-C5pOpIAI.js";import"./PlotAreaShower-wVtzUP4L.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,gt as __namedExportsOrder,ut as default};
