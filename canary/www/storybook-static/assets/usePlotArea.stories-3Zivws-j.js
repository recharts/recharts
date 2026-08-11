import{R as t}from"./iframe-IXBD7Hhe.js";import{u as a}from"./CategoricalChart-CsZZ-_Ww.js";import{R as p}from"./zIndexSlice-Bx8LfIjs.js";import{C as s}from"./ComposedChart-5suY9yzX.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CBDt_Hjf.js";import{X as l}from"./XAxis-XUByFPwA.js";import{Y as h}from"./YAxis-BVu4beHD.js";import{L as c}from"./Legend-BZbqyyhK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C6CdKiKJ.js";import"./index-DHkJVPjU.js";import"./index-P0vZTmxc.js";import"./index-BH3ea_oR.js";import"./index-CLS2dsqf.js";import"./throttle-Cb9pxaut.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Cllx2Xbl.js";import"./resolveDefaultProps-LMM2s1w5.js";import"./isWellBehavedNumber-DuIg09Ee.js";import"./d3-scale-DP7A7DdQ.js";import"./renderedTicksSlice-DFEnKLGW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-GzQbM-WD.js";import"./chartDataContext-TL9Jhgyo.js";import"./Layer-CznxcDV0.js";import"./Curve-BH0BT-1U.js";import"./types-ootxRHuI.js";import"./step-CYiGRfb_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C0wExScK.js";import"./Label-COpsAeG1.js";import"./Text-CKl7HfzI.js";import"./DOMUtils-CIca5pvR.js";import"./ZIndexLayer-BDgiHtX6.js";import"./useAnimationId-DKTTaUff.js";import"./ActivePoints-CHxp0sMa.js";import"./Dot-CqTh5SAj.js";import"./RegisterGraphicalItemId-c9Yy-XmY.js";import"./ErrorBarContext-Bg5OE5lB.js";import"./GraphicalItemClipPath-DnF330yG.js";import"./SetGraphicalItem-D7LoeNCT.js";import"./getRadiusAndStrokeWidthFromDot-CdGZqJil.js";import"./ActiveShapeUtils-DQ7ehDLd.js";import"./RechartsThemeContext-Dmq8UOW5.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-vF0DZ8PI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BtcJIIdL.js";import"./symbol-DRjMj09s.js";import"./useElementOffset-ChbU1jy5.js";import"./uniqBy-55gB6jpL.js";import"./iteratee-MNxXH5z8.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ut=["UsePlotArea"];export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
