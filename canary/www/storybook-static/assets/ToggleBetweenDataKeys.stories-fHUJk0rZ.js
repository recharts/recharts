import{r as n,R as t}from"./iframe-DiVXU681.js";import{L as p}from"./LineChart-BawnwMxD.js";import{R as s}from"./zIndexSlice-DzaA_87S.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-qIMJK8nU.js";import{X as d}from"./XAxis-C3k2I40a.js";import{Y as y}from"./YAxis-DRIG0Uth.js";import{L as u}from"./Legend-DlJsX6wB.js";import{L as h}from"./Line-BlL2BOn4.js";import{T as g}from"./Tooltip-24mP4oxf.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-wAcW42w2.js";import"./index-Crp3sUc9.js";import"./index-DVcmQSez.js";import"./index-DgrTrvqA.js";import"./index-8IQM-0LL.js";import"./throttle-TSFzffo4.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D56P7LNb.js";import"./resolveDefaultProps-CdAiRIhG.js";import"./isWellBehavedNumber-BX88-Alk.js";import"./d3-scale-BGRr8R4r.js";import"./renderedTicksSlice-CCTXP0cy.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CTSm63aG.js";import"./chartDataContext-DPZzm9Zw.js";import"./CategoricalChart-DJdh8SdX.js";import"./CartesianAxis-pQr6RLfR.js";import"./Layer-BIRlOb6y.js";import"./Text-CCIULR2F.js";import"./DOMUtils-CLkaSbmi.js";import"./Label-0bv0xRMH.js";import"./ZIndexLayer-BbNui_5z.js";import"./types-VNyUreZc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BiKwVLZ_.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CJedFpAh.js";import"./symbol-C6BtcMJ6.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DnWcYAZJ.js";import"./uniqBy-BfbLVdUA.js";import"./iteratee-BKX_gc7E.js";import"./Curve-BjRrTa61.js";import"./step-CQ2-KwOC.js";import"./AnimatedItems-CmBbc9Cv.js";import"./useAnimationId-CxWNxwEQ.js";import"./ActivePoints-DG4FSK5q.js";import"./Dot-BqazTdoT.js";import"./RegisterGraphicalItemId-CjWwTgFZ.js";import"./ErrorBarContext-DQhhoIiU.js";import"./graphicalItemIdentity-D0Jl2Dn2.js";import"./SetGraphicalItem-CGIfPK7m.js";import"./getRadiusAndStrokeWidthFromDot-BO77BdP0.js";import"./ActiveShapeUtils-DRcrzfDF.js";import"./Cross-DfLUlGK_.js";import"./Rectangle-NkoMZfI8.js";import"./util-Dxo8gN5i.js";import"./Sector-B85yuHHd.js";const Et={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Lt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Lt as __namedExportsOrder,Et as default};
