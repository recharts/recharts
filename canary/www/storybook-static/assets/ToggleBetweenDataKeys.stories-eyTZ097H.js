import{r as n,e as t}from"./iframe-DVKGYMpC.js";import{L as p}from"./LineChart-Dna1MShg.js";import{R as s}from"./arrayEqualityCheck-C3dMZwVz.js";import{C as c}from"./CartesianGrid-DdK_tTpX.js";import{X as l}from"./XAxis-WP1B-t-F.js";import{Y as d}from"./YAxis-36kfWwzX.js";import{L as y}from"./Legend-DMhQGeFy.js";import{L as h}from"./Line-DM6-icql.js";import{T as u}from"./Tooltip-2satjD6Z.js";import{R as g}from"./RechartsHookInspector-BRvRKLe7.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-VcgGm0Mh.js";import"./index-XfA7Rruh.js";import"./immer-mdmEhKTL.js";import"./hooks-KmYc7udA.js";import"./axisSelectors-C6zo9Ho5.js";import"./d3-scale-CKFP8_y_.js";import"./zIndexSlice-BCKi_K05.js";import"./renderedTicksSlice-DNTEgzlA.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-20x7b3cD.js";import"./chartDataContext-DkfeKHKL.js";import"./CategoricalChart-lWTiO2LF.js";import"./resolveDefaultProps-m52n9a41.js";import"./CartesianAxis-hM284rmA.js";import"./Layer-Cbzg46jm.js";import"./Text-D8j9jByl.js";import"./DOMUtils-Cq0pXhle.js";import"./Label-CgM8GhgJ.js";import"./ZIndexLayer-D9yE2b_P.js";import"./types-D5_2czw6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CUdlDqJ5.js";import"./symbol-BuAcBDh_.js";import"./step-BPnB-OiB.js";import"./useElementOffset-DmaGgdgh.js";import"./uniqBy-DKpKL2nk.js";import"./iteratee-D92tm2NM.js";import"./ReactUtils-2VJeHFxo.js";import"./ActivePoints-D-CneBw2.js";import"./Dot-Du5UEN4g.js";import"./RegisterGraphicalItemId-DFvy2IAN.js";import"./ErrorBarContext-D0RCHEkz.js";import"./GraphicalItemClipPath-Dbga3z9T.js";import"./SetGraphicalItem-Dd-xAAAu.js";import"./useAnimationId-BLC1f5rw.js";import"./getRadiusAndStrokeWidthFromDot-DUAFpNa5.js";import"./ActiveShapeUtils-DbiEWzYq.js";import"./isPlainObject-JLSnB0Dw.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BA2b7ur5.js";import"./Trapezoid-Byuc0lU9.js";import"./Sector-BMT_0fK5.js";import"./Curve-DFpbuCXU.js";import"./Cross-BLkWNH7r.js";import"./index-DH-aWMW3.js";import"./ChartSizeDimensions-DAFzj3WJ.js";import"./OffsetShower-lcp6F4HW.js";import"./PlotAreaShower-BUpHI0ia.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
