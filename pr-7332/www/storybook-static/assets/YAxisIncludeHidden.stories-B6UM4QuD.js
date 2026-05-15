import{r as f,e}from"./iframe-BwSUf2T9.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-CuVkr_B5.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-kNUesU9n.js";import{C}from"./ComposedChart-DIEhpHjl.js";import{X as K}from"./XAxis-DMsA7lKM.js";import{L as v}from"./Legend-C04w1Ai2.js";import{B as s}from"./Bar-BRccvehd.js";import{R as x}from"./RechartsHookInspector-DKqzdAWN.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-D9SaV3-s.js";import"./Layer-CG8DX7G3.js";import"./resolveDefaultProps-CvrFLXNt.js";import"./Text-BIBt_YS0.js";import"./DOMUtils-DuReS6JS.js";import"./Label-cBW6O7Up.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bv5glbFY.js";import"./zIndexSlice-CtGAVWci.js";import"./immer-7Mb6ATLS.js";import"./types-CNlhQ7_N.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BDQYkSRg.js";import"./hooks-DWJz6m6D.js";import"./axisSelectors-BxFZbnk8.js";import"./d3-scale-4uUuwoJk.js";import"./RechartsWrapper-4BCl0_T5.js";import"./index-DweiLrJJ.js";import"./CartesianChart-Bob7JQC-.js";import"./chartDataContext-DGesBm7c.js";import"./CategoricalChart-DQIJaSSS.js";import"./Symbols-CCCMBfqC.js";import"./symbol-Cn5r8HhL.js";import"./step-CwM1BVfC.js";import"./useElementOffset-CdLeMivj.js";import"./uniqBy-c5b7uoEj.js";import"./iteratee-2sw6E18I.js";import"./tooltipContext-Cr6veTbJ.js";import"./ReactUtils-BlFNJVa6.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-N1muSzDi.js";import"./isPlainObject-BZM5eFQe.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CW7YI0Bu.js";import"./useAnimationId-DY4wSWRx.js";import"./Trapezoid-BeLgkWe2.js";import"./Sector-D_JRIQS4.js";import"./Curve-DXAcp3xR.js";import"./RegisterGraphicalItemId-fD1_o_b6.js";import"./ErrorBarContext-BaQDv8aw.js";import"./GraphicalItemClipPath-bwNzittR.js";import"./SetGraphicalItem-DlbF6pEY.js";import"./getZIndexFromUnknown-2gyxRT_K.js";import"./graphicalItemSelectors-Bo4D_Iel.js";import"./index-D71go6ze.js";import"./ChartSizeDimensions-DuDQVVyz.js";import"./OffsetShower-3pww61PI.js";import"./PlotAreaShower-CkcQ7s4a.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
