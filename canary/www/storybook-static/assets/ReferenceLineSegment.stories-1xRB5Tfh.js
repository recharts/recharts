import{R as e}from"./iframe-BhiOFyfH.js";import{R as i}from"./zIndexSlice-WFdO_Wlf.js";import{C as a}from"./ComposedChart-BRF7api-.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-Bf0Cm6mK.js";import{X as s}from"./XAxis-D91QOOUm.js";import{Y as c}from"./YAxis-Dze_1sMv.js";import{L as d}from"./Line-UXLRfrJQ.js";import{R as g}from"./ReferenceLine-D6gGn0B7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BBaDx3dP.js";import"./index-BRJFlVc0.js";import"./index-DeYpMxlR.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BHk6Yj6z.js";import"./isWellBehavedNumber-BwlogVL6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B2d-0bYl.js";import"./index-BT9oMJbA.js";import"./index-DJy0Duu-.js";import"./axisSelectors-Bl2dPHcW.js";import"./d3-scale-C-h-rPXJ.js";import"./renderedTicksSlice-zx9Xm1Pt.js";import"./CartesianChart-B6R4HcNL.js";import"./chartDataContext-BhguihgP.js";import"./CategoricalChart-DcSIPsvk.js";import"./CartesianAxis-CQrYYA1t.js";import"./Layer-Ba5yNHO4.js";import"./Text-BMsFzFUq.js";import"./DOMUtils-BcE_Ruj2.js";import"./useId-BRnf_4WU.js";import"./useBackwardsCompatibleTheme-DVBvH0yy.js";import"./Label-CAt1bZso.js";import"./ZIndexLayer-CI2RHWLO.js";import"./types-BWOiEP2_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CpWAvzLi.js";import"./step-DMp5D_NX.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dz4w2Slg.js";import"./useAnimationId-DyRYr1Ls.js";import"./ActivePoints-CGIfG4Xx.js";import"./Dot-CQ3jSuei.js";import"./RegisterGraphicalItemId-fX9aZfoT.js";import"./ErrorBarContext-8r615JCx.js";import"./GraphicalItemClipPath-CDXt4g8R.js";import"./SetGraphicalItem-DxySj5XD.js";import"./getRadiusAndStrokeWidthFromDot-_1HcDU-Q.js";import"./ActiveShapeUtils-DWii8vVl.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ge=["Segment"];export{t as Segment,ge as __namedExportsOrder,de as default};
