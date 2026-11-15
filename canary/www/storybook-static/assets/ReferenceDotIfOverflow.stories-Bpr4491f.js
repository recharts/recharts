import{R as e}from"./iframe-wopH9NdI.js";import{R as m}from"./zIndexSlice-xHMHa_PR.js";import{C as s}from"./ComposedChart-BEtvz8Ip.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-3cDumxFt.js";import{X as f}from"./XAxis-YQFRVy93.js";import{Y as l}from"./YAxis-DOwO43VE.js";import{R as d}from"./ReferenceDot-BZlDjkOX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CuS_1aTJ.js";import"./throttle--YLxHTYU.js";import"./index-DX2sAXBh.js";import"./index-ntp-0gr7.js";import"./RechartsWrapper-GnJJ2XUP.js";import"./axisSelectors-H_-dwi8o.js";import"./polarAxisSelectors-DDYJm4ns.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BRxJIguS.js";import"./index-CHX_ECB7.js";import"./index-xHMOPb5i.js";import"./renderedTicksSlice-BRp5IgAn.js";import"./index-BMZVXAmF.js";import"./fillDefinitions-DrqDcIvz.js";import"./CartesianChart-CN7jOg4q.js";import"./chartDataContext-bye5A1ly.js";import"./CategoricalChart-C9YwakJO.js";import"./CartesianAxis-Bp916XbH.js";import"./Layer-Dt0UmkGr.js";import"./Text-CQcCEm7a.js";import"./ZIndexLayer-BgWxLO1_.js";import"./Label-uu_QuzmT.js";import"./types-CUlNVHV2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-BdzSE_Lm.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
