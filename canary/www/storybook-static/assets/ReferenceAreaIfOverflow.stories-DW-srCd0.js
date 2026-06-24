import{R as e}from"./iframe-CtzYfaFS.js";import{R as s}from"./zIndexSlice-CHFLQ-iB.js";import{C as p}from"./ComposedChart-XEkgpTLA.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BNaIyixE.js";import{X as d}from"./XAxis-oAw543sJ.js";import{Y as l}from"./YAxis-IWkh__zP.js";import{R as h}from"./ReferenceArea-Bdy6syaD.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-5-WksSwG.js";import"./index-B_3CFrL4.js";import"./index-CS7Z3m5_.js";import"./get-BsiXY17Z.js";import"./resolveDefaultProps-B4yZFq1_.js";import"./isWellBehavedNumber-C_JD1Sao.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DtAkHf5u.js";import"./index-CQyW4Cl8.js";import"./index-B8ynkf98.js";import"./renderedTicksSlice-CyXKwvU2.js";import"./axisSelectors-C9oTN7aY.js";import"./d3-scale-Dsn_Yuxt.js";import"./CartesianChart-DLLDguMM.js";import"./chartDataContext-CAcvyAd0.js";import"./CategoricalChart-CwCdJGlO.js";import"./CartesianAxis-BA_E2N7m.js";import"./Layer-BYFEOVHG.js";import"./Text-EAXDgmFv.js";import"./DOMUtils-CZaHz23v.js";import"./Label-vhEl4j2z.js";import"./ZIndexLayer-DBCChzpw.js";import"./types-BhOKl2M1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-bPdK07Y6.js";import"./useAnimationId-Dat_OdBO.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
