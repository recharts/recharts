import{R as t}from"./iframe-DEExurmE.js";import{j as a}from"./RechartsWrapper-BERQZkXB.js";import{R as p}from"./zIndexSlice-BGV3a2M2.js";import{C as s}from"./ComposedChart-CdFnUaqK.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CmBtfFLK.js";import{X as l}from"./XAxis-DlU7zrsS.js";import{Y as h}from"./YAxis-jXESqwAs.js";import{L as c}from"./Legend-B-vxIPtA.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BcKMyFDK.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B3HyN164.js";import"./throttle-D7dQEHKF.js";import"./index-D05g3ibA.js";import"./index-DSqfHUGS.js";import"./isWellBehavedNumber-h6OQjVbf.js";import"./d3-scale-Bb2cyBTe.js";import"./index-D4ICS-Fc.js";import"./index-BzthVEqH.js";import"./renderedTicksSlice-By6AytUE.js";import"./index-DRipnBKQ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cucr_Qkz.js";import"./chartDataContext-lhhxrqB4.js";import"./CategoricalChart-DNtGewyR.js";import"./Layer-Bb6nRq1I.js";import"./Curve-CHcEH7zY.js";import"./types-D0GbM314.js";import"./step-DlHRUAQd.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BsILchAj.js";import"./Label-BoesgQTr.js";import"./Text-DlL7Kh0g.js";import"./DOMUtils-DiHJPz-Q.js";import"./useId-BEPz2e1p.js";import"./useBackwardsCompatibleTheme-DNIYdIZM.js";import"./ZIndexLayer-DsOTHSzU.js";import"./useAnimationId-BnI4HmeK.js";import"./ActivePoints-3uqjFngE.js";import"./Dot-BMqykIFL.js";import"./RegisterGraphicalItemId-CZwjt8x7.js";import"./ErrorBarContext-DvbJvmom.js";import"./GraphicalItemClipPath-BG1GR_PS.js";import"./SetGraphicalItem-DexHK8W5.js";import"./getRadiusAndStrokeWidthFromDot-Qb57Gwlz.js";import"./ActiveShapeUtils-CrsX7S50.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BAF_XLat.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CvdOzUou.js";import"./symbol-Df6LD2PS.js";import"./useElementOffset-Docjled6.js";import"./uniqBy-DCAZgwHa.js";import"./iteratee-2zI7IteD.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["UsePlotArea"];export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
