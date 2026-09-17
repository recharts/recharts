import{R as t}from"./iframe-CqRpABaK.js";import{j as a}from"./RechartsWrapper-Q6-Ges1c.js";import{R as p}from"./zIndexSlice-KvzMEBh7.js";import{C as n}from"./ComposedChart-DCUriljY.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-8cbiPC_u.js";import{X as l}from"./XAxis-BSRwnZMq.js";import{Y as h}from"./YAxis-qoSfFU5r.js";import{L as c}from"./Legend-DisbDxLC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Dp9amxWt.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Bh6roEOt.js";import"./throttle-BjLrRmHo.js";import"./index-TAONuQw1.js";import"./index-D1EEl4o-.js";import"./isWellBehavedNumber-CUSt0J5q.js";import"./d3-scale-DITi7lUc.js";import"./index-DhXYHAxS.js";import"./index-Bn22tw5D.js";import"./renderedTicksSlice-Ddky5d5u.js";import"./index-BT_XvWwU.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bxw3yjgR.js";import"./chartDataContext-Cz0raIOD.js";import"./CategoricalChart-yTIhx19f.js";import"./Layer-g-5IuUpa.js";import"./Curve-BcRTskgb.js";import"./types-CC73-uTJ.js";import"./step-BuSHEP_V.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CBpEgVGL.js";import"./Label-IjPv9f7P.js";import"./Text-CXo2baHO.js";import"./DOMUtils-DJUl9uN8.js";import"./useId-BbgR7tKy.js";import"./useBackwardsCompatibleTheme-DXXC_Hh5.js";import"./ZIndexLayer-D34xXT-L.js";import"./useAnimationId-BJd8TCij.js";import"./ActivePoints-CyBSG7Nh.js";import"./Dot-CMcfKVB4.js";import"./RegisterGraphicalItemId-B1YLlZGq.js";import"./ErrorBarContext-CYofUAqs.js";import"./GraphicalItemClipPath-BVicx7bF.js";import"./SetGraphicalItem-B8cx_Fws.js";import"./getRadiusAndStrokeWidthFromDot-5mvy0zL6.js";import"./ActiveShapeUtils-EpogqgxJ.js";import"./useGraphicalItemIdentity-BjVJGRyR.js";import"./CartesianAxis-NW0JLUgH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Y4gf4X3g.js";import"./symbol-nTVagevz.js";import"./useElementOffset-MH0vo0Hf.js";import"./uniqBy-wzlT94X_.js";import"./iteratee-D6dIEdRH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
