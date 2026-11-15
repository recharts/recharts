import{R as e}from"./iframe-aStk4u5G.js";import{R as a}from"./zIndexSlice-fM76ZZLK.js";import{C as p}from"./ComposedChart-DHDQZPyt.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DshMrsYX.js";import{X as f}from"./XAxis-ENAn7eOB.js";import{Y as l}from"./YAxis-IZNj2QSL.js";import{L as d}from"./Line-CaBl6OwL.js";import{R as h}from"./ReferenceLine-BcIzrp_e.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DDGoEIzP.js";import"./throttle-DVcVwqMz.js";import"./index-D3-ZjHvX.js";import"./index-CudRwpbI.js";import"./RechartsWrapper-Ds4ZmDze.js";import"./axisSelectors-DBp9gfhA.js";import"./polarAxisSelectors-DXerv3y1.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B6YLYpaJ.js";import"./index-D44dfxkc.js";import"./index-C0ZJcZh_.js";import"./renderedTicksSlice-Bb9pf7FB.js";import"./index-CA0MPyj7.js";import"./fillDefinitions-Daf3k0lp.js";import"./CartesianChart-D7_rHSjg.js";import"./chartDataContext-Dl30_h0X.js";import"./CategoricalChart-C74L4aLC.js";import"./CartesianAxis-B4XXfFP6.js";import"./Layer-BjWQQh7I.js";import"./Text-ByyFOVFg.js";import"./ZIndexLayer-CcTOehup.js";import"./Label-CSHZSiX2.js";import"./types-DjvBJzo1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DVkDevWh.js";import"./step-CGueoSlz.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BcmbbFXW.js";import"./ActivePoints-B2wgHnUT.js";import"./Dot-CNnV5EQe.js";import"./activeStyles-CZ0hnhrg.js";import"./useAnimationId-BKAZWpn4.js";import"./Symbols-CNyA1mlx.js";import"./symbol-C-8FiWil.js";import"./ErrorBarContext-ABxS7lmh.js";import"./SetGraphicalItem-Yj9tvd7_.js";import"./getRadiusAndStrokeWidthFromDot-D8PfYcSQ.js";import"./ActiveShapeUtils-BP2ijoKU.js";import"./useEffectiveDataKey-mYWLQ9Vk.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ve as __namedExportsOrder,we as default};
