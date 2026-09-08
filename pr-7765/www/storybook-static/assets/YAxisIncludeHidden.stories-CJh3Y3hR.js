import{r as f,R as e}from"./iframe-ZGGTKsi4.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-D3HJo_sZ.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DxfJO5SI.js";import{C as k}from"./ComposedChart-HoHDKyYF.js";import{X as K}from"./XAxis-DNlNZaF2.js";import{L as v}from"./Legend-BVslAj_p.js";import{B as a}from"./Bar-DvZWrpGh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CuL7W9s2.js";import"./Text-uTHCfqpL.js";import"./resolveDefaultProps-vV3khv5M.js";import"./DOMUtils-KcdWyv8l.js";import"./isWellBehavedNumber-QCZGXLEu.js";import"./useId-BJoAZaHY.js";import"./useBackwardsCompatibleTheme-DiGhz-R4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CnUQDGMu.js";import"./index-BPQC-jNG.js";import"./index-HrJWGj9i.js";import"./RechartsWrapper-Bhqr1bRq.js";import"./axisSelectors-sP9dBG4h.js";import"./throttle-DU3r4hZM.js";import"./d3-scale-BsspybO2.js";import"./index-BpyhtFRO.js";import"./index-DsBTLunf.js";import"./renderedTicksSlice-BrYwA8bW.js";import"./index-SSLiRbGX.js";import"./CartesianAxis-y6hYyFes.js";import"./Layer-yZG6HjYa.js";import"./types-Cv_7IfEs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-FipRlzk-.js";import"./chartDataContext-CVwvDOw7.js";import"./CategoricalChart-Da_wyX1Y.js";import"./Symbols-CuqLPjZz.js";import"./symbol-DyWpDIVN.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CcFou8CY.js";import"./uniqBy-BAAGpGDY.js";import"./iteratee-CoISyMF-.js";import"./AnimatedItems-B0OCbKtI.js";import"./useAnimationId-BA-Y1lsT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-tu1-I-Uk.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CShJY30W.js";import"./tooltipContext-DqxPUA-U.js";import"./RegisterGraphicalItemId-DAVF2joS.js";import"./ErrorBarContext-DZHL-lpY.js";import"./GraphicalItemClipPath-DOFRcoC3.js";import"./SetGraphicalItem-rcmPBlm0.js";import"./getZIndexFromUnknown-CwPAkW5R.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CdO4AxEG.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
