import{e}from"./iframe-CELk_iHp.js";import{R as n}from"./arrayEqualityCheck-Jv-_2dlt.js";import{C as p}from"./ComposedChart-DXLKPhmj.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CPcwhuKo.js";import{X as f}from"./XAxis-Dkm5sOcL.js";import{Y as l}from"./YAxis-PBKVxaw1.js";import{L as d}from"./Line-BgJkyWDy.js";import{R as h}from"./ReferenceLine-DCSjIbIN.js";import{R as w}from"./RechartsHookInspector-zC8sO4Uu.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DGpqOJqH.js";import"./immer-CNryykoH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-iaOd2vsR.js";import"./index-C7-Jna_X.js";import"./hooks-nYvhXGgN.js";import"./axisSelectors-B_B8N_DF.js";import"./d3-scale-CkPD6mk7.js";import"./zIndexSlice-BKa9iYJo.js";import"./renderedTicksSlice-fDAVE1e2.js";import"./CartesianChart-D2sMjbuw.js";import"./chartDataContext-BGxyOe8E.js";import"./CategoricalChart-oFZY99PF.js";import"./CartesianAxis-Bdrxnh8Y.js";import"./Layer--Pc4EXaW.js";import"./Text-Bw3NjmwC.js";import"./DOMUtils-D-Am5_eq.js";import"./Label-Bd9YpboY.js";import"./ZIndexLayer-CCDRMMaH.js";import"./types-CyX-tNTq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Dj0EWLrR.js";import"./ActivePoints-DO7snJgn.js";import"./Dot-dGAlOqLg.js";import"./RegisterGraphicalItemId-DNcpshuw.js";import"./ErrorBarContext-DacGNm7D.js";import"./GraphicalItemClipPath-CX61POx4.js";import"./SetGraphicalItem-HEs6iBS3.js";import"./useAnimationId-1GRLd7ca.js";import"./getRadiusAndStrokeWidthFromDot-wRVRq9dq.js";import"./ActiveShapeUtils-B3MGtfHB.js";import"./isPlainObject-BehFM2KM.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CE1dlDuT.js";import"./Trapezoid-Dfk3zDGx.js";import"./Sector-DOGbklsh.js";import"./Symbols-Dx2mis7o.js";import"./symbol-DhXBBxwA.js";import"./step-BZd9qX-S.js";import"./Curve-D55eTV1c.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CuVYK_Ov.js";import"./ChartSizeDimensions-M-hHKi9p.js";import"./OffsetShower-ePPaic-x.js";import"./PlotAreaShower-D-7S5_Wy.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
