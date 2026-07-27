import{R as t}from"./iframe-KfsXDyYe.js";import{u as a}from"./CategoricalChart-D28QOUrV.js";import{R as p}from"./zIndexSlice-DRQ5ZoPP.js";import{C as s}from"./ComposedChart-DZx5d73W.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BKA-K_z5.js";import{X as l}from"./XAxis-BunU0kIP.js";import{Y as h}from"./YAxis-BIQLiJJ1.js";import{L as c}from"./Legend-PPLZhzBK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B1g5OPk8.js";import"./index-BcSxHpM2.js";import"./index-D3u1xKBW.js";import"./index-B8nw1mbK.js";import"./index-USmxlz8z.js";import"./throttle-0X77pc-d.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-VAstzL9_.js";import"./axisSelectors-DqRFL16u.js";import"./resolveDefaultProps-CJQcFjaM.js";import"./isWellBehavedNumber-B9hqvBfv.js";import"./d3-scale-CwZ0fpJQ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CedzGa4b.js";import"./chartDataContext-CrbAMOHN.js";import"./Layer-DvnIPp0b.js";import"./Curve-DHdhUSXl.js";import"./types-Cp7Kv4cO.js";import"./step-ww9sKUkN.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CsvMn_0v.js";import"./Label-dJq5mBhi.js";import"./Text-Cvia8ncb.js";import"./DOMUtils-r4qPFFQL.js";import"./ZIndexLayer-DyFku1ry.js";import"./useAnimationId-BRufZRyg.js";import"./ActivePoints-DD9eCF-L.js";import"./Dot-BXiPHS-i.js";import"./RegisterGraphicalItemId-BVy8O7ka.js";import"./ErrorBarContext-BxIBjeUQ.js";import"./GraphicalItemClipPath-CLORxtCR.js";import"./SetGraphicalItem-BXsnmgyo.js";import"./getRadiusAndStrokeWidthFromDot-D62YsXR3.js";import"./ActiveShapeUtils-YGV0Qwxy.js";import"./RechartsThemeContext-s5HlCTRW.js";import"./CartesianAxis-DJyQkACC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-ClWMTeYK.js";import"./symbol-7YHxc7ew.js";import"./useElementOffset-DrZ2pKQv.js";import"./uniqBy-BdchAijA.js";import"./iteratee-ByW1jmvF.js";const ct={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["UsePlotArea"];export{e as UsePlotArea,gt as __namedExportsOrder,ct as default};
