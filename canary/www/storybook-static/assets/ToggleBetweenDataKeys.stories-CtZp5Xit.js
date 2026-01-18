import{r as n,e as t}from"./iframe-HE4l6gpY.js";import{L as p}from"./LineChart-DCvG3fhV.js";import{R as s}from"./arrayEqualityCheck-zbhzaWLf.js";import{C as c}from"./CartesianGrid-D8OAbM8Q.js";import{X as l}from"./XAxis-DdaPXuK0.js";import{Y as d}from"./YAxis-WQBuKMWe.js";import{L as y}from"./Legend-BRdhBltB.js";import{L as h}from"./Line-BABPLkca.js";import{T as u}from"./Tooltip-nFqpvsrl.js";import{R as g}from"./RechartsHookInspector-JJmqV01h.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-rscDC45n.js";import"./hooks-CAMR9gDE.js";import"./axisSelectors-BlI41Nqe.js";import"./zIndexSlice-CDFEuO1j.js";import"./resolveDefaultProps-ycHCQ38b.js";import"./PolarUtils-DtB8lpuj.js";import"./CartesianChart-Dff8VYzG.js";import"./chartDataContext-HKU5YHU8.js";import"./CategoricalChart-b_wn2d-T.js";import"./CartesianAxis-DHNzlHQb.js";import"./Layer-BUJF1xKh.js";import"./Text-CEFvmxgj.js";import"./DOMUtils-BzGtJFJB.js";import"./Label-D3UA2eyA.js";import"./ZIndexLayer-C9xwCaJR.js";import"./types-CN_ngcpa.js";import"./Symbols-DoDZ9cAV.js";import"./Curve-B2qa_Fpt.js";import"./useElementOffset-c9br3Dij.js";import"./iteratee-CTXU5arM.js";import"./ReactUtils-DzgF8jcH.js";import"./ActivePoints-CgH2JxOA.js";import"./Dot-qjCGP036.js";import"./RegisterGraphicalItemId-D8pM0yYi.js";import"./ErrorBarContext-CKHDFfpn.js";import"./GraphicalItemClipPath-BnkYT85w.js";import"./SetGraphicalItem-bFi_wPR4.js";import"./useAnimationId-CIwDHleW.js";import"./getRadiusAndStrokeWidthFromDot-CV9EPUkh.js";import"./ActiveShapeUtils-OiiVmCWc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C42JoSoA.js";import"./Trapezoid-DAtsx-SU.js";import"./Sector-CwzJgIqc.js";import"./Cross-te_z7s4G.js";import"./index-CuPLL4UF.js";import"./ChartSizeDimensions-AwnLO8b3.js";import"./OffsetShower-B5Y-lcHm.js";import"./PlotAreaShower-Cx476p9R.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
