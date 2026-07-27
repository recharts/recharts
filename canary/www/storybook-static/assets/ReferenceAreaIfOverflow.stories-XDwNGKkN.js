import{R as e}from"./iframe-BvniDb9M.js";import{R as s}from"./zIndexSlice-BcwOacrL.js";import{C as p}from"./ComposedChart-nO90MrSp.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CzVr-k9g.js";import{X as d}from"./XAxis-BS2okIrv.js";import{Y as l}from"./YAxis-C-4Yxbjy.js";import{R as h}from"./ReferenceArea-DcXplJaP.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BEm3mroc.js";import"./index-D2mR6oQd.js";import"./index-Be0pPrY3.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-C1GGU34C.js";import"./isWellBehavedNumber-sm35pCXt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-0MN2RCFI.js";import"./index-DjBFZJXg.js";import"./index-Qpj6j6nv.js";import"./renderedTicksSlice-BGoDlWDo.js";import"./axisSelectors-DxOnbDS4.js";import"./d3-scale-B3McImOd.js";import"./CartesianChart-BIATkAst.js";import"./chartDataContext-C9IBj5vS.js";import"./CategoricalChart-COioiDUR.js";import"./CartesianAxis-DPYSgkyQ.js";import"./Layer-BeZmz3fH.js";import"./Text-uf6L8i_t.js";import"./DOMUtils-tzx2ZbvF.js";import"./Label-CRekt_d8.js";import"./ZIndexLayer-zEe-x6YM.js";import"./types-7Vi0xZSr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Rectangle-C1l69Ju4.js";import"./useAnimationId-DrHlUTZ7.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const te=["IfOverflow"];export{t as IfOverflow,te as __namedExportsOrder,ee as default};
