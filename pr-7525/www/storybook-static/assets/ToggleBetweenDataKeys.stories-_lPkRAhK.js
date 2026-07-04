import{r as n,R as t}from"./iframe-D1iFT1mY.js";import{L as p}from"./LineChart-SK-OI_nD.js";import{R as s}from"./zIndexSlice-B6TgBQrN.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CIMtiBLV.js";import{X as d}from"./XAxis-zY-Ami2t.js";import{Y as y}from"./YAxis-CW-ZNT8W.js";import{L as u}from"./Legend-BTLJBjOT.js";import{L as h}from"./Line-CqxTaPcW.js";import{T as g}from"./Tooltip-D59ySJwP.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BlluAAtZ.js";import"./index-DvHXLyo3.js";import"./index-BBsSvonK.js";import"./index-DpDzEI56.js";import"./index-rDbSE8GI.js";import"./throttle-CzPbu-Ix.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-Bf_HC71D.js";import"./axisSelectors-CxzN54IZ.js";import"./resolveDefaultProps-BMIUma5c.js";import"./isWellBehavedNumber-Du8M38U_.js";import"./d3-scale-DpibCxtP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D2tBODZW.js";import"./chartDataContext-CYm6jQFo.js";import"./CategoricalChart-D5N5XyOw.js";import"./CartesianAxis-HsnRG105.js";import"./Layer-FA9hcod8.js";import"./Text-J63_ff7W.js";import"./DOMUtils-BANERqy9.js";import"./Label-DT6YPp8b.js";import"./ZIndexLayer-8c0NuDUK.js";import"./types-DXiAmoHC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-CH82EXM3.js";import"./symbol-CYXjKspB.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BL3e6iYA.js";import"./uniqBy-VJyTBDYH.js";import"./iteratee-XPzf7EjH.js";import"./Curve-DI4m1DQG.js";import"./step-Bh5OwxZ-.js";import"./AnimatedItems-LcNNhy-w.js";import"./useAnimationId-CoQh4DtZ.js";import"./ActivePoints-ukxKvv9l.js";import"./Dot-CXZOPICM.js";import"./RegisterGraphicalItemId-DRA4KH43.js";import"./ErrorBarContext-mOiZNw9f.js";import"./GraphicalItemClipPath-DfjPk2Kq.js";import"./SetGraphicalItem-B34_j8RK.js";import"./getRadiusAndStrokeWidthFromDot-BnvNbbpg.js";import"./ActiveShapeUtils-BKYrsUZj.js";import"./Cross-DzXfERyt.js";import"./Rectangle-V-255kdt.js";import"./util-Dxo8gN5i.js";import"./Sector-CRPzSp_9.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ct=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Ct as __namedExportsOrder,vt as default};
