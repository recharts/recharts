import{R as e}from"./iframe-wnwgjoCj.js";import{R as p}from"./zIndexSlice-BfQZJe7w.js";import{C as s}from"./ComposedChart-ByvlJzyD.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CFsinw1N.js";import{X as d}from"./XAxis-OfYaBnId.js";import{Y as l}from"./YAxis-DhrqAxya.js";import{R as h}from"./ReferenceArea-DDVxrliK.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bu0PLbpB.js";import"./index--oPyKjHy.js";import"./index-B1dVEDKi.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CdGDq9Vj.js";import"./isWellBehavedNumber-DvYM1ftp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DrgosUQO.js";import"./axisSelectors-Dv0Cy_aQ.js";import"./d3-scale-n5yhpKoa.js";import"./index-C6zbwdmq.js";import"./index-2cwaP_WN.js";import"./renderedTicksSlice-Cn46HOnO.js";import"./index-Cq1ZqvVj.js";import"./CartesianChart-9oQUjO4z.js";import"./chartDataContext-CoZTTCWp.js";import"./CategoricalChart-CFXgb39d.js";import"./CartesianAxis-CUGdPJVD.js";import"./Layer-BgNSosTV.js";import"./Text-ObnDDpE8.js";import"./pageBackground-BTX1FgdM.js";import"./useId-Bld63G6d.js";import"./useBackwardsCompatibleTheme-CSSDROrC.js";import"./Label-BPPVHUQ9.js";import"./ZIndexLayer-BcVUzqGJ.js";import"./types-D9qqzEWR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-P3uT3dWy.js";import"./useAnimationId-B2QPH2im.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
