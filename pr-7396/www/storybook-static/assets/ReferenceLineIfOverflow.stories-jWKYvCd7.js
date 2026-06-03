import{R as e}from"./iframe-CsUTfbme.js";import{R as n}from"./zIndexSlice-DJN3Z2tA.js";import{C as p}from"./ComposedChart-CLOI7yF1.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BBnIe7aE.js";import{X as f}from"./XAxis-B66nDtTW.js";import{Y as l}from"./YAxis-DU0GmGih.js";import{L as d}from"./Line-Ciwn5_Ze.js";import{R as h}from"./ReferenceLine-ButY6NnN.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BS6zuvPx.js";import"./index-CpMCAhl1.js";import"./index-C0tTD0a-.js";import"./get-CGtvq50a.js";import"./resolveDefaultProps-DOSPF-U5.js";import"./isWellBehavedNumber-CaHmgZiw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bz5AtJCZ.js";import"./index-84tIClUK.js";import"./index-CiR04iLY.js";import"./renderedTicksSlice-DKAjtNca.js";import"./axisSelectors-BaY3t_zv.js";import"./d3-scale-D08hqUcH.js";import"./CartesianChart-xV6uxcxT.js";import"./chartDataContext-Dks_l25O.js";import"./CategoricalChart-CDn_aEvK.js";import"./CartesianAxis-D0Iddbyw.js";import"./Layer-C0UzjkXP.js";import"./Text-1xaaQRGr.js";import"./DOMUtils-CCNMXYAS.js";import"./Label-BrqLuQxp.js";import"./ZIndexLayer-BszTzZbW.js";import"./types-CNmnDBmM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-DdC8EqTQ.js";import"./step-DsryQMe8.js";import"./path-DyVhHtw_.js";import"./ReactUtils-CIWjNZdp.js";import"./ActivePoints-BlInVAX5.js";import"./Dot-BHvXSrDt.js";import"./RegisterGraphicalItemId-Bdk-Jfc1.js";import"./ErrorBarContext-BqDYRxxf.js";import"./GraphicalItemClipPath-ciWvPzTM.js";import"./SetGraphicalItem-X5S3Yot0.js";import"./useAnimationId-DbHaBqmd.js";import"./getRadiusAndStrokeWidthFromDot-CsCejuOB.js";import"./ActiveShapeUtils-eKrzz-9L.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
