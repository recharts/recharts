import{r as f,R as e}from"./iframe-DyLoEKVT.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-nsTECOPY.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BMJvLT6-.js";import{C as k}from"./ComposedChart-CmFAmP0C.js";import{X as K}from"./XAxis-9OVyrDRG.js";import{L as v}from"./Legend-nAvx1kVW.js";import{B as s}from"./Bar-YboTzAKh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DowO2FG-.js";import"./CartesianAxis-DVRkpibw.js";import"./Layer-1PJWGF6B.js";import"./resolveDefaultProps-v4--KFNE.js";import"./Text-DbHSmtym.js";import"./DOMUtils-DO9od7PA.js";import"./isWellBehavedNumber-DNtaqKPn.js";import"./Label-Bc99EiAM.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DHFxHLUr.js";import"./index-ChIcT5we.js";import"./index-DlqbmUdM.js";import"./types-ChV1_7kb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BqkZndXs.js";import"./immer-BagcJtG2.js";import"./RechartsWrapper--UzxIxEu.js";import"./index-CufWBdFA.js";import"./index-PISW76kq.js";import"./axisSelectors-CnSKWHKt.js";import"./d3-scale-CTXcb0ZT.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BuXwJSrD.js";import"./chartDataContext-DJBEQzNo.js";import"./CategoricalChart-nR7o8SXq.js";import"./Symbols-BgFHj5o9.js";import"./symbol-BzH8IghT.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DniPY9C-.js";import"./uniqBy-YTTRAMug.js";import"./iteratee-KqbZdyCL.js";import"./tooltipContext-C0k4tkhk.js";import"./AnimatedItems-DZ2CDn43.js";import"./useAnimationId-C3XlQNNz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C19lR5AX.js";import"./ActiveShapeUtils-DR5RhSUS.js";import"./RegisterGraphicalItemId-CalLmt4D.js";import"./ErrorBarContext-CuSWRyRz.js";import"./GraphicalItemClipPath-B_O83OKV.js";import"./SetGraphicalItem-Ve1ljg4L.js";import"./getZIndexFromUnknown-C7YexW4b.js";import"./graphicalItemSelectors-3eL6hAsl.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
