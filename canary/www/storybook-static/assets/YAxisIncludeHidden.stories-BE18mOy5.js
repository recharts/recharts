import{u as f,e}from"./iframe-C389UKKQ.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-DdPwtx1e.js";import{p as a}from"./Page-DPte-9pC.js";import{g as A}from"./arrayEqualityCheck-Cu2SMg-k.js";import{C}from"./ComposedChart-Bc2F2Aqn.js";import{X as K}from"./XAxis-CkTpgH_L.js";import{L as v}from"./Legend-CapyIZ6D.js";import{B as s}from"./Bar-DGLadEaA.js";import{R as x}from"./RechartsHookInspector-CxbWCB6n.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BfjJ9MKk.js";import"./Layer-BRJkvvA0.js";import"./resolveDefaultProps-2PDdAmjP.js";import"./Text-CdmDvBPW.js";import"./DOMUtils-CjAbMbXQ.js";import"./Label-BsU6QA-m.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-OX2yCAej.js";import"./zIndexSlice-DHdgWlAr.js";import"./immer-4pDlWF5t.js";import"./types-9ii6Ug_u.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BUt1aBWJ.js";import"./hooks-yBoCoA8O.js";import"./axisSelectors-B2s8T9Mh.js";import"./d3-scale-CLP74tcR.js";import"./RechartsWrapper-De-O4PZ_.js";import"./index-CDhhJ3He.js";import"./CartesianChart-3kGQQmyR.js";import"./chartDataContext-UATbZCFS.js";import"./CategoricalChart-C8H-MuO4.js";import"./Symbols-DhEDlNLq.js";import"./symbol-B93tdxSz.js";import"./path-DyVhHtw_.js";import"./useElementOffset-6UXXDY4R.js";import"./uniqBy-CsNwgfvM.js";import"./iteratee-DHpBDbpq.js";import"./tooltipContext-BNGmx6r5.js";import"./ReactUtils-B3LU80BF.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bdl90qEj.js";import"./useAnimationId-CxUXlcSZ.js";import"./ActiveShapeUtils-FSjQNWDr.js";import"./RegisterGraphicalItemId-e2Xsds3X.js";import"./ErrorBarContext-BnMue-Vz.js";import"./GraphicalItemClipPath-CCvWImiO.js";import"./SetGraphicalItem-DcN0Hr85.js";import"./getZIndexFromUnknown-Cgu_fOon.js";import"./graphicalItemSelectors-CunV7Tqe.js";import"./index-BR3VF3oH.js";import"./ChartSizeDimensions-BBcqsgSH.js";import"./OffsetShower-CIf7NCdz.js";import"./PlotAreaShower-DabrICzc.js";const He={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ye=["WithIncludeHidden"];export{t as WithIncludeHidden,Ye as __namedExportsOrder,He as default};
