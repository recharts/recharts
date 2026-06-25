import{r as n,R as t}from"./iframe-CpH4jn8g.js";import{L as p}from"./LineChart-ov3sJMxb.js";import{R as s}from"./zIndexSlice-CMsbRcVo.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CMKKpDJT.js";import{X as d}from"./XAxis-BqLLe0Cs.js";import{Y as y}from"./YAxis-D5kjy0nv.js";import{L as u}from"./Legend-qFKfEDy9.js";import{L as h}from"./Line-CTejxpOS.js";import{T as g}from"./Tooltip-2Sgew7i7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-TUYhIbD6.js";import"./index-B6von4ou.js";import"./index-CB2lo7iV.js";import"./index--z9jIKZg.js";import"./index-wpdvZnuB.js";import"./immer-C21IJxSF.js";import"./get-DfDzGUS7.js";import"./renderedTicksSlice-D-wmUWoC.js";import"./axisSelectors-Bq_vtAr0.js";import"./d3-scale-hekr18xW.js";import"./resolveDefaultProps-DGN954Kv.js";import"./isWellBehavedNumber-6OhSnnoK.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BW_KV3Uo.js";import"./chartDataContext-CNUo9Q_N.js";import"./CategoricalChart-CJCbZaD2.js";import"./CartesianAxis-lejBVVP2.js";import"./Layer-CpyyR4fH.js";import"./Text-DxL0BXFO.js";import"./DOMUtils-BSMSB0a3.js";import"./Label-BID2wGRS.js";import"./ZIndexLayer-FLcdyCMW.js";import"./types-CDIAbI3v.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-D2ZazDGw.js";import"./symbol-LM65-9kf.js";import"./path-DyVhHtw_.js";import"./useElementOffset-FeBedyZd.js";import"./uniqBy-DybamGh7.js";import"./iteratee-D0Q2blRW.js";import"./Curve-2uMIoq2i.js";import"./step-COWbUyG4.js";import"./AnimatedItems-BjSZm7AL.js";import"./useAnimationId-DOUqN62f.js";import"./ActivePoints-9ROC9Lt_.js";import"./Dot-CxmB6f2U.js";import"./RegisterGraphicalItemId-BwHF-Xvv.js";import"./ErrorBarContext-DQcN79r3.js";import"./GraphicalItemClipPath-CjdnX9P0.js";import"./SetGraphicalItem-BKY8M4LB.js";import"./getRadiusAndStrokeWidthFromDot-BpydaN9S.js";import"./ActiveShapeUtils-DtM6eKjz.js";import"./Cross-Ci8qvtCb.js";import"./Rectangle-BETJzIFT.js";import"./util-Dxo8gN5i.js";import"./Sector-iVL0Cpd1.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
