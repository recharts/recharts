import{R as e}from"./iframe-BAw0s5ot.js";import{R as n}from"./zIndexSlice-BeH27P2U.js";import{C as s}from"./ComposedChart-DteFOQlI.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CG-mQCyS.js";import{X as f}from"./XAxis-DLc6krzc.js";import{Y as l}from"./YAxis-o1QSu-GR.js";import{R as d}from"./ReferenceDot-DXOjxR6Q.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CMKSqw9i.js";import"./index-CjVdCyN5.js";import"./index-BK18-1Z2.js";import"./get-CSAr6kNF.js";import"./resolveDefaultProps-BuFdbqch.js";import"./isWellBehavedNumber-9WEl6uBx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bttwz4rr.js";import"./index-B1DwQ2Om.js";import"./index-46sIyfq_.js";import"./renderedTicksSlice-lnlzRSDk.js";import"./axisSelectors-CrQ5YVkn.js";import"./d3-scale-8J52VcxR.js";import"./CartesianChart-qH9nTYaZ.js";import"./chartDataContext-Bg-IfXwk.js";import"./CategoricalChart-BcYU7xxq.js";import"./CartesianAxis-BP8vTRJY.js";import"./Layer-CnD0sOVo.js";import"./Text-CHY17Wwg.js";import"./DOMUtils-DRw43MBp.js";import"./Label-RqhE4qn6.js";import"./ZIndexLayer-B6NdRg2s.js";import"./types-3486df9G.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-DM8ASB1e.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
