import{R as t}from"./iframe-DVVgwXG1.js";import{R as n}from"./zIndexSlice-Cy6ToStD.js";import{L as s}from"./LineChart-BUWNMSWS.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Dv1peWnP.js";import{X as l}from"./XAxis-Bz_enE-E.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-3PkmjBJ2.js";import"./index-DAITARgG.js";import"./index-Bm6wqvaK.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CO-uE6eF.js";import"./isWellBehavedNumber-CW2NuOI6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DgxxYcZz.js";import"./axisSelectors-sfX5WmHa.js";import"./d3-scale-DTJLq2d9.js";import"./index-BzHv6xXV.js";import"./index-By4rtoco.js";import"./renderedTicksSlice-CfmunlkM.js";import"./index-BybtA4IG.js";import"./CartesianChart-CwTnpeKy.js";import"./chartDataContext-Sl_P3rcZ.js";import"./CategoricalChart-LtJN5gjM.js";import"./Layer-DfoKGH6M.js";import"./Curve-BxDoFciw.js";import"./types-6aOyMGka.js";import"./step-Bxv9TeT5.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DCmrT7i2.js";import"./Label-Bq1dbdZA.js";import"./Text-x0LSajbz.js";import"./DOMUtils-Dl_vO6wQ.js";import"./useId-fZgFwXfQ.js";import"./useBackwardsCompatibleTheme-C6Trngm8.js";import"./ZIndexLayer-Dy5YDtfO.js";import"./useAnimationId-BGsmQL0f.js";import"./ActivePoints-DdjhNQkF.js";import"./Dot-CtGJ8Abr.js";import"./RegisterGraphicalItemId-BsgFzShu.js";import"./ErrorBarContext-xcvO8XZX.js";import"./GraphicalItemClipPath-CPFvU9dM.js";import"./SetGraphicalItem-BChXMtyH.js";import"./getRadiusAndStrokeWidthFromDot-Bf7z58lw.js";import"./ActiveShapeUtils-CF_ghEpm.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-CMSfRSGS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const nt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const st=["TickPositioning"];export{r as TickPositioning,st as __namedExportsOrder,nt as default};
