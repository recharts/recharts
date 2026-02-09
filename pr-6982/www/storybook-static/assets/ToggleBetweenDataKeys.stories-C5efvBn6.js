import{r as n,e as t}from"./iframe-xqabyeMj.js";import{L as p}from"./LineChart-DCi8I_Bk.js";import{R as s}from"./arrayEqualityCheck-8L6pkBib.js";import{C as c}from"./CartesianGrid-BBOEzBe7.js";import{X as l}from"./XAxis-DCnicXeQ.js";import{Y as d}from"./YAxis-DVjLQwct.js";import{L as y}from"./Legend-4k7M-nb5.js";import{L as h}from"./Line-C_a5crt8.js";import{T as u}from"./Tooltip-EgWC_rlN.js";import{R as g}from"./RechartsHookInspector-CFJUwZ9y.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BiqM6SLb.js";import"./hooks-DUKF9BS0.js";import"./axisSelectors-Dsv016Jw.js";import"./zIndexSlice-D0PgK1Qq.js";import"./resolveDefaultProps-C4CpinzP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-YoieVqbI.js";import"./chartDataContext-99M3a9R_.js";import"./CategoricalChart-5qGPlSyR.js";import"./CartesianAxis-DhN_DQtJ.js";import"./Layer-Bh77GRoo.js";import"./Text-CGJ1V4Sp.js";import"./DOMUtils-C4dT54L9.js";import"./Label-BONDDJIo.js";import"./ZIndexLayer-DT_FpcHY.js";import"./types-B39fGcYg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Co2bCSmq.js";import"./Curve-DXgolxSe.js";import"./useElementOffset-Cr7-bJ23.js";import"./iteratee-C2sEUqfR.js";import"./ReactUtils-bWGvhqKE.js";import"./ActivePoints-BaMeOVMK.js";import"./Dot-C1tAaa2s.js";import"./RegisterGraphicalItemId-BRijqKHc.js";import"./ErrorBarContext-BxBXv2QU.js";import"./GraphicalItemClipPath-BDFMpOfU.js";import"./SetGraphicalItem-B2tkDh1g.js";import"./useAnimationId-Cs8mC2Bw.js";import"./getRadiusAndStrokeWidthFromDot-ZV4TJns9.js";import"./ActiveShapeUtils-CHTxT0Ma.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BnLG2ZKC.js";import"./Trapezoid-CzCZCQIg.js";import"./Sector-BI2kwOQX.js";import"./Cross-rpHVI9wh.js";import"./index-DIiQC_pi.js";import"./ChartSizeDimensions-gwsg2o-R.js";import"./OffsetShower-BIYWKZux.js";import"./PlotAreaShower-BBgrf_OL.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
