import{r as n,e as t}from"./iframe-DE0S0nct.js";import{L as p}from"./LineChart-CD_ineKY.js";import{R as s}from"./arrayEqualityCheck-njkWtJmX.js";import{C as c}from"./CartesianGrid-xqUvOSJ7.js";import{X as l}from"./XAxis-HiP-oMgI.js";import{Y as d}from"./YAxis-ASXYxn9M.js";import{L as y}from"./Legend-CufHvxxK.js";import{L as h}from"./Line-Cb1a5OKW.js";import{T as u}from"./Tooltip-c4RdN7f5.js";import{R as g}from"./RechartsHookInspector-dBbs_0nU.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C5KB-qxr.js";import"./hooks-DWbbdqvJ.js";import"./axisSelectors-BfEHf8Yv.js";import"./zIndexSlice-Blf1dc2N.js";import"./resolveDefaultProps-DuoQUEeP.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-BBxR-i6W.js";import"./chartDataContext-CPGe86t4.js";import"./CategoricalChart-CSOSO7HJ.js";import"./CartesianAxis-CwKKuba7.js";import"./Layer-BleDqXEW.js";import"./Text-DM7a8pWI.js";import"./DOMUtils-A7wZFaJD.js";import"./Label-DgM-_lJi.js";import"./ZIndexLayer-Dp1Pf4so.js";import"./types-B8SW-iMR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-w5RZTm0Y.js";import"./Curve-BVDZfIkI.js";import"./useElementOffset-G6wVWYzT.js";import"./iteratee-DE09Y-Is.js";import"./ReactUtils-BtFFfC7o.js";import"./ActivePoints-CsWDm8lK.js";import"./Dot-D5tclzZ_.js";import"./RegisterGraphicalItemId-BfeEISo0.js";import"./ErrorBarContext-CdBsOezF.js";import"./GraphicalItemClipPath-JwwxWQFx.js";import"./SetGraphicalItem-DO-9Utur.js";import"./useAnimationId-BumXreuS.js";import"./getRadiusAndStrokeWidthFromDot-D6SrTg5b.js";import"./ActiveShapeUtils-2Zcp-jd_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DpQeIB4m.js";import"./Trapezoid-BZphNEJe.js";import"./Sector-DcADG8WR.js";import"./Cross-CpfL9XrS.js";import"./index-C9PHO12n.js";import"./ChartSizeDimensions-Bvtmd44U.js";import"./OffsetShower-6Tlh9GY1.js";import"./PlotAreaShower-C2nHCOpp.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
