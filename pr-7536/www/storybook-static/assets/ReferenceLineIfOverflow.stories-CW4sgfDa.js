import{R as e}from"./iframe-GFu4u_Sr.js";import{R as n}from"./zIndexSlice-B5qFJFtI.js";import{C as p}from"./ComposedChart-aZQazbAt.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B6smzfpZ.js";import{X as f}from"./XAxis-DCmYbaAb.js";import{Y as l}from"./YAxis-DPkQctbd.js";import{L as d}from"./Line-DxAxJoY7.js";import{R as h}from"./ReferenceLine-C5Up0Isn.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CQYhSY5q.js";import"./index-J8ff_bgA.js";import"./index-BoT4UeUf.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-B2kj8vGo.js";import"./isWellBehavedNumber-BzBjtwBe.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-GJPBo-3J.js";import"./index-fFvV_i1o.js";import"./index-CFslUPNA.js";import"./renderedTicksSlice-Dhv-F3Ii.js";import"./axisSelectors-CITTcs7P.js";import"./d3-scale-XJfpe2FZ.js";import"./CartesianChart-5jGrrHiW.js";import"./chartDataContext-ABcCQ5OY.js";import"./CategoricalChart-DaWqkQxP.js";import"./CartesianAxis-BChvL9JZ.js";import"./Layer-rjKJbMCf.js";import"./Text-CHl4arA0.js";import"./DOMUtils-BV_Da9To.js";import"./Label-DJGaBZN0.js";import"./ZIndexLayer-DO98mi6X.js";import"./types-CpBB06eN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-d1fxHJEK.js";import"./step-CJ2svyaN.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BMr3q6ws.js";import"./useAnimationId-DHrR_uSV.js";import"./ActivePoints-BKnSZj52.js";import"./Dot-Cf60LmSz.js";import"./RegisterGraphicalItemId-C2TZCZTY.js";import"./ErrorBarContext-E48lOcW2.js";import"./GraphicalItemClipPath-Dp-oK_MY.js";import"./SetGraphicalItem-BWFxWlyV.js";import"./getRadiusAndStrokeWidthFromDot-CavQSINe.js";import"./ActiveShapeUtils-DrDRZtp1.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
