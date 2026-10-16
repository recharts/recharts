import{R as e}from"./iframe-83g2bT9h.js";import{R as p}from"./zIndexSlice-CfRH_Gkg.js";import{C as s}from"./ComposedChart-MoKKZ9CA.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CMZ2k9Kj.js";import{X as d}from"./XAxis-CPLb-uD7.js";import{Y as l}from"./YAxis-DKEYM08g.js";import{R as h}from"./ReferenceArea-Jm8qltaf.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-4AZ4DRQb.js";import"./index-D9-kpgN8.js";import"./index-HFr4exi0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BpxedNkM.js";import"./isWellBehavedNumber-BgkxdIs4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-p2KZrAJR.js";import"./axisSelectors-C8tSZ6WQ.js";import"./d3-scale-CVvcmCdK.js";import"./index-B7VmcSkv.js";import"./index-DLYfmWnd.js";import"./renderedTicksSlice-xHtkKbmz.js";import"./index-D-OQyWuZ.js";import"./CartesianChart-D1Nmaq06.js";import"./chartDataContext-sHdkOGNI.js";import"./CategoricalChart-D7JsCRcw.js";import"./CartesianAxis-DvK2UzOE.js";import"./Layer-B91IFUVw.js";import"./Text-DUBqVL79.js";import"./pageBackground-DKLyt_8U.js";import"./useId-zomQiW43.js";import"./useBackwardsCompatibleTheme-BcLG_xbs.js";import"./Label-DfuHALhb.js";import"./ZIndexLayer-DeHUv8B_.js";import"./types-CMZudBWv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-BS77cgxi.js";import"./useAnimationId-DUwxwMTt.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
