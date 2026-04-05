import{r as f,e}from"./iframe-BM7P_3hj.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-BBUcqCa1.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-Bmgq3ZTz.js";import{C}from"./ComposedChart-EZo1iYMi.js";import{X as K}from"./XAxis-C_LpUhcR.js";import{L as v}from"./Legend-v7RNUMCE.js";import{B as s}from"./Bar-C918azED.js";import{R as x}from"./RechartsHookInspector-DIlL8ISE.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BrBA7Fo6.js";import"./Layer-C6LffHMU.js";import"./resolveDefaultProps-CZ0zKn9L.js";import"./Text-CQ7mU3s7.js";import"./DOMUtils-DrlqJZq7.js";import"./Label-BQD1_uHZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D7eOOyk7.js";import"./zIndexSlice-jDjA289q.js";import"./immer-D-2u7HXy.js";import"./types-o-wQVJEv.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DVjCr-Qu.js";import"./hooks-BY0xPmaj.js";import"./axisSelectors-Dx6sVhYx.js";import"./d3-scale-B0w3FH9e.js";import"./RechartsWrapper-B8tVHnOf.js";import"./index-Xlum1YFK.js";import"./CartesianChart-Be0mgfMK.js";import"./chartDataContext-CJ-F_waf.js";import"./CategoricalChart-CRvKBBfd.js";import"./Symbols-PsAIzTU_.js";import"./symbol-BXNRxpVN.js";import"./step-DyBB5gGy.js";import"./useElementOffset-DP9By8L-.js";import"./uniqBy-CvtKv9kX.js";import"./iteratee-CcJgzovy.js";import"./tooltipContext-BqXGkl5c.js";import"./ReactUtils-DyDnYFSa.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CpIbOFBd.js";import"./isPlainObject-D_XY9Qvh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-UEK_zsFS.js";import"./useAnimationId-CDf7Yg_k.js";import"./Trapezoid-tkh2Io-M.js";import"./Sector-B2gfW0gr.js";import"./Curve-CqITwbJh.js";import"./RegisterGraphicalItemId-B3DF5B-x.js";import"./ErrorBarContext-8JrkuwkP.js";import"./GraphicalItemClipPath-DJd9bIYV.js";import"./SetGraphicalItem-BjV3tQT1.js";import"./getZIndexFromUnknown-BZv5uDCw.js";import"./graphicalItemSelectors-hwGLjdl7.js";import"./index-BpI1Zh7a.js";import"./ChartSizeDimensions-75IDTK2b.js";import"./OffsetShower-BvXPFVVi.js";import"./PlotAreaShower-Cu3BCYLx.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
