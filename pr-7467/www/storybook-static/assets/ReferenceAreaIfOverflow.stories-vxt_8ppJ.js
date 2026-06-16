import{R as e}from"./iframe-CnwzBkds.js";import{R as s}from"./zIndexSlice-BpzqiTUQ.js";import{C as p}from"./ComposedChart-C1DfHVp4.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DaDbM5c8.js";import{X as d}from"./XAxis-DbvG2C4p.js";import{Y as l}from"./YAxis-iu19I_Qe.js";import{R as h}from"./ReferenceArea-Bu0zkuEd.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BZhv9pDN.js";import"./index-B17a-Fpl.js";import"./index-DKNFhV5H.js";import"./get-B8n4OfLY.js";import"./resolveDefaultProps-DV3X3ep6.js";import"./isWellBehavedNumber-ChDLwcgn.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BxrV5UFS.js";import"./index-DLJqppDu.js";import"./index-5-p3p247.js";import"./renderedTicksSlice-CAlTfeNf.js";import"./axisSelectors-BYBAWXh2.js";import"./d3-scale-CG2_6ote.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DJOSlpeY.js";import"./chartDataContext-BeCpsJVv.js";import"./CategoricalChart-ijSp3dOV.js";import"./CartesianAxis-BmrJk-2O.js";import"./Layer-BZqaMaXh.js";import"./Text-BltVqzsV.js";import"./DOMUtils-BbYzFqpk.js";import"./Label-CslQeHKW.js";import"./ZIndexLayer-C4T4UXDK.js";import"./types-E3CxlAR_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-DprBphTu.js";import"./useAnimationId-_xLlXMao.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
