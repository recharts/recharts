import{R as t}from"./iframe-7ITK_SeI.js";import{z as p}from"./RechartsWrapper-Bg4i1fRK.js";import{R as a}from"./zIndexSlice-Bfez01E7.js";import{C as n}from"./ComposedChart-CXRmBdio.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CaFC4Px9.js";import{X as l}from"./XAxis-B6K6oeNG.js";import{Y as h}from"./YAxis-DKQSRoB1.js";import{L as c}from"./Legend-CrRKDvHN.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DPD-Ehfr.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BYlSNMl6.js";import"./throttle-DZAxS36c.js";import"./index-BWOYN4v6.js";import"./index-B6PSRbSm.js";import"./polarAxisSelectors-D1t4qM7h.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CgbIH62T.js";import"./index-CPO6Y0gx.js";import"./index-BX7LvsvC.js";import"./renderedTicksSlice-DWRnvg7c.js";import"./index-icjlISLt.js";import"./fillDefinitions-BLJHfD9l.js";import"./CartesianChart-BIfTf3EX.js";import"./chartDataContext-DsZ1g-wA.js";import"./CategoricalChart-DOHYP0Wg.js";import"./ZIndexPortal-BCW_CUyX.js";import"./Layer-x5ioE0yr.js";import"./Curve-SIwN0AJD.js";import"./types-CwLExx_V.js";import"./step-DDoJ0d0M.js";import"./path-DyVhHtw_.js";import"./LabelList-DyQMPI8I.js";import"./Label-CsN2_Owm.js";import"./Text-uEM3tCf7.js";import"./DOMUtils-B8HJjEQc.js";import"./ZIndexLayer-CUOO17YZ.js";import"./ActivePoints-CfvU-oNA.js";import"./Dot-H1TfH3hy.js";import"./activeStyles-CTNWVDS5.js";import"./useAnimationId-DKK7KP9l.js";import"./dataEntryStyles-Dd39-khT.js";import"./Symbols-CGGO5VAJ.js";import"./symbol-CV73IRCS.js";import"./ErrorBarContext-Ch69wvN-.js";import"./SetGraphicalItem-DVqvqVag.js";import"./getRadiusAndStrokeWidthFromDot-Cev_FaPT.js";import"./ActiveShapeUtils-CkUaBVCr.js";import"./useEffectiveDataKey-EiVngFCy.js";import"./CartesianAxis-P1lu35Vw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Brrafjou.js";import"./uniqBy-DancdYdq.js";import"./iteratee-37xDdBAO.js";import"./isArguments-yB-y1yaH.js";const ft={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},o={name:"usePlotAreaExample",render:r=>t.createElement(a,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},yt=["UsePlotArea"];var e,i,m;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{o as UsePlotArea,yt as __namedExportsOrder,ft as default};
