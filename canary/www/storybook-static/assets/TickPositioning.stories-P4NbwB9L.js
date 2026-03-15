import{e as t}from"./iframe-DU-LucVk.js";import{R as n}from"./arrayEqualityCheck-CclNUIwX.js";import{L as s}from"./LineChart-C3nrvX4j.js";import{L as c}from"./Line-D0rR1HZ1.js";import{X as d}from"./XAxis-NPkkQ63f.js";import{R as l}from"./RechartsHookInspector-BEY9qfJh.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B2aHdDhI.js";import"./immer-CeDnDLs7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BQ8ifATJ.js";import"./index-BvEdvQ3w.js";import"./hooks-5DppKLy_.js";import"./axisSelectors-1v6f9L3u.js";import"./d3-scale-s-kDCmvc.js";import"./zIndexSlice-BokCIqI7.js";import"./renderedTicksSlice-CYsmXTCd.js";import"./CartesianChart-Cbq4Hmtt.js";import"./chartDataContext-CG1EXfO5.js";import"./CategoricalChart-I9vscfUJ.js";import"./Layer-8a5GeXWN.js";import"./ReactUtils-Ctv0Vese.js";import"./Label-OGUbf68M.js";import"./Text-CzwymKY5.js";import"./DOMUtils-CWJBrBTl.js";import"./ZIndexLayer-BaiBFLw5.js";import"./ActivePoints-CvZtNNWP.js";import"./Dot-D3cffN2_.js";import"./types-Dgs-vk0Z.js";import"./RegisterGraphicalItemId-CicihkEh.js";import"./ErrorBarContext-D0ejYvv2.js";import"./GraphicalItemClipPath-CL71Q66l.js";import"./SetGraphicalItem-DZHXtodu.js";import"./useAnimationId-CtR34_Zs.js";import"./getRadiusAndStrokeWidthFromDot-DiPRkIfe.js";import"./ActiveShapeUtils-CNQl8MpC.js";import"./isPlainObject-DmZ4Jk-5.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dh8uHokW.js";import"./Trapezoid-C0vmhZZj.js";import"./Sector-DdGN5B7D.js";import"./Symbols-BtQj-4ur.js";import"./symbol-m7w_ZRD-.js";import"./step-CgB13xZG.js";import"./Curve-rk5soVjK.js";import"./CartesianAxis-xpog4YLf.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-k3KoyLP9.js";import"./ChartSizeDimensions-ChW5udk0.js";import"./OffsetShower-BWhNcTks.js";import"./PlotAreaShower-9QTURT9p.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
