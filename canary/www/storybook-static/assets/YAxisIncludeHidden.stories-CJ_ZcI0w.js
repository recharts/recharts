import{r as f,R as e}from"./iframe-DCSfzZD_.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-CXksHDR7.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Cya-j5JC.js";import{C as k}from"./ComposedChart-CwsOLjT-.js";import{X as K}from"./XAxis-BD_qaxla.js";import{L as v}from"./Legend-X10LVISh.js";import{B as s}from"./Bar-BEEYzMTO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-bIWt5V4Q.js";import"./CartesianAxis-B8kAJjBK.js";import"./Layer-CYaqqIa6.js";import"./resolveDefaultProps-CCmyAiJ-.js";import"./Text-BxOuGVRA.js";import"./DOMUtils-C0TjG-2s.js";import"./isWellBehavedNumber-m9CBmcKa.js";import"./Label-DyuMertz.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BUBfOUZp.js";import"./index-Bo0lICcO.js";import"./index-Bc3eNKO0.js";import"./types-pWlDed2R.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CB2WZ0k7.js";import"./immer-ByTaNkbJ.js";import"./RechartsWrapper-f8FpOrqU.js";import"./index-TStCCngK.js";import"./index-CZv42qN9.js";import"./axisSelectors-C-oQ6giK.js";import"./d3-scale-4ju7hcsF.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CB6ngWWH.js";import"./chartDataContext-WKixDFuv.js";import"./CategoricalChart-DJmhsbdm.js";import"./Symbols-BKzYxUbZ.js";import"./symbol-CEbhlMi_.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B3zKGjmj.js";import"./uniqBy-BKEBWd8i.js";import"./iteratee-DGPg2gSr.js";import"./tooltipContext-B88742NV.js";import"./AnimatedItems-DS8CzLL4.js";import"./useAnimationId-BTIZp_pi.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DpxrFSPu.js";import"./ActiveShapeUtils-C_38ZXqU.js";import"./RegisterGraphicalItemId-B-4FmZL4.js";import"./ErrorBarContext-CpQVZJvf.js";import"./GraphicalItemClipPath-7MgXj_jT.js";import"./SetGraphicalItem-3Qo-AVYb.js";import"./getZIndexFromUnknown-BelDedhF.js";import"./graphicalItemSelectors-C2yccbXB.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
