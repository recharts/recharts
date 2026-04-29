import{e}from"./iframe-Nsc2sN17.js";import{R as n}from"./arrayEqualityCheck-D9Zyw2Zw.js";import{C as p}from"./ComposedChart-DvVLDS0_.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D2BDjPCX.js";import{X as f}from"./XAxis-DyA8Ake-.js";import{Y as l}from"./YAxis-D_irT6px.js";import{L as d}from"./Line-BY3dOxaM.js";import{R as h}from"./ReferenceLine-CRCc662I.js";import{R as w}from"./RechartsHookInspector-DiJs5DhW.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-gmbWhtkI.js";import"./immer-DLWrz67V.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ckv5DlpI.js";import"./index-BHVPN82s.js";import"./hooks-C0EC2ajp.js";import"./axisSelectors-QpAjWyBl.js";import"./d3-scale-CHgSPW8E.js";import"./zIndexSlice-CNqGo6m1.js";import"./renderedTicksSlice-CYv0XDQO.js";import"./CartesianChart-CYxY5vz3.js";import"./chartDataContext-C4GxecVY.js";import"./CategoricalChart-Br-qLSqo.js";import"./CartesianAxis-C30xEFKB.js";import"./Layer-B6Mh8xHG.js";import"./Text-DiHUiXMK.js";import"./DOMUtils-P4LKJ49W.js";import"./Label-DZXeJJGm.js";import"./ZIndexLayer-Czi-cF3Q.js";import"./types-DgV3fJv5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-SHh5MmVx.js";import"./ActivePoints-CcWtEpvO.js";import"./Dot-BFU4rXWL.js";import"./RegisterGraphicalItemId-QStBr5Ie.js";import"./ErrorBarContext-BXu4nXIY.js";import"./GraphicalItemClipPath-2cdy-pu2.js";import"./SetGraphicalItem-DiLWJVic.js";import"./useAnimationId-D34EikED.js";import"./getRadiusAndStrokeWidthFromDot-OoBawEuA.js";import"./ActiveShapeUtils-j_PWExYP.js";import"./isPlainObject-WYrKXhh8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CaywoHil.js";import"./Trapezoid-BwRKBAFI.js";import"./Sector-DfnrbS26.js";import"./Symbols-eFyCyhDx.js";import"./symbol-DFqSkUaY.js";import"./step-BW4WvIvQ.js";import"./Curve-DvjoiG0X.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CbA-Jv17.js";import"./ChartSizeDimensions-B1kQCCeW.js";import"./OffsetShower-Csp2K6dU.js";import"./PlotAreaShower-LkFt_opJ.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const {
      findByText
    } = within(canvasElement);
    /**
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const Ce=["IfOverflow"];export{t as IfOverflow,Ce as __namedExportsOrder,Re as default};
