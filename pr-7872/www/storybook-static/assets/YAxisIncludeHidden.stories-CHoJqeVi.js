import{r as f,R as e}from"./iframe-Hl-NyIui.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-aV4oz1qa.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CfmJ5m3S.js";import{C as k}from"./ComposedChart-BDadpkQJ.js";import{X as K}from"./XAxis-dvgP8Xa0.js";import{L as v}from"./Legend-DATPhy6E.js";import{B as a}from"./Bar-g_JiauVn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-B3PtgVX6.js";import"./Text-BrVNMlzX.js";import"./resolveDefaultProps-Cef9-W_0.js";import"./DOMUtils-CG6HmAln.js";import"./isWellBehavedNumber-DkDVf3J3.js";import"./useId-DW-27Lrg.js";import"./useBackwardsCompatibleTheme-gSrU4sF5.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C3i-HdBs.js";import"./index--xPFvF8G.js";import"./index-BDqTEc2Q.js";import"./RechartsWrapper-6h9C2k7P.js";import"./axisSelectors-BUNPrG5h.js";import"./throttle-BbfdAojm.js";import"./d3-scale-jS5aGAiZ.js";import"./index-DBpjU2SQ.js";import"./index-BofEEBUS.js";import"./renderedTicksSlice-CNE8P8TP.js";import"./index-D2iNSRAe.js";import"./CartesianAxis-B_3pRXW9.js";import"./Layer-CFBs8Wel.js";import"./types-B1K9SbcX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Ci5OoGHz.js";import"./chartDataContext-C-VJeLBh.js";import"./CategoricalChart-CArj-fEw.js";import"./Symbols-BWF6xm86.js";import"./symbol-DhzuOEcy.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BfRtNT8-.js";import"./uniqBy-ByQGoswD.js";import"./iteratee-BqIuCNzZ.js";import"./AnimatedItems-ChX6uVrd.js";import"./useAnimationId-DLNOJTSV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ChG8X9SF.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D9ea8jTE.js";import"./tooltipContext-BPtMQ1jk.js";import"./RegisterGraphicalItemId-D1BMc2l2.js";import"./ErrorBarContext-D2c9lRCZ.js";import"./GraphicalItemClipPath-CzquVpfg.js";import"./SetGraphicalItem-BgE77ea4.js";import"./getZIndexFromUnknown-D8k5nfEd.js";import"./useGraphicalItemIdentity-uh3z32K3.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
