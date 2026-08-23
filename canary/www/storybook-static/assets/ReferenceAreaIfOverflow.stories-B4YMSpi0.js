import{R as e}from"./iframe-Bva2xGHH.js";import{R as p}from"./zIndexSlice-DeikvbmU.js";import{C as s}from"./ComposedChart-CvLJWAQC.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-TRCTuU41.js";import{X as d}from"./XAxis-CsoDjkEh.js";import{Y as l}from"./YAxis-B36u7uIT.js";import{R as h}from"./ReferenceArea-DJQFilTw.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CFyzV36U.js";import"./index-Bo6z76Fs.js";import"./index-DT3MRaoS.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BuBoAocm.js";import"./isWellBehavedNumber-D9_2opJl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DkrfE3IH.js";import"./index-VUoyG6xU.js";import"./index-EwtDjp0y.js";import"./axisSelectors-1RAYR2bl.js";import"./d3-scale-CJSi8F9P.js";import"./renderedTicksSlice-CmjvxnPV.js";import"./CartesianChart-KP50bz7-.js";import"./chartDataContext-DHJzh3Cw.js";import"./CategoricalChart-DYOSFUHe.js";import"./CartesianAxis-aOVQqLXO.js";import"./Layer-PgPW5wj-.js";import"./Text-D8IJbXoV.js";import"./DOMUtils-CMvwzHzQ.js";import"./useId-Bwx6_eZW.js";import"./useBackwardsCompatibleTheme-3vkLTFmK.js";import"./Label-Dki1vWaX.js";import"./ZIndexLayer-B1sYnbf5.js";import"./types-CDHj9Y5Z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-BGcjrFAk.js";import"./useAnimationId-DDHow2US.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const oe=["IfOverflow"];export{t as IfOverflow,oe as __namedExportsOrder,re as default};
