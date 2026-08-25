import{R as t}from"./iframe-C8vQGZXk.js";import{u as a}from"./CategoricalChart-3d5zHnsL.js";import{R as p}from"./zIndexSlice-ByprO6Sm.js";import{C as s}from"./ComposedChart-CHNyRbuw.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-ysek8YuF.js";import{X as l}from"./XAxis-CeEiPhih.js";import{Y as h}from"./YAxis-B6tlBAdH.js";import{L as c}from"./Legend-zxScbuod.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-8pTUTugH.js";import"./index-DGglMQ8l.js";import"./index-C62uqfyt.js";import"./index-CPGq0YmD.js";import"./index-DcRT1P9Q.js";import"./throttle-h__ZU4m4.js";import"./get-C2VjdU0L.js";import"./axisSelectors-QRAfsrXG.js";import"./resolveDefaultProps-V67edAdk.js";import"./isWellBehavedNumber-C0Xo9Op-.js";import"./d3-scale-CtBXoG-U.js";import"./renderedTicksSlice-DsrGsPip.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Tp1RpXRt.js";import"./chartDataContext-DHzBZ8lS.js";import"./Layer-sgegzG2x.js";import"./Curve-BHwHIA5E.js";import"./types-Cx0FcaGa.js";import"./step-BEmml1DS.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-v0KEsWrQ.js";import"./Label-CYWEtH1_.js";import"./Text-4tQX4Uia.js";import"./DOMUtils-CYXp4dKG.js";import"./useId-BhWWyhoE.js";import"./useBackwardsCompatibleTheme-WNjwGM1x.js";import"./ZIndexLayer-DTaI93aT.js";import"./useAnimationId-CCh5p5CL.js";import"./ActivePoints-DpUGItzr.js";import"./Dot-D-cyWkmh.js";import"./RegisterGraphicalItemId-Cui1oLRd.js";import"./ErrorBarContext-BpNPFGVG.js";import"./GraphicalItemClipPath-BrujiRiU.js";import"./SetGraphicalItem-CLgoHfzk.js";import"./getRadiusAndStrokeWidthFromDot-CYNakwFb.js";import"./ActiveShapeUtils-B1Mwe2wI.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-C_7-gYtt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-JIEW7Wwe.js";import"./symbol-BvYpjvKP.js";import"./useElementOffset-D676kBYp.js";import"./uniqBy-CNeAHYAw.js";import"./iteratee-BgpO85yG.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
