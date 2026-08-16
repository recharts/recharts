import{r as n,R as t}from"./iframe-Dc8RWhrw.js";import{L as p}from"./LineChart-VvO9JrvE.js";import{R as s}from"./zIndexSlice-Cue9wPom.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-EdnxPRMs.js";import{X as d}from"./XAxis-VfLZ80on.js";import{Y as y}from"./YAxis-DMp-u3Mu.js";import{L as u}from"./Legend-DzwEZ1vL.js";import{L as h}from"./Line-DLQNFulf.js";import{T as g}from"./Tooltip-B7ikUiQC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Ba4_XV41.js";import"./index-BjTDJtXe.js";import"./index-D_nZwztl.js";import"./index-BX7yfnHr.js";import"./index-DHKxMT0C.js";import"./throttle-Cgdnnn4b.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Bp8YmQgj.js";import"./resolveDefaultProps-CQDlpFo_.js";import"./isWellBehavedNumber-DkJxcyfZ.js";import"./d3-scale-DDaZL63N.js";import"./renderedTicksSlice-CNJBn7mW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B63GIjUf.js";import"./chartDataContext-DlTklTQC.js";import"./CategoricalChart-CI6oyNVX.js";import"./CartesianAxis-l76NyjyY.js";import"./Layer-Cp8eUZax.js";import"./Text-rfXwlvlz.js";import"./DOMUtils-DSrFB3FI.js";import"./useBackwardsCompatibleTheme-CTZrd8Ez.js";import"./Label-DGIRTg37.js";import"./ZIndexLayer-BPoBYBwu.js";import"./types-D48DJ4qI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-GzXlAdpY.js";import"./symbol-DU6b7_X7.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DHGkrUt4.js";import"./uniqBy-Di3gtafg.js";import"./iteratee-UaQdxZu-.js";import"./Curve-BbQ0Czte.js";import"./step-U7mgLYlb.js";import"./AnimatedItems-HOD2wt3W.js";import"./useAnimationId-ljtrSyr1.js";import"./ActivePoints-CudWYWcW.js";import"./Dot-B7OI2cN8.js";import"./RegisterGraphicalItemId-DxgWNIY4.js";import"./ErrorBarContext-Bc_XovT5.js";import"./GraphicalItemClipPath-vsH9TZYh.js";import"./SetGraphicalItem-Bhl9AfEO.js";import"./getRadiusAndStrokeWidthFromDot-CGlrm7Es.js";import"./ActiveShapeUtils-CqRtCd2Y.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-CDhtS5Tq.js";import"./Rectangle-CIo59f_q.js";import"./util-Dxo8gN5i.js";import"./Sector-CL2E5vKM.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const wt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
