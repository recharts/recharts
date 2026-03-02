import{r as f,e}from"./iframe-D-0IUJGK.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-DgsPqkY3.js";import{R as A}from"./arrayEqualityCheck-C2_-Uu4b.js";import{C}from"./ComposedChart-COT4sTDA.js";import{X as K}from"./XAxis-CVV4DzFI.js";import{L as v}from"./Legend-Bz7nnrXW.js";import{B as a}from"./Bar-BTUblH43.js";import{R as x}from"./RechartsHookInspector-ByAlRvo4.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BpaKC44j.js";import"./Layer-CTviFarP.js";import"./resolveDefaultProps-6ZRnbExh.js";import"./Text-7HuLOFJ_.js";import"./DOMUtils-CyqmOfaO.js";import"./Label-CQuheRKb.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-dNEhzNo8.js";import"./zIndexSlice-DSGfPW9M.js";import"./immer-BqKqj1gc.js";import"./types-D1PFdIYW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CBi406A9.js";import"./hooks-DdYzpI7S.js";import"./axisSelectors-I9kb0cKY.js";import"./d3-scale-bTazPGJf.js";import"./RechartsWrapper-CufL0AhU.js";import"./index-BKZ6_UMT.js";import"./CartesianChart-D1C4weRi.js";import"./chartDataContext-CpBPNMx6.js";import"./CategoricalChart-Cvik2JIp.js";import"./Symbols-CM5rDsvy.js";import"./symbol-DIeWOW3k.js";import"./step-DIrgAirM.js";import"./useElementOffset-RR8V5txV.js";import"./uniqBy-Dt7HNo1A.js";import"./iteratee-D2mYQU3A.js";import"./tooltipContext-BbhojBiB.js";import"./ReactUtils-DhoIBDOK.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BDOyHxHs.js";import"./isPlainObject-BJcM5Fjp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-xceTB-v2.js";import"./useAnimationId-C9TFjIVY.js";import"./Trapezoid-D-5x7DqH.js";import"./Sector-SAKjVkNh.js";import"./Curve-CUbaL9A5.js";import"./RegisterGraphicalItemId-BG4vqgbk.js";import"./ErrorBarContext-CnqimuFK.js";import"./GraphicalItemClipPath-6R7g6XV3.js";import"./SetGraphicalItem-WLE6T4Wd.js";import"./getZIndexFromUnknown-Cl_Gb0Y_.js";import"./graphicalItemSelectors-DmAWpK4X.js";import"./index-CvEiFoUh.js";import"./ChartSizeDimensions-BThuhk--.js";import"./OffsetShower-DnIfcGdO.js";import"./PlotAreaShower-BUKTEC4c.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
