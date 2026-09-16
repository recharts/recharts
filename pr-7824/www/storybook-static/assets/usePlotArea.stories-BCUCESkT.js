import{R as t}from"./iframe-BlpdekQf.js";import{j as a}from"./RechartsWrapper-BZ46sqe8.js";import{R as p}from"./zIndexSlice-Bd-549Vw.js";import{C as n}from"./ComposedChart-BYV5Fhyo.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DTtwP9ub.js";import{X as l}from"./XAxis-DCEI79gV.js";import{Y as h}from"./YAxis-DGARPD6V.js";import{L as c}from"./Legend-gO2rP5_l.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BWwU0p8m.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DwVSh5EL.js";import"./throttle-8wef2bFQ.js";import"./index-Dg90symq.js";import"./index-Dn5eONY4.js";import"./isWellBehavedNumber-DfaAxwlE.js";import"./d3-scale-ffqjL1dY.js";import"./index-BcFSE7Eo.js";import"./index-Co2WS3GV.js";import"./renderedTicksSlice-rM-Or7ex.js";import"./index-BjAwxFOu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dncy8Mq7.js";import"./chartDataContext-CXgp5rOX.js";import"./CategoricalChart-CJrl3V7y.js";import"./Layer-Cz4a7tst.js";import"./Curve-DBrSRqYN.js";import"./types-DYnYQX3g.js";import"./step-C7NW3t9J.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BKOKH3Gm.js";import"./Label-CrfPybH1.js";import"./Text-CRM9x0B4.js";import"./DOMUtils-C_8Iq0XJ.js";import"./useId-DvrsL6or.js";import"./useBackwardsCompatibleTheme-C9u8MjhE.js";import"./ZIndexLayer-C5ftRxf2.js";import"./useAnimationId-SlAZ3zMA.js";import"./ActivePoints-C1DlvL6S.js";import"./Dot-BsVVT6T8.js";import"./RegisterGraphicalItemId-D9zcRMey.js";import"./ErrorBarContext-DkC-IUMU.js";import"./GraphicalItemClipPath-Vs1wvJPe.js";import"./SetGraphicalItem-BG-oAwbp.js";import"./getRadiusAndStrokeWidthFromDot-C3QjOZoW.js";import"./ActiveShapeUtils-BEiBGwD8.js";import"./useGraphicalItemIdentity-BE0cCNWI.js";import"./CartesianAxis-CTJL8AJc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BVv7h58j.js";import"./symbol-A-DI5JZL.js";import"./useElementOffset-C1b8oROV.js";import"./uniqBy-ujuwYKfk.js";import"./iteratee-Bs0KMcjA.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
