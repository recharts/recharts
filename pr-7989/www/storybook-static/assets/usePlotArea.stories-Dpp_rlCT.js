import{R as t}from"./iframe-B0yo2V4n.js";import{e as a}from"./RechartsWrapper-CQikX2jp.js";import{R as p}from"./zIndexSlice-B7uClMUs.js";import{C as n}from"./ComposedChart-B_AnK-ab.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DfLePWXM.js";import{X as l}from"./XAxis-DsnV8ZqK.js";import{Y as h}from"./YAxis-DL4kDslF.js";import{L as c}from"./Legend-D9RahiYS.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C_-4-Tqn.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CMjYVwhk.js";import"./throttle-CrsZu1Ef.js";import"./index-CksSbcNy.js";import"./index-CCtvozBT.js";import"./isWellBehavedNumber-CZXpTiYT.js";import"./d3-scale-B4crR7Dq.js";import"./index-T1a_0V0g.js";import"./index-DKVx0AFW.js";import"./renderedTicksSlice-Boaz1NGF.js";import"./index-2BBeHhTL.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DjmfdwhX.js";import"./chartDataContext-B2JeciGL.js";import"./CategoricalChart-BCaNllRk.js";import"./Layer-BkWM3RIH.js";import"./Curve-DRU8kykY.js";import"./types-L-bd4Nc-.js";import"./step-BoSTRipl.js";import"./path-DyVhHtw_.js";import"./activeStyles-_C6RQVwk.js";import"./Label-CnUHNStt.js";import"./Text-CHF9ypYR.js";import"./pageBackground-0wikHvI2.js";import"./useId-BnV_tbx_.js";import"./useBackwardsCompatibleTheme-DI9J0y19.js";import"./ZIndexLayer-DLG58JCm.js";import"./useAnimationId-DO-aK-tu.js";import"./dataEntryStyles-CjubJGLE.js";import"./ActivePoints-ohc9ZXCs.js";import"./Dot-OL_y42KN.js";import"./ErrorBarContext-DwnKv10Z.js";import"./GraphicalItemClipPath-CMzZysYx.js";import"./SetGraphicalItem-Z-H48Tbu.js";import"./getRadiusAndStrokeWidthFromDot-BzPG4IYK.js";import"./ActiveShapeUtils-C0F7emTJ.js";import"./useEffectiveDataKey-Bupc-s0s.js";import"./CartesianAxis-DRTEDz7X.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Dr0Ov5Ha.js";import"./symbol-CHXAHdDN.js";import"./useElementOffset-LYUTAlL5.js";import"./uniqBy-B2CtqIKi.js";import"./iteratee-DxT84tDG.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
