import{R as t}from"./iframe-BB2cSF8T.js";import{u as a}from"./CategoricalChart-DAFEAISl.js";import{R as p}from"./zIndexSlice-Ck0CRfK_.js";import{C as s}from"./ComposedChart-D7ONXqhe.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DAcc-yk_.js";import{X as l}from"./XAxis-DwBzx4b3.js";import{Y as h}from"./YAxis-CMkp761K.js";import{L as c}from"./Legend-Bg34nPWt.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DkB_KEzo.js";import"./index-MTvadirX.js";import"./index-DyAmptVd.js";import"./index-EzV7mwgL.js";import"./index-DofPxVLY.js";import"./throttle-nMA59eYs.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BurdOGu6.js";import"./resolveDefaultProps-DjeWZstQ.js";import"./isWellBehavedNumber-BQXiM-z-.js";import"./d3-scale-C3zxZmRj.js";import"./renderedTicksSlice-lUF_NPm1.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-ChdkOd-C.js";import"./chartDataContext-CB4jnkAv.js";import"./Layer-LVpAC3_2.js";import"./Curve-C11_GYZZ.js";import"./types-ChWRaT57.js";import"./step-BWHrm9dE.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-0WotYsMt.js";import"./Label-BZkQksct.js";import"./Text-Bwx_fWQU.js";import"./DOMUtils-yFTvziLR.js";import"./useId-D4zb9cEW.js";import"./useBackwardsCompatibleTheme-g8RWGYmo.js";import"./ZIndexLayer-DbM1bO0L.js";import"./useAnimationId-C8wX-p7z.js";import"./ActivePoints-CuAhK7lR.js";import"./Dot-byNEGz8Q.js";import"./RegisterGraphicalItemId-Bts6fFM2.js";import"./ErrorBarContext-DNeGzoAb.js";import"./GraphicalItemClipPath-CT1W7nLy.js";import"./SetGraphicalItem-Ct2uSDpP.js";import"./getRadiusAndStrokeWidthFromDot-eavX8tOz.js";import"./ActiveShapeUtils-Uvcq9QCX.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BWqAGBTh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CyMSTzZI.js";import"./symbol-D3j02ylc.js";import"./useElementOffset-Mg-Nq6uP.js";import"./uniqBy-CkqXGP9K.js";import"./iteratee-DMriX-zr.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
