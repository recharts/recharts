import{R as t}from"./iframe-BcaWFD7u.js";import{u as a}from"./CategoricalChart-CgNZHuyL.js";import{R as p}from"./zIndexSlice-bS7cYBKO.js";import{C as s}from"./ComposedChart-BWld5lXM.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CtVnRj6L.js";import{X as l}from"./XAxis-DD0jXpQz.js";import{Y as h}from"./YAxis-CG4baE84.js";import{L as c}from"./Legend-gkr2D6-Y.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C-VIMVig.js";import"./index-Cgtj3oPE.js";import"./index-xxpNQb8f.js";import"./index-DD-aKuCi.js";import"./index-DVZ7kkny.js";import"./throttle-Dz1UTb_M.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D0fMBFBE.js";import"./resolveDefaultProps-CqMML5sA.js";import"./isWellBehavedNumber-BP6UcqH1.js";import"./d3-scale-CjZBqtB1.js";import"./renderedTicksSlice-naYz1W_2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CjI4gSTo.js";import"./chartDataContext-BwgPsUMn.js";import"./Layer-BhtJX80Y.js";import"./Curve-DaA6zKZn.js";import"./types-BCqYYX1O.js";import"./step-CXwuHX1W.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-e5mGDN3Y.js";import"./Label-C-frAhmf.js";import"./Text-C02gRxFY.js";import"./DOMUtils-BvzyNhX6.js";import"./useId-Dsncsbnj.js";import"./useBackwardsCompatibleTheme-R44_v_zH.js";import"./ZIndexLayer-CI7tJTJS.js";import"./useAnimationId-DDgucPPX.js";import"./ActivePoints-CvqJbqjR.js";import"./Dot-DD0Nn15x.js";import"./RegisterGraphicalItemId-C3WPLV-4.js";import"./ErrorBarContext-CyXVsRn2.js";import"./GraphicalItemClipPath-BL_hooiS.js";import"./SetGraphicalItem-BClSdCLV.js";import"./getRadiusAndStrokeWidthFromDot-DyVM-7ZZ.js";import"./ActiveShapeUtils-BL97HDhi.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-D8v1d9Y9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BGM_JZYv.js";import"./symbol-BtXaAdka.js";import"./useElementOffset-DHdFJydJ.js";import"./uniqBy-Bkj6aSgv.js";import"./iteratee-Bj7EDGxK.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
