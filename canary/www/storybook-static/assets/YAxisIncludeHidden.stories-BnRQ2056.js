import{u as f,e}from"./iframe-tCDnQpzm.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-0OaZrEQM.js";import{p as a}from"./Page-DPte-9pC.js";import{g as A}from"./arrayEqualityCheck-BqXouEks.js";import{C}from"./ComposedChart-Cfho0nKw.js";import{X as K}from"./XAxis-DlOxqtL0.js";import{L as v}from"./Legend-DesdeSYT.js";import{B as s}from"./Bar-BBUyAmyG.js";import{R as x}from"./RechartsHookInspector-BX_0sbG1.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DhIcmypy.js";import"./Layer-DztRGY_N.js";import"./resolveDefaultProps-D6_84qa3.js";import"./Text-BLCv1zgM.js";import"./DOMUtils-Dbb4XIEW.js";import"./Label--ydmIzGM.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DKwmZsVD.js";import"./zIndexSlice-1EM6QKoG.js";import"./immer-BCZknwAa.js";import"./types-vkQzCy74.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CYtMAut8.js";import"./hooks-WR0dNOnI.js";import"./axisSelectors-Bvp9z5f_.js";import"./d3-scale-QLPPlH86.js";import"./RechartsWrapper-DYnmCVjv.js";import"./index-CHnjtEz6.js";import"./CartesianChart-DTQQkyNB.js";import"./chartDataContext-D8A6GgIn.js";import"./CategoricalChart-9BDeQmwn.js";import"./Symbols-3A54Td4V.js";import"./symbol-kVzeEIJH.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CFSLqz7e.js";import"./uniqBy-DQiWu0tK.js";import"./iteratee-0H7YfotS.js";import"./tooltipContext-Do9d3_Hn.js";import"./ReactUtils-C9ZM0Mib.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BJE-jfve.js";import"./useAnimationId-DsF55F49.js";import"./ActiveShapeUtils-fioPLRDw.js";import"./isPlainObject-DxYEqwrD.js";import"./isPlainObject-BSutPv-K.js";import"./RegisterGraphicalItemId-D4uIuwhl.js";import"./ErrorBarContext-NilxMudN.js";import"./GraphicalItemClipPath-BzZEJgMk.js";import"./SetGraphicalItem-DtCToAmA.js";import"./getZIndexFromUnknown-KyVhBI0-.js";import"./graphicalItemSelectors-DN6xgKz8.js";import"./index-CXC3XglB.js";import"./ChartSizeDimensions-CSUyRejl.js";import"./OffsetShower-J7wedS7V.js";import"./PlotAreaShower-DWpQD4iq.js";const Le={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ie=["WithIncludeHidden"];export{t as WithIncludeHidden,Ie as __namedExportsOrder,Le as default};
