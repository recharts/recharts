import{R as t}from"./iframe-Brw_3xg7.js";import{R as m}from"./zIndexSlice-2iAxrZkm.js";import{L as s}from"./LineChart-D5Vyj_tx.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BR2md8Jx.js";import{X as l}from"./XAxis-DXhKRI9c.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-ConCS3s7.js";import"./index-CtKZ7ilo.js";import"./index-BzcphCAG.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-6Y628-3q.js";import"./isWellBehavedNumber-CKWY2x6w.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CMScH4Y-.js";import"./axisSelectors-BgtJq2Kp.js";import"./d3-scale-DDiKCNKi.js";import"./index-BcnaSdn8.js";import"./index-DAIxs-aJ.js";import"./renderedTicksSlice-7YaTp-wU.js";import"./index-DZwFur8w.js";import"./CartesianChart-D0m-K2vW.js";import"./chartDataContext-B_uwNVrC.js";import"./CategoricalChart-CtbAzaJE.js";import"./Layer-U4JZqCxa.js";import"./Curve-C9eVciME.js";import"./types-BTkYx2NR.js";import"./step-Bi6RETvz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-O-Ra8tLQ.js";import"./Label-CpCnMIaY.js";import"./Text-DAJ7DyY-.js";import"./DOMUtils-Df1YjqfK.js";import"./useId-DReBIxno.js";import"./useBackwardsCompatibleTheme-bimwwtgB.js";import"./ZIndexLayer-DvhvnUDg.js";import"./useAnimationId-LBf_tWSw.js";import"./ActivePoints-CFOMS5xz.js";import"./Dot-CwLVs_ZX.js";import"./RegisterGraphicalItemId-11bybKxG.js";import"./ErrorBarContext-FTmrznrA.js";import"./GraphicalItemClipPath-SQ9_TryA.js";import"./SetGraphicalItem-CcGmMfg9.js";import"./getRadiusAndStrokeWidthFromDot-DFfjCAar.js";import"./ActiveShapeUtils-DolYUreE.js";import"./useGraphicalItemIdentity-CdCNj1VU.js";import"./CartesianAxis-DBWQUVsj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
