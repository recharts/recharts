import{R as e}from"./iframe-GS6tWWpF.js";import{R as s}from"./zIndexSlice-CiKhndgZ.js";import{C as p}from"./ComposedChart-Dl8H5i_v.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-F-KU-36M.js";import{X as d}from"./XAxis-Bx65GQrC.js";import{Y as l}from"./YAxis-CUfaioHk.js";import{R as h}from"./ReferenceArea-Diohr-7N.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C-IXy7Zr.js";import"./index-DfG20-Zs.js";import"./index-C2uAvHn9.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BZjeTZ39.js";import"./isWellBehavedNumber-BW5zPDve.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bqosr4xy.js";import"./index-C6xrf2-Z.js";import"./index-Di15QQ8x.js";import"./renderedTicksSlice-BVCAtPIh.js";import"./axisSelectors-yfKyalbW.js";import"./d3-scale-CHW2xi3e.js";import"./CartesianChart-DRtNG600.js";import"./chartDataContext-BZ0W7ETA.js";import"./CategoricalChart-CsHskHmr.js";import"./CartesianAxis-DPqu1YVY.js";import"./Layer-C3MBqN5-.js";import"./Text-CUZPSeM8.js";import"./DOMUtils-cB85CLZU.js";import"./Label--UyVH_YZ.js";import"./ZIndexLayer-CvFwUsq0.js";import"./types-CDHFW4tQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Rectangle-CdIuzb_S.js";import"./useAnimationId-ZFeP4ddJ.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const te=["IfOverflow"];export{t as IfOverflow,te as __namedExportsOrder,ee as default};
