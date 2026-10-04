import{R as e}from"./iframe-C55SonNK.js";import{R as m}from"./zIndexSlice-DasulNlo.js";import{C as p}from"./ComposedChart-DRtqau9M.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-PAdKFLq1.js";import{X as f}from"./XAxis-BWJ2ABmI.js";import{Y as l}from"./YAxis-C3mB-_5C.js";import{R as d}from"./ReferenceDot-CCismau_.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-G3ECa8tr.js";import"./index-DlZLgaYD.js";import"./index-BwYupLtq.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BmNtE2rS.js";import"./isWellBehavedNumber-hNTnQGF2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BfpEIOv-.js";import"./axisSelectors-pQ0Se0UH.js";import"./d3-scale-BMtFe6cd.js";import"./index-ConF1OJd.js";import"./index-BPMo8MBn.js";import"./renderedTicksSlice-LEZPKkpV.js";import"./index-Czl7SMar.js";import"./CartesianChart-BihUZ5nW.js";import"./chartDataContext-CzjQbFCV.js";import"./CategoricalChart-BO0KKDhg.js";import"./CartesianAxis-Sfv4H3gX.js";import"./Layer-Bpfyjb4F.js";import"./Text-BGO9kFr7.js";import"./DOMUtils-B--wunTb.js";import"./useId-Ph5cHYEn.js";import"./useBackwardsCompatibleTheme-CMxCV-uY.js";import"./Label-XuIK8xgk.js";import"./ZIndexLayer-xKUTxtZr.js";import"./types-DWD7ie2J.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-CxsnkucE.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
