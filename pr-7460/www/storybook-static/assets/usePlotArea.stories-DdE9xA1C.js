import{R as t}from"./iframe-DQmeeGiA.js";import{u as a}from"./CategoricalChart-D7Ayh5uN.js";import{R as p}from"./zIndexSlice-vj7A5RkB.js";import{C as s}from"./ComposedChart-CaXqoiyd.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BWR_fQDK.js";import{X as l}from"./XAxis-CPOb-1qE.js";import{Y as h}from"./YAxis-BSQK2YTa.js";import{L as c}from"./Legend-C01_CC6W.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D3uqokgy.js";import"./index-D1lTGX2z.js";import"./index-ZLNt73_J.js";import"./index-DCJPjZ_f.js";import"./index-D_KMR0re.js";import"./immer-CuM-_qKB.js";import"./get-D0YgmYSp.js";import"./renderedTicksSlice-CpMyOcpp.js";import"./axisSelectors-Cn3uvYUg.js";import"./d3-scale-B-26TW07.js";import"./resolveDefaultProps-CQRwsHO0.js";import"./isWellBehavedNumber-CJ4H_fXR.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CE19F1By.js";import"./chartDataContext-GPNpGYxg.js";import"./Layer-C92GpBxv.js";import"./Curve-BSCksJ2p.js";import"./types-BWqAEvBR.js";import"./step-B5y8ObV2.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DSodAZpf.js";import"./Label-DLumr0gz.js";import"./Text-CaOtzMPo.js";import"./DOMUtils-D4CFUHQm.js";import"./ZIndexLayer-LS7m1tXW.js";import"./useAnimationId-VbcZ3sEu.js";import"./ActivePoints-CeLiAPaS.js";import"./Dot-DKRonFKw.js";import"./RegisterGraphicalItemId-Bgc1uwdC.js";import"./ErrorBarContext-aN2SYuw4.js";import"./GraphicalItemClipPath-BWRZakeV.js";import"./SetGraphicalItem-CiXKqcwE.js";import"./getRadiusAndStrokeWidthFromDot-AjrfEp5x.js";import"./ActiveShapeUtils-CHmC6EYX.js";import"./CartesianAxis-CsI9VW1t.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-uMOogOnn.js";import"./symbol-BWzlkA2r.js";import"./useElementOffset-Duwsc3QZ.js";import"./uniqBy-KqLhsUPy.js";import"./iteratee-B34lqcgr.js";const lt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ht=["UsePlotArea"];export{e as UsePlotArea,ht as __namedExportsOrder,lt as default};
