import{R as t}from"./iframe-D_P_Mvdh.js";import{u as a}from"./CategoricalChart-D93P9I6f.js";import{R as p}from"./zIndexSlice-DWG8bKuL.js";import{C as s}from"./ComposedChart-C2CR4N0a.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CWgXDn5v.js";import{X as l}from"./XAxis-qMeue6_L.js";import{Y as h}from"./YAxis-DVaDEIZb.js";import{L as c}from"./Legend-DohzNoFA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DF8D9EH3.js";import"./index-B9DAC9X3.js";import"./index-B6Dv4SpM.js";import"./index-CPg71y3f.js";import"./index-DK1y_UWu.js";import"./immer-zUUuTuVf.js";import"./get-B4It9gJG.js";import"./renderedTicksSlice-BNdYyHmj.js";import"./axisSelectors-CousMoEm.js";import"./d3-scale-Bmp1cDWa.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-D055Uems.js";import"./isWellBehavedNumber-CxbXcWx5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-iR1LAWUH.js";import"./chartDataContext-Dv19WRuB.js";import"./Layer-DPlEhKnR.js";import"./Curve-CAkixkLO.js";import"./types-BEWgGyLa.js";import"./step-DWwWZa2n.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-TOHLuZU5.js";import"./Label-XikFYvD7.js";import"./Text-C1WaZOPt.js";import"./DOMUtils-B5W7y1y7.js";import"./ZIndexLayer-B_lVTO01.js";import"./useAnimationId-B85ZSEKA.js";import"./ActivePoints-1kyrVvID.js";import"./Dot-BAS0IQWR.js";import"./RegisterGraphicalItemId-C0Rctadm.js";import"./ErrorBarContext-CuQjxX0z.js";import"./GraphicalItemClipPath-BH1bphsQ.js";import"./SetGraphicalItem-BXfByqWK.js";import"./getRadiusAndStrokeWidthFromDot-BQbb3rIK.js";import"./ActiveShapeUtils-h9V9VuFf.js";import"./CartesianAxis-CFHvtBrK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-EQJpu1dQ.js";import"./symbol-BLc3Uspj.js";import"./useElementOffset-saJFZnh4.js";import"./uniqBy-CXjOom_h.js";import"./iteratee-rU0UrMDe.js";const ht={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ct=["UsePlotArea"];export{e as UsePlotArea,ct as __namedExportsOrder,ht as default};
