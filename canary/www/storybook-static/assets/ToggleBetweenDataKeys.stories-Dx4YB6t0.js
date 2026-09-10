import{r as p,R as t}from"./iframe-C0BhaIHx.js";import{L as n}from"./LineChart-BM5462Y3.js";import{R as s}from"./zIndexSlice-CDOt9hko.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-E54ja5m-.js";import{X as d}from"./XAxis-DW1roRyb.js";import{Y as y}from"./YAxis-DxhSN3f3.js";import{L as u}from"./Legend-wiIoOZvZ.js";import{L as h}from"./Line-BrGPisns.js";import{T as g}from"./Tooltip-ChFQw5Us.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BrzF7ifV.js";import"./resolveDefaultProps-DCmLA3K_.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BjRn9Rmb.js";import"./throttle-_kaTGctA.js";import"./index-CHaO9dBD.js";import"./index-uoiqJzNo.js";import"./isWellBehavedNumber-D_-ia2T-.js";import"./d3-scale-m2f7iS2A.js";import"./index-BOsMLxuu.js";import"./index-CxbCOQkV.js";import"./renderedTicksSlice--IxhvHeS.js";import"./index-BnJ9NTOO.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B1wZ3fTU.js";import"./chartDataContext-D3PRni2U.js";import"./CategoricalChart-F9gORHS1.js";import"./CartesianAxis-DAIP3l5S.js";import"./Layer-BVz81g-K.js";import"./Text-CsTjolj2.js";import"./DOMUtils-BbiNqhEu.js";import"./useId-DVa-1am7.js";import"./useBackwardsCompatibleTheme-Bm34Q8-P.js";import"./Label-BTrm9XD1.js";import"./ZIndexLayer-rpRhSNXU.js";import"./types-09ibMXDf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BvYWP5aa.js";import"./symbol-Bi9q3ZjS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-3ZN4wc9L.js";import"./uniqBy-D0MFx9I4.js";import"./iteratee-C079nQ1K.js";import"./Curve-BT8Th8L7.js";import"./step-D8qMIOsj.js";import"./AnimatedItems-BkfPAPcH.js";import"./useAnimationId-DAQ_cacI.js";import"./ActivePoints-Cer-NR5E.js";import"./Dot-Bi7x9r9p.js";import"./RegisterGraphicalItemId-BZlrZWzc.js";import"./ErrorBarContext-0HaXxMlO.js";import"./GraphicalItemClipPath-puDtay2S.js";import"./SetGraphicalItem-0BPxCGJF.js";import"./getRadiusAndStrokeWidthFromDot-BS0aHfrl.js";import"./ActiveShapeUtils-B0KqHDN3.js";import"./useGraphicalItemIdentity-DRraOtTx.js";import"./Cross-BqUJjMul.js";import"./Rectangle-ChwjE7xo.js";import"./util-Dxo8gN5i.js";import"./Sector-Dd9164Y3.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
