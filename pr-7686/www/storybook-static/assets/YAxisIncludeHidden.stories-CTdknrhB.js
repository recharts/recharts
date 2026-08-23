import{r as f,R as e}from"./iframe-DY5yIkq2.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DKNkaL0G.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BJ9sbnI3.js";import{C as k}from"./ComposedChart-Qtg4qpHf.js";import{X as K}from"./XAxis-DqmgH3_K.js";import{L as v}from"./Legend-BU2Y_G38.js";import{B as s}from"./Bar-wv2wb_8Z.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DF-ljJas.js";import"./Text-CbUk5Nnj.js";import"./resolveDefaultProps-CD9o0rsG.js";import"./DOMUtils-PzmIv2NH.js";import"./isWellBehavedNumber-DqVPPSXs.js";import"./useId-s6AFE7pi.js";import"./useBackwardsCompatibleTheme-CQzhlAGv.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BUoXCop5.js";import"./index-6CL2Bs_1.js";import"./index-Cl8EGK2P.js";import"./RechartsWrapper-fiPqbXet.js";import"./index-CqtRrj2-.js";import"./index-BgsJFNTR.js";import"./throttle-ClrYp41z.js";import"./axisSelectors-BA6Z_Ork.js";import"./d3-scale-L5elDZ4E.js";import"./renderedTicksSlice-CkTe5jVw.js";import"./CartesianAxis-Dkt1u38S.js";import"./Layer-sQPOBB7C.js";import"./types-CYQx7sGq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BYEGQZkF.js";import"./chartDataContext-CpL7gfA0.js";import"./CategoricalChart-xf3XNLGA.js";import"./Symbols-BDBGTJa7.js";import"./symbol-BV3D7xmY.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C44gFBr0.js";import"./uniqBy-CrTJkdgV.js";import"./iteratee-5kgpLf6w.js";import"./AnimatedItems-0mJPdXUD.js";import"./useAnimationId-bV9tA_xy.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D-WBL6H0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D2cfX5ZD.js";import"./tooltipContext-BLHVkTo5.js";import"./RegisterGraphicalItemId-uvsWx-K_.js";import"./ErrorBarContext-DeFkaPs_.js";import"./GraphicalItemClipPath-pdIKb4VD.js";import"./SetGraphicalItem-CQx7YnIu.js";import"./getZIndexFromUnknown-CW5sJR3K.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-7Fl0-UOj.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Le=["WithIncludeHidden"];export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
