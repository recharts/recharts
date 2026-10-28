import{R as e}from"./iframe-C82DQHN8.js";import{R as m}from"./zIndexSlice-KEmmKuiN.js";import{C as s}from"./ComposedChart-CYmsodFg.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BguhZg3D.js";import{X as f}from"./XAxis-HS7HwOQV.js";import{Y as l}from"./YAxis-CY_V7IWg.js";import{R as d}from"./ReferenceDot-DUN6DrXb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-VPX7RWl5.js";import"./throttle-DrIjUdEi.js";import"./index-DS_o04pJ.js";import"./index-CrBCcUcr.js";import"./RechartsWrapper-C7FIcLUG.js";import"./axisSelectors-BBwIpa2g.js";import"./polarAxisSelectors-CI9V5B2f.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-YRVCFiEs.js";import"./index-Dxrl0h9V.js";import"./index-BzW5Id2r.js";import"./renderedTicksSlice-Dyzu-B2T.js";import"./index-Q0hLYzZW.js";import"./CartesianChart-DkUBM6DF.js";import"./ZIndexPortal-CwXxcVKW.js";import"./CategoricalChart-CSFGEuTa.js";import"./CartesianAxis-DKLzLHvo.js";import"./Layer-C-QkALxJ.js";import"./Text-BsKwg4yV.js";import"./pageBackground-fR40L72L.js";import"./ZIndexLayer-BbgqXMZY.js";import"./Label-Ckx9XYdx.js";import"./types-zIpyflln.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-BljD15xb.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
