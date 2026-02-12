import{e}from"./iframe-CMiM_Qgn.js";import{R as n}from"./arrayEqualityCheck-_vyoivmV.js";import{C as p}from"./ComposedChart-DsrHqkWw.js";import{C as s}from"./CartesianGrid-fLuhqndc.js";import{X as c}from"./XAxis-DaiKeapO.js";import{Y as f}from"./YAxis-Dt3qo-M7.js";import{L as l}from"./Line-ByFuaooi.js";import{R as d}from"./ReferenceLine-iER3KVTu.js";import{R as h}from"./RechartsHookInspector-DmT1dtLd.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-41R1n5JW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-NJ0Ez51E.js";import"./hooks-BePoF5l4.js";import"./axisSelectors-Cx7ZtEIH.js";import"./zIndexSlice-BExtdyub.js";import"./CartesianChart-CauNMHrH.js";import"./chartDataContext-By2fKgIb.js";import"./CategoricalChart-O0vVyZYM.js";import"./CartesianAxis-BZUH34_W.js";import"./Layer-CgUnyU8v.js";import"./Text-BCzzepAd.js";import"./DOMUtils-DDwkXkUm.js";import"./Label-gyqygLIm.js";import"./ZIndexLayer-BI90jm2U.js";import"./types-CyIMtLrt.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BtLAWZFM.js";import"./ActivePoints-BMo7GV7Z.js";import"./Dot-B0Edv62r.js";import"./RegisterGraphicalItemId-ChahBClM.js";import"./ErrorBarContext-DTmAcjw7.js";import"./GraphicalItemClipPath-DrjjmV4D.js";import"./SetGraphicalItem-DFpoPkFf.js";import"./useAnimationId-Cub4YggD.js";import"./getRadiusAndStrokeWidthFromDot-guaPTICv.js";import"./ActiveShapeUtils-DqPdrrUk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-PYLd1R2f.js";import"./Trapezoid-BG55ZEGY.js";import"./Sector-D5UzUxjZ.js";import"./Symbols-BXDeECV7.js";import"./Curve-BXAMzxgI.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-1Y0M71Of.js";import"./ChartSizeDimensions-DBnJjpf_.js";import"./OffsetShower-D9-0tfso.js";import"./PlotAreaShower-Dq9EyHFw.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <Line dataKey="uv" />
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
          <RechartsHookInspector />
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
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const he=["IfOverflow"];export{t as IfOverflow,he as __namedExportsOrder,de as default};
