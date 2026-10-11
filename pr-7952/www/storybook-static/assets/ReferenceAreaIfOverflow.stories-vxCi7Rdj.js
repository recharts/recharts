import{R as e}from"./iframe-W_agkVyV.js";import{R as p}from"./zIndexSlice-CTdReD9p.js";import{C as s}from"./ComposedChart-C5TkesQ1.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-yMdjK6Cm.js";import{X as d}from"./XAxis-BMo9pONJ.js";import{Y as l}from"./YAxis-BF1PYNAy.js";import{R as h}from"./ReferenceArea-7hY8rN3F.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CA9ZAVQz.js";import"./index-Bi2SdoGH.js";import"./index-CsXiVSUF.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B8X1uEjP.js";import"./isWellBehavedNumber-DiRVonYH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C3mPyrs7.js";import"./axisSelectors-6axja2Em.js";import"./d3-scale-HrkydzFI.js";import"./index-Dt83L4jz.js";import"./index-DIRpvxdg.js";import"./renderedTicksSlice-CWlNAShs.js";import"./index-BqSIxi03.js";import"./CartesianChart-1K0jUxr5.js";import"./chartDataContext-DCJ8bj1E.js";import"./CategoricalChart-Bzn-Gu2q.js";import"./CartesianAxis-CPOh9De0.js";import"./Layer-BtznfAPn.js";import"./Text-BeEwTqv_.js";import"./pageBackground-BGxpKyNa.js";import"./useId-CJGe-UDk.js";import"./useBackwardsCompatibleTheme-Ctn7xKKB.js";import"./Label-ClOsex7o.js";import"./ZIndexLayer-BRJamsEl.js";import"./types-CaM0OvRl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-DwOi1yoY.js";import"./useAnimationId-Bm_zuzY4.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,ne as __namedExportsOrder,oe as default};
