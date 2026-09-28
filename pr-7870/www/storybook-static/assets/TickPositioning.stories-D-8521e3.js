import{R as t}from"./iframe-DfzMHjuD.js";import{R as m}from"./zIndexSlice-D65nx7n2.js";import{L as s}from"./LineChart-DLRunsTX.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CXIUk8YQ.js";import{X as l}from"./XAxis-CcmvQ4-M.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B4jaia1x.js";import"./index-DQvdEvgc.js";import"./index-CHbvF_w5.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BhiSE-fR.js";import"./isWellBehavedNumber-B84GX6Iq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Btc41qHc.js";import"./axisSelectors-Dv8-JHab.js";import"./d3-scale-DkoGb7PH.js";import"./index-CrtWwB5P.js";import"./index-CHqtXhJ0.js";import"./renderedTicksSlice-YMBm5Aq7.js";import"./index-D-FQmlHp.js";import"./CartesianChart-CgfuN-gF.js";import"./chartDataContext-BU-za_rr.js";import"./CategoricalChart-BaFSqBAh.js";import"./Layer-BgMBl2n9.js";import"./Curve-BLtOpFAf.js";import"./types-BoXpTlVd.js";import"./step-9PcWzaJ_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D8ukjbdC.js";import"./Label-DHYmqyDD.js";import"./Text-KIvPk-oI.js";import"./DOMUtils-DZvMhBn7.js";import"./useId-jHWdyPm9.js";import"./useBackwardsCompatibleTheme-BN8Sccns.js";import"./ZIndexLayer-DjEP4vsT.js";import"./useAnimationId-BwLSFp-D.js";import"./ActivePoints-CQoPkIu-.js";import"./Dot-CVblHFHD.js";import"./RegisterGraphicalItemId-FhHKtG3E.js";import"./ErrorBarContext-CbViVQBZ.js";import"./GraphicalItemClipPath-qYVsG-0u.js";import"./SetGraphicalItem-CfEkxgRj.js";import"./getRadiusAndStrokeWidthFromDot-BDWnIHrh.js";import"./ActiveShapeUtils-CUP96Mlj.js";import"./useGraphicalItemIdentity-CnOmH2BL.js";import"./CartesianAxis-B2_CRuSv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
