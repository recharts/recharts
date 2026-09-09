import{R as t}from"./iframe-BkVFpUlY.js";import{j as a}from"./RechartsWrapper-odbOlBoE.js";import{R as p}from"./zIndexSlice-DsJvGkf_.js";import{C as n}from"./ComposedChart-B-luCTs0.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Bb6pgpT5.js";import{X as l}from"./XAxis-DKVVz-sZ.js";import{Y as h}from"./YAxis-ydoiCG45.js";import{L as c}from"./Legend-BtNq6Pa5.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BteSFwB2.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B50PWx2F.js";import"./throttle-BmqzJcEu.js";import"./index-0hsVYWu6.js";import"./index-DymoF_97.js";import"./isWellBehavedNumber-CfBMT12P.js";import"./d3-scale-DYQ4LMXq.js";import"./index-Q5aHXVFQ.js";import"./index-YkbYvVvq.js";import"./renderedTicksSlice-CwTU9gZs.js";import"./index-DUxWWrkZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CqMhYxBy.js";import"./chartDataContext-VrlvbsLo.js";import"./CategoricalChart-CzfSjKl0.js";import"./Layer-DQ1QN6bj.js";import"./Curve-j6CNmiH0.js";import"./types-CKn4wQG_.js";import"./step-BxPdVPhz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BpowKEth.js";import"./Label-Cg9XptP0.js";import"./Text-BIwedGTb.js";import"./DOMUtils-BcDWMqtm.js";import"./useId-Cugd2wLY.js";import"./useBackwardsCompatibleTheme-bP9OoM6q.js";import"./ZIndexLayer-CfoAs0yr.js";import"./useAnimationId-Bk6mcJf6.js";import"./ActivePoints-De3lIG5I.js";import"./Dot-D7W2BemX.js";import"./RegisterGraphicalItemId-C4Vmg6Ny.js";import"./ErrorBarContext-BYIQqhKW.js";import"./GraphicalItemClipPath-KjuHWuk-.js";import"./SetGraphicalItem-BGmRK6gI.js";import"./getRadiusAndStrokeWidthFromDot-QIQHTPvf.js";import"./ActiveShapeUtils-BSJyn28s.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-CKyL8NSQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-B3HUvLyw.js";import"./symbol-DQsNkJaP.js";import"./useElementOffset-CXmZJxz2.js";import"./uniqBy-CqDyWSTv.js";import"./iteratee-CmG9r8ck.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
