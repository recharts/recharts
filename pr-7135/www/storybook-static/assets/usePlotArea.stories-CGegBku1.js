import{e as t}from"./iframe-CRc-flGw.js";import{P as a}from"./PlotAreaShower-5DxwHxbi.js";import{c as p}from"./hooks-DZKzKpMo.js";import{R as s}from"./arrayEqualityCheck-DKsNPC5t.js";import{C as n}from"./ComposedChart-BEPIvTsZ.js";import{L as l}from"./Line-BHpCRDpE.js";import{X as d}from"./XAxis-DefhfpDJ.js";import{Y as h}from"./YAxis-DJLAjyOO.js";import{L as c}from"./Legend-BXdiR10X.js";import{p as g}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-BlHKMCB6.js";import"./immer-ByZzKzss.js";import"./axisSelectors-DdTNbtlm.js";import"./d3-scale-BQdhaFkz.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Bl3-Fo8N.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BeKC2RVo.js";import"./index-1w6ajcFg.js";import"./zIndexSlice-D5r4A9oU.js";import"./renderedTicksSlice-Drgf2BHB.js";import"./CartesianChart-XjjZ8yiv.js";import"./chartDataContext-BxD4B1Fo.js";import"./CategoricalChart-GI1F9wsO.js";import"./Layer-BnBdmezi.js";import"./ReactUtils-CwEELAWD.js";import"./Label-DhveLrm9.js";import"./Text-BTTbtJ1y.js";import"./DOMUtils-XAHmwwbv.js";import"./ZIndexLayer-D6jxT2Od.js";import"./ActivePoints-z3-8W7vW.js";import"./Dot-C3bYGGHM.js";import"./types-yycQMcyL.js";import"./RegisterGraphicalItemId-DszhlzY0.js";import"./ErrorBarContext-CORkh6aB.js";import"./GraphicalItemClipPath-DuL0hAIv.js";import"./SetGraphicalItem-DLMb23PD.js";import"./useAnimationId-CV3KoLuu.js";import"./getRadiusAndStrokeWidthFromDot-BClUWKos.js";import"./ActiveShapeUtils-CBXTVkGy.js";import"./isPlainObject-CwCpOTqO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DQ2TmgdK.js";import"./Trapezoid-CMdi1mNK.js";import"./Sector-CyV3S5d1.js";import"./Symbols-cTxoNgJ3.js";import"./symbol-uSNG4J3i.js";import"./step-n2b1zRpO.js";import"./Curve-Bq0CaY0M.js";import"./CartesianAxis-CmjuMVBO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BYI9oXVf.js";import"./uniqBy-BwmkhaPp.js";import"./iteratee-LEn6qRui.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:g,margin:r.margin,style:r.style},t.createElement(l,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <PlotAreaShower />
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
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["UsePlotArea"];export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
