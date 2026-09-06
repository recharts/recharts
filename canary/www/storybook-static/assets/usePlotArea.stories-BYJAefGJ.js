import{R as t}from"./iframe-DPI0lJK_.js";import{j as a}from"./RechartsWrapper-9a7fYH3g.js";import{R as p}from"./zIndexSlice-DaD71mPe.js";import{C as s}from"./ComposedChart-DjQUK1Js.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-D2DmyDPo.js";import{X as l}from"./XAxis-DfhI7JxR.js";import{Y as h}from"./YAxis-kaLm4VRJ.js";import{L as c}from"./Legend-BJ9d-R-S.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DO_KkPbE.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Cch7lJrg.js";import"./throttle-Bk9jlA84.js";import"./index-Ccm70UBL.js";import"./index-CCmLOwTb.js";import"./isWellBehavedNumber-BdpmJ8W0.js";import"./d3-scale-CLDzT5En.js";import"./index-DBJXL9j6.js";import"./index-DbAySsVp.js";import"./renderedTicksSlice-CXjOM9N8.js";import"./index-BlnGx-VT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BZZn2Q8U.js";import"./chartDataContext-BIJOOMrT.js";import"./CategoricalChart-DSBOz4pd.js";import"./Layer-vYxXJLXx.js";import"./Curve-CU38nB5d.js";import"./types-BLM3hXld.js";import"./step-V5YLtyHD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DshdCAFR.js";import"./Label-BtlIETXs.js";import"./Text-C3fZ5G2B.js";import"./DOMUtils-CbbnwRqi.js";import"./useId-DHEE7UYl.js";import"./useBackwardsCompatibleTheme-BwpcPfQP.js";import"./ZIndexLayer-B60U3eb3.js";import"./useAnimationId-DHeK0bmN.js";import"./ActivePoints-BDBaYtXZ.js";import"./Dot-odAwlToN.js";import"./RegisterGraphicalItemId-D_AIaJ8K.js";import"./ErrorBarContext-DcryNH3m.js";import"./GraphicalItemClipPath-D7kbGJpV.js";import"./SetGraphicalItem-CPTpIfRJ.js";import"./getRadiusAndStrokeWidthFromDot-zTtP77M2.js";import"./ActiveShapeUtils-Bg0Vulpa.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-Dt2jxgOw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Br1RuLoh.js";import"./symbol-Dg22-sA7.js";import"./useElementOffset-BEd0h0Or.js";import"./uniqBy-BrJUdere.js";import"./iteratee-Dj8b9wE-.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
