import{e as t}from"./iframe-BMyqBDY5.js";import{R as s}from"./arrayEqualityCheck-DuyxfREv.js";import{L as m}from"./LineChart-ACib_My9.js";import{L as c}from"./Line-I26hMkxG.js";import{X as d}from"./XAxis-DrX_bmOT.js";import{R as l}from"./RechartsHookInspector-B_A0Uap_.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BGKl1tyb.js";import"./PolarUtils-P_ZfIDsv.js";import"./RechartsWrapper-hMDICSaE.js";import"./hooks-CtyWZT2U.js";import"./axisSelectors-RxIOnnLe.js";import"./zIndexSlice-Dmm35KLy.js";import"./CartesianChart-Bf-CfsMF.js";import"./chartDataContext-DO_q_27U.js";import"./CategoricalChart-Bg_NZvOR.js";import"./Layer-DWAVkTpZ.js";import"./ReactUtils-DZSdNGLK.js";import"./Label-Cc8j6S_C.js";import"./Text-C5dsmcfL.js";import"./DOMUtils-BxDLRwCB.js";import"./ZIndexLayer-BHQIN7jK.js";import"./ActivePoints-lrJOuCF1.js";import"./Dot-DwmjpDDG.js";import"./types-C28cLjqk.js";import"./RegisterGraphicalItemId-BGAui-Ym.js";import"./ErrorBarContext-MN1I2Bli.js";import"./GraphicalItemClipPath-CBIipGUv.js";import"./SetGraphicalItem-DXrsAiCv.js";import"./useAnimationId-MgACKJ1I.js";import"./getRadiusAndStrokeWidthFromDot-CRLHMYWi.js";import"./ActiveShapeUtils-HKM8HgOk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-MMr5z6jI.js";import"./Trapezoid-DUIbc0mY.js";import"./Sector-Dnl75ukO.js";import"./Symbols-DAD_VKXg.js";import"./Curve-CP_WuQoJ.js";import"./CartesianAxis-zlmGf0lm.js";import"./index-DIS5R2kz.js";import"./ChartSizeDimensions-BB84pelj.js";import"./OffsetShower-CeLLqloX.js";import"./PlotAreaShower-zjCOtUVv.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
