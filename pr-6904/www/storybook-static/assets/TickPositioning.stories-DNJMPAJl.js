import{e as t}from"./iframe-DKGTY5BH.js";import{R as s}from"./arrayEqualityCheck-a5J2QiQR.js";import{L as m}from"./LineChart-CMlVk2TY.js";import{L as c}from"./Line-5sxi2sgU.js";import{X as d}from"./XAxis-vvYkOBCU.js";import{R as l}from"./RechartsHookInspector-ltFkNW4M.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CYnJQ9Tz.js";import"./PolarUtils-BgS5trn7.js";import"./RechartsWrapper-C4nUVXRx.js";import"./hooks-l5gEcxv4.js";import"./axisSelectors-BRnicQ57.js";import"./zIndexSlice-BN50EdKr.js";import"./CartesianChart-DZl_tmIf.js";import"./chartDataContext-D-E7lauC.js";import"./CategoricalChart-Q4yJ_XVO.js";import"./Layer-BMyAm0Vh.js";import"./ReactUtils-_yo6pVT0.js";import"./Label-8CsqNV_S.js";import"./Text-DzT2f_9r.js";import"./DOMUtils-DUCvdtk_.js";import"./ZIndexLayer-ChxBgnpv.js";import"./ActivePoints-bLONFCl1.js";import"./Dot-B8GCPTtM.js";import"./types-BBKXijxu.js";import"./RegisterGraphicalItemId-M1wxD3TO.js";import"./ErrorBarContext-l5-2cdDP.js";import"./GraphicalItemClipPath-C08gEDH6.js";import"./SetGraphicalItem-BCvWrM_W.js";import"./useAnimationId-Br5iK6pF.js";import"./getRadiusAndStrokeWidthFromDot-1QeMtlLN.js";import"./ActiveShapeUtils-BwLCOH5f.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BiI1dnIo.js";import"./Trapezoid-ClVeJ0sq.js";import"./Sector-wwquBaDN.js";import"./Symbols-Bske3hMz.js";import"./Curve-B8K-f9lF.js";import"./CartesianAxis-C0xV_R2I.js";import"./index-DpSNf8hh.js";import"./ChartSizeDimensions-CHWSVwWw.js";import"./OffsetShower-fEjtwpJv.js";import"./PlotAreaShower-TADFRiun.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const at=["TickPositioning"];export{r as TickPositioning,at as __namedExportsOrder,ot as default};
