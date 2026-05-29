import{c as e}from"./iframe-DmBQ8HMz.js";import{g as n}from"./zIndexSlice-DIRHIjeL.js";import{C as p}from"./ComposedChart-DNElitZJ.js";import{p as s}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-DF0OJWzH.js";import{X as f}from"./XAxis-BaDVYnrk.js";import{Y as l}from"./YAxis-D8ss-GGA.js";import{L as d}from"./Line-DN2wolye.js";import{R as h}from"./ReferenceLine-DEaWSn1x.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CvETSy6i.js";import"./index-kdRFnVq9.js";import"./index-RSqbnpUZ.js";import"./get-Ckx5uNL8.js";import"./resolveDefaultProps-DuJ2-4bL.js";import"./isWellBehavedNumber-BHVm_SNT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DWg7_V2c.js";import"./index-o0mRVwTr.js";import"./index-Drn3R5Q6.js";import"./renderedTicksSlice-DVSCP4nP.js";import"./axisSelectors-COTb3exH.js";import"./d3-scale-CE7Es6uL.js";import"./CartesianChart-uAfb6KQX.js";import"./chartDataContext-CpJyWUlD.js";import"./CategoricalChart-DUJKtdcW.js";import"./CartesianAxis-B9da2UAY.js";import"./Layer-BhYZ1XdM.js";import"./Text-DDANB2NF.js";import"./DOMUtils-o09_GivZ.js";import"./Label-C1M61kae.js";import"./ZIndexLayer-eAbRrt0r.js";import"./types-DUdiMbO-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-Ddn0Q7My.js";import"./step-CN9Am_zJ.js";import"./path-DyVhHtw_.js";import"./ReactUtils-DKCxnkHT.js";import"./ActivePoints-BCqOvBdY.js";import"./Dot-nij0AL23.js";import"./RegisterGraphicalItemId-Dup5UL4N.js";import"./ErrorBarContext-DC5ZfMR_.js";import"./GraphicalItemClipPath-pcxJ2TmH.js";import"./SetGraphicalItem-CsbBVlmH.js";import"./useAnimationId-BZ5U8z_o.js";import"./getRadiusAndStrokeWidthFromDot-CZpBgath.js";import"./ActiveShapeUtils-DVhmDt4u.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
