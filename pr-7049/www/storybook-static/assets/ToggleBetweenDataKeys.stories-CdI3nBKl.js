import{r as n,e as t}from"./iframe-BSrWh3Tm.js";import{L as p}from"./LineChart-DtA-o2la.js";import{R as s}from"./arrayEqualityCheck-Bi3wam60.js";import{C as c}from"./CartesianGrid-9ahGzOzg.js";import{X as l}from"./XAxis-B42vfkRT.js";import{Y as d}from"./YAxis-C6UXDRpG.js";import{L as y}from"./Legend-C2VwFVez.js";import{L as h}from"./Line-CHf68RI_.js";import{T as u}from"./Tooltip-D0FKLk7T.js";import{R as g}from"./RechartsHookInspector-GGOykVwh.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cv7vOboh.js";import"./index-BKQB3IdD.js";import"./immer-o57FzM7P.js";import"./hooks-_Zpl3P7b.js";import"./axisSelectors-DaFs4qrj.js";import"./d3-scale-B1u95Bta.js";import"./zIndexSlice-DiVky1C5.js";import"./renderedTicksSlice-XfGhYDN5.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C6stOvQo.js";import"./chartDataContext-BZoBhnnC.js";import"./CategoricalChart-K47yLqM7.js";import"./resolveDefaultProps-uX8ktvRe.js";import"./CartesianAxis-DpJRxyLl.js";import"./Layer-QGYU9n-M.js";import"./Text-DUnGW5EL.js";import"./DOMUtils-BZKI_dtW.js";import"./Label-Bl_LjQTl.js";import"./ZIndexLayer-D38UhR7u.js";import"./types-CM9WDYf0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DUq2FcPQ.js";import"./symbol-Bmu8h110.js";import"./step-D7Xw_JZz.js";import"./useElementOffset-DSe2TnxD.js";import"./uniqBy-C5sONUWO.js";import"./iteratee-Dnsy_OoO.js";import"./ReactUtils-CJRrmQRl.js";import"./ActivePoints-CNGhXiVX.js";import"./Dot-CDS9zqsC.js";import"./RegisterGraphicalItemId-otp8Qv4N.js";import"./ErrorBarContext-CUS8wCir.js";import"./GraphicalItemClipPath-K1LYOcWQ.js";import"./SetGraphicalItem-DrkBT3YT.js";import"./useAnimationId-DcrpwOmI.js";import"./getRadiusAndStrokeWidthFromDot-MRSXLGiq.js";import"./ActiveShapeUtils-CHgfreMM.js";import"./isPlainObject-D_XWLGeo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BZDPWd6o.js";import"./Trapezoid-DEogtWZp.js";import"./Sector-Clje0fKa.js";import"./Curve-Y05R0_Dg.js";import"./Cross-BeZdZItx.js";import"./index-D7iJ4ctw.js";import"./ChartSizeDimensions-DsBX0MPa.js";import"./OffsetShower-DXc8wSG5.js";import"./PlotAreaShower-C59CIyfR.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
