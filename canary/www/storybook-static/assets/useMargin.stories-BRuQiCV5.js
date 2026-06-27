import{R as r}from"./iframe-BW71A1Nl.js";import{C as a,R as p}from"./zIndexSlice-D0nATGhG.js";import{C as s}from"./ComposedChart-CoIWpLYJ.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as g}from"./Line-EpLSPRs3.js";import{X as d}from"./XAxis-DjClnNcb.js";import{Y as h}from"./YAxis-CBUi58KC.js";import{L as c}from"./Legend-Cx8q1OTp.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-iZdzJVDj.js";import"./index-qgRbHTql.js";import"./index-CUqZ5NZx.js";import"./get-BsK8Vst9.js";import"./resolveDefaultProps-BwvNNDLm.js";import"./isWellBehavedNumber-6M6ThiRO.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B0unhTn-.js";import"./index-7I5wiu9M.js";import"./index-BeMOkAqZ.js";import"./renderedTicksSlice-BObQrIhG.js";import"./axisSelectors-CGn4mfga.js";import"./d3-scale-vdMRCf0o.js";import"./CartesianChart-CGswDKyQ.js";import"./chartDataContext-DixWbQnN.js";import"./CategoricalChart-C428T1Jl.js";import"./Layer-BmYZzoaR.js";import"./Curve-DRyRFJEG.js";import"./types-CoBkUvrA.js";import"./step-m-kUV5sp.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D3llU_s4.js";import"./Label-7Nd_0-bw.js";import"./Text-DDeu8cp3.js";import"./DOMUtils-mo8tevis.js";import"./ZIndexLayer-B4CcndAw.js";import"./useAnimationId-L1gInTUa.js";import"./ActivePoints-C3kyVPB9.js";import"./Dot-CymeOwpM.js";import"./RegisterGraphicalItemId-DpVIzNFe.js";import"./ErrorBarContext-Pp_bAm-i.js";import"./GraphicalItemClipPath-C8hys0YQ.js";import"./SetGraphicalItem-DVIO0q7q.js";import"./getRadiusAndStrokeWidthFromDot-Dv0_9MPJ.js";import"./ActiveShapeUtils-DnbIkStc.js";import"./CartesianAxis-6UaBWKrc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BuYDGlkC.js";import"./symbol-CvfymRh0.js";import"./useElementOffset-B07ItHDs.js";import"./uniqBy-DLbJkmvT.js";import"./iteratee-D3nwGriT.js";const dr={title:"API/hooks/useMargin",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},t={name:"useMargin",render:e=>r.createElement(p,{width:e.width,height:e.height},r.createElement(s,{data:n,margin:e.margin},r.createElement(g,{dataKey:"pv"}),r.createElement(d,{dataKey:"name"}),r.createElement(h,null),r.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var o,i,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'useMargin',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
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
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const hr=["UseMargin"];export{t as UseMargin,hr as __namedExportsOrder,dr as default};
