import{R as t}from"./iframe-29nHamCu.js";import{j as a}from"./RechartsWrapper-BavJbx8L.js";import{R as p}from"./zIndexSlice-CZafadFX.js";import{C as n}from"./ComposedChart-DXLvIz9U.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-mWe9WFJd.js";import{X as l}from"./XAxis-cHqDX1J9.js";import{Y as h}from"./YAxis-bbUKYKRn.js";import{L as c}from"./Legend-Ct5qsBZq.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BjAFj7Tx.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DXKrHL3Y.js";import"./throttle-BMJYFYDy.js";import"./index-B7e8weS_.js";import"./index-C0L5A02v.js";import"./isWellBehavedNumber-DyxIwD8w.js";import"./d3-scale-hLJByxX9.js";import"./index-pQY_ysof.js";import"./index-wUuIvtYb.js";import"./renderedTicksSlice-Dofh94RU.js";import"./index-Dx-xeLKA.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-1Z_jkdOD.js";import"./chartDataContext-CCKAe3q7.js";import"./CategoricalChart-Vufmz-V6.js";import"./Layer-DIXDf-ah.js";import"./Curve-DsdcX6-6.js";import"./types-DxO-1x0s.js";import"./step-ChOhxi7M.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Cl8F531s.js";import"./Label-BEXPduDP.js";import"./Text-CjGTSUlm.js";import"./DOMUtils-77SlA1GE.js";import"./useId-D5dycxfw.js";import"./useBackwardsCompatibleTheme-DOdaTjfK.js";import"./ZIndexLayer-DAa-R99d.js";import"./useAnimationId-BJ08w86T.js";import"./ActivePoints-f_S-wuyy.js";import"./Dot-CkgSbF-F.js";import"./RegisterGraphicalItemId-C0MFc77r.js";import"./ErrorBarContext-D_EVW9Tx.js";import"./GraphicalItemClipPath-BHF9lgk1.js";import"./SetGraphicalItem-CPEqj7GM.js";import"./getRadiusAndStrokeWidthFromDot-BqfwXveZ.js";import"./ActiveShapeUtils-DXdVOUCI.js";import"./useGraphicalItemIdentity-BP_5vAW2.js";import"./CartesianAxis-BV_FsFXh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Cgyjephe.js";import"./symbol-6AoqX0uy.js";import"./useElementOffset-C_qkeve9.js";import"./uniqBy-0tUOZnmc.js";import"./iteratee-BFs8MK2-.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
