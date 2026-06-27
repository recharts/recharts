import{R as t}from"./iframe-BW71A1Nl.js";import{e as p}from"./CategoricalChart-C428T1Jl.js";import{R as a}from"./zIndexSlice-D0nATGhG.js";import{C as s}from"./ComposedChart-CoIWpLYJ.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-EpLSPRs3.js";import{X as d}from"./XAxis-DjClnNcb.js";import{Y as h}from"./YAxis-CBUi58KC.js";import{L as g}from"./Legend-Cx8q1OTp.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B0unhTn-.js";import"./index-7I5wiu9M.js";import"./index-BeMOkAqZ.js";import"./index-qgRbHTql.js";import"./index-CUqZ5NZx.js";import"./immer-iZdzJVDj.js";import"./get-BsK8Vst9.js";import"./renderedTicksSlice-BObQrIhG.js";import"./axisSelectors-CGn4mfga.js";import"./d3-scale-vdMRCf0o.js";import"./resolveDefaultProps-BwvNNDLm.js";import"./isWellBehavedNumber-6M6ThiRO.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CGswDKyQ.js";import"./chartDataContext-DixWbQnN.js";import"./Layer-BmYZzoaR.js";import"./Curve-DRyRFJEG.js";import"./types-CoBkUvrA.js";import"./step-m-kUV5sp.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D3llU_s4.js";import"./Label-7Nd_0-bw.js";import"./Text-DDeu8cp3.js";import"./DOMUtils-mo8tevis.js";import"./ZIndexLayer-B4CcndAw.js";import"./useAnimationId-L1gInTUa.js";import"./ActivePoints-C3kyVPB9.js";import"./Dot-CymeOwpM.js";import"./RegisterGraphicalItemId-DpVIzNFe.js";import"./ErrorBarContext-Pp_bAm-i.js";import"./GraphicalItemClipPath-C8hys0YQ.js";import"./SetGraphicalItem-DVIO0q7q.js";import"./getRadiusAndStrokeWidthFromDot-Dv0_9MPJ.js";import"./ActiveShapeUtils-DnbIkStc.js";import"./CartesianAxis-6UaBWKrc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BuYDGlkC.js";import"./symbol-CvfymRh0.js";import"./useElementOffset-B07ItHDs.js";import"./uniqBy-DLbJkmvT.js";import"./iteratee-D3nwGriT.js";const dt={title:"API/hooks/useOffset",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},r={name:"useOffset",render:e=>t.createElement(a,{width:e.width,height:e.height},t.createElement(s,{data:n,margin:e.margin},t.createElement(f,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(g,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'useOffset',
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ht=["UseOffset"];export{r as UseOffset,ht as __namedExportsOrder,dt as default};
