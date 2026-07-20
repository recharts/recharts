import{R as e}from"./iframe-DzolqKW_.js";import{R as n}from"./zIndexSlice-BFydgfU7.js";import{C as p}from"./ComposedChart-BXGKVBvM.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-7m42T_8O.js";import{X as f}from"./XAxis-GMhM5CFR.js";import{Y as l}from"./YAxis-DB_rcNlV.js";import{L as d}from"./Line-DiVWIN5q.js";import{R as h}from"./ReferenceLine-C1Dv3Nbq.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BWqOgTiL.js";import"./index-BGQgYr9p.js";import"./index-CXHzwmBK.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bn-Ns7xT.js";import"./isWellBehavedNumber-DaFHOJVp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CninMw2k.js";import"./index-BYzdNJg2.js";import"./index-BjJlMzFo.js";import"./renderedTicksSlice-BTl9iHqH.js";import"./axisSelectors-BWPQJWKM.js";import"./d3-scale-BOKuOqr8.js";import"./CartesianChart-DRSod0ni.js";import"./chartDataContext-D0TMVBgy.js";import"./CategoricalChart-tg3Y8Ccg.js";import"./CartesianAxis-CSVxSdOY.js";import"./Layer-TAE-BGU4.js";import"./Text-Oy6dFGv9.js";import"./DOMUtils-D4HAj4Uf.js";import"./Label-BR8h5iiR.js";import"./ZIndexLayer-CuyP-vcu.js";import"./types-BKcxhU3G.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-D6-Bsbi2.js";import"./step-DRn0xJ5_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D8n1PMNM.js";import"./useAnimationId-BCQ5DS1y.js";import"./ActivePoints-CAwFhkX4.js";import"./Dot-CwbyEbx1.js";import"./RegisterGraphicalItemId-DAxQkrUf.js";import"./ErrorBarContext-HJrjbNNf.js";import"./GraphicalItemClipPath-Cf6TT0yv.js";import"./SetGraphicalItem-F22FHLao.js";import"./getRadiusAndStrokeWidthFromDot-BzM4Z0nC.js";import"./ActiveShapeUtils-B3c1p96o.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
