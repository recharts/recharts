import{R as e}from"./iframe-n-wQuCBi.js";import{R as n}from"./zIndexSlice-agpgazdg.js";import{C as s}from"./ComposedChart-QtT3UbV6.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BtD9M2ST.js";import{X as f}from"./XAxis-CqwZgwEA.js";import{Y as l}from"./YAxis-bBYdAORl.js";import{R as d}from"./ReferenceDot-C2uVdiVQ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DNZjDlXp.js";import"./index-B670uwrn.js";import"./index-LEpyJ3u4.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DQgAjYOa.js";import"./isWellBehavedNumber-C5T5W5WV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper--hZNEqf5.js";import"./index-Bp8i3QLZ.js";import"./index-ifJ0vXzc.js";import"./renderedTicksSlice-DRvXNutS.js";import"./axisSelectors-DJGA74tj.js";import"./d3-scale-Dq3pQP3q.js";import"./CartesianChart-D1BnCtWc.js";import"./chartDataContext-BUwB3ubO.js";import"./CategoricalChart-Bn54rxv3.js";import"./CartesianAxis-BKtFBsNE.js";import"./Layer-q34S3x6j.js";import"./Text-Cnp2kl38.js";import"./DOMUtils-B9ZjPicg.js";import"./Label-1gu4eHha.js";import"./ZIndexLayer-CKoiASff.js";import"./types-DiIuPkat.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-B6zDcllv.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
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
     * assert that when ifOverflow="extendDomain" 1900 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
