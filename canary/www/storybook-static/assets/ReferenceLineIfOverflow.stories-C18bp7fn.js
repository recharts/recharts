import{R as e}from"./iframe-CgNYO6-5.js";import{R as n}from"./zIndexSlice-BB8bPu9P.js";import{C as p}from"./ComposedChart-CSBQfKzg.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-q_3QKKNS.js";import{X as f}from"./XAxis-C0BZU2xf.js";import{Y as l}from"./YAxis-BVStaARi.js";import{L as d}from"./Line-BPx5nNHj.js";import{R as h}from"./ReferenceLine-DxCq6Owv.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CLMZeuK1.js";import"./index-CP-P0bP3.js";import"./index-CNUb9tOf.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DdU6Jg07.js";import"./isWellBehavedNumber-hgWpBQUm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DQslZ_yd.js";import"./index-Dqgfl7Xj.js";import"./index-xSjlJOhZ.js";import"./axisSelectors-O08Nn3VB.js";import"./d3-scale-Bd_S1jK4.js";import"./renderedTicksSlice-BBv91KB4.js";import"./CartesianChart-BI9vfx5j.js";import"./chartDataContext-NHEnIpFz.js";import"./CategoricalChart-JtBUTVNJ.js";import"./CartesianAxis-DiTVEOFJ.js";import"./Layer-TfcNVFTj.js";import"./Text-CjIgHDXs.js";import"./DOMUtils-Cwa2E0AM.js";import"./useId-BaSa9afh.js";import"./useBackwardsCompatibleTheme-CvkC2w7r.js";import"./Label-DE97QbhK.js";import"./ZIndexLayer-BByjeLs4.js";import"./types-Un7Q3Ppr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-D6U3M4gK.js";import"./step-D20fkZ91.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CL4P6dH7.js";import"./useAnimationId-B1M8XMfI.js";import"./ActivePoints-CdA3IFED.js";import"./Dot-DR-c-Eu3.js";import"./RegisterGraphicalItemId-5U6GT5jV.js";import"./ErrorBarContext-DMrc2lGS.js";import"./GraphicalItemClipPath-CdOc_skb.js";import"./SetGraphicalItem-CAAg-5Jk.js";import"./getRadiusAndStrokeWidthFromDot-B5DnJ6_A.js";import"./ActiveShapeUtils-DOY9-ZZr.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:m})=>{const{findByText:a}=v(m);w(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const ve=["IfOverflow"];export{t as IfOverflow,ve as __namedExportsOrder,we as default};
