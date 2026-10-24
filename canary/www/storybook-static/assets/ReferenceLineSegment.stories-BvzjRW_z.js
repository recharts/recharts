import{R as e}from"./iframe-02jumC35.js";import{R as i}from"./zIndexSlice-Dh2CbWTc.js";import{C as n}from"./ComposedChart-R_fgljAr.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-D2T66nDB.js";import{X as s}from"./XAxis-CnRK3wsv.js";import{Y as c}from"./YAxis-mNI4SsbU.js";import{L as d}from"./Line-qAcnYglM.js";import{R as g}from"./ReferenceLine-D5nfcEKV.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C3YzeAkV.js";import"./index-CYmUsGYv.js";import"./index-rCxfu9Lu.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BsN5ISV3.js";import"./isWellBehavedNumber-Bh9Ud_H9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ClpzkpkH.js";import"./axisSelectors-M7ebD7ER.js";import"./d3-scale-cjemRmDN.js";import"./index-DIJUc9fc.js";import"./index-CDDoEg3V.js";import"./renderedTicksSlice-DSmyYzjS.js";import"./index-3m7_l-7v.js";import"./CartesianChart-Cmtw3EH1.js";import"./chartDataContext-DXKdIbz5.js";import"./CategoricalChart-2aphxpDk.js";import"./CartesianAxis-BreAXyHF.js";import"./Layer-BluUqzQG.js";import"./Text-CUWOvwAb.js";import"./pageBackground-hJZbYU9A.js";import"./useId-QUVye4Jg.js";import"./useBackwardsCompatibleTheme-WAtXE9gt.js";import"./Label-DdA7iutk.js";import"./ZIndexLayer-Usgx4vbu.js";import"./dataEntryStyles-B_KbhbaV.js";import"./types-BU7rhtDT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-sD1K-_o7.js";import"./step-DZxAeMnC.js";import"./path-DyVhHtw_.js";import"./activeStyles-BV4ZXPNg.js";import"./useAnimationId-BlDuhaIC.js";import"./ActivePoints-p_qQIX4t.js";import"./Dot-DmS4t6aH.js";import"./RegisterGraphicalItemId-C0Bo0Cv1.js";import"./ErrorBarContext-DP5SPbAE.js";import"./SetGraphicalItem-CYjreQQF.js";import"./getRadiusAndStrokeWidthFromDot-C-prUT-T.js";import"./ActiveShapeUtils-CJWo4eBA.js";import"./useEffectiveDataKey-C4Vtw6Mo.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,fe as __namedExportsOrder,ge as default};
