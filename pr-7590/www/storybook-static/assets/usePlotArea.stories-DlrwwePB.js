import{R as t}from"./iframe-CLpUHFUx.js";import{u as a}from"./CategoricalChart-D4oV83W1.js";import{R as p}from"./zIndexSlice-ih_i1g5t.js";import{C as s}from"./ComposedChart-7luAuAhp.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CDweeEof.js";import{X as l}from"./XAxis-DQukB1wG.js";import{Y as h}from"./YAxis-2SAbeq8Q.js";import{L as c}from"./Legend-DubnagiF.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-VhXLtIU3.js";import"./index-BQRTjV6n.js";import"./index-BWENVgmR.js";import"./index-CvxUcRs5.js";import"./index-DaW4Sl48.js";import"./throttle-CLd1kjXB.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CuCo3UJj.js";import"./axisSelectors-DcdgEKfW.js";import"./resolveDefaultProps-DTakvVP9.js";import"./isWellBehavedNumber-CHss1wLf.js";import"./d3-scale-BxXYUMYM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BoKvv8NW.js";import"./chartDataContext-BXtd66MC.js";import"./Layer-3AQvPOBc.js";import"./Curve-DZJekjpR.js";import"./types-BtWOZotP.js";import"./step-_f2gFda3.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BvAtBQX7.js";import"./Label-Cri2SigJ.js";import"./Text-CSq4IeED.js";import"./DOMUtils-D-nz1rzx.js";import"./ZIndexLayer-DoU1T_G7.js";import"./useAnimationId-NKiMzI6a.js";import"./ActivePoints-B2iIRtsT.js";import"./Dot-rjCZu1cP.js";import"./RegisterGraphicalItemId-D5SJC0o6.js";import"./ErrorBarContext-DOU6usMR.js";import"./GraphicalItemClipPath-BJ5GEIwI.js";import"./SetGraphicalItem-DL6fPXwP.js";import"./getRadiusAndStrokeWidthFromDot-b1AZaPVX.js";import"./ActiveShapeUtils-BoZWmQGY.js";import"./CartesianAxis-Dv_zGlnO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-H0HhizFF.js";import"./symbol-2ZaHrFGi.js";import"./useElementOffset-4nhhdQM-.js";import"./uniqBy-BL16Mnd5.js";import"./iteratee-DMRQCYyf.js";const ht={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ct=["UsePlotArea"];export{e as UsePlotArea,ct as __namedExportsOrder,ht as default};
