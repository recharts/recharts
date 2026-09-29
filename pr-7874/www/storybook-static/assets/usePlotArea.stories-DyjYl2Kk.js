import{R as t}from"./iframe-CkExmVLh.js";import{j as a}from"./RechartsWrapper-CmpmZooC.js";import{R as p}from"./zIndexSlice-a3gNrCTg.js";import{C as n}from"./ComposedChart-BhMk3qvU.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Cisnr3UH.js";import{X as l}from"./XAxis-JBQw78VL.js";import{Y as h}from"./YAxis-BKUGWzYz.js";import{L as c}from"./Legend-n_QnfH8z.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-RkN2bWVj.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DjYqkdMk.js";import"./throttle-BNvjyLg8.js";import"./index-tbID_CTU.js";import"./index-oO8SHF6a.js";import"./isWellBehavedNumber-B9ULLFc9.js";import"./d3-scale-BQavAiMn.js";import"./index-3Scx8lTS.js";import"./index-Dlo0KE1-.js";import"./renderedTicksSlice-D-2PA2Wz.js";import"./index-Cl_0IqIO.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DTXpoHpD.js";import"./chartDataContext-DYa5wr5P.js";import"./CategoricalChart-BF6nCoHF.js";import"./Layer-CGaMavgo.js";import"./Curve-BfUX2fxA.js";import"./types-D0Lh6MHk.js";import"./step-TH_7jXAx.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-V2dSiKDR.js";import"./Label-C8EtCHaI.js";import"./Text-mbh8kfNk.js";import"./DOMUtils-B9viDuiF.js";import"./useId-B6th-B23.js";import"./useBackwardsCompatibleTheme-DZHep05A.js";import"./ZIndexLayer-DuxWNsKn.js";import"./useAnimationId-B25s9B77.js";import"./ActivePoints-DT4UcXq7.js";import"./Dot-CNUfafHI.js";import"./RegisterGraphicalItemId-Bmf5uTtn.js";import"./ErrorBarContext-B3pTgu-r.js";import"./GraphicalItemClipPath-CSuIt2Pb.js";import"./SetGraphicalItem-CjeIiMwy.js";import"./getRadiusAndStrokeWidthFromDot-ByuYICUa.js";import"./ActiveShapeUtils-CeXBNDiM.js";import"./useGraphicalItemIdentity-BSB2zAct.js";import"./CartesianAxis-BhWf1FlQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-72F0FLZd.js";import"./symbol-C4swW5GK.js";import"./useElementOffset-CXUuqBTx.js";import"./uniqBy-aTBj_DaH.js";import"./iteratee-qu9slWkn.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
