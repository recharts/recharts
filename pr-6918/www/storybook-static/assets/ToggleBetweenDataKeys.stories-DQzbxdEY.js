import{r as n,e as t}from"./iframe-DpxBiwXt.js";import{L as p}from"./LineChart-C4piYulh.js";import{R as s}from"./arrayEqualityCheck-FXkJUuOg.js";import{C as c}from"./CartesianGrid-DNW3g4XV.js";import{X as l}from"./XAxis-BwhWcYGH.js";import{Y as d}from"./YAxis-Bi8itMA7.js";import{L as y}from"./Legend-Cjhc-YUg.js";import{L as h}from"./Line-By9eZF6k.js";import{T as u}from"./Tooltip-BplPpqBs.js";import{R as g}from"./RechartsHookInspector-A8kV9_z_.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BjnJrxH9.js";import"./hooks-CjYZQI6e.js";import"./axisSelectors-DxY3Hm_g.js";import"./zIndexSlice-BKKsRI17.js";import"./resolveDefaultProps-CEEOIjtC.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-C8Msn2UK.js";import"./chartDataContext-WZeplglC.js";import"./CategoricalChart-DGoypZYk.js";import"./CartesianAxis-DPFPdJc8.js";import"./Layer-B_VW6NEu.js";import"./Text-DNJoB5At.js";import"./DOMUtils-DrvvQn8D.js";import"./Label-CEkR5yeX.js";import"./ZIndexLayer-D0mBkmdS.js";import"./types-BBdfixzL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DaC_yNBz.js";import"./Curve-D7R0OSkI.js";import"./useElementOffset-K-XxmBs3.js";import"./iteratee-Bm9VQgEn.js";import"./ReactUtils-Dffr1epF.js";import"./ActivePoints-DmMdWDFy.js";import"./Dot-CHYi4_d9.js";import"./RegisterGraphicalItemId-DvA6E3s-.js";import"./ErrorBarContext--hzc0ol9.js";import"./GraphicalItemClipPath-BxeldMcM.js";import"./SetGraphicalItem-B6m6aNjX.js";import"./useAnimationId-xmRGVEvR.js";import"./getRadiusAndStrokeWidthFromDot-C96kEFaR.js";import"./ActiveShapeUtils-DjjH0_gx.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BltJ-RBG.js";import"./Trapezoid-DN2MYT0t.js";import"./Sector-CLle2JPF.js";import"./Cross-BPD08xqW.js";import"./index-JWi15Uty.js";import"./ChartSizeDimensions-DaeB45KF.js";import"./OffsetShower-BJFCBDNO.js";import"./PlotAreaShower-eORzspIc.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Kt as __namedExportsOrder,gt as default};
