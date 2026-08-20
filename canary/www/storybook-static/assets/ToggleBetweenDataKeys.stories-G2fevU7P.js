import{r as n,R as t}from"./iframe-1ThqpvbR.js";import{L as p}from"./LineChart-N7VRS76I.js";import{R as s}from"./zIndexSlice-D1UhtHk3.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CYqWPTuQ.js";import{X as d}from"./XAxis-P8CW3MKP.js";import{Y as y}from"./YAxis-B1czIw6R.js";import{L as u}from"./Legend-DQdCByvU.js";import{L as h}from"./Line-CQ64EOYy.js";import{T as g}from"./Tooltip-qvvWeQJ8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DcjLdZwM.js";import"./index-CfQ7Fwii.js";import"./index-CktiEatn.js";import"./index-DoTHKFlr.js";import"./index-QzMa9_Xi.js";import"./throttle-C73VAA69.js";import"./get-C2VjdU0L.js";import"./axisSelectors-1futPsBe.js";import"./resolveDefaultProps-DArzca5M.js";import"./isWellBehavedNumber-B7CQu1xd.js";import"./d3-scale-nVhhBbRx.js";import"./renderedTicksSlice-0CGdVobN.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-dewq0r_z.js";import"./chartDataContext-DvyAzMjZ.js";import"./CategoricalChart-XR-igInW.js";import"./CartesianAxis-LO87TYgw.js";import"./Layer-CO3sdEK1.js";import"./Text-MDWEE3g_.js";import"./DOMUtils-BsT2H8yg.js";import"./useId-Cq2DHNjh.js";import"./useBackwardsCompatibleTheme-CdEwSBID.js";import"./Label-Dga6ObK8.js";import"./ZIndexLayer-B6xphlKa.js";import"./types-BACZxUTO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CBU3aRDI.js";import"./symbol-III9KfYB.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D_JS3Ekf.js";import"./uniqBy-BWHb0M0I.js";import"./iteratee-DkQJTWAO.js";import"./Curve-BFr4LVo1.js";import"./step-K_9BfkCY.js";import"./AnimatedItems-CScMa6hv.js";import"./useAnimationId-xKJzFs5I.js";import"./ActivePoints-DT7ZsPv5.js";import"./Dot-fVKNfdE9.js";import"./RegisterGraphicalItemId-DZFAuRVF.js";import"./ErrorBarContext-DBffz6et.js";import"./GraphicalItemClipPath-Tv0C2Wnw.js";import"./SetGraphicalItem-DGTvGn78.js";import"./getRadiusAndStrokeWidthFromDot-Zg2QbZcY.js";import"./ActiveShapeUtils-BlimohsT.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-ClqssIZ3.js";import"./Rectangle-DlLkmtYk.js";import"./util-Dxo8gN5i.js";import"./Sector-DQNnGbD_.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
