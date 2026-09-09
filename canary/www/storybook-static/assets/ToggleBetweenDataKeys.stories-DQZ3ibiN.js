import{r as p,R as t}from"./iframe-BzcDVKKs.js";import{L as n}from"./LineChart-CWfE41Hm.js";import{R as s}from"./zIndexSlice-BTTYVccT.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-pIOE9iCo.js";import{X as d}from"./XAxis-DmxgzYYf.js";import{Y as y}from"./YAxis-BWHP_SYF.js";import{L as u}from"./Legend-CIG02wIC.js";import{L as h}from"./Line-C1gWHpuW.js";import{T as g}from"./Tooltip-B1Brq9iS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CGczEQWO.js";import"./resolveDefaultProps-BtypfTmg.js";import"./get-C2VjdU0L.js";import"./axisSelectors-IdMVp5Ng.js";import"./throttle-DDPbgHA_.js";import"./index-Km9DigXp.js";import"./index-DjfWl8QV.js";import"./isWellBehavedNumber-kEkRMq_8.js";import"./d3-scale-C4pPFzlU.js";import"./index-BATPxOFC.js";import"./index-9IUtScc_.js";import"./renderedTicksSlice-Cv0ctYuN.js";import"./index-DrsmB6aN.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BPCp3bVQ.js";import"./chartDataContext-DN2d-1N9.js";import"./CategoricalChart-BpKMrWac.js";import"./CartesianAxis-HfL3rF1Y.js";import"./Layer-B4cUMoCn.js";import"./Text-24J6FH-o.js";import"./DOMUtils-Bp1Ea9M_.js";import"./useId-BlYRNzJn.js";import"./useBackwardsCompatibleTheme-ncr2oU_w.js";import"./Label-CtBQk67s.js";import"./ZIndexLayer-DXdU7RWt.js";import"./types-Cgo5Tovd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BZfeJPUl.js";import"./symbol-L7dlPYrt.js";import"./path-DyVhHtw_.js";import"./useElementOffset-VjV8E2aW.js";import"./uniqBy-eOMq6B75.js";import"./iteratee-DrjruNpI.js";import"./Curve-D-bcAvVw.js";import"./step-DnJg-qaF.js";import"./AnimatedItems-tb47PotV.js";import"./useAnimationId-B_k41OIp.js";import"./ActivePoints-hCgPRLnM.js";import"./Dot-aHiofzDa.js";import"./RegisterGraphicalItemId-D5DmGuV-.js";import"./ErrorBarContext-C3FB8ozV.js";import"./GraphicalItemClipPath-Cfm3NAku.js";import"./SetGraphicalItem-CNRXuHZw.js";import"./getRadiusAndStrokeWidthFromDot-DgBFRHKH.js";import"./ActiveShapeUtils-Ck9I3ldI.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-B6ejWItR.js";import"./Rectangle-DA-7Dq-R.js";import"./util-Dxo8gN5i.js";import"./Sector-DmQmgrZA.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
