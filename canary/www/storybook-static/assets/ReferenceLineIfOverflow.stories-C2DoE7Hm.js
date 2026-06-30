import{R as e}from"./iframe-C0ZUsupJ.js";import{R as n}from"./zIndexSlice-OijFhdu6.js";import{C as p}from"./ComposedChart-9XUsCVAP.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-rH1uqcF0.js";import{X as f}from"./XAxis-CEau4At0.js";import{Y as l}from"./YAxis-DiMOUlNc.js";import{L as d}from"./Line-GWKTyGlv.js";import{R as h}from"./ReferenceLine-ZB45Cs1w.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C0jUqI7U.js";import"./index-CWmFnIlt.js";import"./index-qQ2Np5IV.js";import"./get-DKb0zYvY.js";import"./resolveDefaultProps-CFzFI254.js";import"./isWellBehavedNumber-DY6SAaVJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BP4cUW8r.js";import"./index-DMeIlV1g.js";import"./index-TZ5Clshf.js";import"./renderedTicksSlice-CdGxqG4t.js";import"./axisSelectors-DBehuelT.js";import"./d3-scale-Cab4s2n5.js";import"./CartesianChart-SF4H61CS.js";import"./chartDataContext-DULpfCbg.js";import"./CategoricalChart-BnZfW2OJ.js";import"./CartesianAxis-CRBuloTO.js";import"./Layer-BvM0W8cF.js";import"./Text-Rgvblv2w.js";import"./DOMUtils-C2N7ljjM.js";import"./Label-zyObFa2R.js";import"./ZIndexLayer-BTGgoWh-.js";import"./types-BB9QSyE9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-Dx8uylpR.js";import"./step-Bvy6aUz4.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BucsPXo8.js";import"./useAnimationId-gV_9QBVg.js";import"./ActivePoints-CcGnfgvg.js";import"./Dot-BLe5foEI.js";import"./RegisterGraphicalItemId-kZ3u-TBa.js";import"./ErrorBarContext-CryOhevP.js";import"./GraphicalItemClipPath-CYUXkmtT.js";import"./SetGraphicalItem-BrVQB63z.js";import"./getRadiusAndStrokeWidthFromDot-C4MEnK3i.js";import"./ActiveShapeUtils-qSpTYyL4.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const le=["IfOverflow"];export{t as IfOverflow,le as __namedExportsOrder,fe as default};
