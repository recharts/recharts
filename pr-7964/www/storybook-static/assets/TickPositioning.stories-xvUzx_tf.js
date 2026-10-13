import{R as t}from"./iframe-BKHpBCGR.js";import{R as m}from"./zIndexSlice-MbsPskuO.js";import{L as s}from"./LineChart-BC33sX3k.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-UOyYMjp1.js";import{X as l}from"./XAxis-DTRZ1dWN.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-3nfkHG5O.js";import"./index-BGfSAvuv.js";import"./index-AIIPc7Ew.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-LMHkslvY.js";import"./isWellBehavedNumber-DZ2Xn8RG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D-Zfjt-o.js";import"./axisSelectors-CJodVBjM.js";import"./d3-scale-CFmaNxVK.js";import"./index-MJAbFl6s.js";import"./index-D7XXjqey.js";import"./renderedTicksSlice-BZuStCiV.js";import"./index-pfuxfga8.js";import"./CartesianChart-CXURKO2Z.js";import"./chartDataContext-BJRV3EGA.js";import"./CategoricalChart-sVMN8Krq.js";import"./Layer-DybYLhVT.js";import"./Curve-DUSP7h70.js";import"./types-Ck1lG8KT.js";import"./step-Dts2RvRs.js";import"./path-DyVhHtw_.js";import"./activeStyles-Ciq5Cwqo.js";import"./Label-O1JP__wG.js";import"./Text-DYCZls4m.js";import"./pageBackground-CYge6A3w.js";import"./useId-Dt-1BK0Z.js";import"./useBackwardsCompatibleTheme-C46GemJr.js";import"./ZIndexLayer-BdmXZICd.js";import"./useAnimationId-yls0YfbP.js";import"./dataEntryStyles-dsuf4aHw.js";import"./ActivePoints-BAFHTjJh.js";import"./Dot-Ba-w2X1N.js";import"./ErrorBarContext-D-66_lvv.js";import"./GraphicalItemClipPath--201yH7F.js";import"./SetGraphicalItem-BcZa1iuc.js";import"./getRadiusAndStrokeWidthFromDot-DBGL35Fg.js";import"./ActiveShapeUtils-DQESG7Jg.js";import"./useEffectiveDataKey-BIsGwEM1.js";import"./CartesianAxis-mCcuS_Uy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
