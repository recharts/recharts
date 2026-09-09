import{R as t}from"./iframe-DsVopAcH.js";import{j as a}from"./RechartsWrapper-BRE0A59j.js";import{R as p}from"./zIndexSlice-CGOHGuEy.js";import{C as n}from"./ComposedChart-BQuW28P0.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BldwsFH2.js";import{X as l}from"./XAxis-BseTd926.js";import{Y as h}from"./YAxis-HRdYePVo.js";import{L as c}from"./Legend-D7TZZp3V.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BHrKsPc_.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Dgut4uty.js";import"./throttle-BobbsZsr.js";import"./index-BVvb2y__.js";import"./index-CFv1WTge.js";import"./isWellBehavedNumber-Br_jDsOR.js";import"./d3-scale-Eru_6FDY.js";import"./index-Ds1bCQEW.js";import"./index-B91uvtzr.js";import"./renderedTicksSlice-C8E6fsP2.js";import"./index-C4MX6gyH.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B1PZqYEM.js";import"./chartDataContext-C5PzVTiP.js";import"./CategoricalChart-Cry5pYjh.js";import"./Layer-BiKMlTZw.js";import"./Curve-wbgCoDzv.js";import"./types-BimouhM4.js";import"./step-B5nwCRak.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Brc7OfV1.js";import"./Label-yfckENu2.js";import"./Text-nN9fGOPh.js";import"./DOMUtils-DoArDhDK.js";import"./useId-B3ZiYYeF.js";import"./useBackwardsCompatibleTheme-CGfGQXHh.js";import"./ZIndexLayer-D4yIu8AC.js";import"./useAnimationId-C2i6ANfU.js";import"./ActivePoints-D3ORl2JH.js";import"./Dot-kLE6mRv4.js";import"./RegisterGraphicalItemId-BpLRWLUo.js";import"./ErrorBarContext-BW9eyXTq.js";import"./GraphicalItemClipPath-5LNoh5eI.js";import"./SetGraphicalItem-DoTInfhC.js";import"./getRadiusAndStrokeWidthFromDot-BIVN16ui.js";import"./ActiveShapeUtils-BltEi4et.js";import"./useGraphicalItemIdentity---g9lV2H.js";import"./CartesianAxis-DUwX43Tg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DeZoucyt.js";import"./symbol-LtLa4mVa.js";import"./useElementOffset-DrtLAhWV.js";import"./uniqBy-CsD-mN15.js";import"./iteratee-B1hggmL5.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
