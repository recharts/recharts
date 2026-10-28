import{R as e}from"./iframe-D4oHTXd2.js";import{R as a}from"./zIndexSlice-FaOQzDXI.js";import{C as p}from"./ComposedChart-D_8jOcv5.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-rvbRojsQ.js";import{X as f}from"./XAxis--JtbYt43.js";import{Y as l}from"./YAxis-BYtNm8pH.js";import{L as d}from"./Line-icQsYXEb.js";import{R as h}from"./ReferenceLine-ZTLGJwtA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-56IWAvtJ.js";import"./throttle-IWj5GY0g.js";import"./index-8QB0C-JA.js";import"./index-BcDiyi9x.js";import"./RechartsWrapper-DDz0Qovh.js";import"./axisSelectors-CDRP_sNf.js";import"./polarAxisSelectors-DA0Sn49S.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C56RpY6Y.js";import"./index-CN0lIDDr.js";import"./index-BEOZMuKY.js";import"./renderedTicksSlice-9pxfuVSu.js";import"./index-CCJYRnuL.js";import"./CartesianChart-DqtOCB7I.js";import"./ZIndexPortal-BwTgdPOx.js";import"./CategoricalChart-BGUOI4WC.js";import"./CartesianAxis-Ck0BSfZw.js";import"./Layer-Cc-amHQh.js";import"./Text-CD7lZJQl.js";import"./pageBackground-ClBhdff4.js";import"./ZIndexLayer-CtwITcxK.js";import"./Label-DP7jFvS8.js";import"./dataEntryStyles-CDeLNDqG.js";import"./types-D44DYR1l.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-B88JiAwJ.js";import"./step-hZT5qMl0.js";import"./path-DyVhHtw_.js";import"./LabelList-hm91Y5t7.js";import"./ActivePoints-D0g5NkQl.js";import"./Dot-7MN5UfYI.js";import"./activeStyles-BnisSvy3.js";import"./useAnimationId-DDFQzbLJ.js";import"./Symbols-Dayf-cZG.js";import"./symbol-Cv4qssrt.js";import"./RegisterGraphicalItemId-D_uZK7cP.js";import"./ErrorBarContext-BjrF48Vy.js";import"./SetGraphicalItem-3CIjS8yi.js";import"./getRadiusAndStrokeWidthFromDot-jULpS_BY.js";import"./ActiveShapeUtils-CKRVzd2S.js";import"./useEffectiveDataKey-56V2wZBO.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},xe=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
