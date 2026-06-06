import{r as f,R as e}from"./iframe-CLfZCDGm.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-DF5Jxdkx.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CA_idCig.js";import{C as k}from"./ComposedChart-2Labsqm5.js";import{X as K}from"./XAxis-BYpmzEP_.js";import{L as v}from"./Legend-BMsOzIeP.js";import{B as s}from"./Bar-B0p7ODcV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DkSz9-jm.js";import"./CartesianAxis-CvEaQSy2.js";import"./Layer-Byvx6_V4.js";import"./resolveDefaultProps-x0HcBOxj.js";import"./Text-CGIrE8uN.js";import"./DOMUtils-BuwrxSLS.js";import"./isWellBehavedNumber-COd4_fF0.js";import"./Label-D3bkn6cZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DyKLPJQn.js";import"./index-DnUMf4Cl.js";import"./index-CDzW5wMM.js";import"./types-Dbi5OTiB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Chi1ci-p.js";import"./immer-QRpJ3co-.js";import"./RechartsWrapper-atPiLOuE.js";import"./index-DssGAL0P.js";import"./index-BOf2N6VY.js";import"./axisSelectors-DMG299p3.js";import"./d3-scale-Xh1lphWt.js";import"./string-B6fdYHAA.js";import"./CartesianChart-B0jH1uhv.js";import"./chartDataContext-BNkTUWKr.js";import"./CategoricalChart-BbsCvjmJ.js";import"./Symbols-DJcNZ2_T.js";import"./symbol-GhOusqsO.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Chf_8u6m.js";import"./uniqBy-j6nY3OwR.js";import"./iteratee-BdSYYQdu.js";import"./tooltipContext-CHFypPPU.js";import"./AnimatedItems-2Sc0l-_O.js";import"./useAnimationId-vAkCmZi7.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D_xKR8pa.js";import"./ActiveShapeUtils-CmBRxm29.js";import"./RegisterGraphicalItemId-BL3S-b5-.js";import"./ErrorBarContext-ltXyVCQ2.js";import"./GraphicalItemClipPath-DB3DHpQ4.js";import"./SetGraphicalItem-MghETS_R.js";import"./getZIndexFromUnknown-B-cH9CYE.js";import"./graphicalItemSelectors-DVpE8neB.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
