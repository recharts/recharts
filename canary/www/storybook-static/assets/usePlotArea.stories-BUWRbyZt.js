import{R as t}from"./iframe-B96S8mAp.js";import{j as a}from"./RechartsWrapper-BMN5w2mX.js";import{R as p}from"./zIndexSlice-D8E1yZ1V.js";import{C as n}from"./ComposedChart-CehmNKG2.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BO6upPIL.js";import{X as l}from"./XAxis-nVEhAG3F.js";import{Y as h}from"./YAxis-DfdWV3Tw.js";import{L as c}from"./Legend-3kh-Elkq.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-hdreNdXc.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CoX3e_2U.js";import"./throttle-ClBFd37Y.js";import"./index-DkqDlut5.js";import"./index-h_VAy7kX.js";import"./isWellBehavedNumber-DfNG0DIy.js";import"./d3-scale-9nPPSrDa.js";import"./index-Bb9sRMCm.js";import"./index-C-l8V5Fx.js";import"./renderedTicksSlice-BTyytnZ2.js";import"./index-YSWiv6gp.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-a8pJKl2i.js";import"./chartDataContext-DDU_iWzI.js";import"./CategoricalChart-BJxf0mxD.js";import"./Layer-DAZaOor8.js";import"./Curve-5IRE8Ev4.js";import"./types-Dzd-LsE5.js";import"./step-98le-Vot.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B3aC5t_D.js";import"./Label-CqVVrAo5.js";import"./Text-BO1tL-Lm.js";import"./DOMUtils-B7FzpOG9.js";import"./useId-C9t3LM8u.js";import"./useBackwardsCompatibleTheme-BlUzVNC-.js";import"./ZIndexLayer-DUeg7nPd.js";import"./useAnimationId-CEflbmtS.js";import"./ActivePoints-L_3TnI4T.js";import"./Dot-zng579xF.js";import"./RegisterGraphicalItemId-yOmcvIGu.js";import"./ErrorBarContext-D5MNBcr8.js";import"./GraphicalItemClipPath-RRykAftR.js";import"./SetGraphicalItem-CvYLLoCp.js";import"./getRadiusAndStrokeWidthFromDot-CnqQHwHm.js";import"./ActiveShapeUtils-CRg0xwL0.js";import"./useGraphicalItemIdentity-CBUuLMbL.js";import"./CartesianAxis-Bj8xr9W5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BNfPcK4r.js";import"./symbol-BLKaF7BI.js";import"./useElementOffset-DWPuYoRo.js";import"./uniqBy-C_OONL53.js";import"./iteratee-rFFt59sx.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
