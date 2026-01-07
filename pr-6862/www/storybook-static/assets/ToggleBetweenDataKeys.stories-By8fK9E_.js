import{r as n,e as t}from"./iframe-CjnSqbHY.js";import{L as p}from"./LineChart-CwnTd978.js";import{R as s}from"./arrayEqualityCheck-Cu3uzYRG.js";import{C as c}from"./CartesianGrid-OW63ZEb5.js";import{X as l}from"./XAxis-BjLd7C2C.js";import{Y as d}from"./YAxis-CfoOURqB.js";import{L as y}from"./Legend-DJReSB-1.js";import{L as h}from"./Line-Cn7LoADd.js";import{T as u}from"./Tooltip-CCoxC8s7.js";import{R as g}from"./RechartsHookInspector-Df5OjUd3.js";import{p as K}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bjy9O6Bl.js";import"./hooks-z5iYR9uK.js";import"./axisSelectors-2WFqeeny.js";import"./zIndexSlice-B31h325U.js";import"./resolveDefaultProps-B-Bnboba.js";import"./PolarUtils-Dtm6FADD.js";import"./CartesianChart-QvBm8Fl6.js";import"./chartDataContext-OrqrGnHW.js";import"./CategoricalChart-CVHNAiHm.js";import"./CartesianAxis-D2VxaDmK.js";import"./Layer-BPLY51e7.js";import"./Text-CLMmVwol.js";import"./DOMUtils-Bui7kyZ-.js";import"./Label-DvPPISHS.js";import"./ZIndexLayer-6i7cawcn.js";import"./types-BYGLnYta.js";import"./Symbols-wzrVuNDj.js";import"./Curve-5ylBOp_W.js";import"./useElementOffset-CJI6xldx.js";import"./iteratee-DiI7B68t.js";import"./ReactUtils-Bdj2Y15E.js";import"./ActivePoints-Djyh2ioT.js";import"./Dot-BiSTmROa.js";import"./RegisterGraphicalItemId-B25edjY0.js";import"./ErrorBarContext-YKLWr-xE.js";import"./GraphicalItemClipPath-BH8EdR6E.js";import"./SetGraphicalItem-RCHMBw2A.js";import"./useAnimationId-BIU6gnQ_.js";import"./getRadiusAndStrokeWidthFromDot-DJkck7K5.js";import"./ActiveShapeUtils-B0wPh4Lu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DRbwIDD9.js";import"./Trapezoid-BpUw0ZK8.js";import"./Sector-CCKEyOJh.js";import"./Cross-BEO3jmNv.js";import"./index-BmN97iZD.js";import"./ChartSizeDimensions-BYQzTjU5.js";import"./OffsetShower-BP7aiJM0.js";import"./PlotAreaShower-CvhWYGuu.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
