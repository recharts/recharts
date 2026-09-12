import{R as t}from"./iframe-CKftEeOR.js";import{R as m}from"./zIndexSlice-Rd7CQgQI.js";import{L as s}from"./LineChart-C6mLp5od.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CtyxKqH8.js";import{X as l}from"./XAxis-IahfvaCM.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BNKYmND6.js";import"./index-B3U1nEt0.js";import"./index-CMyqNfgS.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CUD-thP6.js";import"./isWellBehavedNumber-B15AKauy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CBr2vBLf.js";import"./axisSelectors-DhTPihhT.js";import"./d3-scale-DUU3auep.js";import"./index-CfJyz4zD.js";import"./index-CaONc0yZ.js";import"./renderedTicksSlice-4VCM87iZ.js";import"./index-D3UZJ1g6.js";import"./CartesianChart-yCMxlTpO.js";import"./chartDataContext-4zvmbyyj.js";import"./CategoricalChart-DGT3qw3A.js";import"./Layer-t7Sk-OLm.js";import"./Curve-DKcxqEob.js";import"./types-CQiiKif5.js";import"./step-Bq5ebvyI.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ePjd4Kgp.js";import"./Label-BtMZmHcU.js";import"./Text-BY0JJbaS.js";import"./DOMUtils-B_LhErBS.js";import"./useId-j7axFfWl.js";import"./useBackwardsCompatibleTheme-BFpC_R2y.js";import"./ZIndexLayer-CfiakTBb.js";import"./useAnimationId-cpDkl9it.js";import"./ActivePoints-D9o__0t3.js";import"./Dot-C7TV-TKY.js";import"./RegisterGraphicalItemId-rDiVUOUt.js";import"./ErrorBarContext-DliiI0LB.js";import"./GraphicalItemClipPath-C7Us-zic.js";import"./SetGraphicalItem-DS6Pgf_p.js";import"./getRadiusAndStrokeWidthFromDot-CeZqJgOi.js";import"./ActiveShapeUtils-B9DHSeBV.js";import"./useGraphicalItemIdentity-C7mRPXGd.js";import"./CartesianAxis-klHqdii2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
