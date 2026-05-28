import{e as t}from"./iframe-KzgC6yl3.js";import{g as m}from"./arrayEqualityCheck-CI6mjpz-.js";import{L as s}from"./LineChart-BNbXBu5R.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BcSuBwlL.js";import{X as l}from"./XAxis-CQ-aN71n.js";import{R as v}from"./RechartsHookInspector-CbwNoaPW.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DbdijU9i.js";import"./immer-BD-tkhpl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DlAfZ1fX.js";import"./index-D1VqXYN0.js";import"./hooks-Bk-p3SZZ.js";import"./axisSelectors-BGTsJTqw.js";import"./d3-scale-CYshLe_K.js";import"./zIndexSlice-CoKEHAdo.js";import"./renderedTicksSlice-jEvY63xF.js";import"./CartesianChart-B-Y1gwjz.js";import"./chartDataContext-DWNsgPih.js";import"./CategoricalChart-BntpVIm6.js";import"./Curve-Q6mWCHhh.js";import"./types-eUgvlmUM.js";import"./step-BvMApuT3.js";import"./path-DyVhHtw_.js";import"./Layer-LeweOpyN.js";import"./ReactUtils-CwLFTC_n.js";import"./Label-DkRj53y4.js";import"./Text-DMdLrMxb.js";import"./DOMUtils-CBtmXe9D.js";import"./ZIndexLayer-B24S8uuv.js";import"./ActivePoints-CV8SIXKH.js";import"./Dot-DYstLEu7.js";import"./RegisterGraphicalItemId-C-ghpo4L.js";import"./ErrorBarContext-Ch4fukf7.js";import"./GraphicalItemClipPath-fwgnm59t.js";import"./SetGraphicalItem-D3MvL0nb.js";import"./useAnimationId-Djb8H1Ge.js";import"./getRadiusAndStrokeWidthFromDot-0pa1p6Pi.js";import"./ActiveShapeUtils-C7hoslI5.js";import"./CartesianAxis-IwDruP1d.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BPaFEgS3.js";import"./ChartSizeDimensions-DC6_U8Aq.js";import"./OffsetShower-CrK-LA7q.js";import"./PlotAreaShower-CZGD6-xs.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const mt=["TickPositioning"];export{r as TickPositioning,mt as __namedExportsOrder,pt as default};
