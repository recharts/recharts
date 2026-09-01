import{R as t}from"./iframe-BB3lVLoc.js";import{j as a}from"./RechartsWrapper-S-WqrQUy.js";import{R as p}from"./zIndexSlice-CfHP3A1Y.js";import{C as s}from"./ComposedChart-CylK8khp.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-C9JbolpU.js";import{X as l}from"./XAxis-BBQp-Idt.js";import{Y as h}from"./YAxis-DG4767Mj.js";import{L as c}from"./Legend-BZK3nF7M.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CUfoVU2p.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CEA0dwEw.js";import"./throttle-QtsYQF8O.js";import"./index-DcEJbqAh.js";import"./index-BKenMcKp.js";import"./isWellBehavedNumber-_9n5Uq-d.js";import"./d3-scale-CDtyCF0X.js";import"./index-DUlsk-Es.js";import"./index-B-cCuGfC.js";import"./renderedTicksSlice-Toi-dgcz.js";import"./index-yFQohn8S.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Kpp943Pu.js";import"./chartDataContext-CiYf8ag2.js";import"./CategoricalChart-CwlUzHNA.js";import"./Layer-NQ3_WlgF.js";import"./Curve-DzA4hX9V.js";import"./types-KCNzlOcC.js";import"./step-D6h1aeKq.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DJZqC0i8.js";import"./Label-Cn0Fp29B.js";import"./Text-DEC8wtTL.js";import"./DOMUtils-CldD4RXg.js";import"./useId-BaM-cyip.js";import"./useBackwardsCompatibleTheme-Cqzm3Lgs.js";import"./ZIndexLayer-DTgItK4v.js";import"./useAnimationId-BDqb5MNR.js";import"./ActivePoints-C2lE0Ysx.js";import"./Dot-bxm0u_di.js";import"./RegisterGraphicalItemId-BeJ9531v.js";import"./ErrorBarContext-BboOIeGg.js";import"./GraphicalItemClipPath-DHVb6D1Y.js";import"./SetGraphicalItem-B2jSBaNX.js";import"./getRadiusAndStrokeWidthFromDot-D184pFcr.js";import"./ActiveShapeUtils-DiHdw4Rv.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-m8s8CMt8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-D3aKpe7H.js";import"./symbol-BGppE-YZ.js";import"./useElementOffset-yO1LxUDf.js";import"./uniqBy-BBx3NQ59.js";import"./iteratee-CI9yimKx.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
