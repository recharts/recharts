import{R as t}from"./iframe-D9rYPFI6.js";import{R as m}from"./zIndexSlice-C3wsTrp9.js";import{L as s}from"./LineChart-CLNGkgTM.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CfToshCO.js";import{X as l}from"./XAxis-QgJPS01w.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-JMn6s7-r.js";import"./index-CBOJEfGe.js";import"./index-D-oLxkfn.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-ULtnpSod.js";import"./isWellBehavedNumber-wns85k-s.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DraVZS0h.js";import"./index-BwM3wMsV.js";import"./index-BxIft0ja.js";import"./axisSelectors-BEMJ5G3d.js";import"./d3-scale-CWZ2NBQb.js";import"./renderedTicksSlice-BQcf9eI6.js";import"./CartesianChart-CbCZKRVf.js";import"./chartDataContext-C9SNw5Kb.js";import"./CategoricalChart-BTp1W0gj.js";import"./Layer-Dvgn5PDs.js";import"./Curve-BFrR0D3S.js";import"./types-BrxWVo-u.js";import"./step-C1GSzIMp.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-JH_MyxHu.js";import"./Label-VP1_-jlA.js";import"./Text-CPEEagO_.js";import"./DOMUtils-DnqcKz1X.js";import"./ZIndexLayer-CJhkiIkj.js";import"./useAnimationId-CBJcnsSW.js";import"./ActivePoints-BOg4hwaZ.js";import"./Dot-DA1K4FFV.js";import"./RegisterGraphicalItemId-Can_TNgi.js";import"./ErrorBarContext-v151GJ1I.js";import"./GraphicalItemClipPath-CiKUQeNX.js";import"./SetGraphicalItem-AXc71c8D.js";import"./getRadiusAndStrokeWidthFromDot-DWbL5obz.js";import"./ActiveShapeUtils-yvf6fJP9.js";import"./RechartsThemeContext-CrN5KJo6.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-vGmXII6H.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,pt as default};
