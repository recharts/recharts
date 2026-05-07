import{r as f,e}from"./iframe-CA8OhNxH.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-DXR1Un-U.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-CL-Z01lB.js";import{C}from"./ComposedChart-CxMwSzAt.js";import{X as K}from"./XAxis-fFf7Kpu6.js";import{L as v}from"./Legend-cB2cVTNf.js";import{B as s}from"./Bar-9-ZbhPD4.js";import{R as x}from"./RechartsHookInspector-BugLDhSF.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-f2zOKi0X.js";import"./Layer-51jxPk-z.js";import"./resolveDefaultProps-C1cg3qcu.js";import"./Text-QadmgfLW.js";import"./DOMUtils-BdRmP8Tt.js";import"./Label-B9rEotsE.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BbCOJVvb.js";import"./zIndexSlice-DR6ZwnqZ.js";import"./immer-CLqkMfUW.js";import"./types-DIwXheU2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DkCMmWDM.js";import"./hooks-CyxhoeqI.js";import"./axisSelectors-BooSDkXq.js";import"./d3-scale-DD8ooXHD.js";import"./RechartsWrapper-CXeUN3o5.js";import"./index-CuTjkf5v.js";import"./CartesianChart-DIopKqdp.js";import"./chartDataContext-BaaZuqtU.js";import"./CategoricalChart-G3zYlJLo.js";import"./Symbols-BdJUl3ke.js";import"./symbol-GRJr5T5S.js";import"./step-Cu2k92Ir.js";import"./useElementOffset-DiMHwcLU.js";import"./uniqBy-BD6E09wX.js";import"./iteratee-CYU4tR1-.js";import"./tooltipContext-Ys6e0CnQ.js";import"./ReactUtils-DijgxaRr.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CHm7mV1T.js";import"./isPlainObject-BB9dmDmF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D0apUPF6.js";import"./useAnimationId-CFa_WVC3.js";import"./Trapezoid-DD5_8Z8z.js";import"./Sector-Dda5EE-9.js";import"./Curve-cpd6A-Ga.js";import"./RegisterGraphicalItemId-WQn-qxjl.js";import"./ErrorBarContext-HJShwkTe.js";import"./GraphicalItemClipPath-D8pqnZaq.js";import"./SetGraphicalItem-dL7nqQCK.js";import"./getZIndexFromUnknown-DOv9TbMx.js";import"./graphicalItemSelectors-D9CjbfVH.js";import"./index-BZ4hO2WS.js";import"./ChartSizeDimensions-CM9slMDG.js";import"./OffsetShower-B_M2I77E.js";import"./PlotAreaShower-gcaUHmcI.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
