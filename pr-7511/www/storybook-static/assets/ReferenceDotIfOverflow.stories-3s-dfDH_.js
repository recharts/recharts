import{R as e}from"./iframe-C1w5v_Qk.js";import{R as n}from"./zIndexSlice-B1EdpB6R.js";import{C as s}from"./ComposedChart-Cez35_ir.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B3YXQXkQ.js";import{X as f}from"./XAxis-CLnm9us4.js";import{Y as l}from"./YAxis-BqOA8Xrc.js";import{R as d}from"./ReferenceDot-CAkmnATC.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-xmruF8UK.js";import"./index-CsIOsjrg.js";import"./index-BlJOskHH.js";import"./get-BiWVgPl2.js";import"./resolveDefaultProps-CoJ3EeKY.js";import"./isWellBehavedNumber-NxDVn2o3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CjIXVxen.js";import"./index-3W1J-0s3.js";import"./index-DRD7DMzc.js";import"./renderedTicksSlice-CHw04Oxj.js";import"./axisSelectors-CF8b5amj.js";import"./d3-scale-Vx2OsAoJ.js";import"./CartesianChart-DmhCfUcK.js";import"./chartDataContext-BJtHxGB9.js";import"./CategoricalChart-CQ9KgY5m.js";import"./CartesianAxis-CqJdjYKp.js";import"./Layer-DdWQTUzH.js";import"./Text-CLhlhxNo.js";import"./DOMUtils-B6Ajdyx4.js";import"./Label-C6ZIo4e5.js";import"./ZIndexLayer-C25IbVUt.js";import"./types-D2g1bX1e.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-DKLsSZb_.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
