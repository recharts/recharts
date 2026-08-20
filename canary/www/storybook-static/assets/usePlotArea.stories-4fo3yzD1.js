import{R as t}from"./iframe-1v9h95J8.js";import{u as a}from"./CategoricalChart-3eK3rQ5j.js";import{R as p}from"./zIndexSlice-BhjZ46tE.js";import{C as s}from"./ComposedChart-CQ6NotWx.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DFNe7bTs.js";import{X as l}from"./XAxis-C3_Gtrrp.js";import{Y as h}from"./YAxis-DahzdkhC.js";import{L as c}from"./Legend-DJerxEMx.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-XwXOT9f_.js";import"./index-C_nXGIxS.js";import"./index-DKrzWSHd.js";import"./index-DorzE8c_.js";import"./index-C6o7i8Oe.js";import"./throttle-Dy0aiko3.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BWhm0UuR.js";import"./resolveDefaultProps-BhmjJgZI.js";import"./isWellBehavedNumber-IDGRCsZw.js";import"./d3-scale-qCvwfRiK.js";import"./renderedTicksSlice-CbFboWTW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dhkzwurf.js";import"./chartDataContext-ONZEIQIl.js";import"./Layer-BGkgrUb2.js";import"./Curve-CZh9TamE.js";import"./types-Bc5JlxqX.js";import"./step-BpAcBh1s.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BtjOxZbL.js";import"./Label-CLKDqP8g.js";import"./Text-t2WYL4eB.js";import"./DOMUtils-Duwm3W6u.js";import"./useId-BeY-WYzc.js";import"./useBackwardsCompatibleTheme-D-bpn3x_.js";import"./ZIndexLayer-ClRRfs-A.js";import"./useAnimationId-1FoMJdgT.js";import"./ActivePoints-BMT_QtoQ.js";import"./Dot-BB2fWryZ.js";import"./RegisterGraphicalItemId-CM5ihZMg.js";import"./ErrorBarContext-7DKBlL9r.js";import"./GraphicalItemClipPath-CNT3Oe3B.js";import"./SetGraphicalItem-CrvsS0eI.js";import"./getRadiusAndStrokeWidthFromDot-BDAbQB1I.js";import"./ActiveShapeUtils-DyMxVbzF.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BrAAElTJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-vePz1Ugz.js";import"./symbol-D9KhyOxI.js";import"./useElementOffset-Dyp5e5y2.js";import"./uniqBy-BO5r3yE5.js";import"./iteratee-CWaP7vY_.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
