import{R as t}from"./iframe-D2OYENKH.js";import{u as a}from"./CategoricalChart-UC5rHyt5.js";import{R as p}from"./zIndexSlice-D0ZhXs4m.js";import{C as s}from"./ComposedChart-BUAOSrLk.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CtVgLkBu.js";import{X as l}from"./XAxis-Pkmtv0hr.js";import{Y as h}from"./YAxis-BOZmPEET.js";import{L as c}from"./Legend-B_Rub_BT.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BWgpx-pN.js";import"./index-JR3rJPe5.js";import"./index-CVAOKIGV.js";import"./index-Dur45csw.js";import"./index-DuPaBThV.js";import"./throttle-Bn9pRQ9R.js";import"./get-C2VjdU0L.js";import"./renderedTicksSlice-CAJ7-KA1.js";import"./axisSelectors-D5cpRxU3.js";import"./resolveDefaultProps-dYsmKBqC.js";import"./isWellBehavedNumber-CA6K8V7o.js";import"./d3-scale-BX-yZ5Fv.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D90Zb4X0.js";import"./chartDataContext-BdJZhmRg.js";import"./Layer-D9vccuwA.js";import"./Curve-2nThZew5.js";import"./types-CP4OIotA.js";import"./step-DWDRJwlo.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DmNuH65D.js";import"./Label-BhTPc9li.js";import"./Text-Dw3wOnD-.js";import"./DOMUtils-DDs_Dfl9.js";import"./ZIndexLayer-Cf4JaxIV.js";import"./useAnimationId-INjmlW7n.js";import"./ActivePoints-BjhdQ6pz.js";import"./Dot-DT2GXuQy.js";import"./RegisterGraphicalItemId-B9FhgBpj.js";import"./ErrorBarContext-DK9yojOq.js";import"./GraphicalItemClipPath-BwblPJrN.js";import"./SetGraphicalItem-CS5ycuRe.js";import"./getRadiusAndStrokeWidthFromDot-awhZfjnX.js";import"./ActiveShapeUtils-CzcMe4-S.js";import"./RechartsThemeContext-B2FvzarN.js";import"./CartesianAxis-BVkShzhs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-zZY-dgPF.js";import"./symbol-B4rpbFe-.js";import"./useElementOffset-CLBcQN83.js";import"./uniqBy-P6iSPcSj.js";import"./iteratee-1U3upCJW.js";const ct={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["UsePlotArea"];export{e as UsePlotArea,gt as __namedExportsOrder,ct as default};
