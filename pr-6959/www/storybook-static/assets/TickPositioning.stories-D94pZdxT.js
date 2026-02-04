import{e as t}from"./iframe-lWBX64pI.js";import{R as s}from"./arrayEqualityCheck-Bc4Ot0PW.js";import{L as m}from"./LineChart-Bp9qN0Jn.js";import{L as c}from"./Line-bzYOlBDc.js";import{X as d}from"./XAxis-TPgD44nE.js";import{R as l}from"./RechartsHookInspector-DQzLYc7l.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-F9aAykDU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Djqv5WdD.js";import"./hooks-DxrNJMr4.js";import"./axisSelectors-BWmy8ZsX.js";import"./zIndexSlice-DrTdUYuM.js";import"./CartesianChart-Dxi5Jpt2.js";import"./chartDataContext-BrNcW05w.js";import"./CategoricalChart-CNbBFS0r.js";import"./Layer-BUTtt9Bz.js";import"./ReactUtils-Caa168vS.js";import"./Label-BnM6Z2ZH.js";import"./Text-Cr9QQRZN.js";import"./DOMUtils-DKHDOrvS.js";import"./ZIndexLayer-BWtmJpZw.js";import"./ActivePoints-4ReyECY6.js";import"./Dot-CQ7tD8sg.js";import"./types-CeMusotU.js";import"./RegisterGraphicalItemId-nVIwNLcs.js";import"./ErrorBarContext-BmsITwJg.js";import"./GraphicalItemClipPath-B0xhchCc.js";import"./SetGraphicalItem-CksZixPS.js";import"./useAnimationId-Bj8WvXUY.js";import"./getRadiusAndStrokeWidthFromDot-C6m3BF6S.js";import"./ActiveShapeUtils-BBPTy8PE.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-2euSkY-d.js";import"./Trapezoid-C8NVxs2k.js";import"./Sector-EvQq1WWA.js";import"./Symbols-D38f067d.js";import"./Curve-BU8W3PHf.js";import"./CartesianAxis-CCAPZiMN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-04LEDiAf.js";import"./ChartSizeDimensions-BCIgaepb.js";import"./OffsetShower-CEpgJiJ4.js";import"./PlotAreaShower-BJAGaSX0.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,at as default};
