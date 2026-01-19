import{r as f,e}from"./iframe-DKGTY5BH.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CtpClMsJ.js";import{Y as c}from"./YAxis-DfYPGWBI.js";import{R as A}from"./arrayEqualityCheck-a5J2QiQR.js";import{C}from"./ComposedChart-ByBlCzet.js";import{X as K}from"./XAxis-vvYkOBCU.js";import{L as v}from"./Legend-DZl4DhGe.js";import{B as a}from"./Bar-BZO941Rc.js";import{R as x}from"./RechartsHookInspector-ltFkNW4M.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CYnJQ9Tz.js";import"./CartesianAxis-C0xV_R2I.js";import"./Layer-BMyAm0Vh.js";import"./Text-DzT2f_9r.js";import"./DOMUtils-DUCvdtk_.js";import"./Label-8CsqNV_S.js";import"./PolarUtils-BgS5trn7.js";import"./ZIndexLayer-ChxBgnpv.js";import"./zIndexSlice-BN50EdKr.js";import"./types-BBKXijxu.js";import"./hooks-l5gEcxv4.js";import"./axisSelectors-BRnicQ57.js";import"./RechartsWrapper-C4nUVXRx.js";import"./CartesianChart-DZl_tmIf.js";import"./chartDataContext-D-E7lauC.js";import"./CategoricalChart-Q4yJ_XVO.js";import"./Symbols-Bske3hMz.js";import"./Curve-B8K-f9lF.js";import"./useElementOffset-CjeVi0cr.js";import"./iteratee-CG0POyWm.js";import"./tooltipContext-BovvOkHK.js";import"./ReactUtils-_yo6pVT0.js";import"./ActiveShapeUtils-BwLCOH5f.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BiI1dnIo.js";import"./useAnimationId-Br5iK6pF.js";import"./Trapezoid-ClVeJ0sq.js";import"./Sector-wwquBaDN.js";import"./RegisterGraphicalItemId-M1wxD3TO.js";import"./ErrorBarContext-l5-2cdDP.js";import"./GraphicalItemClipPath-C08gEDH6.js";import"./SetGraphicalItem-BCvWrM_W.js";import"./getZIndexFromUnknown-C6t9pqo7.js";import"./graphicalItemSelectors-kXqMHh1l.js";import"./index-DpSNf8hh.js";import"./ChartSizeDimensions-CHWSVwWw.js";import"./OffsetShower-fEjtwpJv.js";import"./PlotAreaShower-TADFRiun.js";const Ce={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ke=["WithIncludeHidden"];export{t as WithIncludeHidden,Ke as __namedExportsOrder,Ce as default};
