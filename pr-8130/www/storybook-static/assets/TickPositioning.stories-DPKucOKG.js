import{R as t}from"./iframe-BmS0ecXK.js";import{R as m}from"./zIndexSlice-ChtzqxIP.js";import{L as s}from"./LineChart-BPHHqb0M.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Dcfa59Q0.js";import{X as l}from"./XAxis-Bh2usn2R.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-L-kb5cDL.js";import"./throttle-OPlZV-qu.js";import"./index-CdWOU_Jt.js";import"./index-CT2dpPb1.js";import"./RechartsWrapper-CUI9gBJC.js";import"./axisSelectors-BzqnuZDm.js";import"./polarAxisSelectors-CE28gFQQ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-3fk2W2Xu.js";import"./index-S9VbsYVM.js";import"./index-B2CB0vSq.js";import"./renderedTicksSlice-DE9Jk9Mo.js";import"./index-B9xLgKg_.js";import"./fillDefinitions-BfTN52CB.js";import"./CartesianChart-MAWW00G9.js";import"./ZIndexPortal-BBTCIcjJ.js";import"./CategoricalChart-Y8ADkKU9.js";import"./Layer-BUeogdZj.js";import"./Curve-lc4LP5Ja.js";import"./types-BFfgrH_g.js";import"./step-SGVv9xA0.js";import"./path-DyVhHtw_.js";import"./LabelList-HbN4s7ci.js";import"./Label-xOYEqHzO.js";import"./Text-Cy6IgmxI.js";import"./DOMUtils-nGO8S--J.js";import"./ZIndexLayer-CGSpKlNm.js";import"./ActivePoints-DWCg0rgm.js";import"./Dot-D1LmOLCb.js";import"./activeStyles-D5Ig3nSZ.js";import"./useAnimationId-CpCNOV8e.js";import"./dataEntryStyles-BusWIJtt.js";import"./Symbols-D9BPgtte.js";import"./symbol-BAUa8x3O.js";import"./ErrorBarContext-D4UbmXd_.js";import"./SetGraphicalItem-DxeCv-Nd.js";import"./getRadiusAndStrokeWidthFromDot-DJ-NIfPX.js";import"./ActiveShapeUtils-UpE3VQFE.js";import"./useEffectiveDataKey-1aGsCLfO.js";import"./CartesianAxis-Brh0Ot5h.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: () => {
    const intervalOptions = ['preserveStart', 'preserveEnd', 'preserveStartEnd', 'equidistantPreserveStart', 0] as const;
    return <ResponsiveContainer>
        <LineChart data={ticks}
      // Margins are necessary to show ticks that extend beyond the chart (i.e. last and first tick).
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 20
      }}>
          <Line dataKey="coordinate" />
          {intervalOptions.map((intervalOption, index) => <XAxis dataKey="value" key={intervalOption} interval={intervalOption} xAxisId={index} label={intervalOption} height={70} />)}
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,ct as __namedExportsOrder,st as default};
