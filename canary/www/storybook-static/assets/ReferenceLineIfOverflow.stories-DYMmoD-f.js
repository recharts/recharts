import{R as e}from"./iframe-BivO5BoJ.js";import{R as n}from"./zIndexSlice-Bjz_KcZJ.js";import{C as p}from"./ComposedChart-Bey5_4WZ.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Nd8vuP0W.js";import{X as f}from"./XAxis-CJk4qOf_.js";import{Y as l}from"./YAxis-CMfIE2am.js";import{L as d}from"./Line-DOQ0pUTN.js";import{R as h}from"./ReferenceLine-BFoF-Wux.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BplF9VH1.js";import"./index-03GkEewG.js";import"./index-B0o2St2z.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B41TlN8V.js";import"./isWellBehavedNumber-BP5BBjcl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DFOf-gVb.js";import"./index-DdI5aF1Z.js";import"./index-eGB7E-8r.js";import"./axisSelectors-DhnOFegq.js";import"./d3-scale-oUOyK3d-.js";import"./renderedTicksSlice-CI5d0VIf.js";import"./CartesianChart-By-DJA1x.js";import"./chartDataContext-bLv_3jvW.js";import"./CategoricalChart-piOEuQ3H.js";import"./CartesianAxis-yaWpeoNa.js";import"./Layer-CQraiAmP.js";import"./Text-B8O_8yPP.js";import"./DOMUtils-CA0Xf545.js";import"./Label-C7YhLpFH.js";import"./ZIndexLayer-TaYOeXN7.js";import"./types-Ci90ji2E.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CezfAeyp.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DmB3zN28.js";import"./step-D7AgkVHN.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Daz5NR7w.js";import"./useAnimationId-C4RNTUIo.js";import"./ActivePoints-_kZDvhaZ.js";import"./Dot-BA4sFX2k.js";import"./RegisterGraphicalItemId-CmSKkMyt.js";import"./ErrorBarContext-ChpCgx9m.js";import"./GraphicalItemClipPath-xHJ3Vi6r.js";import"./SetGraphicalItem-D5hw8CGc.js";import"./graphicalItemIdentity-PtVRHa7z.js";import"./ActiveShapeUtils-BWMWU3gW.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
