import{r as f,R as e}from"./iframe-BkVFpUlY.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-ydoiCG45.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DsJvGkf_.js";import{C as k}from"./ComposedChart-B-luCTs0.js";import{X as K}from"./XAxis-DKVVz-sZ.js";import{L as v}from"./Legend-BtNq6Pa5.js";import{B as a}from"./Bar-CS101LmD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Cg9XptP0.js";import"./Text-BIwedGTb.js";import"./resolveDefaultProps-BteSFwB2.js";import"./DOMUtils-BcDWMqtm.js";import"./isWellBehavedNumber-CfBMT12P.js";import"./useId-Cugd2wLY.js";import"./useBackwardsCompatibleTheme-bP9OoM6q.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CfoAs0yr.js";import"./index-0hsVYWu6.js";import"./index-DymoF_97.js";import"./RechartsWrapper-odbOlBoE.js";import"./axisSelectors-B50PWx2F.js";import"./throttle-BmqzJcEu.js";import"./d3-scale-DYQ4LMXq.js";import"./index-Q5aHXVFQ.js";import"./index-YkbYvVvq.js";import"./renderedTicksSlice-CwTU9gZs.js";import"./index-DUxWWrkZ.js";import"./CartesianAxis-CKyL8NSQ.js";import"./Layer-DQ1QN6bj.js";import"./types-CKn4wQG_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CqMhYxBy.js";import"./chartDataContext-VrlvbsLo.js";import"./CategoricalChart-CzfSjKl0.js";import"./Symbols-B3HUvLyw.js";import"./symbol-DQsNkJaP.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CXmZJxz2.js";import"./uniqBy-CqDyWSTv.js";import"./iteratee-CmG9r8ck.js";import"./AnimatedItems-BpowKEth.js";import"./useAnimationId-Bk6mcJf6.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cy_w7-0b.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BSJyn28s.js";import"./tooltipContext-fcW-xcg3.js";import"./RegisterGraphicalItemId-C4Vmg6Ny.js";import"./ErrorBarContext-BYIQqhKW.js";import"./GraphicalItemClipPath-KjuHWuk-.js";import"./SetGraphicalItem-BGmRK6gI.js";import"./getZIndexFromUnknown-EDbwK6Tp.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-D9FBhzIW.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
