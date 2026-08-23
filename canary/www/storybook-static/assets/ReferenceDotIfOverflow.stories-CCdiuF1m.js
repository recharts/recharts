import{R as e}from"./iframe-J2FnkNkN.js";import{R as n}from"./zIndexSlice-CIfx3dbz.js";import{C as s}from"./ComposedChart-jyhVlhQd.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BFUC7PPJ.js";import{X as f}from"./XAxis-9YTS4CGv.js";import{Y as l}from"./YAxis-DtzyVJ31.js";import{R as d}from"./ReferenceDot-BrbZg7Qw.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dd6uK12C.js";import"./index-DOkoL7Wj.js";import"./index-DRH1Q61C.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C36Ti6I7.js";import"./isWellBehavedNumber-Bda2kxwI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-tuonj_dH.js";import"./index-udl5h_c3.js";import"./index-B1zoM-7H.js";import"./axisSelectors-XOgqlW54.js";import"./d3-scale-BnVmKfe4.js";import"./renderedTicksSlice-uiaDKKzv.js";import"./CartesianChart-7orgvIwE.js";import"./chartDataContext-DsIZ8kzc.js";import"./CategoricalChart-Dws3VtHh.js";import"./CartesianAxis-yBNynPDV.js";import"./Layer-B9c44e16.js";import"./Text-DoArQ2iR.js";import"./DOMUtils-DrtZ7889.js";import"./useId-BqCnyWtn.js";import"./useBackwardsCompatibleTheme-iB5pgxqo.js";import"./Label-Bl3T8NIS.js";import"./ZIndexLayer-BcQVAnhI.js";import"./types-cmsIqA-S.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-BQU71g_n.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const te=["IfOverflow"];export{t as IfOverflow,te as __namedExportsOrder,ee as default};
