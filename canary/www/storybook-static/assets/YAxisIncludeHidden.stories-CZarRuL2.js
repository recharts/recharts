import{r as f,e}from"./iframe-BSb16JoR.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-BjWuIzzh.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-CKi6Epe4.js";import{C}from"./ComposedChart-BAoNDz5r.js";import{X as K}from"./XAxis-BHgcURqr.js";import{L as v}from"./Legend-Dv6bvMS9.js";import{B as s}from"./Bar-DUt68D_Y.js";import{R as x}from"./RechartsHookInspector-DGV6Ct7j.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DMpwxzt3.js";import"./Layer-DZYtcC2w.js";import"./resolveDefaultProps-Cg9Aa6Xm.js";import"./Text-GlnZRYGI.js";import"./DOMUtils-B7NSRuk7.js";import"./Label-tcp5Z6P8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-8dStJwlU.js";import"./zIndexSlice-Bd2Z7-yF.js";import"./immer-BeuBwnCt.js";import"./types-BvVKlSL_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-ZjnECHzq.js";import"./hooks-CGl6g5Kn.js";import"./axisSelectors-CQJQ3hKV.js";import"./d3-scale-BCQZ4ydZ.js";import"./RechartsWrapper-z7IieHp6.js";import"./index-Bpi9g4Xy.js";import"./CartesianChart-B4OwK7Ni.js";import"./chartDataContext-Cmf9_heI.js";import"./CategoricalChart-b3cJbLQD.js";import"./Symbols-SIMNkJGH.js";import"./symbol-CgA8__kL.js";import"./step-g_dGXwfI.js";import"./useElementOffset-CAWkhzoo.js";import"./uniqBy-KIGisAvA.js";import"./iteratee-DKK5omGB.js";import"./tooltipContext-CkcxG-eO.js";import"./ReactUtils-v-8YVmpF.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CQZggNZ2.js";import"./isPlainObject-BiZ1xmFL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C6I9faxi.js";import"./useAnimationId-BRGMijHA.js";import"./Trapezoid-BRhFJlA0.js";import"./Sector-C6wRPjnp.js";import"./Curve-CJKywfJT.js";import"./RegisterGraphicalItemId-C80kvS_1.js";import"./ErrorBarContext-D0q4JY8z.js";import"./GraphicalItemClipPath-DRfMkQNb.js";import"./SetGraphicalItem-Drb-mPqH.js";import"./getZIndexFromUnknown-Bt9tAT23.js";import"./graphicalItemSelectors-BxDLltGA.js";import"./index-ZiErzFNv.js";import"./ChartSizeDimensions-BpGSMkxu.js";import"./OffsetShower-C7hr8qqJ.js";import"./PlotAreaShower-CvbFoVDy.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
