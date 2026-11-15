import{R as t}from"./iframe-BhLunS0i.js";import{z as a}from"./RechartsWrapper-wQ1gT1I0.js";import{R as p}from"./zIndexSlice-DSPJCLFE.js";import{C as n}from"./ComposedChart-prDwTclO.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DZl1t4Hn.js";import{X as l}from"./XAxis-gG48cTvb.js";import{Y as h}from"./YAxis-D6-PxaVK.js";import{L as c}from"./Legend-CXDoxvwS.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DXAJRd9k.js";import"./get-cF5BDHN6.js";import"./axisSelectors-D1ydZeah.js";import"./throttle-CRN4ZNKA.js";import"./index-H7oJ2m7W.js";import"./index-CcZqU02h.js";import"./polarAxisSelectors-BbkwWyBS.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DitufHHw.js";import"./index-D0rCwL5o.js";import"./index-DIg_N1nK.js";import"./renderedTicksSlice-R-_VMDVC.js";import"./index-CFjbQa5l.js";import"./fillDefinitions-CiiNJPEd.js";import"./CartesianChart-Bh_JRPa2.js";import"./chartDataContext-BNqwthL0.js";import"./CategoricalChart-D-9XLz-N.js";import"./Layer-BM8-5uQX.js";import"./Curve-LlXUYE-L.js";import"./types-CT83QobA.js";import"./step-C270rjWW.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-V8RFTVJZ.js";import"./Label-BKkx1Yqi.js";import"./Text-DaAfyhaD.js";import"./ZIndexLayer-DT0AmS3A.js";import"./ActivePoints-B_P37ke-.js";import"./Dot-5madfp2A.js";import"./activeStyles-CJzsRDKh.js";import"./useAnimationId-Xa81ZCl9.js";import"./Symbols-DZ9QCbQ8.js";import"./symbol-C4ewZ54u.js";import"./ErrorBarContext-B9XBEKPc.js";import"./SetGraphicalItem-DMPKHwhz.js";import"./getRadiusAndStrokeWidthFromDot-DJtKm8XN.js";import"./ActiveShapeUtils-DTLaa-AG.js";import"./useEffectiveDataKey-0h-gJoNJ.js";import"./CartesianAxis-D8zKHO5C.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-CqLb8czN.js";import"./uniqBy-BLbM-jB1.js";import"./iteratee-BGzKQzLt.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
