import{r as f,e}from"./iframe-D_8UNJGJ.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-UxrLaYW9.js";import{R as A}from"./arrayEqualityCheck-DLi0Ag40.js";import{C}from"./ComposedChart-D_1Rjk4a.js";import{X as K}from"./XAxis-nL349YCp.js";import{L as v}from"./Legend-Bj7vspPs.js";import{B as a}from"./Bar-wx-KcuPZ.js";import{R as x}from"./RechartsHookInspector-DqWSEPyK.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CmGsQYnB.js";import"./Layer-CSFY2JoB.js";import"./resolveDefaultProps-B5V57fEA.js";import"./Text-BpbKY-ox.js";import"./DOMUtils-Dbz4rk_T.js";import"./Label-fZtmoCeO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B2K1T5O_.js";import"./zIndexSlice-B5sMKRff.js";import"./immer-DgVi67O2.js";import"./types-DAVY4nYI.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DMlkCP1f.js";import"./hooks-BZrhZ7vg.js";import"./axisSelectors-CS_KlM3N.js";import"./d3-scale-DRFIPlHa.js";import"./RechartsWrapper-CeUnYUBi.js";import"./index-CjxbrGoj.js";import"./CartesianChart-6BHGgpGM.js";import"./chartDataContext-ClhoRpui.js";import"./CategoricalChart-DcPua93T.js";import"./Symbols-CHCjzVCk.js";import"./symbol-bY4o9tnw.js";import"./step-CSwA1lmy.js";import"./useElementOffset-CK6e0j5r.js";import"./uniqBy-CkdEBd3k.js";import"./iteratee-DSwxyR9X.js";import"./tooltipContext-eEAXwUon.js";import"./ReactUtils-lBfKzFjL.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CXuAv7RR.js";import"./isPlainObject-CmeHN-q2.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CviW58v0.js";import"./useAnimationId-BTJ6QCKz.js";import"./Trapezoid-BoP7ymTd.js";import"./Sector-BL-LF7sA.js";import"./Curve-ICQj_4TC.js";import"./RegisterGraphicalItemId-DLMmL-q8.js";import"./ErrorBarContext-F8JTwXXl.js";import"./GraphicalItemClipPath-BRXvyRUx.js";import"./SetGraphicalItem-CMT6Fqt6.js";import"./getZIndexFromUnknown-BWHKvXX8.js";import"./graphicalItemSelectors-BOA5vPJ_.js";import"./index-CFdITy7w.js";import"./ChartSizeDimensions-CZ_yFPOk.js";import"./OffsetShower-CkWYNF-8.js";import"./PlotAreaShower-iC8rErQ_.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
