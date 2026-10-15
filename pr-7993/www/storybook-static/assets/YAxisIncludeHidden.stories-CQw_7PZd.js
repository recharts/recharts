import{r as f,R as e}from"./iframe-Bcbj5Yvj.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-D0HGn8m-.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BbtTmnct.js";import{C as k}from"./ComposedChart-DVpq_Un2.js";import{X as K}from"./XAxis-BGoibDnX.js";import{L as v}from"./Legend-CZS9R5nb.js";import{B as a}from"./Bar-B8fFH8Lf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-K9FSTyve.js";import"./Text-DXJV-9ud.js";import"./resolveDefaultProps-C9cavZl8.js";import"./pageBackground-BH8UHhL6.js";import"./isWellBehavedNumber-Blk-fUEv.js";import"./useId-B-rxwJkk.js";import"./useBackwardsCompatibleTheme-5iZeYqfO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CyylKyYl.js";import"./index-DsYIiLvH.js";import"./index-G8y4OPnu.js";import"./axisSelectors-Bf3Ac7bJ.js";import"./throttle-1wXsTVJX.js";import"./d3-scale-CzxKj8Wi.js";import"./CartesianAxis-D8X_N5Aa.js";import"./Layer-DpGUUMWf.js";import"./types-CJ1XacmQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BgIJtUaM.js";import"./index-8ad9jMOO.js";import"./index-Dr8QNULI.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-JEGbB27w.js";import"./index-D1z8RJDy.js";import"./CartesianChart-63QBJCK9.js";import"./chartDataContext-C1nJ8SNU.js";import"./CategoricalChart-8MHh-in3.js";import"./Symbols-Dv0jAL1Q.js";import"./symbol-Cs2ouPLI.js";import"./path-DyVhHtw_.js";import"./useElementOffset-bqrOzjTl.js";import"./uniqBy-DWa61rJJ.js";import"./iteratee-BELjj_Tc.js";import"./activeStyles-MDW24FXq.js";import"./useAnimationId-Bk7rAd-H.js";import"./dataEntryStyles-BUYkc4Iu.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C1N2Ym6v.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C7GChdzB.js";import"./tooltipContext-BkwGkHZl.js";import"./ErrorBarContext-DDwPy9nt.js";import"./GraphicalItemClipPath-Ch9DqqLY.js";import"./SetGraphicalItem-a6aphxRl.js";import"./getZIndexFromUnknown-BtVWBbXg.js";import"./useEffectiveDataKey-D3HkyWZy.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
