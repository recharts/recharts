import{R as t}from"./iframe-rIGtWy7o.js";import{z as a}from"./RechartsWrapper-CnGTSvJE.js";import{R as p}from"./zIndexSlice-eSFvIDPB.js";import{C as n}from"./ComposedChart-R6AzKio4.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BfyEqFnX.js";import{X as l}from"./XAxis-DpQ4g3Lr.js";import{Y as h}from"./YAxis-CD9Zrxmn.js";import{L as c}from"./Legend-Dz8VLuuY.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CESzkdGA.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DWDjUcOc.js";import"./throttle-BAKkGKnI.js";import"./index-DfdBIdkk.js";import"./index-BYEDHt0V.js";import"./polarAxisSelectors-bEQ_xhZ6.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BuxsQdRE.js";import"./index-B3oaotmj.js";import"./index-9mMSGnJG.js";import"./renderedTicksSlice-D_5kFm74.js";import"./index-HOvW1MHI.js";import"./fillDefinitions-OByCib8k.js";import"./CartesianChart-CAAztSss.js";import"./chartDataContext-DkD_onqA.js";import"./CategoricalChart-CiwW1p8S.js";import"./getRadiusAndStrokeWidthFromDot-DW8ZW_Lt.js";import"./Layer-BDOLwd71.js";import"./Curve-DqTam_xv.js";import"./types-BNwRi5Vr.js";import"./step-CBJGjOOI.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BBWs-HQj.js";import"./Label-BEKXXJOd.js";import"./Text-CUOAySYE.js";import"./ZIndexLayer-BQOJSgP1.js";import"./ActivePoints-B88CEUU0.js";import"./Dot-hlrtitgM.js";import"./activeStyles-CzQ969KV.js";import"./useAnimationId-BWpujR0E.js";import"./Symbols-CZml1OUW.js";import"./symbol-D8O-t0Dg.js";import"./ErrorBarContext-B8qTxBlT.js";import"./SetGraphicalItem-iESSYU5M.js";import"./ActiveShapeUtils-CybnivgX.js";import"./useEffectiveDataKey-DGGEUFr6.js";import"./CartesianAxis-DicS6pKh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DvWu6ax_.js";import"./uniqBy-C8XTS8UB.js";import"./iteratee-ByPZHGAt.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
