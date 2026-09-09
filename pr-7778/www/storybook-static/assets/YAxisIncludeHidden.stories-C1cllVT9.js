import{r as f,R as e}from"./iframe-D0hbihpw.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-fB5-70kE.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BQR9Og2n.js";import{C as k}from"./ComposedChart-DG9EmM0m.js";import{X as K}from"./XAxis-BAOUXnRk.js";import{L as v}from"./Legend-C0bXGM57.js";import{B as a}from"./Bar-C9PSmlqz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CuFmC-Nb.js";import"./Text-CuYqG2IB.js";import"./resolveDefaultProps-Dmu88e8o.js";import"./DOMUtils-pnmg3tR-.js";import"./isWellBehavedNumber-CZhc5lub.js";import"./useId-CqMWBNZ1.js";import"./useBackwardsCompatibleTheme-BB_m6SGU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-J_UAcRhh.js";import"./index-BZ9qdzrn.js";import"./index-Dh99j1-7.js";import"./RechartsWrapper-CXRkLc1K.js";import"./axisSelectors-Va6d-v4h.js";import"./throttle-DvTX4uc0.js";import"./d3-scale-O8h2L0ph.js";import"./index-DrgC61Jv.js";import"./index-8bi5BFX5.js";import"./renderedTicksSlice-CXB8MRbw.js";import"./index-BDFJggKj.js";import"./CartesianAxis-DbFRpkHK.js";import"./Layer-DikASeyh.js";import"./types-C5BTVxoc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-V6lubhpa.js";import"./chartDataContext-DAXrP6D1.js";import"./CategoricalChart-Byua6Cow.js";import"./Symbols-CYKbw1ao.js";import"./symbol-CWSGDuFW.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Npapc4qs.js";import"./uniqBy-BS3q8RgG.js";import"./iteratee-kuyUhPZO.js";import"./AnimatedItems-SbRPQVaD.js";import"./useAnimationId-qESP7nT-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C_uu3MYE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-5v_sCHFD.js";import"./tooltipContext-DDBxvAQn.js";import"./RegisterGraphicalItemId-DeHO2KGG.js";import"./ErrorBarContext-BWM6Th1h.js";import"./GraphicalItemClipPath-BlTfPWVo.js";import"./SetGraphicalItem-DqlrOVj_.js";import"./getZIndexFromUnknown-Cgv-iSQS.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DmsrIOc1.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
