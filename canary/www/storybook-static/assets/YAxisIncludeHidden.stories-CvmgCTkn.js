import{r as f,e}from"./iframe-DU-LucVk.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-oxI_7caT.js";import{R as A}from"./arrayEqualityCheck-CclNUIwX.js";import{C}from"./ComposedChart-D6mSG6uW.js";import{X as K}from"./XAxis-NPkkQ63f.js";import{L as v}from"./Legend-FjKnAjYX.js";import{B as a}from"./Bar-BOIF3_wA.js";import{R as x}from"./RechartsHookInspector-BEY9qfJh.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-xpog4YLf.js";import"./Layer-8a5GeXWN.js";import"./resolveDefaultProps-B2aHdDhI.js";import"./Text-CzwymKY5.js";import"./DOMUtils-CWJBrBTl.js";import"./Label-OGUbf68M.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BaiBFLw5.js";import"./zIndexSlice-BokCIqI7.js";import"./immer-CeDnDLs7.js";import"./types-Dgs-vk0Z.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CYsmXTCd.js";import"./hooks-5DppKLy_.js";import"./axisSelectors-1v6f9L3u.js";import"./d3-scale-s-kDCmvc.js";import"./RechartsWrapper-BQ8ifATJ.js";import"./index-BvEdvQ3w.js";import"./CartesianChart-Cbq4Hmtt.js";import"./chartDataContext-CG1EXfO5.js";import"./CategoricalChart-I9vscfUJ.js";import"./Symbols-BtQj-4ur.js";import"./symbol-m7w_ZRD-.js";import"./step-CgB13xZG.js";import"./useElementOffset-bryqI-pl.js";import"./uniqBy-CFOdKjJ7.js";import"./iteratee-Biu9ujnd.js";import"./tooltipContext-DVO23hJ4.js";import"./ReactUtils-Ctv0Vese.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CNQl8MpC.js";import"./isPlainObject-DmZ4Jk-5.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dh8uHokW.js";import"./useAnimationId-CtR34_Zs.js";import"./Trapezoid-C0vmhZZj.js";import"./Sector-DdGN5B7D.js";import"./Curve-rk5soVjK.js";import"./RegisterGraphicalItemId-CicihkEh.js";import"./ErrorBarContext-D0ejYvv2.js";import"./GraphicalItemClipPath-CL71Q66l.js";import"./SetGraphicalItem-DZHXtodu.js";import"./getZIndexFromUnknown-1SFWXKSO.js";import"./graphicalItemSelectors-S1egOTos.js";import"./index-k3KoyLP9.js";import"./ChartSizeDimensions-ChW5udk0.js";import"./OffsetShower-BWhNcTks.js";import"./PlotAreaShower-9QTURT9p.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
