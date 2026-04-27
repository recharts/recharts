import{r as f,e}from"./iframe-DPQQART2.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-BOA_nsSD.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-BDVhVf-C.js";import{C}from"./ComposedChart-n9wi2Vp2.js";import{X as K}from"./XAxis-Dg1K6_fH.js";import{L as v}from"./Legend-BHwh_5Cc.js";import{B as s}from"./Bar-DqR7ooBU.js";import{R as x}from"./RechartsHookInspector-BY990p5J.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CKdFXiLA.js";import"./Layer-BYcIhrnl.js";import"./resolveDefaultProps-Cd3pKSWq.js";import"./Text-CViQHWzm.js";import"./DOMUtils-6osebbE8.js";import"./Label-C8kv474W.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cp0zJDZz.js";import"./zIndexSlice-BUoZyNAT.js";import"./immer-dq55Rz5k.js";import"./types-DnHa4Bsr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-C1JV7OFv.js";import"./hooks-DXcftTpV.js";import"./axisSelectors-B504aTlT.js";import"./d3-scale-C2yFoO5R.js";import"./RechartsWrapper-DC_xWfRE.js";import"./index-nGRWTrxk.js";import"./CartesianChart-CLNhkIDU.js";import"./chartDataContext-0uWjrM7s.js";import"./CategoricalChart-7Dzr-wy0.js";import"./Symbols-DyAchY7x.js";import"./symbol-Dha6D-sP.js";import"./step-De3ZEy02.js";import"./useElementOffset-DIzHmNft.js";import"./uniqBy-UOcraiRG.js";import"./iteratee-CLdQ3gon.js";import"./tooltipContext-BHI_bNfB.js";import"./ReactUtils-D4DJGTqa.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DelvD5C5.js";import"./isPlainObject-Cbsg7i00.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D56HZ_ik.js";import"./useAnimationId-DxUodg7H.js";import"./Trapezoid-BQHGElUM.js";import"./Sector-QSKBV-oi.js";import"./Curve-D9PoEc7H.js";import"./RegisterGraphicalItemId-DOISCJhn.js";import"./ErrorBarContext-CyeM8Knn.js";import"./GraphicalItemClipPath-CE5KwO2y.js";import"./SetGraphicalItem-CxDeYlaA.js";import"./getZIndexFromUnknown-CUXPtyC7.js";import"./graphicalItemSelectors-BWnHiCMG.js";import"./index-OSeNAWG6.js";import"./ChartSizeDimensions-BOwpJgjF.js";import"./OffsetShower-DcT1D_xb.js";import"./PlotAreaShower-DM7QkzGT.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
