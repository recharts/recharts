import{r as f,R as e}from"./iframe-DDEEclxH.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-x9xRaP5Q.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CummiUIE.js";import{C as k}from"./ComposedChart-DyJQFPgX.js";import{X as K}from"./XAxis-OiAt4OfM.js";import{L as v}from"./Legend-L_Y73pQX.js";import{B as a}from"./Bar-DKSznDqB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BfUQEb6D.js";import"./Text-CkcSa5pV.js";import"./resolveDefaultProps-BzDlbQMA.js";import"./DOMUtils-3FjGni4U.js";import"./isWellBehavedNumber-D3AVRour.js";import"./useId-C6c_N3kr.js";import"./useBackwardsCompatibleTheme-CoJLQA5O.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BUGWfp6H.js";import"./index-BXn3iYjY.js";import"./index-DUYM5IBE.js";import"./RechartsWrapper-B3G4Mqkl.js";import"./axisSelectors-DiahpmD-.js";import"./throttle-OMOVa0qg.js";import"./d3-scale-U2rNi4eb.js";import"./index-DuT7Rit8.js";import"./index-CkiAY9bZ.js";import"./renderedTicksSlice-BdHhja-C.js";import"./index-BjbpJMdG.js";import"./CartesianAxis-CdQspuXD.js";import"./Layer-DiIYn3al.js";import"./types-CMxl_r2z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CBOTH61V.js";import"./chartDataContext-XrvVwuj4.js";import"./CategoricalChart-msaFLCNM.js";import"./Symbols-tQ0oerhS.js";import"./symbol-BAK-TpWQ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CxBvXcML.js";import"./uniqBy-BK8FWQ7h.js";import"./iteratee-B5AA-IZ8.js";import"./AnimatedItems-AtWd5M7o.js";import"./useAnimationId-qBVm6Gg1.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ConSHzfx.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CjAGkH2d.js";import"./tooltipContext-LIlH2u3u.js";import"./RegisterGraphicalItemId-nSLabm2D.js";import"./ErrorBarContext-DNzyQz3v.js";import"./GraphicalItemClipPath-CmGXOSE1.js";import"./SetGraphicalItem-gofxKkAQ.js";import"./getZIndexFromUnknown-CEPKdlSW.js";import"./useGraphicalItemIdentity-Dou3-X4Z.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
