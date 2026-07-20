import{R as e}from"./iframe-vOLnYXOZ.js";import{R as n}from"./zIndexSlice-Mv0cm5Fz.js";import{C as p}from"./ComposedChart-CHIk5yi2.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BHd5fEEF.js";import{X as f}from"./XAxis-DZdEV9rv.js";import{Y as l}from"./YAxis-jgbh3-iB.js";import{L as d}from"./Line-Ii7UCjUa.js";import{R as h}from"./ReferenceLine-D-YBjSl5.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-H6UrPiO3.js";import"./index-Ccx6Fn8x.js";import"./index-Bno8px0F.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DMvU9hKF.js";import"./isWellBehavedNumber-TyK-Q9bs.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-cdIriNtS.js";import"./index-C_GLmlAa.js";import"./index-loUlOQAQ.js";import"./renderedTicksSlice-zOvani6W.js";import"./axisSelectors-9pB8uUjg.js";import"./d3-scale-CXVWvw2_.js";import"./CartesianChart-6FCR2qTV.js";import"./chartDataContext-CdBeAXiw.js";import"./CategoricalChart-BHtJtaWL.js";import"./CartesianAxis-B04tnKne.js";import"./Layer-BzdlA6Ig.js";import"./Text-FiyA8tGX.js";import"./DOMUtils-Di4Ni1ZE.js";import"./Label-D2t7QHPj.js";import"./ZIndexLayer-DaGlu0J6.js";import"./types-DL_lANQl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-DpB1TURa.js";import"./step-DBkijEka.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-M5yh8SZt.js";import"./useAnimationId-J9bbR3c6.js";import"./ActivePoints-DMSGIjaa.js";import"./Dot-BOZyGCoc.js";import"./RegisterGraphicalItemId-YQ-tZiZG.js";import"./ErrorBarContext-CYCJv9Vs.js";import"./GraphicalItemClipPath-CSPsls6A.js";import"./SetGraphicalItem-Dz9FndIn.js";import"./getRadiusAndStrokeWidthFromDot-DaL3Xp1Q.js";import"./ActiveShapeUtils-CX_xtPwj.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
