import{R as t}from"./iframe-DgWro0Cb.js";import{R as m}from"./zIndexSlice-kqW7224Y.js";import{L as s}from"./LineChart-CH_YMISU.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BHp2SfN2.js";import{X as l}from"./XAxis-CkB5HD-K.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BP62aThC.js";import"./index-DztsUb_g.js";import"./index-D3He7cmP.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BhS12mAV.js";import"./isWellBehavedNumber-DwM6ebKF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-h6y9B5zn.js";import"./axisSelectors-CZ13_oVc.js";import"./d3-scale-BfkfHoGl.js";import"./index-BDglQEHq.js";import"./index-CTaoAsOx.js";import"./renderedTicksSlice-gL8A1NDh.js";import"./index-DaYKny0o.js";import"./CartesianChart-DA39YynM.js";import"./chartDataContext-CGD2iDmQ.js";import"./CategoricalChart-u8OOiycT.js";import"./Layer-XFlq6LCH.js";import"./Curve-BxTMDs4y.js";import"./types-pVUrsENP.js";import"./step-JFePqLTA.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DqXJhGnM.js";import"./Label-CAU1RuQf.js";import"./Text-waGCJknf.js";import"./DOMUtils-D88jtPAc.js";import"./useId-BFsrAK1l.js";import"./useBackwardsCompatibleTheme-VKMGBrP2.js";import"./ZIndexLayer-DpP2thTP.js";import"./useAnimationId-NxEFQxZ2.js";import"./ActivePoints-CrJTvJjI.js";import"./Dot-BcllKm9J.js";import"./RegisterGraphicalItemId-9cmkZE1J.js";import"./ErrorBarContext-8rr3nTdF.js";import"./GraphicalItemClipPath-D8FUo4fb.js";import"./SetGraphicalItem-DPr6Abv8.js";import"./getRadiusAndStrokeWidthFromDot-C1GKzwpP.js";import"./ActiveShapeUtils-BxIddtsB.js";import"./useGraphicalItemIdentity-DUrbqVuJ.js";import"./CartesianAxis-CA5xaS56.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,st as __namedExportsOrder,mt as default};
