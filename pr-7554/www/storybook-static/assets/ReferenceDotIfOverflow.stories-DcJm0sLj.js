import{R as e}from"./iframe-B5C9KTx6.js";import{R as n}from"./zIndexSlice-DWIJ7njb.js";import{C as s}from"./ComposedChart-Ioa1DS1M.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B9V2LVaA.js";import{X as f}from"./XAxis-wVZq09ph.js";import{Y as l}from"./YAxis-DM3geQpa.js";import{R as d}from"./ReferenceDot-D9_eZZe6.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BbpYnvP-.js";import"./index-DqoBz7Th.js";import"./index-2f6O6x8k.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CyjCxujM.js";import"./isWellBehavedNumber-D81K5xCr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-LcQsrP5q.js";import"./index-Cc-xdkS4.js";import"./index-CcYL9FAW.js";import"./renderedTicksSlice-C1Unvwoa.js";import"./axisSelectors-DNhpWmqM.js";import"./d3-scale-C_LGDl3j.js";import"./CartesianChart-CdAE6abg.js";import"./chartDataContext-BUicgLG9.js";import"./CategoricalChart-CxbxfGOc.js";import"./CartesianAxis-BJNemJkp.js";import"./Layer-B1gLrgGj.js";import"./Text-CAlHzKeZ.js";import"./DOMUtils-DWemK0zS.js";import"./Label-BqsOZO9Z.js";import"./ZIndexLayer-BjQPgVfD.js";import"./types-Ca2Hpkj5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-BhAsUEQD.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
