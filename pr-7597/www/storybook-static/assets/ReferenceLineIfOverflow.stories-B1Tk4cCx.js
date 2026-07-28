import{R as e}from"./iframe-BpGtcNOk.js";import{R as n}from"./zIndexSlice-BUkXJe7m.js";import{C as p}from"./ComposedChart-B3v6uaK5.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BVqjpfKu.js";import{X as f}from"./XAxis-xA3C2iEm.js";import{Y as l}from"./YAxis-CzpQ82Ya.js";import{L as d}from"./Line-C6eQtL0W.js";import{R as h}from"./ReferenceLine-DlJraBB3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D7JHSkAt.js";import"./index-CHBEpFe4.js";import"./index-CEaO1Ily.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bzz9qGby.js";import"./isWellBehavedNumber-CgtKnfGk.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-8zW8Q-QW.js";import"./index-CWPU6MDT.js";import"./index-B2c9XwPD.js";import"./renderedTicksSlice-CgSHpo4d.js";import"./axisSelectors-DvNlgVd_.js";import"./d3-scale-BIg-AE9c.js";import"./CartesianChart-D_T5BGrl.js";import"./chartDataContext-BnIwxX66.js";import"./CategoricalChart-cfDxlkao.js";import"./CartesianAxis-C36sPR-f.js";import"./Layer-CuHhWFqD.js";import"./Text-C5eSQgGe.js";import"./DOMUtils-Bd2Qm1G_.js";import"./Label-CVd1F7qG.js";import"./ZIndexLayer-Cu4Swk1f.js";import"./types-CFaUoyvU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CLwClxTv.js";import"./isBuffer-Crkas5dz.js";import"./Curve-DyH_liqO.js";import"./step-BGQUnAp4.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-I1ECyx5O.js";import"./useAnimationId-B7_Ne5YB.js";import"./ActivePoints-Bk3RD_iz.js";import"./Dot-DC3GiKbg.js";import"./RegisterGraphicalItemId-fTSs4quI.js";import"./ErrorBarContext-D-HuE8jj.js";import"./GraphicalItemClipPath-CBj-Oygo.js";import"./SetGraphicalItem-Dc3K4Fiu.js";import"./getRadiusAndStrokeWidthFromDot-DErAjZBx.js";import"./ActiveShapeUtils-BdR0GCmt.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const he=["IfOverflow"];export{t as IfOverflow,he as __namedExportsOrder,de as default};
