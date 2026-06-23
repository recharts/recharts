import{R as e}from"./iframe-DQmeeGiA.js";import{R as n}from"./zIndexSlice-vj7A5RkB.js";import{C as p}from"./ComposedChart-CaXqoiyd.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D1MIA-G4.js";import{X as f}from"./XAxis-CPOb-1qE.js";import{Y as l}from"./YAxis-BSQK2YTa.js";import{L as d}from"./Line-BWR_fQDK.js";import{R as h}from"./ReferenceLine-CYMggToe.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CuM-_qKB.js";import"./index-DCJPjZ_f.js";import"./index-D_KMR0re.js";import"./get-D0YgmYSp.js";import"./resolveDefaultProps-CQRwsHO0.js";import"./isWellBehavedNumber-CJ4H_fXR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D3uqokgy.js";import"./index-D1lTGX2z.js";import"./index-ZLNt73_J.js";import"./renderedTicksSlice-CpMyOcpp.js";import"./axisSelectors-Cn3uvYUg.js";import"./d3-scale-B-26TW07.js";import"./CartesianChart-CE19F1By.js";import"./chartDataContext-GPNpGYxg.js";import"./CategoricalChart-D7Ayh5uN.js";import"./CartesianAxis-CsI9VW1t.js";import"./Layer-C92GpBxv.js";import"./Text-CaOtzMPo.js";import"./DOMUtils-D4CFUHQm.js";import"./Label-DLumr0gz.js";import"./ZIndexLayer-LS7m1tXW.js";import"./types-BWqAEvBR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-BSCksJ2p.js";import"./step-B5y8ObV2.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DSodAZpf.js";import"./useAnimationId-VbcZ3sEu.js";import"./ActivePoints-CeLiAPaS.js";import"./Dot-DKRonFKw.js";import"./RegisterGraphicalItemId-Bgc1uwdC.js";import"./ErrorBarContext-aN2SYuw4.js";import"./GraphicalItemClipPath-BWRZakeV.js";import"./SetGraphicalItem-CiXKqcwE.js";import"./getRadiusAndStrokeWidthFromDot-AjrfEp5x.js";import"./ActiveShapeUtils-CHmC6EYX.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
