import{r as f,e}from"./iframe-3u-Q1UnB.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-BQIKrjqI.js";import{Y as c}from"./YAxis-Dj18iK3G.js";import{R as A}from"./arrayEqualityCheck-4YdFFnIZ.js";import{C}from"./ComposedChart-B88mQwK1.js";import{X as K}from"./XAxis-Djkeo-gr.js";import{L as v}from"./Legend-Bg3WO3ot.js";import{B as a}from"./Bar-BYNUjB_e.js";import{R as x}from"./RechartsHookInspector-CGCoL2RB.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cxetozbj.js";import"./CartesianAxis-DNUlfq8v.js";import"./Layer-BUQITwlU.js";import"./Text-C0k6XBru.js";import"./DOMUtils-B1iHjA53.js";import"./Label-DEySkZO8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BBlPVpqD.js";import"./zIndexSlice-DFZrsegf.js";import"./types-DeBO-UOQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-CA6mXnfo.js";import"./axisSelectors-tXlpibGR.js";import"./RechartsWrapper-DTxIwYKV.js";import"./CartesianChart-CPrM6Y72.js";import"./chartDataContext-oduysAeX.js";import"./CategoricalChart-C1AjKJFD.js";import"./Symbols-D9T0VuzY.js";import"./Curve-BQlmvtvx.js";import"./useElementOffset-R3iGwyTp.js";import"./iteratee-OnjyTwVZ.js";import"./tooltipContext-CwZZ1zPR.js";import"./ReactUtils-BnoVNewt.js";import"./ActiveShapeUtils-CBZ4ZZvz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DqAeg9eu.js";import"./useAnimationId-BDwu_fLm.js";import"./Trapezoid-Bk16eIfi.js";import"./Sector-Qrf6gufC.js";import"./RegisterGraphicalItemId-C95CQYm2.js";import"./ErrorBarContext-CW31PIa7.js";import"./GraphicalItemClipPath-Cj9n1sb1.js";import"./SetGraphicalItem-BCGPdk9x.js";import"./getZIndexFromUnknown-esa7sR3B.js";import"./graphicalItemSelectors-NQ4w2H4q.js";import"./index-BW-nQ8nH.js";import"./ChartSizeDimensions-BtJ4zNfJ.js";import"./OffsetShower-CS2dm1Mz.js";import"./PlotAreaShower-DAGea8GQ.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
