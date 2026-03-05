import{r as f,e}from"./iframe-Bhf_6EYG.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-DsqV4VJF.js";import{R as A}from"./arrayEqualityCheck-B5hYgnzz.js";import{C}from"./ComposedChart-CXm17D-l.js";import{X as K}from"./XAxis-BWizQgTN.js";import{L as v}from"./Legend-DKyWA6GG.js";import{B as a}from"./Bar-BoLotl3d.js";import{R as x}from"./RechartsHookInspector-oY9r6aPa.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CR_T_Fxw.js";import"./Layer-XFtQT-yw.js";import"./resolveDefaultProps-CltYoVM3.js";import"./Text-D28roL_s.js";import"./DOMUtils-ribD7pvn.js";import"./Label-CzjtkYX8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B0zk77US.js";import"./zIndexSlice-C8FzPb5S.js";import"./immer-DsnYViPQ.js";import"./types-B1Me3-i2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DaDN5hFR.js";import"./hooks-B-MoHLBQ.js";import"./axisSelectors-Dt9F6ywj.js";import"./d3-scale-BxqYPjsE.js";import"./RechartsWrapper-BjPXyIC1.js";import"./index-qC7M-hg-.js";import"./CartesianChart-CpaNhZA2.js";import"./chartDataContext-D5Z43mUX.js";import"./CategoricalChart-DSURhBZI.js";import"./Symbols-BWIj5ibB.js";import"./symbol-DrDNfTYd.js";import"./step-B0zDApE1.js";import"./useElementOffset-BCpQNw_Z.js";import"./uniqBy-M-uQcWsx.js";import"./iteratee-C2Amkniy.js";import"./tooltipContext-DrWjvVZn.js";import"./ReactUtils-BVVOmEmS.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-RLHirw82.js";import"./isPlainObject-DTAcdHTW.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BGAQXYtP.js";import"./useAnimationId-5DionbmP.js";import"./Trapezoid-DB4UfnHe.js";import"./Sector-DbXwqOky.js";import"./Curve-CcL59NDu.js";import"./RegisterGraphicalItemId-ama1TJ-6.js";import"./ErrorBarContext-CFfHMS1a.js";import"./GraphicalItemClipPath-kNsFQRgF.js";import"./SetGraphicalItem-Ck1k9tQT.js";import"./getZIndexFromUnknown-S-WMpLto.js";import"./graphicalItemSelectors-Nlwl8Y0A.js";import"./index-BqdYNfEr.js";import"./ChartSizeDimensions-BOmMsXET.js";import"./OffsetShower-syHcU848.js";import"./PlotAreaShower-BiEJY1Iw.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
