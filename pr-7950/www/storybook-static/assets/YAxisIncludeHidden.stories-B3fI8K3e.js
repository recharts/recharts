import{r as f,R as e}from"./iframe-CBWhl09v.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-C5dVmWPc.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B1AH5YJS.js";import{C as k}from"./ComposedChart-DXJToHny.js";import{X as K}from"./XAxis-tzQHqynD.js";import{L as v}from"./Legend-Bu7egPOJ.js";import{B as a}from"./Bar-C5HaWseV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CJ9xjWYO.js";import"./Text-fMbisw4f.js";import"./resolveDefaultProps-CJSj2XgG.js";import"./pageBackground-zeq0PAuW.js";import"./isWellBehavedNumber-CSPLhkuq.js";import"./useId-KLEpqtFg.js";import"./useBackwardsCompatibleTheme-Z7_zoiGA.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DmDmq8bi.js";import"./index-BkuzBr4Q.js";import"./index-DAR39XB6.js";import"./RechartsWrapper-BU6mzVyD.js";import"./axisSelectors-B6qdSbwV.js";import"./throttle-bJqzO9Ic.js";import"./d3-scale-BNKhe_xR.js";import"./index-D8EheK28.js";import"./index-rVwT5Wbe.js";import"./renderedTicksSlice-GOLzDKAI.js";import"./index-CFTfJwzV.js";import"./CartesianAxis-BGPUbFHg.js";import"./Layer-DxeVA2bX.js";import"./types-Dq74-fjW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BcuREG8f.js";import"./chartDataContext-CWF_m6e5.js";import"./CategoricalChart-Dvk5cwWF.js";import"./Symbols-D_FNYO7a.js";import"./symbol-Cjy5R5AQ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BeDLriUL.js";import"./uniqBy-BSAN_SQR.js";import"./iteratee-kSqFHTFy.js";import"./activeStyles-BZ5qRbpV.js";import"./useAnimationId-T7zgTeVd.js";import"./dataEntryStyles-CZ7XLNEq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B0IEIFtA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DJCIfDMk.js";import"./tooltipContext-CG3AKtRI.js";import"./ErrorBarContext-Bcceb6pe.js";import"./GraphicalItemClipPath-DGC1RDqu.js";import"./SetGraphicalItem-Dvg6XScA.js";import"./getZIndexFromUnknown-Dn3kwNvw.js";import"./useGraphicalItemIdentity-BtkPyjJj.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
