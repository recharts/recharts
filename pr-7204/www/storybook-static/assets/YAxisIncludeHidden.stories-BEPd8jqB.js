import{r as f,e}from"./iframe-DMXQsXpg.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-Do7NKWVh.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-DpCaYOUy.js";import{C}from"./ComposedChart-C_9L2kYo.js";import{X as K}from"./XAxis-BHFgUjmQ.js";import{L as v}from"./Legend-D_SgAZLC.js";import{B as s}from"./Bar-CSGTG1ml.js";import{R as x}from"./RechartsHookInspector-DV0idGEz.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-VGpTBjEt.js";import"./Layer-CsEtKw3I.js";import"./resolveDefaultProps-BsNYhyCK.js";import"./Text-DQkAUreQ.js";import"./DOMUtils-DhuzsS5O.js";import"./Label-Bs69Id3P.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DFpiev-3.js";import"./zIndexSlice-Dh14LjCV.js";import"./immer-B5TQSQqr.js";import"./types-B0XKp7Ez.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BIIBkKaJ.js";import"./hooks-C4vpoiWQ.js";import"./axisSelectors-X23Vd1nJ.js";import"./d3-scale-Bobv8k5F.js";import"./RechartsWrapper-ChN5mZ6F.js";import"./index-DZj5OYW4.js";import"./CartesianChart-C5uIkm2y.js";import"./chartDataContext-B6GLUasA.js";import"./CategoricalChart-DG_cN0Ky.js";import"./Symbols-CEd2p-EY.js";import"./symbol-Dzsckc01.js";import"./step-H2086VjI.js";import"./useElementOffset-Bp1AeIZH.js";import"./uniqBy-DYyTxial.js";import"./iteratee-BAEyg1_s.js";import"./tooltipContext-BSggaHro.js";import"./ReactUtils-L5lhC8e-.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CvI69Krw.js";import"./isPlainObject-BMubJZbB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B4fRgx4g.js";import"./useAnimationId-VTFMqu0p.js";import"./Trapezoid-BZvlrAVr.js";import"./Sector-CxL9w9hl.js";import"./Curve-GkC_ASL4.js";import"./RegisterGraphicalItemId-oMcfFNkt.js";import"./ErrorBarContext-Bl-5rk6P.js";import"./GraphicalItemClipPath-D6CWKVU-.js";import"./SetGraphicalItem-Cl2qZBgg.js";import"./getZIndexFromUnknown-peywxPIz.js";import"./graphicalItemSelectors-DYCPftIy.js";import"./index-vcH36-MF.js";import"./ChartSizeDimensions-DEoCz00F.js";import"./OffsetShower-BjIJhAjd.js";import"./PlotAreaShower-DKns50Z6.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const allKeys = Object.keys(pageData[0]);
    const [activeKeys, setActiveKeys] = useState(allKeys);

    /*
     * Toggles displayed bars when clicking on a legend item
     */
    const handleLegendClick: ComponentProps<typeof Legend>['onClick'] = (e: any) => {
      const key: string = e.dataKey;
      setActiveKeys(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
    };
    return <>
        <h4>
          Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if
          \`includeHidden\`
        </h4>
        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart data={pageData}>
            <XAxis dataKey="name" scale="band" />
            <YAxis includeHidden />
            <Legend onClick={handleLegendClick} />
            <Bar dataKey="pv" fill="blue" hide={!activeKeys.includes('pv')} />
            <Bar dataKey="amt" fill="green" hide={!activeKeys.includes('amt')} />
            <RechartsHookInspector />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Oe=["WithIncludeHidden"];export{t as WithIncludeHidden,Oe as __namedExportsOrder,we as default};
