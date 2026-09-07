import{r as f,R as e}from"./iframe-CD455wJd.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B4p_cdR_.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DzVk2zsV.js";import{C as k}from"./ComposedChart-ChgjgM5t.js";import{X as K}from"./XAxis-Dp--brpT.js";import{L as v}from"./Legend-BZ3pgpi9.js";import{B as a}from"./Bar-BtGMu29-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Da_iI52E.js";import"./Text-oF7SpzZr.js";import"./resolveDefaultProps-iSNXXa8L.js";import"./DOMUtils-Dy-pvXG4.js";import"./isWellBehavedNumber-CknUNxNl.js";import"./useId--uhm0kQP.js";import"./useBackwardsCompatibleTheme-DwRps50g.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B_PuTe7d.js";import"./index-aYpzNMmu.js";import"./index-BdOuXsTR.js";import"./RechartsWrapper-DXQmXvit.js";import"./axisSelectors-Bqat7Cub.js";import"./throttle-PUY-A8nf.js";import"./d3-scale-0hylKXBC.js";import"./index-DR22UKYk.js";import"./index-jPsfR26I.js";import"./renderedTicksSlice-BcRTcSpN.js";import"./index-BlJL6ULE.js";import"./CartesianAxis-DGThgmWi.js";import"./Layer-CsmsD0pa.js";import"./types-BNqzQZQk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Bhj_o7vp.js";import"./chartDataContext-Bp5bHcMs.js";import"./CategoricalChart-CKQwA7lM.js";import"./Symbols-Z30PLWL5.js";import"./symbol-DFRRM7QR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DVhEB4wk.js";import"./uniqBy-BPAi1F97.js";import"./iteratee-Di9C9eZD.js";import"./AnimatedItems-CUITqmXn.js";import"./useAnimationId-ChM5IozY.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B0yuNLwa.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CUAj6KO9.js";import"./tooltipContext-C-A74Bv1.js";import"./RegisterGraphicalItemId-C74Ike1Q.js";import"./ErrorBarContext-DGdrGFny.js";import"./GraphicalItemClipPath-C5TTIcs9.js";import"./SetGraphicalItem-BsTJ2qIT.js";import"./getZIndexFromUnknown-B3i1tr6y.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-yX6ocnQl.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
