import{r as f,R as e}from"./iframe-0BZy6ovm.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-vaHPQHN5.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BIk5RwDD.js";import{C as k}from"./ComposedChart-BZt5HSsG.js";import{X as K}from"./XAxis-CpzBATa7.js";import{L as v}from"./Legend-BYhpegXH.js";import{B as s}from"./Bar-CScIQ7t0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C0FrVcAE.js";import"./Text-Bh7Xcfw9.js";import"./resolveDefaultProps-DgX86JLB.js";import"./DOMUtils-D2BAAnEX.js";import"./isWellBehavedNumber-D86CElyX.js";import"./useBackwardsCompatibleTheme-CXpr_aCI.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-AgSG9OQ6.js";import"./index-TucVX7sw.js";import"./index-BJl6RyTQ.js";import"./RechartsWrapper-DN-j5lzD.js";import"./index-C9HBA5-V.js";import"./index-BRBcTSHI.js";import"./throttle-DiDu5xyi.js";import"./axisSelectors-D-aV3CxY.js";import"./d3-scale-D3apC1JT.js";import"./renderedTicksSlice-BqoCmvXn.js";import"./CartesianAxis-D2KJhy7k.js";import"./Layer-6uGVVV7y.js";import"./types-CUmyHBBS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-n4Lt6mFH.js";import"./chartDataContext-BAuSJd-k.js";import"./CategoricalChart-hrSTyr7f.js";import"./Symbols-Dw0UsXtJ.js";import"./symbol-CC9QiqhF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DjmvUNAh.js";import"./uniqBy-B6coPXXs.js";import"./iteratee-XKFyRSES.js";import"./AnimatedItems-B0lHzkOL.js";import"./useAnimationId-D-aszzjL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Qt8i-seL.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BtFIRlOA.js";import"./tooltipContext--l2g8caH.js";import"./RegisterGraphicalItemId-BhyVkMoB.js";import"./ErrorBarContext-D0zljKj-.js";import"./GraphicalItemClipPath-BgcM8yOE.js";import"./SetGraphicalItem-CM7A1obe.js";import"./getZIndexFromUnknown-BBs8o7qA.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-3OFZXdgi.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const He=["WithIncludeHidden"];export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
