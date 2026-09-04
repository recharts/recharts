import{R as t}from"./iframe-C60CeSr1.js";import{R as n}from"./zIndexSlice-OJv_DQrU.js";import{L as s}from"./LineChart-D2qhPKAD.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CMs-Gd4q.js";import{X as l}from"./XAxis-BvEbbPhK.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-4y-zsF2K.js";import"./index-CLcnbG-9.js";import"./index-Bqwda9Fq.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BGY8S9MU.js";import"./isWellBehavedNumber-ps2XZnBQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-GqvtI-xq.js";import"./axisSelectors-8LjSDh6r.js";import"./d3-scale-CKiULClT.js";import"./index-BORXIxjx.js";import"./index-BpZ-_TsI.js";import"./renderedTicksSlice-tOvQVNJQ.js";import"./index-BHPplqCM.js";import"./CartesianChart-Dx5XpQWF.js";import"./chartDataContext-wxbL5Q17.js";import"./CategoricalChart-DorDSMvO.js";import"./Layer-BkafIlY5.js";import"./Curve-Dnnwa-VF.js";import"./types-Bt5cyCk_.js";import"./step-7U-QL9rs.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BorEvTXc.js";import"./Label-D00_RuVZ.js";import"./Text-DbOMyqnY.js";import"./DOMUtils-DGbVIUY3.js";import"./useId-DOhjH30T.js";import"./useBackwardsCompatibleTheme-NWguYV1j.js";import"./ZIndexLayer-DZjPHzll.js";import"./useAnimationId-SZ0HilGc.js";import"./ActivePoints-5H7EYI7d.js";import"./Dot-DqDbCkrn.js";import"./RegisterGraphicalItemId-TGLRvyhw.js";import"./ErrorBarContext-D1-31f6l.js";import"./GraphicalItemClipPath-D_FqHT2B.js";import"./SetGraphicalItem-BDVcT93s.js";import"./getRadiusAndStrokeWidthFromDot-1touBkwt.js";import"./ActiveShapeUtils-D3L9NjGk.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-CFb2o3L1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const nt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
