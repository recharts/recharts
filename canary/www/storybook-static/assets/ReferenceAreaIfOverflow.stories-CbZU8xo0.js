import{R as e}from"./iframe-8C24Tydd.js";import{R as s}from"./zIndexSlice-Dw4Oq4dL.js";import{C as p}from"./ComposedChart-B4z2qb51.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-D1iVkTMn.js";import{X as d}from"./XAxis-CI8sx2Rv.js";import{Y as l}from"./YAxis-jbouJBfL.js";import{R as h}from"./ReferenceArea-CUke2S3z.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-jF8yDnYL.js";import"./throttle-BnR0knX4.js";import"./index-BZrrsPsq.js";import"./index-B9s4wujy.js";import"./RechartsWrapper-CN9elUVX.js";import"./axisSelectors-wolYJBqC.js";import"./polarAxisSelectors-OkcN41hW.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DhysOGqs.js";import"./index-C0a8p3x4.js";import"./index-DTGVc3OM.js";import"./renderedTicksSlice-pib7h8IS.js";import"./index-DqK9E7FS.js";import"./fillDefinitions-DW2cY3tE.js";import"./CartesianChart-CGDUobj1.js";import"./chartDataContext-31zmIAvn.js";import"./CategoricalChart-Bwnqw4e-.js";import"./CartesianAxis-CNwz3srm.js";import"./Layer-D45TlyFk.js";import"./Text-CBQ4JzNL.js";import"./ZIndexLayer-DlPMEPXU.js";import"./Label-D_2s_KcH.js";import"./types-BD1-xaIs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-DEd6ta5Q.js";import"./useAnimationId-CvLS5yyi.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:n,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);n(await r("1900")).toBeInTheDocument(),n(await r("-950")).toBeInTheDocument()}},re=["IfOverflow"];var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
