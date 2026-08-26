import{R as t}from"./iframe-DJ6rtu5y.js";import{j as a}from"./RechartsWrapper-CGKs6O5B.js";import{R as p}from"./zIndexSlice-GKDeUFOJ.js";import{C as s}from"./ComposedChart-DTZGrJFy.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BvFD854y.js";import{X as l}from"./XAxis-BUVKQY8c.js";import{Y as h}from"./YAxis-pMQszEvE.js";import{L as c}from"./Legend-DQs8UIfN.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-TPSV-hYk.js";import"./get-C2VjdU0L.js";import"./axisSelectors-C35c3TE0.js";import"./throttle-sudvDT5X.js";import"./index-Byzogkak.js";import"./index-BJPQreJu.js";import"./isWellBehavedNumber-B2OjYN3n.js";import"./d3-scale-D71QV_XP.js";import"./index-0mnAToBP.js";import"./index-CUo6OWxa.js";import"./renderedTicksSlice-omd44aKK.js";import"./index-Bxq5EtVn.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-L5wJYDJT.js";import"./chartDataContext-Bk4HvwoY.js";import"./CategoricalChart-DK2VSKip.js";import"./Layer-cCkIU0Vd.js";import"./Curve-D-GktZhk.js";import"./types-CF6XO-qy.js";import"./step-HdY_lyE3.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-H08MVe4l.js";import"./Label-6LwczIk6.js";import"./Text-BucchPCr.js";import"./DOMUtils-D7Zrpi7b.js";import"./useId-Byv4usHp.js";import"./useBackwardsCompatibleTheme-DdWo0Fs4.js";import"./ZIndexLayer-IvPQYMIA.js";import"./useAnimationId-BjJyuwQe.js";import"./ActivePoints-CyJpEWEh.js";import"./Dot-ClYl_u4u.js";import"./RegisterGraphicalItemId-BsIALwJ-.js";import"./ErrorBarContext-DT0TIJoX.js";import"./GraphicalItemClipPath-B5qfpalh.js";import"./SetGraphicalItem-DbBJcchq.js";import"./getRadiusAndStrokeWidthFromDot-_43mG9af.js";import"./ActiveShapeUtils-CPDo8aA6.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BUpdfbmz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C9Kobipa.js";import"./symbol-apXrx4pZ.js";import"./useElementOffset-Cds_5qGL.js";import"./uniqBy-Dj6LJcG4.js";import"./iteratee-cRYzUJKO.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
