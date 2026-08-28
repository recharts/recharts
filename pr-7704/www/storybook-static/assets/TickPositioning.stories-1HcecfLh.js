import{R as t}from"./iframe-CVDCphxx.js";import{R as n}from"./zIndexSlice-D76eaAVt.js";import{L as s}from"./LineChart-DYwp0wsB.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CBX_YG-s.js";import{X as l}from"./XAxis-BaXZzVL8.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-t8E79NJX.js";import"./index-BJO-ep7J.js";import"./index-BpxiUomY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B_5oDYmC.js";import"./isWellBehavedNumber-DVmFYWt0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DEnb7ufM.js";import"./axisSelectors-ChjpNCZD.js";import"./d3-scale-Cu204p6o.js";import"./index-CihE6hhr.js";import"./index-DCMHKzI9.js";import"./renderedTicksSlice-B1XRs7d0.js";import"./index-BJY-g_ad.js";import"./CartesianChart-D47jpHMU.js";import"./chartDataContext-C-FdSEwK.js";import"./CategoricalChart-D7b0lra6.js";import"./Layer-CMIguF8f.js";import"./Curve-BAi3bHUk.js";import"./types-qF5qaMWi.js";import"./step-CnFrEUK7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BHXlTf3v.js";import"./Label-CplunMl3.js";import"./Text-Dgr5qdov.js";import"./DOMUtils-DF_qw-1b.js";import"./useId-CWzKPTKL.js";import"./useBackwardsCompatibleTheme-MdPX2i5n.js";import"./ZIndexLayer-BeV_pa6H.js";import"./useAnimationId-Bwtwv5PP.js";import"./ActivePoints-wrDHu4bh.js";import"./Dot-DSiQ3Q_z.js";import"./RegisterGraphicalItemId-z4StfXHb.js";import"./ErrorBarContext-Dl0aWSaL.js";import"./GraphicalItemClipPath-C3-aN0c_.js";import"./SetGraphicalItem-Xr4kmH_o.js";import"./getRadiusAndStrokeWidthFromDot-BWSKjGaB.js";import"./ActiveShapeUtils-BczdQoPB.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BZu_fnrb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const nt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
