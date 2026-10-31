import{R as e}from"./iframe-DrMLBoK_.js";import{R as p}from"./zIndexSlice-BAbfq_sX.js";import{C as s}from"./ComposedChart-BJO1Ycdb.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-rjxjRRy0.js";import{X as d}from"./XAxis-Cwv8s30V.js";import{Y as l}from"./YAxis-T-2mqgRO.js";import{R as h}from"./ReferenceArea-L-mUuXy9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C_WQkFbi.js";import"./throttle-2Z3dikKo.js";import"./index-CTLiCJTk.js";import"./index-IA7JdDoU.js";import"./RechartsWrapper-CXZPsywz.js";import"./axisSelectors-CrOsHKKG.js";import"./polarAxisSelectors-D2k-junf.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BHx6I7KL.js";import"./index-BsgdmWE6.js";import"./index-DwcArmuD.js";import"./renderedTicksSlice-DjVfoptE.js";import"./index-pQjQ56sZ.js";import"./CartesianChart-Dzyi-du7.js";import"./ZIndexPortal-Cic8j-2O.js";import"./CategoricalChart-CZtxZv4h.js";import"./CartesianAxis-CAiEG9fo.js";import"./Layer-DCQ6NbAd.js";import"./Text-CCAk-006.js";import"./DOMUtils-BZ5XTJuP.js";import"./ZIndexLayer-FCgsPrev.js";import"./Label-CJPkFebi.js";import"./types-CTebeEOM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./Rectangle-CtabDI_D.js";import"./useAnimationId-C1T3lckw.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},oe=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,oe as __namedExportsOrder,re as default};
