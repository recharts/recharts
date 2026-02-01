import{r as n,e as t}from"./iframe-CJsZiOdQ.js";import{L as p}from"./LineChart-_rHhn5_z.js";import{R as s}from"./arrayEqualityCheck-DmoSYxVB.js";import{C as c}from"./CartesianGrid-DcZcYl5q.js";import{X as l}from"./XAxis-8z1ahuYp.js";import{Y as d}from"./YAxis-CY7M7u2R.js";import{L as y}from"./Legend-D3LeUZBA.js";import{L as h}from"./Line-BNl370Ap.js";import{T as u}from"./Tooltip-Bg6-faOR.js";import{R as g}from"./RechartsHookInspector-Cp7SH18f.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C6hoNl5r.js";import"./hooks-rVLXmLp9.js";import"./axisSelectors-CRJt1Qbh.js";import"./zIndexSlice-DOwFRgwN.js";import"./resolveDefaultProps-BsN_5Oop.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-_elP97Nq.js";import"./chartDataContext-D1i6v4HN.js";import"./CategoricalChart-FSCxQE7m.js";import"./CartesianAxis-Bxrejv1n.js";import"./Layer-saDXbA70.js";import"./Text-B5Zl5I22.js";import"./DOMUtils-xNMyZWBQ.js";import"./Label-B5dudWmS.js";import"./ZIndexLayer-B2Kkx2Li.js";import"./types--3K6j7TR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DzvLu2sy.js";import"./Curve-5kCuP2Ri.js";import"./useElementOffset-ByOgFwSC.js";import"./iteratee-BR97XEbH.js";import"./ReactUtils-B6les9Ok.js";import"./ActivePoints-s1VLO5u4.js";import"./Dot-C-IcEIkw.js";import"./RegisterGraphicalItemId-B2S5SyCV.js";import"./ErrorBarContext-BSMEYapQ.js";import"./GraphicalItemClipPath-CTITSRsG.js";import"./SetGraphicalItem-wLUZTpUq.js";import"./useAnimationId-992q7OPb.js";import"./getRadiusAndStrokeWidthFromDot-B69isiT9.js";import"./ActiveShapeUtils-DoWMc9rU.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DIx0VdbO.js";import"./Trapezoid-C7AD2RUx.js";import"./Sector-CNxjvECL.js";import"./Cross-BvSndK2L.js";import"./index-B5U_62lg.js";import"./ChartSizeDimensions-Cywz4jFM.js";import"./OffsetShower-qPlPbWlS.js";import"./PlotAreaShower-e-2A-3GR.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
