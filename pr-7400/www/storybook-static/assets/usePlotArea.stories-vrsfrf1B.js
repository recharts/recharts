import{c as t}from"./iframe-Dy-e7pIM.js";import{e as a}from"./CategoricalChart-Csue9Qd9.js";import{g as p}from"./zIndexSlice-BAzwug6r.js";import{C as s}from"./ComposedChart-CBoFwAQh.js";import{p as n}from"./Page-DPte-9pC.js";import{L as d}from"./Line-C_3X6bsH.js";import{X as l}from"./XAxis-CumYrXMb.js";import{Y as c}from"./YAxis-BX0V94CN.js";import{L as h}from"./Legend-CbtrycXF.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D0mQ-9Gw.js";import"./index-SXoyUqv9.js";import"./index-rCxGgy9o.js";import"./index-DUyY-sZ6.js";import"./index-B7Kt7cV8.js";import"./immer-kVBDWM7h.js";import"./get-D_U-7Kmb.js";import"./renderedTicksSlice-D80uYtAJ.js";import"./axisSelectors-DHlr3EdZ.js";import"./d3-scale-MtjUkFvo.js";import"./resolveDefaultProps-BOUnRnbS.js";import"./isWellBehavedNumber-Bj92k7jm.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cf77c1Wa.js";import"./chartDataContext-HpYadsZ6.js";import"./Curve-rRxZ5v9J.js";import"./types-B745wbwD.js";import"./step-r56XM2D6.js";import"./path-DyVhHtw_.js";import"./Layer-BQggJIEv.js";import"./ReactUtils-DdYRakW1.js";import"./Label-Bd4SV5Lr.js";import"./Text-DrCcB5Q6.js";import"./DOMUtils-CWH-10kL.js";import"./ZIndexLayer-DgxZOhGb.js";import"./ActivePoints-Bnfm65-K.js";import"./Dot-DJgC10rz.js";import"./RegisterGraphicalItemId-CWayAjG_.js";import"./ErrorBarContext-N7PuOz_i.js";import"./GraphicalItemClipPath-Birlsn4M.js";import"./SetGraphicalItem-rhS26CgA.js";import"./useAnimationId-D1tL6Rir.js";import"./getRadiusAndStrokeWidthFromDot-CBX6IKOe.js";import"./ActiveShapeUtils-FFunzflv.js";import"./CartesianAxis-kW3aoD-D.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-D4yMEFQO.js";import"./symbol-DCQhxAU3.js";import"./useElementOffset-DUL3oAoP.js";import"./uniqBy-Cl9Zf0qP.js";import"./iteratee-BiQdkXya.js";const lt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(c,null),t.createElement(h,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ct=["UsePlotArea"];export{e as UsePlotArea,ct as __namedExportsOrder,lt as default};
