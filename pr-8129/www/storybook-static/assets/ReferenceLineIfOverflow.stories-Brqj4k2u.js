import{R as e}from"./iframe-COxqCazb.js";import{R as a}from"./zIndexSlice-B4X5qRzI.js";import{C as p}from"./ComposedChart-DWRPdfx_.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DGVWDWQH.js";import{X as f}from"./XAxis-DQrBzVHK.js";import{Y as l}from"./YAxis-ZsGxmqjy.js";import{L as d}from"./Line-n5MGWX7b.js";import{R as h}from"./ReferenceLine-B-at1wCi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-yMt3tC3j.js";import"./throttle-D4LJPOuI.js";import"./index-CmlNloJu.js";import"./index-BFPgWdWH.js";import"./RechartsWrapper-MgEDcD8h.js";import"./axisSelectors-uSjAZrah.js";import"./polarAxisSelectors-a1oAG-SZ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D8xTnIof.js";import"./index-BQ5RDrN3.js";import"./index-BymcG2zO.js";import"./renderedTicksSlice-CPgi-eJ3.js";import"./index-BE8xWht0.js";import"./CartesianChart-lA_wA_-C.js";import"./ZIndexPortal-B9PAyW6q.js";import"./CategoricalChart-C0aYCun5.js";import"./CartesianAxis-CjYDk6nf.js";import"./Layer-D2zViLNQ.js";import"./Text-C4rvSXOn.js";import"./DOMUtils-BLBk64WL.js";import"./pageBackground-zdIyeBG0.js";import"./ZIndexLayer-cSzqGwkX.js";import"./Label-BiNM6_QG.js";import"./types-3E7AO6tV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-HVISG19w.js";import"./Curve-C7Cjm8FO.js";import"./step-CbCZbxFO.js";import"./path-DyVhHtw_.js";import"./LabelList-DLxGydTH.js";import"./ActivePoints-DN4_EmYC.js";import"./Dot-DR7axIwT.js";import"./activeStyles-Dz5dwfdA.js";import"./useAnimationId-CI1eTN6X.js";import"./dataEntryStyles-DJkgxm7x.js";import"./Symbols-pJe31Clp.js";import"./symbol-DFh_91jg.js";import"./ErrorBarContext-CSA0hXTc.js";import"./SetGraphicalItem-DfnH2C1-.js";import"./getRadiusAndStrokeWidthFromDot-gHegAbBA.js";import"./ActiveShapeUtils-DhrWvn7z.js";import"./useEffectiveDataKey-DbCVmzAC.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,xe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},ue=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};export{t as IfOverflow,ue as __namedExportsOrder,xe as default};
