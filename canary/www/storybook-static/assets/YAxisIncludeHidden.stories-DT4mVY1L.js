import{r as f,e}from"./iframe-Dke1PXsj.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-Sk_2BRIW.js";import{Y as c}from"./YAxis-C_nfgnx0.js";import{R as A}from"./arrayEqualityCheck-DYUGm-S-.js";import{C}from"./ComposedChart-DKdsAYQN.js";import{X as K}from"./XAxis-A5wiYRJ2.js";import{L as v}from"./Legend-ccvslpoy.js";import{B as a}from"./Bar-CBids-eo.js";import{R as x}from"./RechartsHookInspector-DESYImpk.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D9EPHdLe.js";import"./CartesianAxis-DELVukVs.js";import"./Layer-B0EXSY1R.js";import"./Text-CbLXC33T.js";import"./DOMUtils-DWpZ1fz3.js";import"./Label-BJpGMmXt.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-Dd-3eNlO.js";import"./zIndexSlice-CdkZF_KN.js";import"./types-DDM_Xxay.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-DCQ9wQGY.js";import"./axisSelectors-Ck1fvBYL.js";import"./RechartsWrapper-Dr-F8YT1.js";import"./CartesianChart-Db_LpN91.js";import"./chartDataContext-DpjwG2mb.js";import"./CategoricalChart-B37YLYot.js";import"./Symbols-BgJQYoix.js";import"./Curve-DAvXUCHx.js";import"./useElementOffset-C3Y4AvB-.js";import"./iteratee-BZW5CYX7.js";import"./tooltipContext-o9vI6Nhx.js";import"./ReactUtils-BSYO7pn7.js";import"./ActiveShapeUtils-CVSjVyuV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Be-yypRZ.js";import"./useAnimationId-CaTohdQl.js";import"./Trapezoid-Cffcn2bg.js";import"./Sector-DEw-Ho6t.js";import"./RegisterGraphicalItemId-BcZQiTRu.js";import"./ErrorBarContext-Bd_5n0Q0.js";import"./GraphicalItemClipPath-DAk4z-8q.js";import"./SetGraphicalItem-tvSnb31d.js";import"./getZIndexFromUnknown-DF_9Z0_X.js";import"./graphicalItemSelectors-Cwvxf9eY.js";import"./index-CL0r-bPV.js";import"./ChartSizeDimensions-GFw4Kaqh.js";import"./OffsetShower-l-ss4yV0.js";import"./PlotAreaShower-D_tFdLxx.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ve=["WithIncludeHidden"];export{t as WithIncludeHidden,ve as __namedExportsOrder,Ke as default};
