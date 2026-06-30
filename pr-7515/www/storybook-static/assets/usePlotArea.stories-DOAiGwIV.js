import{R as t}from"./iframe-ClZ97IhH.js";import{u as a}from"./CategoricalChart-CU7_I9di.js";import{R as p}from"./zIndexSlice-C5PhT0E1.js";import{C as s}from"./ComposedChart-B1E1zelw.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-2hGhSOE2.js";import{X as l}from"./XAxis-CNZNRqSN.js";import{Y as h}from"./YAxis-HP_sdQVr.js";import{L as c}from"./Legend-NU_4K7aq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BLJ6xSnq.js";import"./index-CFJQbE9C.js";import"./index-6l3olgx1.js";import"./index-CrQHS0ha.js";import"./index-D9OO5l1d.js";import"./throttle-CenVclrT.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-Cu1gA7XW.js";import"./axisSelectors-YPPwLD-Y.js";import"./resolveDefaultProps-CcaTf9gV.js";import"./isWellBehavedNumber-BOULWsxq.js";import"./d3-scale-BrF_Bfnv.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CLbAeK38.js";import"./chartDataContext-DXptRcnW.js";import"./Layer-av8QWZYv.js";import"./Curve-DEZWs80m.js";import"./types-CfFSLUx9.js";import"./step-RKP5ji2w.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Ugycet-g.js";import"./Label-Bh1DkGaJ.js";import"./Text-CUeHZ0Lm.js";import"./DOMUtils-C7DdSVbv.js";import"./ZIndexLayer-DzfxsJEt.js";import"./useAnimationId-BXxNbWRb.js";import"./ActivePoints-JUHjUNnj.js";import"./Dot-C94-4eAI.js";import"./RegisterGraphicalItemId-XhYDb4e7.js";import"./ErrorBarContext-D5P-GrTa.js";import"./GraphicalItemClipPath-DgZI2AKv.js";import"./SetGraphicalItem-DzMBG2H0.js";import"./getRadiusAndStrokeWidthFromDot-CiF60Eet.js";import"./ActiveShapeUtils-SliXRAYD.js";import"./CartesianAxis-BkbswnOw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BV7W1Jn4.js";import"./symbol-C8RgFcPM.js";import"./useElementOffset-Bq5Vxvej.js";import"./uniqBy-WOO0nBZ6.js";import"./iteratee-B_h2EV3R.js";const lt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ht=["UsePlotArea"];export{e as UsePlotArea,ht as __namedExportsOrder,lt as default};
