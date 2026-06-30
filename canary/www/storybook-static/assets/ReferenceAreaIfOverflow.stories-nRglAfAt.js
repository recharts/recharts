import{R as e}from"./iframe-BAw0s5ot.js";import{R as s}from"./zIndexSlice-BeH27P2U.js";import{C as p}from"./ComposedChart-DteFOQlI.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CG-mQCyS.js";import{X as d}from"./XAxis-DLc6krzc.js";import{Y as l}from"./YAxis-o1QSu-GR.js";import{R as h}from"./ReferenceArea-CqzdcmC4.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CMKSqw9i.js";import"./index-CjVdCyN5.js";import"./index-BK18-1Z2.js";import"./get-CSAr6kNF.js";import"./resolveDefaultProps-BuFdbqch.js";import"./isWellBehavedNumber-9WEl6uBx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bttwz4rr.js";import"./index-B1DwQ2Om.js";import"./index-46sIyfq_.js";import"./renderedTicksSlice-lnlzRSDk.js";import"./axisSelectors-CrQ5YVkn.js";import"./d3-scale-8J52VcxR.js";import"./CartesianChart-qH9nTYaZ.js";import"./chartDataContext-Bg-IfXwk.js";import"./CategoricalChart-BcYU7xxq.js";import"./CartesianAxis-BP8vTRJY.js";import"./Layer-CnD0sOVo.js";import"./Text-CHY17Wwg.js";import"./DOMUtils-DRw43MBp.js";import"./Label-RqhE4qn6.js";import"./ZIndexLayer-B6NdRg2s.js";import"./types-3486df9G.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-BKTeT_Dl.js";import"./useAnimationId-D83gTctj.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          <ReferenceArea x1="Page B" x2="Page E" y1={1890} y2={-1000} stroke="red" strokeOpacity={0.3} ifOverflow="extendDomain" />
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
    expect(await findByText('1900')).toBeInTheDocument();
    expect(await findByText('-950')).toBeInTheDocument();
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ee=["IfOverflow"];export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
