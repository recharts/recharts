import{R as t}from"./iframe-0BZy6ovm.js";import{u as a}from"./CategoricalChart-hrSTyr7f.js";import{R as p}from"./zIndexSlice-BIk5RwDD.js";import{C as s}from"./ComposedChart-BZt5HSsG.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BqjDeTuk.js";import{X as l}from"./XAxis-CpzBATa7.js";import{Y as h}from"./YAxis-vaHPQHN5.js";import{L as c}from"./Legend-BYhpegXH.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DN-j5lzD.js";import"./index-C9HBA5-V.js";import"./index-BRBcTSHI.js";import"./index-TucVX7sw.js";import"./index-BJl6RyTQ.js";import"./throttle-DiDu5xyi.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D-aV3CxY.js";import"./resolveDefaultProps-DgX86JLB.js";import"./isWellBehavedNumber-D86CElyX.js";import"./d3-scale-D3apC1JT.js";import"./renderedTicksSlice-BqoCmvXn.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-n4Lt6mFH.js";import"./chartDataContext-BAuSJd-k.js";import"./Layer-6uGVVV7y.js";import"./Curve-80kkET8R.js";import"./types-CUmyHBBS.js";import"./step-LsS_armE.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B0lHzkOL.js";import"./Label-C0FrVcAE.js";import"./Text-Bh7Xcfw9.js";import"./DOMUtils-D2BAAnEX.js";import"./useBackwardsCompatibleTheme-CXpr_aCI.js";import"./ZIndexLayer-AgSG9OQ6.js";import"./useAnimationId-D-aszzjL.js";import"./ActivePoints-Cv_MWE-P.js";import"./Dot-B2MNIfB_.js";import"./RegisterGraphicalItemId-BhyVkMoB.js";import"./ErrorBarContext-D0zljKj-.js";import"./GraphicalItemClipPath-BgcM8yOE.js";import"./SetGraphicalItem-CM7A1obe.js";import"./getRadiusAndStrokeWidthFromDot-BStcUf-0.js";import"./ActiveShapeUtils-BtFIRlOA.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-D2KJhy7k.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Dw0UsXtJ.js";import"./symbol-CC9QiqhF.js";import"./useElementOffset-DjmvUNAh.js";import"./uniqBy-B6coPXXs.js";import"./iteratee-XKFyRSES.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ut=["UsePlotArea"];export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
