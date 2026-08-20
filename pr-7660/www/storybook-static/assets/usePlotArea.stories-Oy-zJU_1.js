import{R as t}from"./iframe-DsANpUmI.js";import{u as a}from"./CategoricalChart-Di7Ri-zj.js";import{R as p}from"./zIndexSlice-DvbQ_xRM.js";import{C as s}from"./ComposedChart-CC1tviS_.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Dnn5aHX6.js";import{X as l}from"./XAxis-75DaHKlQ.js";import{Y as h}from"./YAxis-Cm1QLXj3.js";import{L as c}from"./Legend-30P8gscm.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BDrHj0U2.js";import"./index-5L0AuTID.js";import"./index-BNBrr31l.js";import"./index-DLEQ2NY5.js";import"./index-D3xqrgS8.js";import"./throttle-vYgBP45f.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B-1KrEKd.js";import"./resolveDefaultProps-VCXcnZ86.js";import"./isWellBehavedNumber-Dg3vRfwI.js";import"./d3-scale-_QauBjGX.js";import"./renderedTicksSlice-BUDGobd4.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cwf-uiEG.js";import"./chartDataContext-C2aYZmpD.js";import"./Layer-DYWDW_71.js";import"./Curve-CRdwjUaH.js";import"./types-CnYkNLV_.js";import"./step-BYrDDVtV.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-rVlz1FJX.js";import"./Label-B4DeKwN7.js";import"./Text-CjTSiniW.js";import"./DOMUtils-kNujPIKB.js";import"./useId-B0Q44yTc.js";import"./useBackwardsCompatibleTheme-BBpmGxx6.js";import"./ZIndexLayer-MPr2tp5c.js";import"./useAnimationId-DetthuUW.js";import"./ActivePoints-B0q4xgtH.js";import"./Dot-DxPtGh3x.js";import"./RegisterGraphicalItemId-Cpe7Zv2c.js";import"./ErrorBarContext-C9fSG5q2.js";import"./GraphicalItemClipPath-YjZkau9w.js";import"./SetGraphicalItem-BGt3myf-.js";import"./getRadiusAndStrokeWidthFromDot-Dxn9p5np.js";import"./ActiveShapeUtils-nZLcFoMw.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-XsOc8jcn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DNdSJ6g5.js";import"./symbol-BKBwZGCo.js";import"./useElementOffset-KPxvDBEN.js";import"./uniqBy-BG78mG2t.js";import"./iteratee-CaAmmWd3.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const At=["UsePlotArea"];export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
