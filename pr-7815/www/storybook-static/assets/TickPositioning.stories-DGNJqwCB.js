import{R as t}from"./iframe-BWDwgK_D.js";import{R as m}from"./zIndexSlice-C1O5MBWY.js";import{L as s}from"./LineChart-DEcOWSfs.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-B2_MzMwu.js";import{X as l}from"./XAxis-CrYBQ4mi.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BcZmZghI.js";import"./index-B49xXNHt.js";import"./index-CCaysGPM.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bp_p1EHk.js";import"./isWellBehavedNumber-WNu-UqrG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DvAFqpAd.js";import"./axisSelectors-e9-Lmas5.js";import"./d3-scale-BpMJuDGQ.js";import"./index-kktikCBK.js";import"./index-DFG57tTU.js";import"./renderedTicksSlice-xUJav-aw.js";import"./index-y3EgPNWn.js";import"./CartesianChart-B6ulmZoL.js";import"./chartDataContext-D0xRn858.js";import"./CategoricalChart-D3lIPbNt.js";import"./Layer-DAcTuudf.js";import"./Curve-BJ0_3V4P.js";import"./types-loTHP4vv.js";import"./step-BAFgT2Gg.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BustB_TV.js";import"./Label-BKEGIlSz.js";import"./Text-BizBnj_T.js";import"./DOMUtils-iBBTwtfH.js";import"./useId-D1g06gFI.js";import"./useBackwardsCompatibleTheme-BYeMUCh_.js";import"./ZIndexLayer-DRdRjEOe.js";import"./useAnimationId-_CO00dkp.js";import"./ActivePoints-nPDtSH3W.js";import"./Dot-ClXgqV3o.js";import"./RegisterGraphicalItemId-DRBnYmKx.js";import"./ErrorBarContext-DvedyHFP.js";import"./GraphicalItemClipPath-BC50Hrc5.js";import"./SetGraphicalItem-CmL2KxpU.js";import"./getRadiusAndStrokeWidthFromDot-VGRijqjA.js";import"./ActiveShapeUtils-CRD4kYgV.js";import"./useGraphicalItemIdentity-D6QbUwzB.js";import"./CartesianAxis-CMJX9mZH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
