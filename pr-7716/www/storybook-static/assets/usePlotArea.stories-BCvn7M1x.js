import{R as t}from"./iframe-eCr2-59Z.js";import{j as a}from"./RechartsWrapper-DoeZcTzK.js";import{R as p}from"./zIndexSlice-CD7Nzmbk.js";import{C as s}from"./ComposedChart-BRMyWNIf.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-C0J7S93P.js";import{X as l}from"./XAxis-BeuO0xzQ.js";import{Y as h}from"./YAxis-Cuh1Lbu7.js";import{L as c}from"./Legend-Lf0FqqrH.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CLrpEwf5.js";import"./get-C2VjdU0L.js";import"./axisSelectors-XgUrcrj-.js";import"./throttle-CHiOBW5g.js";import"./index-DlVaZeCX.js";import"./index-CDbn5IN3.js";import"./isWellBehavedNumber-BX5cDItw.js";import"./d3-scale-DSuKdHKR.js";import"./index-D2uCi-Qk.js";import"./index-CyK8wlGY.js";import"./renderedTicksSlice-BlPrZ01d.js";import"./index-BuNBM-8V.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DC1yVdgS.js";import"./chartDataContext-BNVmIje_.js";import"./CategoricalChart-w4Nfi_R8.js";import"./Layer-B9Pm5ax2.js";import"./Curve-_JaX0enx.js";import"./types-CkIcctJW.js";import"./step-DPSpBZpB.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ObasoevI.js";import"./Label-Dt0yALiM.js";import"./Text-Dt8yoLTw.js";import"./DOMUtils-CvaVkNT1.js";import"./useId-wEfkqppv.js";import"./useBackwardsCompatibleTheme-chYhM6Hr.js";import"./ZIndexLayer-t0OZMtls.js";import"./useAnimationId-BzRkh0x1.js";import"./ActivePoints-Cr5YS-RN.js";import"./Dot-C_rZA8Hd.js";import"./RegisterGraphicalItemId-C5jGdxAH.js";import"./ErrorBarContext-CMzXWbdm.js";import"./GraphicalItemClipPath-C8yNHMes.js";import"./SetGraphicalItem-zq2UkTvM.js";import"./getRadiusAndStrokeWidthFromDot-BYtBcAc6.js";import"./ActiveShapeUtils-9F7-N6Ps.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-DM1SJqww.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CPNbxaWf.js";import"./symbol-CB8M2uMu.js";import"./useElementOffset-MEJhTGNO.js";import"./uniqBy-U4NYpMNG.js";import"./iteratee-iLRiaLVh.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
