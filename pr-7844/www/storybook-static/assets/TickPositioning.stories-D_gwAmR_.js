import{R as t}from"./iframe-Bcl-Wsua.js";import{R as m}from"./zIndexSlice-CAQaUmZK.js";import{L as s}from"./LineChart-Bvrg16LK.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BYiC1NaN.js";import{X as l}from"./XAxis-BkzTF5vO.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-ByTEOgqW.js";import"./index-Byo_Z8h8.js";import"./index-CiCiyWr1.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dz58eYC6.js";import"./isWellBehavedNumber-DyceyyjX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DAZxuN02.js";import"./axisSelectors-HkZtvUb3.js";import"./d3-scale-Bz3uBv2F.js";import"./index-YOpejnVN.js";import"./index-6jgft-oG.js";import"./renderedTicksSlice-BjEraSyi.js";import"./index-D0zdUyje.js";import"./CartesianChart-5huH0yXB.js";import"./chartDataContext-LpcG4P9k.js";import"./CategoricalChart-xwTlxCLL.js";import"./Layer-DZWwUS0u.js";import"./Curve-nBoa-bSt.js";import"./types-DyxZGeRY.js";import"./step-D_84ehuK.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Du4sNDn0.js";import"./Label-CKR6MZGL.js";import"./Text-82Vb94kC.js";import"./DOMUtils-f-jZlskf.js";import"./useId-B3g5LtRX.js";import"./useBackwardsCompatibleTheme-hNwFldyo.js";import"./ZIndexLayer-j6jNc8g-.js";import"./useAnimationId-CLfnnxh1.js";import"./ActivePoints-DjQ1bPvM.js";import"./Dot-BL8fSCF8.js";import"./RegisterGraphicalItemId-gwGVCH_O.js";import"./ErrorBarContext-Yi3ZPeq6.js";import"./GraphicalItemClipPath-w0-QNnMD.js";import"./SetGraphicalItem-Bv_ZKENs.js";import"./getRadiusAndStrokeWidthFromDot-A7w8EsXG.js";import"./ActiveShapeUtils-BI8YD_7c.js";import"./useGraphicalItemIdentity-BOUOyfoU.js";import"./CartesianAxis-C4G_M4Jp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
