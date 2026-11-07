import{R as e}from"./iframe-DWt4J3JN.js";import{R as a}from"./zIndexSlice-NSNONz_v.js";import{C as p}from"./ComposedChart-Dnd49qHa.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CZCTJzkK.js";import{X as f}from"./XAxis-Ct82dr0g.js";import{Y as l}from"./YAxis-CsFlwLse.js";import{L as d}from"./Line-0mvPQ6iO.js";import{R as h}from"./ReferenceLine-4i7dBbbZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D4EpIsqz.js";import"./throttle-Dk5xsQjg.js";import"./index-BdNcxnLc.js";import"./index-C3nO4u5d.js";import"./RechartsWrapper-COqAJslP.js";import"./axisSelectors-BS7avNJg.js";import"./polarAxisSelectors-BNqZLY2c.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BC5jrybd.js";import"./index-FrWa7Exr.js";import"./index-vXblBJSu.js";import"./renderedTicksSlice-C-fcLX-F.js";import"./index-Dvam2yfO.js";import"./fillDefinitions-CXWevUoQ.js";import"./CartesianChart-cgT47Vj6.js";import"./chartDataContext-CFu7cHCJ.js";import"./CategoricalChart-CSFFRE3G.js";import"./ZIndexPortal-CNwyGADw.js";import"./CartesianAxis-Ch6tESXa.js";import"./Layer-D1fzjsCN.js";import"./Text-BH_q_eI2.js";import"./DOMUtils-gLxo7mD7.js";import"./ZIndexLayer-gpvd6E93.js";import"./Label-Bkb0GMep.js";import"./types-BbXG2_az.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DrWralR8.js";import"./step-Bit_NyY0.js";import"./path-DyVhHtw_.js";import"./LabelList-DCtJIAIf.js";import"./ActivePoints-BL9AGUXf.js";import"./Dot-BgFpa2WJ.js";import"./activeStyles-DEL6Q9xK.js";import"./useAnimationId-DaySoH3H.js";import"./dataEntryStyles-CMWxjrvv.js";import"./Symbols-DwZTYmJ_.js";import"./symbol-DVO5NwTU.js";import"./ErrorBarContext-D_UxjrQr.js";import"./SetGraphicalItem-cSBJzNh5.js";import"./getRadiusAndStrokeWidthFromDot-KA7euB10.js";import"./ActiveShapeUtils-BICHaO6W.js";import"./useEffectiveDataKey---V5hCOC.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,xe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},ue=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};export{t as IfOverflow,ue as __namedExportsOrder,xe as default};
