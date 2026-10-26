import{R as t}from"./iframe-BuTq1GDI.js";import{z as a}from"./RechartsWrapper-tdUtbdK0.js";import{R as p}from"./zIndexSlice-nFeNXjL9.js";import{C as n}from"./ComposedChart-DnSJfh-P.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Cnlbc_ep.js";import{X as l}from"./XAxis-DP0H9aj2.js";import{Y as h}from"./YAxis-CWQHnkYU.js";import{L as c}from"./Legend-B-AJ2NNh.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BvjC40ji.js";import"./get-cF5BDHN6.js";import"./axisSelectors-C8SZQKCy.js";import"./throttle-Bg_wxbeM.js";import"./index-BVmeVX9a.js";import"./index-C37pRckm.js";import"./polarAxisSelectors-DrJ1eC5o.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B-VNUnVY.js";import"./index-CEj4l4tR.js";import"./index-Uz7QCUjK.js";import"./renderedTicksSlice-BeHs1Q1W.js";import"./index-CvYG7xEe.js";import"./CartesianChart-BC3FDidD.js";import"./chartDataContext-DlVD7MBP.js";import"./CategoricalChart-DnThaA0e.js";import"./Layer-BRqC8U5C.js";import"./Curve-C8MCRMFW.js";import"./types-CybiymHT.js";import"./step-0wDi7QEY.js";import"./path-DyVhHtw_.js";import"./activeStyles-CQul6riI.js";import"./Label-DQJj2wvU.js";import"./Text-CBEIE7g5.js";import"./pageBackground-BebQB_1W.js";import"./useId-haS85Qmm.js";import"./ZIndexLayer-eqYDQc0b.js";import"./dataEntryStyles-Cr3Y7I5g.js";import"./useAnimationId-PmZ8IQYc.js";import"./ActivePoints-D-jCEXzk.js";import"./Dot-DXKfrrZj.js";import"./Symbols-B1k2vOqr.js";import"./symbol-HuKWM0tX.js";import"./RegisterGraphicalItemId-DoGvUQF1.js";import"./ErrorBarContext-DxkrfkAD.js";import"./SetGraphicalItem-B6ig3Thz.js";import"./getRadiusAndStrokeWidthFromDot-B4lTyA66.js";import"./ActiveShapeUtils-6CQyjc5t.js";import"./useEffectiveDataKey-BAtZCpA-.js";import"./CartesianAxis-DubJAr-q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-F7lpUKWy.js";import"./uniqBy-DEYzcYqJ.js";import"./iteratee-BH09cOPg.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
