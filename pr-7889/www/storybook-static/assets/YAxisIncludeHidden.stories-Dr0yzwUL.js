import{r as f,R as e}from"./iframe-C55SonNK.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-C3mB-_5C.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DasulNlo.js";import{C as k}from"./ComposedChart-DRtqau9M.js";import{X as K}from"./XAxis-BWJ2ABmI.js";import{L as v}from"./Legend-Bv8o00UU.js";import{B as a}from"./Bar-C_-Wweec.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-XuIK8xgk.js";import"./Text-BGO9kFr7.js";import"./resolveDefaultProps-BmNtE2rS.js";import"./DOMUtils-B--wunTb.js";import"./isWellBehavedNumber-hNTnQGF2.js";import"./useId-Ph5cHYEn.js";import"./useBackwardsCompatibleTheme-CMxCV-uY.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-xKUTxtZr.js";import"./index-DlZLgaYD.js";import"./index-BwYupLtq.js";import"./RechartsWrapper-BfpEIOv-.js";import"./axisSelectors-pQ0Se0UH.js";import"./throttle-G3ECa8tr.js";import"./d3-scale-BMtFe6cd.js";import"./index-ConF1OJd.js";import"./index-BPMo8MBn.js";import"./renderedTicksSlice-LEZPKkpV.js";import"./index-Czl7SMar.js";import"./CartesianAxis-Sfv4H3gX.js";import"./Layer-Bpfyjb4F.js";import"./types-DWD7ie2J.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BihUZ5nW.js";import"./chartDataContext-CzjQbFCV.js";import"./CategoricalChart-BO0KKDhg.js";import"./Symbols-DUjaqTcm.js";import"./symbol-Cg0CysXg.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C-dE2UhQ.js";import"./uniqBy-DOeEc7ZY.js";import"./iteratee-CkjZNHcQ.js";import"./AnimatedItems-mUQIEGKr.js";import"./useAnimationId-Dfy40kVz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle--EhuiCVU.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CaNZ8cmS.js";import"./tooltipContext-KFWtgpFU.js";import"./RegisterGraphicalItemId-CAAWrCM1.js";import"./ErrorBarContext-K46B69nM.js";import"./GraphicalItemClipPath-5x7FHKUZ.js";import"./SetGraphicalItem-CASyq9nQ.js";import"./getZIndexFromUnknown-C-VWG9Qg.js";import"./useGraphicalItemIdentity-DFmFmERc.js";import"./dataEntryStyles-Bcs_VkDa.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
