import{R as e}from"./iframe-DxMMLjq4.js";import{R as n}from"./zIndexSlice-Crg_yDni.js";import{C as p}from"./ComposedChart-DIzopGUF.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BhIcGe65.js";import{X as f}from"./XAxis-ComdV9F0.js";import{Y as l}from"./YAxis-DlIt9IKA.js";import{L as d}from"./Line-C6CqArUN.js";import{R as h}from"./ReferenceLine-D44P74Eq.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BVIVorzK.js";import"./index-NaaaP08j.js";import"./index-BmvyjtDr.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bl28FH2f.js";import"./isWellBehavedNumber-C1o8zvOf.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-YibyDFYm.js";import"./index-BNQESuWt.js";import"./index-NKUE4uSN.js";import"./renderedTicksSlice-R0A9XcRf.js";import"./axisSelectors-CtMsP7E5.js";import"./d3-scale-DNwZMBjH.js";import"./CartesianChart-eEIqhBYs.js";import"./chartDataContext-CPgowj6N.js";import"./CategoricalChart-CkjssiaG.js";import"./CartesianAxis-Bt1NAYMU.js";import"./Layer-HeMPI1c4.js";import"./Text-BCYIz8FY.js";import"./DOMUtils-BdIlOhpH.js";import"./Label-BzF2Z4Ph.js";import"./ZIndexLayer-YMn514XV.js";import"./types-CGS0Nool.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-HWwjIPPZ.js";import"./step-57b6j_Mi.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DZU2dyQ0.js";import"./useAnimationId-todkGmix.js";import"./ActivePoints-Cydr7Ilr.js";import"./Dot-BEKU9-XN.js";import"./RegisterGraphicalItemId-fNF2iW9l.js";import"./ErrorBarContext-f2qB8qRB.js";import"./GraphicalItemClipPath-BcLAlpwf.js";import"./SetGraphicalItem-C5-E1Ui2.js";import"./getRadiusAndStrokeWidthFromDot-Dkjblrfo.js";import"./ActiveShapeUtils-CzKC_ySI.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const de=["IfOverflow"];export{t as IfOverflow,de as __namedExportsOrder,le as default};
