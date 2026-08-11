import{R as t}from"./iframe-NVmT8fNw.js";import{u as a}from"./CategoricalChart-Dxp6zY9P.js";import{R as p}from"./zIndexSlice-oXJaNZSv.js";import{C as s}from"./ComposedChart-Dt5Lfngq.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-B-bNZ47p.js";import{X as l}from"./XAxis-hjQAsG8m.js";import{Y as h}from"./YAxis-C2Jyljrh.js";import{L as c}from"./Legend-BN-zTwcb.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D7AIj6ea.js";import"./index-BpZAOzLQ.js";import"./index-DglhN2t4.js";import"./index-Q4SQnPgQ.js";import"./index-UDay9_dl.js";import"./throttle-Cfz3FXws.js";import"./get-C2VjdU0L.js";import"./axisSelectors-tCKXm7jn.js";import"./resolveDefaultProps-C8jEDqKQ.js";import"./isWellBehavedNumber-DXLqj9yd.js";import"./d3-scale-Brn0HGK7.js";import"./renderedTicksSlice-DjTIRCRN.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BKFmyfhg.js";import"./chartDataContext-DZujCsS5.js";import"./Layer-BD2Ls3O_.js";import"./Curve-BPHyzTn-.js";import"./types-DCTQ4Lzc.js";import"./step-CnSikc6K.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CytrP_0t.js";import"./Label-DfDRyr69.js";import"./Text-C5xVRdeB.js";import"./DOMUtils-CDTGDYSn.js";import"./RechartsThemeContext-awS4vi70.js";import"./ZIndexLayer-B6fWtNzq.js";import"./useAnimationId-d1ULQyIN.js";import"./ActivePoints-CgHBThkz.js";import"./Dot-CFsdSuNY.js";import"./RegisterGraphicalItemId-twhih18P.js";import"./ErrorBarContext-CABhUjIg.js";import"./GraphicalItemClipPath-BQB0fOYx.js";import"./SetGraphicalItem-B2EMuvtY.js";import"./getRadiusAndStrokeWidthFromDot-D6gL5APH.js";import"./ActiveShapeUtils-0-0F3LMG.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-CwxpTfpR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-LFKXMbqN.js";import"./symbol-Bwf-l63G.js";import"./useElementOffset-C1W2-wdN.js";import"./uniqBy-BhGOvFTa.js";import"./iteratee-DCpTGsx6.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
