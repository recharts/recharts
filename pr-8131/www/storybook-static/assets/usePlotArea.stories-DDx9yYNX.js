import{R as t}from"./iframe-CSurJGXt.js";import{z as a}from"./RechartsWrapper-C5uJkji8.js";import{R as p}from"./zIndexSlice-DeOoXCvu.js";import{C as n}from"./ComposedChart-Bt02-7JT.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-D3qfJJbK.js";import{X as l}from"./XAxis-DPspp0Rg.js";import{Y as h}from"./YAxis-COz_c9GE.js";import{L as c}from"./Legend-DEw1zt_H.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CLiXTxMl.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BTded_EU.js";import"./throttle-BimBWg8F.js";import"./index-BLu4PMPi.js";import"./index-DXQ1HyAX.js";import"./polarAxisSelectors-D8qEX0kp.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-wNVR4pxp.js";import"./index-DL-0zMUZ.js";import"./index-By1e8KSj.js";import"./renderedTicksSlice-BulAjXaG.js";import"./index-BUjegfsF.js";import"./fillDefinitions-Dy2IhL03.js";import"./CartesianChart-BYJBOySk.js";import"./ZIndexPortal-B_GPxKbG.js";import"./CategoricalChart-CMXRpEe-.js";import"./Layer-CuCaFJUW.js";import"./Curve-BWOdKf-d.js";import"./types-DAGGFXxQ.js";import"./step-CH-YMzWr.js";import"./path-DyVhHtw_.js";import"./LabelList-Dzy6Gaop.js";import"./Label-B_q4DRvh.js";import"./Text-D1wUWC9f.js";import"./DOMUtils-Ch0i58SB.js";import"./ZIndexLayer-7wO-Br8Q.js";import"./ActivePoints-C03BB4pX.js";import"./Dot-B5x_6AZj.js";import"./activeStyles-DIe-HGPn.js";import"./useAnimationId-BxuBL60s.js";import"./dataEntryStyles-DMbzXUIb.js";import"./Symbols-C4saACxL.js";import"./symbol-XqakD_BN.js";import"./ErrorBarContext-ORq27qm1.js";import"./SetGraphicalItem-S8ZD9BPZ.js";import"./getRadiusAndStrokeWidthFromDot-BU1Ag6Bu.js";import"./ActiveShapeUtils-lYTYoEV1.js";import"./useEffectiveDataKey-DXY519D2.js";import"./CartesianAxis-CCV5sIGf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-D_rvnf9W.js";import"./uniqBy-E8SwNtbJ.js";import"./iteratee-C1NgR1np.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
