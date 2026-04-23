import{e as t}from"./iframe-BF30cewz.js";import{S as i}from"./ChartSizeDimensions-DqRU3Tup.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-54E-EMHV.js";import{C as c}from"./ComposedChart-vR6M8Csb.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-CM2lbnkw.js";import{X as f}from"./XAxis-R3SRHTpu.js";import{Y as M}from"./YAxis-COwWoIRq.js";import{L as b}from"./Legend-0ZDtjN6p.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CfzAmxrO.js";import"./immer-1Y6b4ABg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ds6-czPk.js";import"./index-C4aFfAFk.js";import"./hooks-DBaONgSL.js";import"./axisSelectors-BbIpa25b.js";import"./d3-scale-BQcoNVts.js";import"./zIndexSlice-Dzpaa8RG.js";import"./renderedTicksSlice-DaQzOTaA.js";import"./CartesianChart-Cib6BDKJ.js";import"./chartDataContext-C-ltUYxq.js";import"./CategoricalChart-Ax6WUToq.js";import"./Layer-1B0B10df.js";import"./ReactUtils-COSqs2Fw.js";import"./Label-CqAF8SIT.js";import"./Text-Bj9a0rsl.js";import"./DOMUtils-CfR-oYDo.js";import"./ZIndexLayer-Cm42983z.js";import"./ActivePoints-7Ywr0SSF.js";import"./Dot-B_sEvCV-.js";import"./types-BtUrEkv_.js";import"./RegisterGraphicalItemId-DWRskJJq.js";import"./ErrorBarContext-ZqPrhrZR.js";import"./GraphicalItemClipPath-DbWDMhh-.js";import"./SetGraphicalItem-qm0_Djp4.js";import"./useAnimationId-CdSd8RaE.js";import"./getRadiusAndStrokeWidthFromDot-6mt_XejO.js";import"./ActiveShapeUtils-DE4EzjJ7.js";import"./isPlainObject-CJnQjQWE.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Tp-Mj0iL.js";import"./Trapezoid-BEm6NDNW.js";import"./Sector-D-Bqj8eF.js";import"./Symbols-DMcSZqwV.js";import"./symbol-b3bNJW4O.js";import"./step-CE2o8WHd.js";import"./Curve-C-HPs5Cn.js";import"./CartesianAxis-CRTXwVx1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CVcid2mJ.js";import"./uniqBy-nwrf9lUU.js";import"./iteratee-BPgmGahy.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'useMargin',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <MarginShower />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    }
  }
}`,...(p=(n=a.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Ct=["UseMargin"];export{a as UseMargin,Ct as __namedExportsOrder,wt as default};
