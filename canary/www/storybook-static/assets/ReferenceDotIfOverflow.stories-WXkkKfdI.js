import{R as e}from"./iframe-C-jRtd4O.js";import{R as n}from"./zIndexSlice-C13rA1yY.js";import{C as s}from"./ComposedChart-CYkr-z0J.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BaDRxlr9.js";import{X as f}from"./XAxis-BUOjYmWG.js";import{Y as l}from"./YAxis-BsnlIXwv.js";import{R as d}from"./ReferenceDot-DwUO1h5Y.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-t4hhNfzx.js";import"./index-JIvcUmdP.js";import"./index-yCZUjS0Z.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-hGxk2_Y7.js";import"./isWellBehavedNumber-BazoxJ8k.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CszU7DXa.js";import"./index-Cqo_qzOk.js";import"./index-CODjAUjN.js";import"./renderedTicksSlice--jA8UMed.js";import"./axisSelectors-CkStVnzz.js";import"./d3-scale-DJzOiobO.js";import"./CartesianChart-dpIhYASN.js";import"./chartDataContext-POKzhFjx.js";import"./CategoricalChart-DlYy8Ici.js";import"./CartesianAxis-Dovpw9_t.js";import"./Layer-0nVmjaPa.js";import"./Text-Bq6-_dbg.js";import"./DOMUtils-BNQTHuwM.js";import"./Label-ESmdcWMr.js";import"./ZIndexLayer-BPTUfBlU.js";import"./types-DJYeJibv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-D59rVGZ_.js";import"./isBuffer-Crkas5dz.js";import"./Dot-DcnRANwh.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
