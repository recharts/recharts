import{e as t}from"./iframe-BI_pAXBB.js";import{R as n}from"./arrayEqualityCheck-BKrbAl8r.js";import{L as s}from"./LineChart-CJp55qYS.js";import{L as c}from"./Line-fl9wl9em.js";import{X as d}from"./XAxis-CGb1kgb2.js";import{R as l}from"./RechartsHookInspector-BVifdKxh.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BfThY2qm.js";import"./immer-DS7uv6B4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DROe6fuT.js";import"./index-BzE7Pa11.js";import"./hooks-B_MXrk3m.js";import"./axisSelectors-CXWTfjJ6.js";import"./d3-scale-CUPcwIhM.js";import"./zIndexSlice-Blq0MPxS.js";import"./renderedTicksSlice-CafZfga-.js";import"./CartesianChart-KFRCLVOt.js";import"./chartDataContext-VgXSPlUI.js";import"./CategoricalChart-NTGK7QHa.js";import"./Layer-BbCwBMrP.js";import"./ReactUtils-C8LT_WKY.js";import"./Label-BRAbHYpb.js";import"./Text-DDIiPn9R.js";import"./DOMUtils-Clx04LAZ.js";import"./ZIndexLayer-BIA7rzZS.js";import"./ActivePoints-CKakRG7P.js";import"./Dot-IX9Hy7RV.js";import"./types-CyZr-7-n.js";import"./RegisterGraphicalItemId-DUukUl_8.js";import"./ErrorBarContext-wf0IFZx-.js";import"./GraphicalItemClipPath-Bfi93Jqz.js";import"./SetGraphicalItem-d6KR3BLJ.js";import"./useAnimationId-CIydZ5LQ.js";import"./getRadiusAndStrokeWidthFromDot-RglsRcI2.js";import"./ActiveShapeUtils-BVb3C7rS.js";import"./isPlainObject-D710pF_7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BlZgVPa6.js";import"./Trapezoid-NjnAs4CK.js";import"./Sector-CeaItBuI.js";import"./Symbols-D26WGzjl.js";import"./symbol-DK6vMZu2.js";import"./step-aPk3qf3o.js";import"./Curve-C08bjkMC.js";import"./CartesianAxis-D76QbbPe.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-D4zEKe7v.js";import"./ChartSizeDimensions-B1IFVDHL.js";import"./OffsetShower-PutuTgHL.js";import"./PlotAreaShower-CbV6UHYA.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ht=["TickPositioning"];export{r as TickPositioning,ht as __namedExportsOrder,vt as default};
