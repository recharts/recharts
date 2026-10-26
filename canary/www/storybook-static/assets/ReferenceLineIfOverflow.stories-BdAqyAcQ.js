import{R as e}from"./iframe-DfmqqqCr.js";import{R as a}from"./zIndexSlice-d0YHK6xw.js";import{C as p}from"./ComposedChart-gLZpFizW.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CRNF13y_.js";import{X as f}from"./XAxis-B0knr_7L.js";import{Y as l}from"./YAxis-b9ABcoaF.js";import{L as d}from"./Line-Dip9Rer8.js";import{R as h}from"./ReferenceLine-9SPhPEJ6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-ComwQ6WC.js";import"./throttle-DAA8X2l5.js";import"./index-Lp2jcwfG.js";import"./index-CSO17-J0.js";import"./RechartsWrapper-D6KUw4si.js";import"./axisSelectors-DWglHHAi.js";import"./polarAxisSelectors-DpDn-hFD.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Ci_zYY1V.js";import"./index-pJqwg3_d.js";import"./index-hdUN889v.js";import"./renderedTicksSlice-C4mLmnSQ.js";import"./index-CQMOT26p.js";import"./CartesianChart-LSHb6JPq.js";import"./ZIndexPortal-BDrojabW.js";import"./CategoricalChart-BsBaBvnF.js";import"./CartesianAxis-CYll20RU.js";import"./Layer-BrcDHHcB.js";import"./Text-CG3VrxOm.js";import"./pageBackground-dHeomk-I.js";import"./ZIndexLayer-Cvk6PIs7.js";import"./Label-C130jv2t.js";import"./dataEntryStyles-CeCkFK1K.js";import"./types-9Kx7AXVb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DdFuR-cZ.js";import"./step-pAgvwVo8.js";import"./path-DyVhHtw_.js";import"./LabelList-C0IeivS9.js";import"./ActivePoints-h83UhP7R.js";import"./Dot-BTf9HS3j.js";import"./activeStyles-CHOILxkP.js";import"./useAnimationId-RNI69aEn.js";import"./Symbols-BOmwAADp.js";import"./symbol-CvaR8Ff4.js";import"./RegisterGraphicalItemId-CzjpJBeg.js";import"./ErrorBarContext-C3AKnlrm.js";import"./SetGraphicalItem-41fol6Y1.js";import"./getRadiusAndStrokeWidthFromDot-CCLTT3lF.js";import"./ActiveShapeUtils-Csx1hMVo.js";import"./useEffectiveDataKey-Ri-wD3JN.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},xe=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};export{t as IfOverflow,xe as __namedExportsOrder,ye as default};
