import{u as f,e}from"./iframe-CWtGA3nN.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-BNqIiiyx.js";import{p as a}from"./Page-DPte-9pC.js";import{g as A}from"./arrayEqualityCheck-SSZ_TbBR.js";import{C}from"./ComposedChart-C0UtoPhu.js";import{X as K}from"./XAxis-DW0rJY1W.js";import{L as v}from"./Legend-DJu-WPPA.js";import{B as s}from"./Bar-DPt3FqP7.js";import{R as x}from"./RechartsHookInspector-C5rf562U.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Bxj1i8r5.js";import"./Layer-CPnmijdU.js";import"./resolveDefaultProps-DAVWEwBG.js";import"./Text-C8joD4Pq.js";import"./DOMUtils-CParKcwz.js";import"./Label-C--aO5Ak.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DtffmqPt.js";import"./zIndexSlice-DXFiHolo.js";import"./immer-BFspOnss.js";import"./types-DgK_EaWG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-dpcUCF55.js";import"./hooks-2GkvPwk3.js";import"./axisSelectors-B2ypiSef.js";import"./d3-scale-QF4ItY9H.js";import"./RechartsWrapper-BtFvOF_N.js";import"./index-CJJNMar2.js";import"./CartesianChart-CjBRb4BQ.js";import"./chartDataContext-BDE8JW6h.js";import"./CategoricalChart-VkWulsmh.js";import"./Symbols-C5EGHUxC.js";import"./symbol-CZfqmVoY.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DXnmGdlu.js";import"./uniqBy-B6g5sB3v.js";import"./iteratee-MnyvU_G3.js";import"./tooltipContext-CnfOawa_.js";import"./ReactUtils-JfqC4NUj.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CNr5V-0I.js";import"./useAnimationId-B0ac7aow.js";import"./ActiveShapeUtils-CdHtuYAv.js";import"./RegisterGraphicalItemId-6R0wFFYv.js";import"./ErrorBarContext-Bkb8bdCY.js";import"./GraphicalItemClipPath-636H-9xI.js";import"./SetGraphicalItem-DcEByKaS.js";import"./getZIndexFromUnknown-CDklThju.js";import"./graphicalItemSelectors-BfrjCcn5.js";import"./index-DsA403Ur.js";import"./ChartSizeDimensions-BdcGth4f.js";import"./OffsetShower-BzgHuzNu.js";import"./PlotAreaShower-5_nPAcLw.js";const He={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
