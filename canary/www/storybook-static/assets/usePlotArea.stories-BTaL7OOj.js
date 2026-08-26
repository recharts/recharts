import{R as t}from"./iframe-Yg2vC8jl.js";import{j as a}from"./RechartsWrapper-rNmWVTcA.js";import{R as p}from"./zIndexSlice-BElsb48m.js";import{C as s}from"./ComposedChart-DjyZhCdh.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Cc2La8TY.js";import{X as l}from"./XAxis-BCD8PGRZ.js";import{Y as h}from"./YAxis-C7vKKbMF.js";import{L as c}from"./Legend-D2QQ31Cv.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bsa29K_S.js";import"./get-C2VjdU0L.js";import"./axisSelectors-nv9p39UG.js";import"./throttle-BaCh1BSI.js";import"./index-CHZ1utW3.js";import"./index-CN9KpfAX.js";import"./isWellBehavedNumber-DQgk1tKw.js";import"./d3-scale-DXOKnb1o.js";import"./index--8spWne3.js";import"./index-B_F5nQFz.js";import"./renderedTicksSlice-ChVEhIgt.js";import"./index-CqWRosMe.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C7IlXP4I.js";import"./chartDataContext-Dlt4sLo1.js";import"./CategoricalChart-EUZHEGq1.js";import"./Layer-B4IabIdW.js";import"./Curve-DpihRFk6.js";import"./types-DJ9rCugd.js";import"./step-DK4VgiZ3.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CaVCuQAN.js";import"./Label-D-3Je9Ku.js";import"./Text-DdvnI_Yn.js";import"./DOMUtils-CUUEg-Ut.js";import"./useId-CIFQ64hu.js";import"./useBackwardsCompatibleTheme-ByLQZtu6.js";import"./ZIndexLayer-DxM-QnJb.js";import"./useAnimationId-DsPfmOTd.js";import"./ActivePoints-BlvoLXcy.js";import"./Dot-C9WYn9kj.js";import"./RegisterGraphicalItemId-DblvaP9s.js";import"./ErrorBarContext-BRhPIJ9q.js";import"./GraphicalItemClipPath-Ow_WyG3Z.js";import"./SetGraphicalItem-V-QFpaIF.js";import"./getRadiusAndStrokeWidthFromDot-hxmc-IYv.js";import"./ActiveShapeUtils-Ch49efhn.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-D_n_4bqq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CUEb3Vdg.js";import"./symbol-CTUXJ_bE.js";import"./useElementOffset-4hd-uwJ-.js";import"./uniqBy-D5HXXEeh.js";import"./iteratee-Bl4bR9Yp.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["UsePlotArea"];export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
