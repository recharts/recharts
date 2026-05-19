import{u as f,e}from"./iframe-cnMzeIJZ.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-DADsk3iq.js";import{p as a}from"./Page-DPte-9pC.js";import{g as A}from"./arrayEqualityCheck-Diz3n3Hs.js";import{C}from"./ComposedChart-DE00tkMR.js";import{X as K}from"./XAxis-CwsNG3zV.js";import{L as v}from"./Legend-2gzXd1Ey.js";import{B as s}from"./Bar-Cf0xdrP2.js";import{R as x}from"./RechartsHookInspector-z-0196Jh.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DKEuyvio.js";import"./Layer-C2d9GIhW.js";import"./resolveDefaultProps-BJEUNe0z.js";import"./Text-B1T-uFVD.js";import"./DOMUtils-8Qso1Lek.js";import"./Label-r0BVcH36.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DgSpDsSo.js";import"./zIndexSlice-KCSxBezz.js";import"./immer-CEVvpJh0.js";import"./types-CvoSDie4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CttqerD-.js";import"./hooks-DbNIViQP.js";import"./axisSelectors-JTUQkC92.js";import"./d3-scale-BBoVmphj.js";import"./RechartsWrapper-9N_K_8iJ.js";import"./index-DcitoB6s.js";import"./CartesianChart-v4VQpoAp.js";import"./chartDataContext-DuCir45J.js";import"./CategoricalChart-CbexdhNs.js";import"./Symbols-zGmBpapW.js";import"./symbol-CLamLFlr.js";import"./step-CVx5i_lR.js";import"./useElementOffset-DUk4lhRc.js";import"./uniqBy-CkPNX-V7.js";import"./iteratee-D0L7wdlz.js";import"./tooltipContext-COhO-iGX.js";import"./ReactUtils-Cvax_Sun.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-gcJ89Q36.js";import"./isPlainObject-D33aVf8i.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DXYQFJg_.js";import"./useAnimationId-BIlplKMu.js";import"./Trapezoid-D7-33KRZ.js";import"./Sector-q4gGdICU.js";import"./Curve-BYV27PWl.js";import"./RegisterGraphicalItemId-CKB_e_SX.js";import"./ErrorBarContext-UNWUxf6o.js";import"./GraphicalItemClipPath-D7TSUiOR.js";import"./SetGraphicalItem-CHoRTGzo.js";import"./getZIndexFromUnknown-CJRhBx7x.js";import"./graphicalItemSelectors-C_5mqXOB.js";import"./index-CSSLHj9Z.js";import"./ChartSizeDimensions-BiOnGwPS.js";import"./OffsetShower-BBJcAEb8.js";import"./PlotAreaShower-C0UNL5CH.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
