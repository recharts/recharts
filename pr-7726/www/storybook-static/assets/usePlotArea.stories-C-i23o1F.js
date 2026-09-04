import{R as t}from"./iframe-BKk44VOT.js";import{j as a}from"./RechartsWrapper-CVGPHljF.js";import{R as p}from"./zIndexSlice-BjWKOBUm.js";import{C as s}from"./ComposedChart-Bs9KweDK.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BvewL5vb.js";import{X as l}from"./XAxis-2cJ7kaI0.js";import{Y as h}from"./YAxis-DPFxody7.js";import{L as c}from"./Legend-C8H3bsT4.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CzfJP_I-.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BiJJw6in.js";import"./throttle-BdnDrpLZ.js";import"./index-BTZJ4Yum.js";import"./index-D9YNF8fg.js";import"./isWellBehavedNumber-BPjqRkxS.js";import"./d3-scale-rR_TqiZM.js";import"./index-BjsXzqOC.js";import"./index-CvfG5lr1.js";import"./renderedTicksSlice-BYjFoixx.js";import"./index-TeAPTJXJ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DS36pb4k.js";import"./chartDataContext-O1WSQyDv.js";import"./CategoricalChart-C8xt7Kx0.js";import"./Layer-6OjQkfig.js";import"./Curve-Bl3ua7_T.js";import"./types-CjNR6i_K.js";import"./step-Dtmfv3UM.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-_iMVf6zS.js";import"./Label-BPr6N2Q-.js";import"./Text-BtR9CUIB.js";import"./DOMUtils-Dil5o6Lr.js";import"./useId-hvzCLp2v.js";import"./useBackwardsCompatibleTheme-VDOEj1kR.js";import"./ZIndexLayer-wqOp9Wsh.js";import"./useAnimationId-DT580Fuf.js";import"./ActivePoints-RMI7wAiF.js";import"./Dot-CWbOoqzR.js";import"./RegisterGraphicalItemId-DFS7YVx4.js";import"./ErrorBarContext-BlzVudvo.js";import"./GraphicalItemClipPath-Bj844YW0.js";import"./SetGraphicalItem-BFQOKK6x.js";import"./getRadiusAndStrokeWidthFromDot-nIjLU3ma.js";import"./ActiveShapeUtils-DDxo2n_b.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-D8EUtvdL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BAM533G2.js";import"./symbol-BvEjq6Qb.js";import"./useElementOffset-CnoXh3Na.js";import"./uniqBy-CnjkiirN.js";import"./iteratee-Dk_Av1Hh.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
