import{R as e}from"./iframe-gJmHOoV1.js";import{R as n}from"./zIndexSlice-SLldW8vD.js";import{C as s}from"./ComposedChart-Cjd81jW2.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-VJceqVLi.js";import{X as f}from"./XAxis-CL1K5HKB.js";import{Y as l}from"./YAxis-BZbOJGmt.js";import{R as d}from"./ReferenceDot-DsK51BQW.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C0HH0ZDc.js";import"./index-BdFJZkPY.js";import"./index-DNgAqdgl.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-EuD2qw6Y.js";import"./isWellBehavedNumber-C4nB07Ky.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-uLgma0gs.js";import"./index-D2MlSgDp.js";import"./index-_1fsdksf.js";import"./axisSelectors-BbNLjq-V.js";import"./d3-scale-SCvl-fAD.js";import"./renderedTicksSlice-DkFdVLqh.js";import"./CartesianChart-B3NOhLAb.js";import"./chartDataContext-Btj7Fomq.js";import"./CategoricalChart-Bdw8EORd.js";import"./CartesianAxis-Byci1LgV.js";import"./Layer-DMyVzZAK.js";import"./Text-BFMrUcgU.js";import"./DOMUtils-DoteccEu.js";import"./useBackwardsCompatibleTheme-t9HOmvr9.js";import"./Label-BW3VHSxT.js";import"./ZIndexLayer-Cs9adZB_.js";import"./types-BsPCKB2-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-RQPmIpyp.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ee=["IfOverflow"];export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
