import{r as f,R as e}from"./iframe-DkECMRhY.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DYBfxLcG.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DrphCOe8.js";import{C as k}from"./ComposedChart-DAUnDtCN.js";import{X as K}from"./XAxis-CnIY0uCY.js";import{L as v}from"./Legend-DTJj63r6.js";import{B as s}from"./Bar-C_yg52s2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Bbd2gVOF.js";import"./Layer-BR_lx081.js";import"./resolveDefaultProps-9kFOeAbx.js";import"./Text-D0YGp1Dc.js";import"./DOMUtils-m9hSMA-C.js";import"./isWellBehavedNumber-C5D-spqh.js";import"./Label-D0EmKjrf.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CJnfUCXF.js";import"./index-Bs5MO9B0.js";import"./index-B2EkAXQG.js";import"./types-BhAPDMfv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dz89v3et.js";import"./throttle-OeP2NIwG.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DT2t4UUR.js";import"./index-CubO9nle.js";import"./index-48_ZTq2u.js";import"./axisSelectors-O1utMkLJ.js";import"./d3-scale-DCyD-m6k.js";import"./CartesianChart-DlZ9N_1W.js";import"./chartDataContext-Buh6poim.js";import"./CategoricalChart-Ctl-0XVF.js";import"./Symbols-BY7eCjEQ.js";import"./symbol-2iqHfsfo.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DrvFMWs-.js";import"./uniqBy-C0Xto3XN.js";import"./iteratee-CfKSMI6F.js";import"./tooltipContext-CvlaqRHM.js";import"./AnimatedItems-D_PfprH1.js";import"./useAnimationId-BLnnlAbr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DN85SES_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BkWJCflD.js";import"./RegisterGraphicalItemId-DM_TAUFh.js";import"./ErrorBarContext-Do1YuZSV.js";import"./GraphicalItemClipPath-B9n7ZYaN.js";import"./SetGraphicalItem-AXvs4ZTf.js";import"./getZIndexFromUnknown-eIjSqIJi.js";import"./graphicalItemSelectors-BSInLqmO.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const be=["WithIncludeHidden"];export{t as WithIncludeHidden,be as __namedExportsOrder,Ee as default};
