import{R as e}from"./iframe-OYo09Kjn.js";import{R as a}from"./zIndexSlice-C0otV0Tq.js";import{C as p}from"./ComposedChart-O8l7FYsv.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DrqfL26O.js";import{X as f}from"./XAxis-C4iNCAUT.js";import{Y as l}from"./YAxis-B9J5xeR5.js";import{L as d}from"./Line-OzMS9cmg.js";import{R as h}from"./ReferenceLine-DhfBFIKr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BV2Pd4xr.js";import"./throttle-2ukkMEiH.js";import"./index-B1YAqRON.js";import"./index-jR8-nOeq.js";import"./RechartsWrapper-DDeqrE6g.js";import"./axisSelectors-DwbFlqn_.js";import"./polarAxisSelectors-h48S2J0z.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CkZT7Yna.js";import"./index-D6UCrPx5.js";import"./index-OFmsSHfS.js";import"./renderedTicksSlice-Dj299CQx.js";import"./index-C9mjTPMA.js";import"./fillDefinitions-DyAhyaHy.js";import"./CartesianChart-CU1owHvq.js";import"./ZIndexPortal-THJMy4l1.js";import"./CategoricalChart-reFCYYlz.js";import"./CartesianAxis-Ce7EujIW.js";import"./Layer-BKQ7Cq1e.js";import"./Text-Dl7WOzrI.js";import"./DOMUtils-VDBzCn3R.js";import"./ZIndexLayer-fjsdvpte.js";import"./Label-BLd_HfLL.js";import"./types-CzskQIcv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DVj7Kjw7.js";import"./step-DXZ6DTgl.js";import"./path-DyVhHtw_.js";import"./LabelList-D8hIzv9X.js";import"./ActivePoints-YU9mNETr.js";import"./Dot-BVDEoTVF.js";import"./activeStyles-By7c-_I7.js";import"./useAnimationId-Bfw_1I20.js";import"./dataEntryStyles-CwKCb_eK.js";import"./Symbols-DShbzJAN.js";import"./symbol-CmMsv7zq.js";import"./ErrorBarContext-Dht0z-3r.js";import"./SetGraphicalItem-C2cjU4L3.js";import"./getRadiusAndStrokeWidthFromDot-BexLXBfB.js";import"./ActiveShapeUtils-DsFWfn7B.js";import"./useEffectiveDataKey-BkqAzi9W.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},xe=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};export{t as IfOverflow,xe as __namedExportsOrder,ye as default};
