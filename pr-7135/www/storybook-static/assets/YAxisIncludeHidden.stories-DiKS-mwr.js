import{r as f,e}from"./iframe-Bv9A2uSW.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-Czr7awDd.js";import{R as A}from"./arrayEqualityCheck-40Pjb_0H.js";import{C}from"./ComposedChart-8suCaxCV.js";import{X as K}from"./XAxis-CDoYxb3o.js";import{L as v}from"./Legend-BG4XdZPV.js";import{B as a}from"./Bar-DIqL0rb5.js";import{R as x}from"./RechartsHookInspector-gKybnL4n.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CiclrdFg.js";import"./Layer-BOAumolw.js";import"./resolveDefaultProps-Y5jGROg-.js";import"./Text-ByTWddCc.js";import"./DOMUtils-DLZp3yaw.js";import"./Label-Dk_EOWAk.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DOKoEx6m.js";import"./zIndexSlice-BDVZwdE1.js";import"./immer-Ch1CAK4c.js";import"./types-BNfpUJFf.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-fUxzen-N.js";import"./hooks-BFXhp1mb.js";import"./axisSelectors-C-Y5dRy9.js";import"./d3-scale-B-GeqdsZ.js";import"./RechartsWrapper-BINnaSWf.js";import"./index-CYS6IjLh.js";import"./CartesianChart-DVCnbG_A.js";import"./chartDataContext-Cx-F6gwT.js";import"./CategoricalChart-BfArJY5o.js";import"./Symbols-DSA8vyEc.js";import"./symbol-gFXZdrDQ.js";import"./step-Dhxu0QC9.js";import"./useElementOffset-CKNTo5FY.js";import"./uniqBy-CkuHOdDH.js";import"./iteratee-BdEGTM6e.js";import"./tooltipContext-B0ApYPZV.js";import"./ReactUtils-Be8qMHP_.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-__oljrAQ.js";import"./isPlainObject-CgUr2901.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C9QMG00E.js";import"./useAnimationId-5b7iZFah.js";import"./Trapezoid-WLRjMuUY.js";import"./Sector-S-QnBLP2.js";import"./Curve-g-TKkld0.js";import"./RegisterGraphicalItemId-Dztj5ea7.js";import"./ErrorBarContext-PQzMtlLN.js";import"./GraphicalItemClipPath-Ce74-Utf.js";import"./SetGraphicalItem-CrMe5qpl.js";import"./getZIndexFromUnknown-DbM9eYlI.js";import"./graphicalItemSelectors-CJ_jibX-.js";import"./index-B_DT_wU1.js";import"./ChartSizeDimensions-DOZqpgqC.js";import"./OffsetShower-CWVYqkue.js";import"./PlotAreaShower-DuXT_1jY.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
