import{R as e}from"./iframe-CaZrduHG.js";import{R as i}from"./zIndexSlice-CvUTBx_8.js";import{C as a}from"./ComposedChart-Bo1OFqhY.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-C0il1H2Z.js";import{X as s}from"./XAxis-CHaMVHb_.js";import{Y as c}from"./YAxis-DyfSUlDI.js";import{L as d}from"./Line-BZzowOBE.js";import{R as g}from"./ReferenceLine-CBOk8HZf.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-x_arNXZJ.js";import"./index-CYnc97bp.js";import"./index-CdgMfIsn.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-hTjQl1Jw.js";import"./isWellBehavedNumber-Ds6x18SL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-6f4LgHbs.js";import"./index-dOcL02AF.js";import"./index-BkusJAc5.js";import"./renderedTicksSlice-CarnP_oQ.js";import"./axisSelectors-CbEPJ0ND.js";import"./d3-scale-EIFV6mVT.js";import"./CartesianChart-DiGyCZXM.js";import"./chartDataContext-BSaewpt8.js";import"./CategoricalChart-d16gVM5b.js";import"./CartesianAxis-DB1Mym72.js";import"./Layer-DIgzKEwe.js";import"./Text-Rs_1_idd.js";import"./DOMUtils-CmlaPQx2.js";import"./Label-BWJz-33r.js";import"./ZIndexLayer-dEGCaPIX.js";import"./types-CJ_sW9YU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-jKjHUG6Y.js";import"./step-C-Vvb7fY.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DghnEQ9g.js";import"./useAnimationId-Ddowgb5f.js";import"./ActivePoints-dA3071Q3.js";import"./Dot-CvRN0Hh7.js";import"./RegisterGraphicalItemId-pMJ6sSz4.js";import"./ErrorBarContext-B9ivevc9.js";import"./GraphicalItemClipPath-CRbchFTR.js";import"./SetGraphicalItem-0qDOjHM6.js";import"./getRadiusAndStrokeWidthFromDot-BNORI3ED.js";import"./ActiveShapeUtils-O1yKcLVj.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ne=["Segment"];export{t as Segment,ne as __namedExportsOrder,pe as default};
