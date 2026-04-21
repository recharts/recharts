import{e as t}from"./iframe-Bcfp4gz2.js";import{R as n}from"./arrayEqualityCheck-C7nhyHTD.js";import{L as s}from"./LineChart-CS7y_4br.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-uj957uT5.js";import{X as l}from"./XAxis-vG8PL4e8.js";import{R as v}from"./RechartsHookInspector-BszpLvid.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BFYcbhKc.js";import"./immer-BOB4YBM5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-oIgYQ0Bc.js";import"./index-DWGu8Hbo.js";import"./hooks-BDG_pI4i.js";import"./axisSelectors-m2hcYKPS.js";import"./d3-scale-asomCCUw.js";import"./zIndexSlice-B4mf_ahs.js";import"./renderedTicksSlice-DoKS3HBz.js";import"./CartesianChart-DUoDAX5X.js";import"./chartDataContext-DRkSLvZO.js";import"./CategoricalChart-DMKrtdHX.js";import"./Layer-dm3uY3ni.js";import"./ReactUtils-CDQ4T4jj.js";import"./Label-CPi3yA0f.js";import"./Text-BwYljqkd.js";import"./DOMUtils-LPbE6vOu.js";import"./ZIndexLayer-CN_pcG12.js";import"./ActivePoints-BTuMGVKf.js";import"./Dot-CTGPVd-d.js";import"./types-CW3aex39.js";import"./RegisterGraphicalItemId-CieNk-m4.js";import"./ErrorBarContext-DI9yyOgU.js";import"./GraphicalItemClipPath-DfLgheiY.js";import"./SetGraphicalItem-Brvtr_jy.js";import"./useAnimationId-DPbHG1Kj.js";import"./getRadiusAndStrokeWidthFromDot-DetK7hqo.js";import"./ActiveShapeUtils-CMXUA0Jt.js";import"./isPlainObject-Bh7-lls7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cckl3Elf.js";import"./Trapezoid-BX_HaGLv.js";import"./Sector-B02xc5N3.js";import"./Symbols-CWxW6NbL.js";import"./symbol-Blzy8oY_.js";import"./step-B9DAnMjl.js";import"./Curve-t8yIlp7a.js";import"./CartesianAxis-BD2FdChl.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CTn1De8H.js";import"./ChartSizeDimensions-BtWRNYOc.js";import"./OffsetShower-BUjaH3s6.js";import"./PlotAreaShower-B0TzAHKQ.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
