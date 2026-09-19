import{r as f,R as e}from"./iframe-CiEll_hl.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-veNA_t3h.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BWUZw0HV.js";import{C as k}from"./ComposedChart-BclLBL5K.js";import{X as K}from"./XAxis-BecTjeSU.js";import{L as v}from"./Legend-Uo7plN5O.js";import{B as a}from"./Bar-BAH0pPpN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-2sILoPl9.js";import"./Text-C5G8lazz.js";import"./resolveDefaultProps-duavw9Kl.js";import"./DOMUtils-HtrcCiap.js";import"./isWellBehavedNumber-ry_onT8i.js";import"./useId-BF2rDIp_.js";import"./useBackwardsCompatibleTheme-B38ON0Kc.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DOTS06hC.js";import"./index-C6gwqJSk.js";import"./index-CWa27twE.js";import"./RechartsWrapper-8qI1d7ig.js";import"./axisSelectors-Czhrsmz1.js";import"./throttle-D31XxRNM.js";import"./d3-scale-CoahAzwi.js";import"./index-DPEbYR3l.js";import"./index-d_0OIgID.js";import"./renderedTicksSlice-CDeLucdV.js";import"./index-RfC6TSb7.js";import"./CartesianAxis-Cv1crkEc.js";import"./Layer-Bl66F1TU.js";import"./types-MiZov7mG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-YzLYuA0Z.js";import"./chartDataContext-A6K28S5n.js";import"./CategoricalChart-yzrwRYbH.js";import"./Symbols-WUygGVJ4.js";import"./symbol-BVUZRMIr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CAsd9Skh.js";import"./uniqBy-CYyDJIfO.js";import"./iteratee-hWILKxtV.js";import"./AnimatedItems-ABeUxSrb.js";import"./useAnimationId-DB2VCJ-C.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BFCB6ihn.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CIEveTom.js";import"./tooltipContext-BPcA9ywb.js";import"./RegisterGraphicalItemId-V_3RkT2Z.js";import"./ErrorBarContext-DFolGKyI.js";import"./GraphicalItemClipPath-CNKUlu4p.js";import"./SetGraphicalItem-BGxIGAFZ.js";import"./getZIndexFromUnknown-DixAzdwx.js";import"./useGraphicalItemIdentity-DPacc47z.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
