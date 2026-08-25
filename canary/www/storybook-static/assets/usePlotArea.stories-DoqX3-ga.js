import{R as t}from"./iframe-D6azDvqV.js";import{u as a}from"./CategoricalChart-BwNlWuS2.js";import{R as p}from"./zIndexSlice-CJI37Eji.js";import{C as s}from"./ComposedChart-CmwmgTBj.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DXVG3ibe.js";import{X as l}from"./XAxis-Cf0m1xXe.js";import{Y as h}from"./YAxis-ltpxfQ5a.js";import{L as c}from"./Legend-no68ER2Z.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CvaooULl.js";import"./index-8WeBRwf8.js";import"./index-CdRGzAoJ.js";import"./index-De2T6Rdx.js";import"./index-CHbhJf8u.js";import"./throttle-9sEg-owe.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Cuma3wLU.js";import"./resolveDefaultProps-MMJ4Hspi.js";import"./isWellBehavedNumber-zgmweQfq.js";import"./d3-scale-BukzO1yu.js";import"./renderedTicksSlice-CP9ELeUi.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DKfnJK9b.js";import"./chartDataContext-E0nEwP5U.js";import"./Layer-Dd-QkUnw.js";import"./Curve-BtvAXlb-.js";import"./types-ArXcJt3v.js";import"./step-BjTVn7hc.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CFHSF17T.js";import"./Label-Bq-FSxS9.js";import"./Text-7Emw6cxV.js";import"./DOMUtils-ChR8PpsJ.js";import"./useId-D_J3zHys.js";import"./useBackwardsCompatibleTheme-Btt6Zxb8.js";import"./ZIndexLayer-BMP0BbGV.js";import"./useAnimationId-B0HxjIs3.js";import"./ActivePoints-D_5kSOug.js";import"./Dot-DipyiptT.js";import"./RegisterGraphicalItemId-utzXF_HC.js";import"./ErrorBarContext-CS85xpKd.js";import"./GraphicalItemClipPath-CEHJTCek.js";import"./SetGraphicalItem-CIh432wm.js";import"./getRadiusAndStrokeWidthFromDot-D9uGtCD-.js";import"./ActiveShapeUtils-nknSwnl4.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-CnIKHaJW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CJemDv7Y.js";import"./symbol-Dls1Vnw8.js";import"./useElementOffset-rfYS5NLv.js";import"./uniqBy-Bxq63F-T.js";import"./iteratee-CnoSjSAp.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const At=["UsePlotArea"];export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
