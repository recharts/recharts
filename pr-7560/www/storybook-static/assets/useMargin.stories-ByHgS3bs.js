import{R as r}from"./iframe-CkvJyCps.js";import{z as a,R as p}from"./zIndexSlice-Ui89VFRT.js";import{C as s}from"./ComposedChart-B_G7W1UH.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as g}from"./Line-BWXEwsOW.js";import{X as d}from"./XAxis-Cs2owod8.js";import{Y as h}from"./YAxis-DiR5kzGo.js";import{L as c}from"./Legend-BSm1HiW3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DgDNnF1i.js";import"./index-BX-3EqNW.js";import"./index-BsiD65Ad.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DCKyJEY4.js";import"./isWellBehavedNumber-DqH8GE3H.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CjY8J2vT.js";import"./index-Cjf8FZO7.js";import"./index-D8Jo1LfZ.js";import"./renderedTicksSlice-BMi6DZwf.js";import"./axisSelectors-CC2H0zuo.js";import"./d3-scale-Crqr5kEu.js";import"./CartesianChart-DFWFnz0T.js";import"./chartDataContext-BT6jQe_1.js";import"./CategoricalChart-E0pKYNLO.js";import"./Layer-C4byj5K8.js";import"./Curve-OKr52WO3.js";import"./types-CzkLD6k1.js";import"./step-KO3U5RtM.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CNADXJdo.js";import"./Label-BMESeQSE.js";import"./Text-R9sJDfcz.js";import"./DOMUtils-CxWIP_C8.js";import"./ZIndexLayer-t0g3b6Ty.js";import"./useAnimationId-jBCdM9CL.js";import"./ActivePoints-D5IySJuv.js";import"./Dot-CltbR6Uk.js";import"./RegisterGraphicalItemId-p5LXpBOx.js";import"./ErrorBarContext-CbXX-ZBj.js";import"./GraphicalItemClipPath-Ci1KSEKS.js";import"./SetGraphicalItem-BSfhP0b_.js";import"./getRadiusAndStrokeWidthFromDot-BhqCzyG1.js";import"./ActiveShapeUtils-DlrbS-G4.js";import"./CartesianAxis-mgc-X0Bi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BWAxmpkp.js";import"./symbol-C7v9Wwia.js";import"./useElementOffset-cxxtLqzc.js";import"./uniqBy-BHjvX3lg.js";import"./iteratee-DA1LVjZi.js";const dr={title:"API/hooks/useMargin",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},t={name:"useMargin",render:e=>r.createElement(p,{width:e.width,height:e.height},r.createElement(s,{data:n,margin:e.margin},r.createElement(g,{dataKey:"pv"}),r.createElement(d,{dataKey:"name"}),r.createElement(h,null),r.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var o,i,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'useMargin',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
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
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const hr=["UseMargin"];export{t as UseMargin,hr as __namedExportsOrder,dr as default};
