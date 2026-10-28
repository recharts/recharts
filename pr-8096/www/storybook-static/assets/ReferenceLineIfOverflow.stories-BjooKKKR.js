import{R as e}from"./iframe-PkW0ejx3.js";import{R as a}from"./zIndexSlice-CtEWDdkW.js";import{C as p}from"./ComposedChart-coptphr3.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-q8L3bfBU.js";import{X as f}from"./XAxis-CyABI53G.js";import{Y as l}from"./YAxis-B7QgfXKC.js";import{L as d}from"./Line-DzHsVnQW.js";import{R as h}from"./ReferenceLine-CiSUGnMz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CnX9VcG6.js";import"./throttle-DhIpRp7y.js";import"./index-2kQDiEg9.js";import"./index-CthbcSOz.js";import"./RechartsWrapper-DJcwwy7_.js";import"./axisSelectors-CBaUhvBl.js";import"./polarAxisSelectors-DErot-vK.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C_GfRdoG.js";import"./index-bhfK5Tel.js";import"./index-DCKddudy.js";import"./renderedTicksSlice-BiYv8y7m.js";import"./index-DIk-TLTX.js";import"./CartesianChart-CtUUiyil.js";import"./ZIndexPortal-DB_x6J9o.js";import"./CategoricalChart-CFsdFZkP.js";import"./CartesianAxis-BJQP999U.js";import"./Layer-D2wEMTDW.js";import"./Text-DQ7hgPmk.js";import"./pageBackground-BxU5BZDR.js";import"./ZIndexLayer-wqGg5hkh.js";import"./Label-V19_IbKL.js";import"./types-iBZQammS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DU0fyPxy.js";import"./step-Ckyxmzdw.js";import"./path-DyVhHtw_.js";import"./LabelList-BcjFKpxG.js";import"./ActivePoints-DYuBZm8s.js";import"./Dot-ByWXk2hq.js";import"./activeStyles-RIXOH0Ky.js";import"./useAnimationId-JttpOibe.js";import"./dataEntryStyles-BkC7RZGO.js";import"./Symbols-BgSbEpWI.js";import"./symbol-BJli0oSq.js";import"./ErrorBarContext-RvIB7RYt.js";import"./SetGraphicalItem-rvzc4GbA.js";import"./getRadiusAndStrokeWidthFromDot-DFz9CZPw.js";import"./ActiveShapeUtils-hU5Uvesj.js";import"./useEffectiveDataKey-UMh99VlP.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
