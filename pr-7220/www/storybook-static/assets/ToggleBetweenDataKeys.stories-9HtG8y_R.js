import{r as n,e as t}from"./iframe-D7aX3J5h.js";import{L as p}from"./LineChart-Cqe9dFqv.js";import{R as s}from"./arrayEqualityCheck-DLuUv4yo.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CkxeYeVM.js";import{X as d}from"./XAxis-EjrrpAWt.js";import{Y as y}from"./YAxis-ByFth8eE.js";import{L as h}from"./Legend-Dfl2ak29.js";import{L as u}from"./Line-Bj-b8hiQ.js";import{T as g}from"./Tooltip-BJRacGUe.js";import{R as K}from"./RechartsHookInspector-BTqr9y2h.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-_XTZaGgp.js";import"./index-BM0_uYzm.js";import"./immer-DIW08hxt.js";import"./hooks-D1J8v2Uc.js";import"./axisSelectors-I1seAFnS.js";import"./d3-scale-Mn_kc0sV.js";import"./zIndexSlice-uyR3EFO5.js";import"./renderedTicksSlice-OcRGvYoz.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CKcNyqW5.js";import"./chartDataContext-davdrOpe.js";import"./CategoricalChart-XTP8dVhI.js";import"./resolveDefaultProps-DDSKwV2V.js";import"./CartesianAxis-Bj6Nx-J-.js";import"./Layer-CJYXhEUr.js";import"./Text-CWxCeK9x.js";import"./DOMUtils-DCfT5r3n.js";import"./Label-UZajBuhN.js";import"./ZIndexLayer-CkNFgsWD.js";import"./types-4ix9MfJ6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BNYsC8j_.js";import"./symbol-BUFbd2WM.js";import"./step-lYGPVUHl.js";import"./useElementOffset-7Ur_tbNZ.js";import"./uniqBy-BMTpWui9.js";import"./iteratee-Cr-LsCtJ.js";import"./ReactUtils-CbiuaN3U.js";import"./ActivePoints-3vBr6ZBc.js";import"./Dot-BDZGqa2C.js";import"./RegisterGraphicalItemId-CN0LR0Zv.js";import"./ErrorBarContext-DUsuoaJE.js";import"./GraphicalItemClipPath-DCnzaJaS.js";import"./SetGraphicalItem-BA9LnDto.js";import"./useAnimationId-m-yYskNq.js";import"./getRadiusAndStrokeWidthFromDot-TfJWcB_w.js";import"./ActiveShapeUtils-ozGWPntb.js";import"./isPlainObject-C2gpCQxZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C5iIq7iY.js";import"./Trapezoid-DY_CkLjE.js";import"./Sector-B9JMeRk8.js";import"./Curve-C0dUv9vi.js";import"./Cross-x6xLFhry.js";import"./index-BUdbPquH.js";import"./ChartSizeDimensions-CBUuBi2H.js";import"./OffsetShower-YsWSeMxm.js";import"./PlotAreaShower-BsknmqpH.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
