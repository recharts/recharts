import{r as n,e as t}from"./iframe-oKMzB0d-.js";import{L as p}from"./LineChart-D9yrf0T2.js";import{R as s}from"./arrayEqualityCheck-Caoo2I2E.js";import{C as c}from"./CartesianGrid-5hmKvUrP.js";import{X as l}from"./XAxis-DlRmKJ01.js";import{Y as d}from"./YAxis-DLym79d9.js";import{L as y}from"./Legend-CLhSxZ7W.js";import{L as h}from"./Line-Bwc4TWJK.js";import{T as u}from"./Tooltip-B8PD1RTL.js";import{R as g}from"./RechartsHookInspector-BzEUDXeW.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CTDVW_mD.js";import"./hooks-CriE4jYz.js";import"./axisSelectors-igA0S6xv.js";import"./zIndexSlice-BjyYTZgT.js";import"./resolveDefaultProps-BTiWYe8E.js";import"./PolarUtils-BvDSiGX_.js";import"./CartesianChart-CEC_RciI.js";import"./chartDataContext-CTkSsRq2.js";import"./CategoricalChart-CKuwRZ5o.js";import"./CartesianAxis-D9OPLMCI.js";import"./Layer-Drq4I3c8.js";import"./Text-BAYt6EI9.js";import"./DOMUtils-xOASrBrw.js";import"./Label-CUg786Ba.js";import"./ZIndexLayer-pfpD2pdJ.js";import"./types-Bjx9mdsH.js";import"./Symbols-mKBUz55k.js";import"./Curve-C8ob2FQq.js";import"./useElementOffset-CKxTytD_.js";import"./iteratee-DGg97fx9.js";import"./ReactUtils-BHQlFXLR.js";import"./ActivePoints-B2gNLb__.js";import"./Dot-p7_Nmurg.js";import"./RegisterGraphicalItemId-Bt6_4oI2.js";import"./ErrorBarContext-DSBHo_om.js";import"./GraphicalItemClipPath-AaekTZGq.js";import"./SetGraphicalItem-BmLbSZv4.js";import"./useAnimationId-D0v972Sk.js";import"./getRadiusAndStrokeWidthFromDot-CV18y5aL.js";import"./ActiveShapeUtils-r0uOmI_9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CfUKIL1Q.js";import"./Trapezoid-D0zfblCG.js";import"./Sector-DAIlPrp3.js";import"./Cross-Dk50kqQk.js";import"./index-Bw063qfE.js";import"./ChartSizeDimensions-BmK2dJEG.js";import"./OffsetShower-B2D8CtyY.js";import"./PlotAreaShower-DVDhbnca.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
