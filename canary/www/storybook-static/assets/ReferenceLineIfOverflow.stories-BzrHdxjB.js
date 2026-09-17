import{R as e}from"./iframe-CqRpABaK.js";import{R as a}from"./zIndexSlice-KvzMEBh7.js";import{C as p}from"./ComposedChart-DCUriljY.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CL9aC2vs.js";import{X as f}from"./XAxis-BSRwnZMq.js";import{Y as l}from"./YAxis-qoSfFU5r.js";import{L as d}from"./Line-8cbiPC_u.js";import{R as h}from"./ReferenceLine-C27pYUWy.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BjLrRmHo.js";import"./index-TAONuQw1.js";import"./index-D1EEl4o-.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dp9amxWt.js";import"./isWellBehavedNumber-CUSt0J5q.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Q6-Ges1c.js";import"./axisSelectors-Bh6roEOt.js";import"./d3-scale-DITi7lUc.js";import"./index-DhXYHAxS.js";import"./index-Bn22tw5D.js";import"./renderedTicksSlice-Ddky5d5u.js";import"./index-BT_XvWwU.js";import"./CartesianChart-Bxw3yjgR.js";import"./chartDataContext-Cz0raIOD.js";import"./CategoricalChart-yTIhx19f.js";import"./CartesianAxis-NW0JLUgH.js";import"./Layer-g-5IuUpa.js";import"./Text-CXo2baHO.js";import"./DOMUtils-DJUl9uN8.js";import"./useId-BbgR7tKy.js";import"./useBackwardsCompatibleTheme-DXXC_Hh5.js";import"./Label-IjPv9f7P.js";import"./ZIndexLayer-D34xXT-L.js";import"./types-CC73-uTJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BcRTskgb.js";import"./step-BuSHEP_V.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CBpEgVGL.js";import"./useAnimationId-BJd8TCij.js";import"./ActivePoints-CyBSG7Nh.js";import"./Dot-CMcfKVB4.js";import"./RegisterGraphicalItemId-B1YLlZGq.js";import"./ErrorBarContext-CYofUAqs.js";import"./GraphicalItemClipPath-BVicx7bF.js";import"./SetGraphicalItem-B8cx_Fws.js";import"./getRadiusAndStrokeWidthFromDot-5mvy0zL6.js";import"./ActiveShapeUtils-EpogqgxJ.js";import"./useGraphicalItemIdentity-BjVJGRyR.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ye as __namedExportsOrder,ve as default};
