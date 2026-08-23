import{r as f,R as e}from"./iframe-CJ35PD5A.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-C-pxpMoP.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CXvAqe1u.js";import{C as k}from"./ComposedChart-fAwm7BMd.js";import{X as K}from"./XAxis-CQkckETF.js";import{L as v}from"./Legend-CAVHwqQQ.js";import{B as s}from"./Bar-kT5j6kre.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-cSvk2bVk.js";import"./Text-C5ltUD8c.js";import"./resolveDefaultProps-B4ysfGm0.js";import"./DOMUtils-DuAj34SJ.js";import"./isWellBehavedNumber-DCFZS65F.js";import"./useId-BZocWyjW.js";import"./useBackwardsCompatibleTheme-BQ1enFxD.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BbmNpztl.js";import"./index-DCTwsO2l.js";import"./index-BTcur_ii.js";import"./RechartsWrapper-BxyVG0mr.js";import"./index-D5VY6D4m.js";import"./index-DuaQKKCa.js";import"./throttle-BvFenjAj.js";import"./axisSelectors-BMiLu3pU.js";import"./d3-scale-BMNy9LMQ.js";import"./renderedTicksSlice-BOsENmMF.js";import"./CartesianAxis-A2w9N0VH.js";import"./Layer-DSIl_tFJ.js";import"./types-C2sHPoqW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-M-BqrDCQ.js";import"./chartDataContext-3LBg74Yj.js";import"./CategoricalChart-CE-ZSJzH.js";import"./Symbols-4vesr3cT.js";import"./symbol-DTaQU34d.js";import"./path-DyVhHtw_.js";import"./useElementOffset-k35BE04p.js";import"./uniqBy-CxVqVc_e.js";import"./iteratee-DGK4JZ60.js";import"./AnimatedItems-DkvJpJ1L.js";import"./useAnimationId-BrX_XnAR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CMWnDzZf.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B17w6t33.js";import"./tooltipContext-Cm0GuNxv.js";import"./RegisterGraphicalItemId-B595cwUV.js";import"./ErrorBarContext-BXwuVsqs.js";import"./GraphicalItemClipPath-DCmI04ho.js";import"./SetGraphicalItem-y646d7k1.js";import"./getZIndexFromUnknown-CsrL5HVW.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BlAHB7pR.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
