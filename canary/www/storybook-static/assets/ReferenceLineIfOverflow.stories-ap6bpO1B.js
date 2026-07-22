import{R as e}from"./iframe-CM9KFlpR.js";import{R as n}from"./zIndexSlice-i3oRyNLb.js";import{C as p}from"./ComposedChart-BliiGcYz.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-xoKjjEyX.js";import{X as f}from"./XAxis-BpZNPHzq.js";import{Y as l}from"./YAxis-CI94Yo_i.js";import{L as d}from"./Line-D_p7ofiv.js";import{R as h}from"./ReferenceLine-BKWO3Aaa.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-De6mCLNM.js";import"./index-DWeI466K.js";import"./index-CIwJAIlL.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Ck7rGCA-.js";import"./isWellBehavedNumber-D6ap16Bm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DaqDuaqH.js";import"./index-BQLe23-Y.js";import"./index-CO_J2hQh.js";import"./renderedTicksSlice-B9ba2EdW.js";import"./axisSelectors-gWKpmW3G.js";import"./d3-scale-BtCHm39u.js";import"./CartesianChart-Bh6VCjY7.js";import"./chartDataContext-Do1rIj0R.js";import"./CategoricalChart-DG8gXHxR.js";import"./CartesianAxis-wxz_d6Fj.js";import"./Layer-CyTLoz3L.js";import"./Text-Z2Be4kdC.js";import"./DOMUtils-5L50_gtE.js";import"./Label-8JT3S2zg.js";import"./ZIndexLayer-CLQFgWIH.js";import"./types-BZH27c5K.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-DN_e8w4x.js";import"./step-DSranele.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dc6JrbcK.js";import"./useAnimationId-OG1_HfMp.js";import"./ActivePoints-BWeInnwU.js";import"./Dot-kCj2iLyE.js";import"./RegisterGraphicalItemId-BY7wzIRb.js";import"./ErrorBarContext-L6TULBDt.js";import"./GraphicalItemClipPath-mABwVFdR.js";import"./SetGraphicalItem-CktbvIN2.js";import"./getRadiusAndStrokeWidthFromDot-CWl-YjkB.js";import"./ActiveShapeUtils-BKApU02X.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
