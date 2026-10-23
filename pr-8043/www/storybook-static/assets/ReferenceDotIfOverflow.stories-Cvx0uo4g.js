import{R as e}from"./iframe-prTVX46R.js";import{R as m}from"./zIndexSlice-BBM3QNxr.js";import{C as p}from"./ComposedChart-JM9IJLAu.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-S_RK1IMs.js";import{X as f}from"./XAxis-CAekIzf1.js";import{Y as l}from"./YAxis-BP1gJNh-.js";import{R as d}from"./ReferenceDot-Dayf2Gkn.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DvEGNDvN.js";import"./index-DxBxvBWq.js";import"./index-Bh60i1A4.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CgD2AS6S.js";import"./isWellBehavedNumber-sGfX6V07.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D3mCvzlT.js";import"./axisSelectors-C2RKwHTh.js";import"./d3-scale-CFQbB9BF.js";import"./index-BB-SpmyJ.js";import"./index-DnW1VngH.js";import"./renderedTicksSlice-iUiCR_an.js";import"./index-BQtEBMtF.js";import"./CartesianChart-D5BTPRp4.js";import"./chartDataContext-C7eScBxX.js";import"./CategoricalChart-DhkwWrJ_.js";import"./CartesianAxis-vl41q2bl.js";import"./Layer-1a5Zn_r7.js";import"./Text-DjfbNrah.js";import"./pageBackground-DWO83YrS.js";import"./useId-ClNpWPkJ.js";import"./useBackwardsCompatibleTheme-CSXD7-a6.js";import"./Label-CVltcmCw.js";import"./ZIndexLayer-BUy73e0U.js";import"./dataEntryStyles-D6au6UrY.js";import"./types-D57XnYuF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-B6R-m7zq.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},oe=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,oe as __namedExportsOrder,re as default};
