import{R as e}from"./iframe-3VVC0EYx.js";import{R as n}from"./zIndexSlice-C9c9QQWy.js";import{C as p}from"./ComposedChart-BSwVfM9_.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BTUT72i6.js";import{X as f}from"./XAxis-b3cnYQsk.js";import{Y as l}from"./YAxis-CQsWrDlS.js";import{L as d}from"./Line-CPqvnRUF.js";import{R as h}from"./ReferenceLine-BC27Wjy4.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CNUd1gZq.js";import"./index-dUhqMgMz.js";import"./index-C9Se9_4o.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DJCePyCz.js";import"./isWellBehavedNumber-D8cUYDpZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cu7UZSGV.js";import"./index-D9g8mJB5.js";import"./index-CufvXBKU.js";import"./axisSelectors-B7dqcVa4.js";import"./d3-scale-CshH80dj.js";import"./renderedTicksSlice-D0fiht4g.js";import"./CartesianChart-B55un86Y.js";import"./chartDataContext-ylnzbaG8.js";import"./CategoricalChart-DbawHDOk.js";import"./CartesianAxis-DBlrGcdR.js";import"./Layer-BVcdrpr1.js";import"./Text-DxD-h55l.js";import"./DOMUtils-jlGUgeWT.js";import"./Label-B_1XKNb_.js";import"./ZIndexLayer-DAQTkU_L.js";import"./types-Bwo4GPNk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-5aynFYgW.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BpqmVEGV.js";import"./step-JaBbtSkB.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BDqZZjDt.js";import"./useAnimationId-D9vHT7-j.js";import"./ActivePoints-BpwW4_4p.js";import"./Dot-DAIotGMm.js";import"./RegisterGraphicalItemId-CNwWR-CS.js";import"./ErrorBarContext-B62Uz1n4.js";import"./GraphicalItemClipPath-t0-9VWN4.js";import"./SetGraphicalItem-C2V0lGXl.js";import"./getRadiusAndStrokeWidthFromDot-BuIM6rGB.js";import"./ActiveShapeUtils-BH_C9PRa.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,he={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const we=["IfOverflow"];export{t as IfOverflow,we as __namedExportsOrder,he as default};
