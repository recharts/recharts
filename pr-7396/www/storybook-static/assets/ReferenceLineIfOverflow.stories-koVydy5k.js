import{R as e}from"./iframe-BOLHcnEq.js";import{R as n}from"./zIndexSlice-C8kTqOmj.js";import{C as p}from"./ComposedChart-D7OPmIGY.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CSl3R0dP.js";import{X as f}from"./XAxis-C1WN-pkQ.js";import{Y as l}from"./YAxis-YubxuWa5.js";import{L as d}from"./Line-Bcy1OQBu.js";import{R as h}from"./ReferenceLine-CZIyRXDz.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CxjXtk_l.js";import"./index-tgbEpTci.js";import"./index-D6CwE66r.js";import"./get-Q7-QRRNs.js";import"./resolveDefaultProps-Z5NUUnaV.js";import"./isWellBehavedNumber-wvIQrlfJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B7tC_WXo.js";import"./index-B1Z2mgyL.js";import"./index-CeNzyE2J.js";import"./renderedTicksSlice-CxjdWKYi.js";import"./axisSelectors-C8lj3akb.js";import"./d3-scale-C1j7mBel.js";import"./CartesianChart-BmPupl9-.js";import"./chartDataContext-C7_PfxRX.js";import"./CategoricalChart-Ytc03f7l.js";import"./CartesianAxis-Cr_Ww8PH.js";import"./Layer-CuuZoUsG.js";import"./Text-XHfzhZk8.js";import"./DOMUtils-D0co-hPv.js";import"./Label-DYMy2guT.js";import"./ZIndexLayer-CNPe-074.js";import"./types-DPwewkdM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-Bqb8d6oT.js";import"./step-ClQLV_9Q.js";import"./path-DyVhHtw_.js";import"./ReactUtils-8Czxn-Uo.js";import"./ActivePoints-D1Ow9Sb1.js";import"./Dot-CFAalLdL.js";import"./RegisterGraphicalItemId-f9q-fu78.js";import"./ErrorBarContext-C3dgZsKy.js";import"./GraphicalItemClipPath--wTpErch.js";import"./SetGraphicalItem-D2UHcxYS.js";import"./useAnimationId-BckTdhqG.js";import"./getRadiusAndStrokeWidthFromDot-Uv4j9P_J.js";import"./ActiveShapeUtils-DWIyzqt2.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
