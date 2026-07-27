import{R as e}from"./iframe-C-jRtd4O.js";import{R as n}from"./zIndexSlice-C13rA1yY.js";import{C as p}from"./ComposedChart-CYkr-z0J.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BaDRxlr9.js";import{X as f}from"./XAxis-BUOjYmWG.js";import{Y as l}from"./YAxis-BsnlIXwv.js";import{L as d}from"./Line-DYmy7AmN.js";import{R as h}from"./ReferenceLine-Be7TQdKB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-t4hhNfzx.js";import"./index-JIvcUmdP.js";import"./index-yCZUjS0Z.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-hGxk2_Y7.js";import"./isWellBehavedNumber-BazoxJ8k.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CszU7DXa.js";import"./index-Cqo_qzOk.js";import"./index-CODjAUjN.js";import"./renderedTicksSlice--jA8UMed.js";import"./axisSelectors-CkStVnzz.js";import"./d3-scale-DJzOiobO.js";import"./CartesianChart-dpIhYASN.js";import"./chartDataContext-POKzhFjx.js";import"./CategoricalChart-DlYy8Ici.js";import"./CartesianAxis-Dovpw9_t.js";import"./Layer-0nVmjaPa.js";import"./Text-Bq6-_dbg.js";import"./DOMUtils-BNQTHuwM.js";import"./Label-ESmdcWMr.js";import"./ZIndexLayer-BPTUfBlU.js";import"./types-DJYeJibv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-D59rVGZ_.js";import"./isBuffer-Crkas5dz.js";import"./Curve-BSXCagUH.js";import"./step-BK85lAbe.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dni8LwDO.js";import"./useAnimationId-CyWcqLuD.js";import"./ActivePoints-B23Yd9jI.js";import"./Dot-DcnRANwh.js";import"./RegisterGraphicalItemId-fpfKicem.js";import"./ErrorBarContext-B9gJUi0L.js";import"./GraphicalItemClipPath-BbJiOV57.js";import"./SetGraphicalItem-DdFJ0gfA.js";import"./getRadiusAndStrokeWidthFromDot-DDj4ZBfK.js";import"./ActiveShapeUtils-DtJs66Wu.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const he=["IfOverflow"];export{t as IfOverflow,he as __namedExportsOrder,de as default};
