import{r as f,R as e}from"./iframe-UgRt0vcp.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CJZXqV3k.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B7qjUnDG.js";import{C as k}from"./ComposedChart-C6hx2aan.js";import{X as K}from"./XAxis-4W0ht619.js";import{L as v}from"./Legend-SEzvkhHd.js";import{B as a}from"./Bar-rAjISxSa.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Ct2bC8Rh.js";import"./Text-CIcS1Cht.js";import"./resolveDefaultProps-BXcWlbHp.js";import"./DOMUtils-hZ-h7K-C.js";import"./isWellBehavedNumber-ysV-_8Aq.js";import"./useId-nYKyJk56.js";import"./useBackwardsCompatibleTheme-DJK5Z4IB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-A1V94IPq.js";import"./index-Bv-jl5LW.js";import"./index-Bvm9MNt8.js";import"./RechartsWrapper-EuqqM12a.js";import"./axisSelectors-DIh-l85l.js";import"./throttle-DuwfTuib.js";import"./d3-scale-Cn-9twYV.js";import"./index-BUuQQxxl.js";import"./index-BtCdhKy_.js";import"./renderedTicksSlice-rspC5CNs.js";import"./index-NRyuBWjq.js";import"./CartesianAxis-RT1RuzF2.js";import"./Layer-C1js-4J0.js";import"./types-BQX4mfvu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DoGcO1A-.js";import"./chartDataContext-BKXebmD7.js";import"./CategoricalChart-BbYkYnOT.js";import"./Symbols-DD6r1Zt-.js";import"./symbol-C00MPWxj.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BV51zAtA.js";import"./uniqBy-C0AvOEm-.js";import"./iteratee-BGbr-Qh6.js";import"./AnimatedItems-BpS1OD2e.js";import"./useAnimationId-DPVBY7S8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-f5SbKkB1.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B_uanDrb.js";import"./tooltipContext-CFVX9J48.js";import"./RegisterGraphicalItemId-Cu5milgY.js";import"./ErrorBarContext-g5uku85c.js";import"./GraphicalItemClipPath-C-zprDgr.js";import"./SetGraphicalItem-1hTkIljj.js";import"./getZIndexFromUnknown-BRYQOn7B.js";import"./useGraphicalItemIdentity-DyOG4GgF.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
