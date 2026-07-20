import{R as e}from"./iframe-E9cTKeRE.js";import{R as n}from"./zIndexSlice-DgjoBcM4.js";import{C as p}from"./ComposedChart-Blhk5iCf.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-LVg2aq4e.js";import{X as f}from"./XAxis-rRrOlgKo.js";import{Y as l}from"./YAxis-F7YCqO7L.js";import{L as d}from"./Line-oPEUnh-k.js";import{R as h}from"./ReferenceLine-DGBZAFx1.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CGWlJj3Y.js";import"./index-CXgkWbkn.js";import"./index-dTe_TrB1.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-VcEXnedp.js";import"./isWellBehavedNumber-CNJuLpb3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B1G603CI.js";import"./index-BKdHAXhr.js";import"./index-CCDqlq1e.js";import"./renderedTicksSlice-8_6vlRT3.js";import"./axisSelectors-Cz4e0hh2.js";import"./d3-scale-BKY6FaDv.js";import"./CartesianChart-h93kYpLN.js";import"./chartDataContext-BLSdU0GF.js";import"./CategoricalChart-Dgnr1Z5s.js";import"./CartesianAxis-X6rLp4nN.js";import"./Layer-gCSDlxX6.js";import"./Text-Z5PFJcO5.js";import"./DOMUtils-7h76k5q7.js";import"./Label-BpZfxLrK.js";import"./ZIndexLayer-T104iiSj.js";import"./types-BiCnzAm7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-CKjkPgN2.js";import"./step-xjRdG8EV.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B1DMV_LJ.js";import"./useAnimationId-DdQ6zElL.js";import"./ActivePoints-Co1l_Ha9.js";import"./Dot-DCqiO5Z7.js";import"./RegisterGraphicalItemId-y5W6RdIF.js";import"./ErrorBarContext-CrHnHUPz.js";import"./GraphicalItemClipPath-BanWagPz.js";import"./SetGraphicalItem-i24-OBmJ.js";import"./getRadiusAndStrokeWidthFromDot-CZrTH9En.js";import"./ActiveShapeUtils-D82Ok3yU.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
