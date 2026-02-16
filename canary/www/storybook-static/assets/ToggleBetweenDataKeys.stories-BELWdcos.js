import{r as n,e as t}from"./iframe-DnFqMkNF.js";import{L as p}from"./LineChart-rtD-rdlF.js";import{R as s}from"./arrayEqualityCheck-DEUF_nnv.js";import{C as c}from"./CartesianGrid-CdVi4ss0.js";import{X as l}from"./XAxis-j8l4i7VN.js";import{Y as d}from"./YAxis-DkzCTt_M.js";import{L as y}from"./Legend-0bFwyfSJ.js";import{L as h}from"./Line-uTxHYT36.js";import{T as u}from"./Tooltip-WlBhTofj.js";import{R as g}from"./RechartsHookInspector-CUfHCEPB.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-5Wt67h2M.js";import"./hooks-CP5b_m36.js";import"./axisSelectors-CPdHEeWG.js";import"./zIndexSlice-CXYr44g9.js";import"./renderedTicksSlice-BJnCLUzI.js";import"./resolveDefaultProps-CrMqOqSJ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CRkgE73v.js";import"./chartDataContext-BDWyCmXn.js";import"./CategoricalChart-IxDmkQ4g.js";import"./CartesianAxis-CJ5glNJc.js";import"./Layer-9mC9xCqL.js";import"./Text-DsmkRe5m.js";import"./DOMUtils-D5GQzw0x.js";import"./Label-D7fFgVlW.js";import"./ZIndexLayer-B30mlZWZ.js";import"./types-D_jqkROP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CDqR_0sP.js";import"./Curve-BT-KWQUD.js";import"./useElementOffset-B08jIfFy.js";import"./iteratee-Bzyf1Qa6.js";import"./ReactUtils-46mNTZgz.js";import"./ActivePoints-B_AgrQap.js";import"./Dot-3Z5bp850.js";import"./RegisterGraphicalItemId-DJudlZJr.js";import"./ErrorBarContext-CbJ9bt-9.js";import"./GraphicalItemClipPath-B-dv77RJ.js";import"./SetGraphicalItem-jeGmKde2.js";import"./useAnimationId-CAcVrmxD.js";import"./getRadiusAndStrokeWidthFromDot-xHG4qJ44.js";import"./ActiveShapeUtils-BUYAPEqO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BqCnT0bH.js";import"./Trapezoid-h6fpFzx0.js";import"./Sector-CApGG2LQ.js";import"./Cross-CIgMQk7x.js";import"./index-B4_M3vQq.js";import"./ChartSizeDimensions-C8KjVzvN.js";import"./OffsetShower-CPo0ir56.js";import"./PlotAreaShower-B87d4Zfp.js";const Kt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,ft as __namedExportsOrder,Kt as default};
