import{R as t}from"./iframe-02jumC35.js";import{z as p}from"./RechartsWrapper-ClpzkpkH.js";import{R as a}from"./zIndexSlice-Dh2CbWTc.js";import{C as n}from"./ComposedChart-R_fgljAr.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-qAcnYglM.js";import{X as l}from"./XAxis-CnRK3wsv.js";import{Y as h}from"./YAxis-mNI4SsbU.js";import{L as c}from"./Legend-mpzgqkwF.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BsN5ISV3.js";import"./get-cF5BDHN6.js";import"./axisSelectors-M7ebD7ER.js";import"./throttle-C3YzeAkV.js";import"./index-CYmUsGYv.js";import"./index-rCxfu9Lu.js";import"./isWellBehavedNumber-Bh9Ud_H9.js";import"./d3-scale-cjemRmDN.js";import"./index-DIJUc9fc.js";import"./index-CDDoEg3V.js";import"./renderedTicksSlice-DSmyYzjS.js";import"./index-3m7_l-7v.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cmtw3EH1.js";import"./chartDataContext-DXKdIbz5.js";import"./CategoricalChart-2aphxpDk.js";import"./Layer-BluUqzQG.js";import"./Curve-sD1K-_o7.js";import"./types-BU7rhtDT.js";import"./step-DZxAeMnC.js";import"./path-DyVhHtw_.js";import"./activeStyles-BV4ZXPNg.js";import"./Label-DdA7iutk.js";import"./Text-CUWOvwAb.js";import"./pageBackground-hJZbYU9A.js";import"./useId-QUVye4Jg.js";import"./useBackwardsCompatibleTheme-WAtXE9gt.js";import"./ZIndexLayer-Usgx4vbu.js";import"./dataEntryStyles-B_KbhbaV.js";import"./useAnimationId-BlDuhaIC.js";import"./ActivePoints-p_qQIX4t.js";import"./Dot-DmS4t6aH.js";import"./RegisterGraphicalItemId-C0Bo0Cv1.js";import"./ErrorBarContext-DP5SPbAE.js";import"./SetGraphicalItem-CYjreQQF.js";import"./getRadiusAndStrokeWidthFromDot-C-prUT-T.js";import"./ActiveShapeUtils-CJWo4eBA.js";import"./useEffectiveDataKey-C4Vtw6Mo.js";import"./CartesianAxis-BreAXyHF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Dm7SeMDV.js";import"./symbol-7GPz0Uc5.js";import"./useElementOffset-CDDOtZbO.js";import"./uniqBy-BgoixCH6.js";import"./iteratee-8yTmLCe3.js";import"./isArguments-yB-y1yaH.js";const ft={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},o={name:"usePlotAreaExample",render:r=>t.createElement(a,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},yt=["UsePlotArea"];var e,i,m;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{o as UsePlotArea,yt as __namedExportsOrder,ft as default};
