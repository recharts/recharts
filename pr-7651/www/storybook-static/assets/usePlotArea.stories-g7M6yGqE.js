import{R as t}from"./iframe-pNwHFSPW.js";import{u as a}from"./CategoricalChart-CpM9_I3K.js";import{R as p}from"./zIndexSlice-DugJPvbP.js";import{C as s}from"./ComposedChart-AJqQajBW.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CVgLMECr.js";import{X as l}from"./XAxis-KNJz3bpH.js";import{Y as h}from"./YAxis-BhLAmjxa.js";import{L as c}from"./Legend-BqqQDt1e.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DLpwYUVG.js";import"./index-BghrGVl-.js";import"./index-C8JT8QJm.js";import"./index-CPy1Xi6O.js";import"./index-PYvYT1WL.js";import"./throttle-B5IaBbRH.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BSoQDh0E.js";import"./resolveDefaultProps-DWmH-vKe.js";import"./isWellBehavedNumber-DROlGubD.js";import"./d3-scale-CYWGushN.js";import"./renderedTicksSlice-oWoSi7uM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DzTN0VjC.js";import"./chartDataContext-DWAHv7Ax.js";import"./Layer-CjujILu-.js";import"./Curve-5mQV-JEl.js";import"./types-DQ3XPolE.js";import"./step-BsFkcvF5.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BZeu0cey.js";import"./Label-Bzd_UlcO.js";import"./Text-BBlVElsZ.js";import"./DOMUtils-BNxHxmQg.js";import"./useBackwardsCompatibleTheme-Du48Xyly.js";import"./ZIndexLayer-CUbdM7HK.js";import"./useAnimationId-DPXGQUo9.js";import"./ActivePoints-CCq-PEMS.js";import"./Dot-ByamxSDz.js";import"./RegisterGraphicalItemId-Cqk6hpjs.js";import"./ErrorBarContext-DVdtlYtH.js";import"./GraphicalItemClipPath-CPEJp_aS.js";import"./SetGraphicalItem-nLd7ALhr.js";import"./getRadiusAndStrokeWidthFromDot-D0TIAu-Y.js";import"./ActiveShapeUtils-bOSJ1OgY.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-Bs05prYp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DB5gAyjY.js";import"./symbol-CY3ScH1D.js";import"./useElementOffset-DBzzVBN1.js";import"./uniqBy-CN3CrqJk.js";import"./iteratee-uh7lygO_.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ut=["UsePlotArea"];export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
