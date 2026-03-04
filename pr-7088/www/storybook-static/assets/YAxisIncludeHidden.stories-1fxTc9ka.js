import{r as f,e}from"./iframe-BDLVz6Jf.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-DhrJBh1G.js";import{R as A}from"./arrayEqualityCheck-CUwHcVyI.js";import{C}from"./ComposedChart-B8vrvgyV.js";import{X as K}from"./XAxis-rGGZujHk.js";import{L as v}from"./Legend-CIBzW4GX.js";import{B as a}from"./Bar-BJ0AzkM0.js";import{R as x}from"./RechartsHookInspector-DdlV-82E.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DpZWUA10.js";import"./Layer-E90Uxi_N.js";import"./resolveDefaultProps-CAE8a2S7.js";import"./Text-Dnj_UFsP.js";import"./DOMUtils-C38zHxQe.js";import"./Label-BpAHaxyT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CeMtlwqL.js";import"./zIndexSlice-Dba-j24Y.js";import"./immer-D7ppHI2d.js";import"./types-eu_lG70M.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DzYlWn1c.js";import"./hooks-Ko0NVQx4.js";import"./axisSelectors-BoSmHer2.js";import"./d3-scale-DrvOhfRi.js";import"./RechartsWrapper-BNGXTKCd.js";import"./index-B5IfmkK5.js";import"./CartesianChart-DHmZ3TGF.js";import"./chartDataContext-DTy_zcLY.js";import"./CategoricalChart-D0nQYz7Q.js";import"./Symbols-UHZicULa.js";import"./symbol-DWU8_PrF.js";import"./step-BVw-sImN.js";import"./useElementOffset-CP3IlWVh.js";import"./uniqBy-CYBnIEgM.js";import"./iteratee-Uscb-axC.js";import"./tooltipContext-CoKMvDHF.js";import"./ReactUtils-Z_uY6BWT.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-1odowpJ3.js";import"./isPlainObject-D6WBWEYO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-MA5abZlf.js";import"./useAnimationId-DiGR44lM.js";import"./Trapezoid-B0zvPW8H.js";import"./Sector-Bzk7xgyA.js";import"./Curve-BkotQ_Ul.js";import"./RegisterGraphicalItemId-DgsZoNJO.js";import"./ErrorBarContext-CHqnPMdC.js";import"./GraphicalItemClipPath-52erAg5v.js";import"./SetGraphicalItem-D-MDoVx7.js";import"./getZIndexFromUnknown-Dvow2B0m.js";import"./graphicalItemSelectors-DdsLyAOw.js";import"./index-B1g-GKPY.js";import"./ChartSizeDimensions-Cz26FwCM.js";import"./OffsetShower-Dsw4B39y.js";import"./PlotAreaShower-BsznV7xN.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
