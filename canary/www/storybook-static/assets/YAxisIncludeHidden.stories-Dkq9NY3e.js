import{r as f,e}from"./iframe-5nyyyA4e.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-D9arQ46Y.js";import{R as A}from"./arrayEqualityCheck-DhH-5wr2.js";import{C}from"./ComposedChart-Cxl5hqIP.js";import{X as K}from"./XAxis-CpInK2W7.js";import{L as v}from"./Legend-CHYzLi17.js";import{B as a}from"./Bar-C5S2PrX-.js";import{R as x}from"./RechartsHookInspector-Bic4nxDU.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-D47MJU_E.js";import"./Layer-DviFQGNi.js";import"./resolveDefaultProps-CeTTuEfb.js";import"./Text-CE1WfcL6.js";import"./DOMUtils-Dq_WTVX1.js";import"./Label-CduFeyI1.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-OUT57C2H.js";import"./zIndexSlice-C6txXD1x.js";import"./immer-2somCEQQ.js";import"./types-BpXzUYak.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Cm-fMS3n.js";import"./hooks-CdfksvpZ.js";import"./axisSelectors-CobE02gZ.js";import"./d3-scale-puoPpyC3.js";import"./RechartsWrapper-DbfL-s84.js";import"./index-DrSxOYtm.js";import"./CartesianChart-CFvpoJB5.js";import"./chartDataContext-SxjdhjDb.js";import"./CategoricalChart-DI7k_Lzd.js";import"./Symbols-CXSqTNLX.js";import"./symbol-DYTo8Fkb.js";import"./step-CMCDVxPb.js";import"./useElementOffset-BTKbSGPa.js";import"./uniqBy-DdFUbo3O.js";import"./iteratee-B-bQO1-C.js";import"./tooltipContext-DolDc2BZ.js";import"./ReactUtils-BrfFtQHh.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DGjL05Fk.js";import"./isPlainObject-BQonFNMT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BJXxZxcM.js";import"./useAnimationId-C32uUUSq.js";import"./Trapezoid-BDtTj6J0.js";import"./Sector-STsIidKv.js";import"./Curve-CtxNRaVC.js";import"./RegisterGraphicalItemId-Co9Ixth9.js";import"./ErrorBarContext-CfPRQDi6.js";import"./GraphicalItemClipPath-4mU8FIdV.js";import"./SetGraphicalItem-YjHvOXLE.js";import"./getZIndexFromUnknown-fBq3HJIi.js";import"./graphicalItemSelectors-Bbe84aqu.js";import"./index-ltgFEkuv.js";import"./ChartSizeDimensions-CHqoYXte.js";import"./OffsetShower-pvxB70aB.js";import"./PlotAreaShower-CC7NhsKv.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
