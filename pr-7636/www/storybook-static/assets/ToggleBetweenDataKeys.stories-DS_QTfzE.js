import{r as n,R as t}from"./iframe-CtnQdIY7.js";import{L as p}from"./LineChart-C21Xlqeh.js";import{R as s}from"./zIndexSlice-uhZ24fvC.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BIFf-M9G.js";import{X as d}from"./XAxis-XO5v4-hr.js";import{Y as y}from"./YAxis-18LfpUGe.js";import{L as u}from"./Legend-BiRbjuQ8.js";import{L as h}from"./Line-BhbLTTAA.js";import{T as g}from"./Tooltip-DKc99BpK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DnMXuDt4.js";import"./index-C7Llpbdk.js";import"./index-CsEievrw.js";import"./index-D6huCRxI.js";import"./index-DamwuQ06.js";import"./throttle-BK98nfBm.js";import"./get-C2VjdU0L.js";import"./axisSelectors-RZmSNqcb.js";import"./resolveDefaultProps-BhVUJJl8.js";import"./isWellBehavedNumber-BafIqGdu.js";import"./d3-scale-DhrbdntK.js";import"./renderedTicksSlice-C6Ijq1lt.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CtmjJLbI.js";import"./chartDataContext-CjvKHNlA.js";import"./CategoricalChart-DN8vznAz.js";import"./CartesianAxis-B2-Emwk9.js";import"./Layer-CrHPq_vq.js";import"./Text-B-1OewBP.js";import"./DOMUtils-BvAafYtQ.js";import"./Label-qBa5cEUX.js";import"./ZIndexLayer-DMqHwKfA.js";import"./types-CuvpKj9W.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-v9ngAxmb.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DQM-19oT.js";import"./symbol-CyjWwlnJ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-qg6DMFTI.js";import"./uniqBy-B5Eni1L2.js";import"./iteratee-Cjnl5Vus.js";import"./Curve-maCREAuN.js";import"./step-Dqi6RR6U.js";import"./AnimatedItems-C-8qrP3C.js";import"./useAnimationId-DN6fR6pH.js";import"./ActivePoints-pXmyAmZV.js";import"./Dot-C0XFWsWB.js";import"./RegisterGraphicalItemId-nrbEOJ2H.js";import"./ErrorBarContext-ryDidWCv.js";import"./GraphicalItemClipPath-DTrO8h0n.js";import"./SetGraphicalItem-CeeM15rn.js";import"./getRadiusAndStrokeWidthFromDot-B6TsNsTR.js";import"./ActiveShapeUtils-B0TODl5s.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-B5r5VRis.js";import"./Rectangle-Dt_H66Jb.js";import"./util-Dxo8gN5i.js";import"./Sector-DI1mC89a.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
