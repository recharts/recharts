import{R as e}from"./iframe-L3U4PXsg.js";import{R as i}from"./zIndexSlice-DEY0PQhJ.js";import{C as a}from"./ComposedChart-Dkixnof2.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BM8MKiJH.js";import{X as s}from"./XAxis-Cr6XecvK.js";import{Y as c}from"./YAxis-f7uBkTcv.js";import{L as d}from"./Line-C9P8vBQm.js";import{R as g}from"./ReferenceLine-CaIi3rKm.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-1AGwrNmW.js";import"./index-Bc6oV31c.js";import"./index-DwDM_7Ax.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DZ-vNTge.js";import"./isWellBehavedNumber-BwlzE5Kb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dhr4IQZK.js";import"./index-kTWfYntd.js";import"./index-ywjMrX_X.js";import"./axisSelectors-BUQrPPfP.js";import"./d3-scale-BML9T1At.js";import"./renderedTicksSlice-D2JO8twM.js";import"./CartesianChart-INIUEhvM.js";import"./chartDataContext-EPhxp5b3.js";import"./CategoricalChart-mkEHtD3F.js";import"./CartesianAxis-DJ55n4uj.js";import"./Layer-CK7JaaLc.js";import"./Text-DovToi-v.js";import"./DOMUtils-BtvfpILU.js";import"./Label-B7Q2YiAq.js";import"./ZIndexLayer-Bn3RUVWt.js";import"./types-oKR4keO9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CsEJ0H_M.js";import"./isBuffer-BG75eWKN.js";import"./Curve-SKtCcge4.js";import"./step-0OJURZ58.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Cx-Jnru-.js";import"./useAnimationId-BO1w5K0N.js";import"./ActivePoints-DANj5o8Y.js";import"./Dot-B_tF6fjU.js";import"./RegisterGraphicalItemId-CUZSiPzN.js";import"./ErrorBarContext-BscpV9GC.js";import"./GraphicalItemClipPath-BgQIEIQL.js";import"./SetGraphicalItem-BkVYHSQy.js";import"./getRadiusAndStrokeWidthFromDot-HzlbV5QW.js";import"./ActiveShapeUtils-DLAF0QLB.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ce={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const de=["Segment"];export{t as Segment,de as __namedExportsOrder,ce as default};
