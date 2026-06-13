import{R as e}from"./iframe-ii_SdKaT.js";import{R as i}from"./zIndexSlice-CewrGiZi.js";import{C as a}from"./ComposedChart-BqK8fMbF.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-C2fOlV2I.js";import{X as s}from"./XAxis-n_W7ptOo.js";import{Y as c}from"./YAxis-B_AHmNwM.js";import{L as d}from"./Line-BCh4BadY.js";import{R as g}from"./ReferenceLine-BlKAi9MN.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BRK5VplU.js";import"./index-CipO9bHT.js";import"./index-C9rA4SBW.js";import"./get-IlujCcRJ.js";import"./resolveDefaultProps-DmtqLCBR.js";import"./isWellBehavedNumber-Bl4DTDWz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BJ7nVo9I.js";import"./index-CoHu65TP.js";import"./index-BWUxHoQX.js";import"./renderedTicksSlice-6QIQv7lN.js";import"./axisSelectors-BEJlbTgh.js";import"./d3-scale-DqldvK9e.js";import"./string-B6fdYHAA.js";import"./CartesianChart-hQrjvxNc.js";import"./chartDataContext-WEDyGrAX.js";import"./CategoricalChart-BC-K0qUt.js";import"./CartesianAxis-C12Pbczw.js";import"./Layer-1o6wJcjz.js";import"./Text-D6jUUcir.js";import"./DOMUtils-CspLYEuU.js";import"./Label-CWAFalVX.js";import"./ZIndexLayer-C_pljZlN.js";import"./types-CROtPh6T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-CvjftyU5.js";import"./step-CynPry_M.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Ddier9mI.js";import"./useAnimationId-DETjp9PR.js";import"./ActivePoints-DUYbyaX_.js";import"./Dot-D93Ls2Za.js";import"./RegisterGraphicalItemId-Bd8rL4_6.js";import"./ErrorBarContext-BbBngZhz.js";import"./GraphicalItemClipPath-BIR1mLdK.js";import"./SetGraphicalItem-Ke19tpjU.js";import"./getRadiusAndStrokeWidthFromDot-ouGtJSmE.js";import"./ActiveShapeUtils-_FaeFiVy.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
