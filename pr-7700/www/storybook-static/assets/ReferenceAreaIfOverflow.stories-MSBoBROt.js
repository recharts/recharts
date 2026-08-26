import{R as e}from"./iframe-Czcj7Ej5.js";import{R as p}from"./zIndexSlice-CKivF8h7.js";import{C as s}from"./ComposedChart-BkinsCpZ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-2pCOuBNQ.js";import{X as d}from"./XAxis-BDziZgbX.js";import{Y as l}from"./YAxis-BrgBYt1o.js";import{R as h}from"./ReferenceArea-Cz9pspyI.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BVmZUzar.js";import"./index-DMWmOMbl.js";import"./index-B91NvUo7.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-8BNEdWXX.js";import"./isWellBehavedNumber-Dco4JHSd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CDYHtUJT.js";import"./axisSelectors-BeEA7IYF.js";import"./d3-scale-BQoi7yt5.js";import"./index-B0JfwGdu.js";import"./index-Bxr1sCFD.js";import"./renderedTicksSlice-CbrcSGbF.js";import"./index-CFVWldzh.js";import"./CartesianChart-Dv6L8FEP.js";import"./chartDataContext-Bk1K2XnM.js";import"./CategoricalChart-Du7LZMoH.js";import"./CartesianAxis-DqwYXNcz.js";import"./Layer-2POOn5CI.js";import"./Text-BN2m7we3.js";import"./DOMUtils-CVT-c_43.js";import"./useId-3K3eUDJ4.js";import"./useBackwardsCompatibleTheme-BpiBN5I0.js";import"./Label-OqXB0-3Q.js";import"./ZIndexLayer-CF-iLGvZ.js";import"./types-CjYnj8ko.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-DrGaLjNe.js";import"./useAnimationId-_fI9jCE-.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ae=["IfOverflow"];export{t as IfOverflow,ae as __namedExportsOrder,oe as default};
