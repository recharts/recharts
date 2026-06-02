import{c as e}from"./iframe-NcbJjIA-.js";import{g as n}from"./zIndexSlice-aCnp2Btu.js";import{C as p}from"./ComposedChart-DfrMZJ_4.js";import{p as s}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-Bdvce9Bh.js";import{X as f}from"./XAxis-DiCo7qCN.js";import{Y as l}from"./YAxis-ChVwWRRp.js";import{L as d}from"./Line-RSDTcduu.js";import{R as h}from"./ReferenceLine-BDHLgrXQ.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BrPcfpKJ.js";import"./index-YT6PLmfy.js";import"./index-B2hMZxT9.js";import"./get-DHJyV6O8.js";import"./resolveDefaultProps-9rxZz0BJ.js";import"./isWellBehavedNumber-CRF88Te0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C1F7SUdh.js";import"./index-CASzwsd1.js";import"./index-CFcgoPKL.js";import"./renderedTicksSlice-CazECbsF.js";import"./axisSelectors--8zPyqGt.js";import"./d3-scale-B1TlVjVH.js";import"./CartesianChart-nvfGUb02.js";import"./chartDataContext-D7rZipVq.js";import"./CategoricalChart-DRPlCLZK.js";import"./CartesianAxis-psqNgsI7.js";import"./Layer-DCqaOLDO.js";import"./Text-DqOWrbn9.js";import"./DOMUtils-VR3x78qW.js";import"./Label-CCVmR4pI.js";import"./ZIndexLayer-HA7Kz5Ib.js";import"./types-B9riDZKf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-Cp63qh_R.js";import"./step-C2x-UOx0.js";import"./path-DyVhHtw_.js";import"./ReactUtils-DWeLU6sY.js";import"./ActivePoints-B2_IpYKn.js";import"./Dot-mM6yrIUr.js";import"./RegisterGraphicalItemId-BKDuHm0F.js";import"./ErrorBarContext-B9yYejtE.js";import"./GraphicalItemClipPath-Ck3Yxo8v.js";import"./SetGraphicalItem-BB4v-B7H.js";import"./useAnimationId-DLPXxqZ8.js";import"./getRadiusAndStrokeWidthFromDot-D1I_pbtw.js";import"./ActiveShapeUtils-BwCeE1t9.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
