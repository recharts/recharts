import{r as f,R as e}from"./iframe-CLtR9-MI.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-D2WqE3kW.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DAD-nkNa.js";import{C as k}from"./ComposedChart-B1Fivz02.js";import{X as K}from"./XAxis-6BQkQ0ss.js";import{L as v}from"./Legend-D9WY1rjh.js";import{B as a}from"./Bar-CinKssDb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BpbNna-S.js";import"./Text-CwyJl8Qf.js";import"./resolveDefaultProps-D6TYxzEx.js";import"./DOMUtils-B1EmNrIU.js";import"./isWellBehavedNumber-B9qntTjY.js";import"./useId-BN1Du40N.js";import"./useBackwardsCompatibleTheme-BJ7QBrpH.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D5Qq2-j2.js";import"./index-u5MFF0A2.js";import"./index-5pSzTMen.js";import"./RechartsWrapper-BboqGkG2.js";import"./axisSelectors-B01i0yXb.js";import"./throttle-DKa3BIxu.js";import"./d3-scale-B1XD5c5K.js";import"./index-BaHi7qAw.js";import"./index-CZdIlyb1.js";import"./renderedTicksSlice-BY7YJYCI.js";import"./index-CjAhAOwM.js";import"./CartesianAxis-BeUj4LrW.js";import"./Layer-DSwUEhDY.js";import"./types-_UL_m5mX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BnmKHbJT.js";import"./chartDataContext-Dhs0xlHM.js";import"./CategoricalChart-DJouQuZu.js";import"./Symbols-S2gdZXyp.js";import"./symbol-CyNk4FNP.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BFvCNgns.js";import"./uniqBy-BXE4YbrE.js";import"./iteratee-DJf2_w-w.js";import"./AnimatedItems-NFxue0WW.js";import"./useAnimationId-CKjPSYvA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DkICwgVP.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CKYNeMt6.js";import"./tooltipContext-JpJhju1r.js";import"./RegisterGraphicalItemId-fH2hJ8mR.js";import"./ErrorBarContext-DJq7p9Zk.js";import"./GraphicalItemClipPath-1HJc_HKi.js";import"./SetGraphicalItem-Ty2V-l5e.js";import"./getZIndexFromUnknown-DX--_Gyg.js";import"./useGraphicalItemIdentity-CogcmOBq.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
