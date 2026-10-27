import{R as t}from"./iframe-tjocxRUU.js";import{z as a}from"./RechartsWrapper-CFmoW3Jf.js";import{R as p}from"./zIndexSlice-Dxy8HPki.js";import{C as n}from"./ComposedChart-D8w-MoC_.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-D_gGwljF.js";import{X as l}from"./XAxis-Ds3HH0B9.js";import{Y as h}from"./YAxis-CC3Fea7J.js";import{L as c}from"./Legend-A6gk-x0n.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BcfnasjV.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Bh1ZEFRN.js";import"./throttle-BtJBXhY8.js";import"./index-CjBb-5aG.js";import"./index-cbjgkIoT.js";import"./polarAxisSelectors-D1WllP0e.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DxsTJ-Fh.js";import"./index-Ccuv5XKu.js";import"./index-Ct8BdbUc.js";import"./renderedTicksSlice-Dd6HrSiu.js";import"./index-E7H9Mo8F.js";import"./CartesianChart-BvDUjaEm.js";import"./ZIndexPortal-HUDzz5Yk.js";import"./CategoricalChart-BwEKGQoK.js";import"./Layer-YyRceVq5.js";import"./Curve-D8fqT8cR.js";import"./types-C53JcC0M.js";import"./step-BxgewTFX.js";import"./path-DyVhHtw_.js";import"./LabelList-C2EwX980.js";import"./Label-CDvz32IL.js";import"./Text-DmRL3-09.js";import"./pageBackground-C5tWOGC0.js";import"./ZIndexLayer-1nCesNvZ.js";import"./dataEntryStyles-D26LCbZx.js";import"./ActivePoints-CR8eCzMX.js";import"./Dot-C1-AWakF.js";import"./activeStyles-BO5quCC2.js";import"./useAnimationId-g7Nwbj-R.js";import"./Symbols-eM89l6Zr.js";import"./symbol-aequuKRH.js";import"./RegisterGraphicalItemId-B4AeGnTP.js";import"./ErrorBarContext-ClXwNuC-.js";import"./SetGraphicalItem-CJ8TRMDr.js";import"./getRadiusAndStrokeWidthFromDot-wnLtIjnO.js";import"./ActiveShapeUtils-BbQcFRH2.js";import"./useEffectiveDataKey-BAWm_Xnd.js";import"./CartesianAxis-DzErZjsk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Cwd9kaUJ.js";import"./uniqBy-CCosKpyN.js";import"./iteratee-BVYnyUcL.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
