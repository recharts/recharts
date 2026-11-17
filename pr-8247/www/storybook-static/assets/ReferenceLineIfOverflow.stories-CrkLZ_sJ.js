import{R as e}from"./iframe-CcEsDsPt.js";import{R as a}from"./zIndexSlice-B6RUMmkk.js";import{C as p}from"./ComposedChart-D0JJ5S5k.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Dg7kj8bI.js";import{X as f}from"./XAxis-BYDL1VAX.js";import{Y as l}from"./YAxis-ioZsuscH.js";import{L as d}from"./Line-ZQuSY82j.js";import{R as h}from"./ReferenceLine-BMIoYg0_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CG7EywaD.js";import"./throttle-DZ4rLUZb.js";import"./index-BtX-QQGe.js";import"./index-BVtuMGKw.js";import"./RechartsWrapper-Clhdkuph.js";import"./axisSelectors-CKb6nzHd.js";import"./polarAxisSelectors-DR_PitVn.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CJ6MxznC.js";import"./index-SbP6Yowi.js";import"./index--ncHqsRr.js";import"./renderedTicksSlice-ModyArOC.js";import"./index-Cos4qCXe.js";import"./fillDefinitions-C6z_LMZM.js";import"./CartesianChart-C019ixZ1.js";import"./chartDataContext-DMXCxnSO.js";import"./CategoricalChart-BMAmMdOt.js";import"./CartesianAxis-BUPldUtv.js";import"./Layer-fXDLQXYt.js";import"./Text-wPKGoZhq.js";import"./ZIndexLayer-DOqZSl62.js";import"./Label-CMmdEaqf.js";import"./types-DELOeU-O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-D2q8IfYm.js";import"./step-BQxy8stc.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-frn6yaTB.js";import"./ActivePoints-IAr-p6xM.js";import"./Dot-VbU1fpiG.js";import"./activeStyles-CiUshd_8.js";import"./useAnimationId-qpAzE9JI.js";import"./Symbols-CB4LXAVB.js";import"./symbol-CBgh6xJV.js";import"./ErrorBarContext-CPIS3FDy.js";import"./SetGraphicalItem-CHwZeAHG.js";import"./getRadiusAndStrokeWidthFromDot-D--XkPxF.js";import"./ActiveShapeUtils-CMoHIOd4.js";import"./useEffectiveDataKey-B9tlhySB.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
