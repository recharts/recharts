import{e}from"./iframe-CiPNgAw4.js";import{g as n}from"./arrayEqualityCheck-C6nfogx3.js";import{C as p}from"./ComposedChart-CbPk0YX9.js";import{p as s}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-v62u6AaS.js";import{X as f}from"./XAxis-BLKgRQop.js";import{Y as l}from"./YAxis-D3BtMUGk.js";import{L as d}from"./Line-DcN9XZ8g.js";import{R as h}from"./ReferenceLine-B6F-fCme.js";import{R as w}from"./RechartsHookInspector-CVL4J5oe.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BDpBhHr1.js";import"./immer-BXEbVIgV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D7DJEHdB.js";import"./index-DQVpqsS2.js";import"./hooks-BI7NI193.js";import"./axisSelectors-Cy_y_L06.js";import"./d3-scale-CMk2gc8P.js";import"./zIndexSlice-BxzsaYhB.js";import"./renderedTicksSlice-Bj7nK2mV.js";import"./CartesianChart-BCFleW8G.js";import"./chartDataContext-BajvTs6w.js";import"./CategoricalChart-DbOO-7mB.js";import"./CartesianAxis-CWGiyJPj.js";import"./Layer-tX1B1sjt.js";import"./Text-BwxXBXY0.js";import"./DOMUtils-D_v29T4S.js";import"./Label-C61zhpRD.js";import"./ZIndexLayer-D-L4yEZ6.js";import"./types-DpsbB84I.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-2ol7Qocl.js";import"./ActivePoints-9r2oCFw-.js";import"./Dot-DSD9slKq.js";import"./RegisterGraphicalItemId-Cfezvs_M.js";import"./ErrorBarContext-DeoWvLpT.js";import"./GraphicalItemClipPath-KikDG9N5.js";import"./SetGraphicalItem-Cc5PlSKV.js";import"./useAnimationId-ZolSEiin.js";import"./getRadiusAndStrokeWidthFromDot-CjDQOwTJ.js";import"./ActiveShapeUtils-DVoj5wPa.js";import"./isPlainObject-32kxwUzR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DvhSXBPG.js";import"./Trapezoid-DD_RcOCU.js";import"./Sector-Cott3o-2.js";import"./Symbols-CZNQWcFs.js";import"./symbol-DD46dP6C.js";import"./step-DNW2l5aF.js";import"./Curve-CIk8sgOv.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BVLD_GdP.js";import"./ChartSizeDimensions-BUpN4cof.js";import"./OffsetShower-BX6EEwKB.js";import"./PlotAreaShower-D9cRvfnk.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const Ce=["IfOverflow"];export{t as IfOverflow,Ce as __namedExportsOrder,ge as default};
