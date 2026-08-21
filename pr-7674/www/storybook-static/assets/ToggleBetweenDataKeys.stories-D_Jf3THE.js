import{r as n,R as t}from"./iframe-Cuz0ArBZ.js";import{L as p}from"./LineChart-CE_X5Vyo.js";import{R as s}from"./zIndexSlice-BM2UDWO3.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CqIULUiF.js";import{X as d}from"./XAxis-BpKyP0dN.js";import{Y as y}from"./YAxis-Do03vVTX.js";import{L as u}from"./Legend-B_NjPVg9.js";import{L as h}from"./Line-7bfxR50O.js";import{T as g}from"./Tooltip-NJd6s0Sk.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C1GsE6D6.js";import"./index-CnjN1eJY.js";import"./index-B7Kpo2ne.js";import"./index-D4JBGtbh.js";import"./index-DJ25wrw2.js";import"./throttle-D2UP89es.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Uf2etwQJ.js";import"./resolveDefaultProps-DFRYrt1w.js";import"./isWellBehavedNumber-BNR7n96m.js";import"./d3-scale-BU8ngyGj.js";import"./renderedTicksSlice-DoN5idQ6.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D4ZrgDD1.js";import"./chartDataContext-COxhzolJ.js";import"./CategoricalChart-b2JFE4qY.js";import"./CartesianAxis-pF-9QyGN.js";import"./Layer-BxHvVvNo.js";import"./Text-DWRXNVQj.js";import"./DOMUtils-DmogtD9z.js";import"./useId-CG7ic0vo.js";import"./useBackwardsCompatibleTheme-CTjF-q2C.js";import"./Label-CD264HLQ.js";import"./ZIndexLayer-B2d0C2Gc.js";import"./types-DHaro4o6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CcuIXN12.js";import"./symbol-rTWtgTAk.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dkvypv9n.js";import"./uniqBy-CviIdRT6.js";import"./iteratee-CFOEg8qh.js";import"./Curve-CQxBAVgQ.js";import"./step-D64yDiHt.js";import"./AnimatedItems-Bq9Cx-Mo.js";import"./useAnimationId-BcIXJdGX.js";import"./ActivePoints-Q8Q4Ocdm.js";import"./Dot-CF6FpX3d.js";import"./RegisterGraphicalItemId-B9mLA6kv.js";import"./ErrorBarContext-BXjCcKD5.js";import"./GraphicalItemClipPath-DwzWsDMq.js";import"./SetGraphicalItem-BNqnvDS1.js";import"./getRadiusAndStrokeWidthFromDot-CA2V7d8x.js";import"./ActiveShapeUtils-FehVzgEA.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-BOXLonYu.js";import"./Rectangle-Cm_5RFWU.js";import"./util-Dxo8gN5i.js";import"./Sector-CTRA0hxe.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
