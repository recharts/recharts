import{R as t}from"./iframe-R4QFQ0mF.js";import{u as a}from"./CategoricalChart-19q5KTev.js";import{R as p}from"./zIndexSlice-BTkVJube.js";import{C as s}from"./ComposedChart-CPp9Pcna.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DLAu7BAy.js";import{X as l}from"./XAxis-ByHGiOU3.js";import{Y as h}from"./YAxis-D-mO_MPY.js";import{L as c}from"./Legend-CElsNDhX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D9XL2NUc.js";import"./index-C7Ze2qQC.js";import"./index-KYrClEjC.js";import"./index-BBlWDw9H.js";import"./index-DqGKL0Lc.js";import"./immer-C5zbr-FM.js";import"./get-CX1Ejt3V.js";import"./renderedTicksSlice-C_2YTMnY.js";import"./axisSelectors-CP1mQpG7.js";import"./d3-scale-CmSi9of_.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-UuXIKvS7.js";import"./isWellBehavedNumber-SGwhJUiP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BPaTY41c.js";import"./chartDataContext-rpS38Kv6.js";import"./Layer-C8zF3tZM.js";import"./Curve-NcOFJc9S.js";import"./types-CyqiaD7e.js";import"./step-E1t4k1kh.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-yF_BXiw0.js";import"./Label-gFQEPWtd.js";import"./Text-GL96gXYN.js";import"./DOMUtils-_wFbcz4z.js";import"./ZIndexLayer-D26CDD8U.js";import"./useAnimationId-QtK1xgnL.js";import"./ActivePoints-CIJh5p82.js";import"./Dot-Yljeb2kx.js";import"./RegisterGraphicalItemId-3Swfrcok.js";import"./ErrorBarContext-lGs_n3Xc.js";import"./GraphicalItemClipPath-DORaDiAV.js";import"./SetGraphicalItem-C97kVeur.js";import"./getRadiusAndStrokeWidthFromDot-DLeAaRBg.js";import"./ActiveShapeUtils-BkpD7S65.js";import"./CartesianAxis-DvCYtJ7x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-C4uiRQk0.js";import"./symbol-C_D4j-JV.js";import"./useElementOffset-B2eBjAqg.js";import"./uniqBy-CBOsBGNk.js";import"./iteratee-Bd9zYSkO.js";const ht={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
