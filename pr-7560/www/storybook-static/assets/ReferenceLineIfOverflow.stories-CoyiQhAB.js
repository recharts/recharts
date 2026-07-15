import{R as e}from"./iframe-ClcrwGuW.js";import{R as n}from"./zIndexSlice-BIGnlmU8.js";import{C as p}from"./ComposedChart-QFp2QUo8.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-dXDFDE-n.js";import{X as f}from"./XAxis-DBark8Vy.js";import{Y as l}from"./YAxis-XJItrttK.js";import{L as d}from"./Line-A183MaDD.js";import{R as h}from"./ReferenceLine-Ty6lAS72.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CCS8xgZt.js";import"./index-2ZX0-Izg.js";import"./index-CDmIxHtk.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-9pIX-KZX.js";import"./isWellBehavedNumber-DdPJLAK-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BesFJ4ht.js";import"./index-B0NRpt-4.js";import"./index-DNzarm0L.js";import"./renderedTicksSlice-rMv3D_T6.js";import"./axisSelectors-BOLsAE8g.js";import"./d3-scale-CMtXPpnj.js";import"./CartesianChart-DuIwxUsc.js";import"./chartDataContext-STSGah94.js";import"./CategoricalChart-C5ZgEjVK.js";import"./CartesianAxis-ByEdCDio.js";import"./Layer-3ZpdhJcS.js";import"./Text-BoORctzg.js";import"./DOMUtils-Bjh7wfeW.js";import"./Label-Dq1bNHIu.js";import"./ZIndexLayer-ktmCEwYK.js";import"./types-BTRTN-qV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-CrblFnpJ.js";import"./step-Kzlz86Dk.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-LJ4rT4-Q.js";import"./useAnimationId-Dr2V8ESg.js";import"./ActivePoints-DpbrBFbr.js";import"./Dot-BJH-Cd7h.js";import"./RegisterGraphicalItemId-D8phwbUX.js";import"./ErrorBarContext-BQj1MtW_.js";import"./GraphicalItemClipPath-UUgKir8H.js";import"./SetGraphicalItem-CKgMzTJ0.js";import"./getRadiusAndStrokeWidthFromDot-DBwea6ik.js";import"./ActiveShapeUtils-kn3TCk0Z.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
