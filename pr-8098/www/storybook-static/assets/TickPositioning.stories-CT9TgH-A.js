import{R as t}from"./iframe-D4oHTXd2.js";import{R as m}from"./zIndexSlice-FaOQzDXI.js";import{L as s}from"./LineChart-BV3E2dkf.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-icQsYXEb.js";import{X as l}from"./XAxis--JtbYt43.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-56IWAvtJ.js";import"./throttle-IWj5GY0g.js";import"./index-8QB0C-JA.js";import"./index-BcDiyi9x.js";import"./RechartsWrapper-DDz0Qovh.js";import"./axisSelectors-CDRP_sNf.js";import"./polarAxisSelectors-DA0Sn49S.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C56RpY6Y.js";import"./index-CN0lIDDr.js";import"./index-BEOZMuKY.js";import"./renderedTicksSlice-9pxfuVSu.js";import"./index-CCJYRnuL.js";import"./CartesianChart-DqtOCB7I.js";import"./ZIndexPortal-BwTgdPOx.js";import"./CategoricalChart-BGUOI4WC.js";import"./Layer-Cc-amHQh.js";import"./Curve-B88JiAwJ.js";import"./types-D44DYR1l.js";import"./step-hZT5qMl0.js";import"./path-DyVhHtw_.js";import"./LabelList-hm91Y5t7.js";import"./Label-DP7jFvS8.js";import"./Text-CD7lZJQl.js";import"./pageBackground-ClBhdff4.js";import"./ZIndexLayer-CtwITcxK.js";import"./dataEntryStyles-CDeLNDqG.js";import"./ActivePoints-D0g5NkQl.js";import"./Dot-7MN5UfYI.js";import"./activeStyles-BnisSvy3.js";import"./useAnimationId-DDFQzbLJ.js";import"./Symbols-Dayf-cZG.js";import"./symbol-Cv4qssrt.js";import"./RegisterGraphicalItemId-D_uZK7cP.js";import"./ErrorBarContext-BjrF48Vy.js";import"./SetGraphicalItem-3CIjS8yi.js";import"./getRadiusAndStrokeWidthFromDot-jULpS_BY.js";import"./ActiveShapeUtils-CKRVzd2S.js";import"./useEffectiveDataKey-56V2wZBO.js";import"./CartesianAxis-Ck0BSfZw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
