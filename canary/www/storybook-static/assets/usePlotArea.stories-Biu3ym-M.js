import{R as t}from"./iframe-kr7fVjhm.js";import{u as a}from"./CategoricalChart-Bef2xtAx.js";import{R as p}from"./zIndexSlice-BZPaZoVE.js";import{C as s}from"./ComposedChart-C2Jq_jCe.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-6cFMEXcZ.js";import{X as l}from"./XAxis-DuCvvYgu.js";import{Y as h}from"./YAxis-BoMreVA5.js";import{L as c}from"./Legend-DaaANHpW.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BXLkHwYV.js";import"./index-Bi4GHbSg.js";import"./index-C_7j0jGJ.js";import"./index-D2MHq5Hk.js";import"./index-B4gF14t1.js";import"./throttle-D_awpPCx.js";import"./get-Clowvj21.js";import"./renderedTicksSlice-DSu7HAeh.js";import"./axisSelectors-C6aKDGBg.js";import"./d3-scale-D8KPLyuv.js";import"./resolveDefaultProps-B2SvaHgo.js";import"./isWellBehavedNumber-Dgwr4Y0K.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-xwjZDYjt.js";import"./chartDataContext-CX_0Naaw.js";import"./Layer-BpeNKyUn.js";import"./Curve-B0z7kkbw.js";import"./types-BF09pdOO.js";import"./step-DhEFjA1U.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DqhNqm_F.js";import"./Label-BzX4e21C.js";import"./Text-DjM5ugTe.js";import"./DOMUtils-C68MxIVY.js";import"./ZIndexLayer-DgDl0x_M.js";import"./useAnimationId-D5l55oDh.js";import"./ActivePoints-DGPf_3U2.js";import"./Dot-B_HKYeQ3.js";import"./RegisterGraphicalItemId-fKNs0JEp.js";import"./ErrorBarContext-CdB9Q1sE.js";import"./GraphicalItemClipPath-BFOwa2gv.js";import"./SetGraphicalItem-CV-IUFmw.js";import"./getRadiusAndStrokeWidthFromDot-ow-LYvhf.js";import"./ActiveShapeUtils-DcRBgo4o.js";import"./CartesianAxis-BtEPbzKb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-KemAPzJP.js";import"./symbol-eaW9wbCt.js";import"./useElementOffset-CARKZxzP.js";import"./uniqBy-DyaTa3fk.js";import"./iteratee-Bt60GMeU.js";const lt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
