import{R as t}from"./iframe-B3isOhIl.js";import{e as p}from"./RechartsWrapper-DMqUbMYB.js";import{R as a}from"./zIndexSlice-B54EHMmU.js";import{C as n}from"./ComposedChart-DAKT1lAu.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-i0YCmvNd.js";import{X as l}from"./XAxis-XCclqj4B.js";import{Y as h}from"./YAxis-DVwvC3Cs.js";import{L as c}from"./Legend-FsD39S4Q.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CDjD_Xww.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DsO3f3GY.js";import"./throttle-twRdBhxV.js";import"./index-l8cQaZi5.js";import"./index-BCE7BcH7.js";import"./isWellBehavedNumber-BqtgSWx4.js";import"./d3-scale-C7hQHBL4.js";import"./index-DTYhzia9.js";import"./index-DD7K-mQd.js";import"./renderedTicksSlice-RPn9Fn_C.js";import"./index-CTz2_SJP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B6c5jQVZ.js";import"./chartDataContext-CzVXhMmy.js";import"./CategoricalChart-BlqE1d7Y.js";import"./Layer-DDNmqfG8.js";import"./Curve-DIW9jtlG.js";import"./types-BQEZ_W3y.js";import"./step-Dv6pVXah.js";import"./path-DyVhHtw_.js";import"./activeStyles-D2IXZFhG.js";import"./Label-CVF_BzUf.js";import"./Text-BQG2REj-.js";import"./pageBackground-DLA1FFDB.js";import"./useId-BSb_3vlL.js";import"./useBackwardsCompatibleTheme-BnO74GVQ.js";import"./ZIndexLayer-DVIMR7Fc.js";import"./useAnimationId-BArccDj7.js";import"./dataEntryStyles-COQULstw.js";import"./ActivePoints-YnhJh1Z3.js";import"./Dot-BukrvTYR.js";import"./ErrorBarContext-C1S_4TWD.js";import"./GraphicalItemClipPath-CFeguTu_.js";import"./SetGraphicalItem-4H3JYgxm.js";import"./getRadiusAndStrokeWidthFromDot-iVxMWqst.js";import"./ActiveShapeUtils-D_L17MSu.js";import"./useEffectiveDataKey-_8Y1huCA.js";import"./CartesianAxis-CpEPqood.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CHRhA_xc.js";import"./symbol-C0zBHoL6.js";import"./useElementOffset-Bt2O-KAE.js";import"./uniqBy-CLwCtMAQ.js";import"./iteratee-TbnSWGh6.js";import"./isArguments-yB-y1yaH.js";const ft={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(a,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},yt=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,yt as __namedExportsOrder,ft as default};
