import{P as f,c as e}from"./iframe-CJZgj0uU.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-BAQCElzz.js";import{p as a}from"./Page-DPte-9pC.js";import{g as C}from"./zIndexSlice-BZ2O-OQH.js";import{C as k}from"./ComposedChart-CmvcVU8X.js";import{X as K}from"./XAxis-BSW-Wlgv.js";import{L as v}from"./Legend-Pe-dwHgI.js";import{B as s}from"./Bar-KGmct2vF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BEAZ2r52.js";import"./CartesianAxis-BX7jntaJ.js";import"./Layer-ydyUpJJb.js";import"./resolveDefaultProps-FKfcMfmF.js";import"./Text-D112bEeq.js";import"./DOMUtils-BgafkoVk.js";import"./isWellBehavedNumber-Nplq3bnb.js";import"./Label-CJIrHnSQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DPHRw4Ib.js";import"./index-BaU2Z89k.js";import"./index-BRhVkoAq.js";import"./types-CiRy8kfJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bd5uuDyd.js";import"./immer-BIrrzgtK.js";import"./RechartsWrapper-DQ7nKJcr.js";import"./index-CU49z8K0.js";import"./index-KU4xeJqQ.js";import"./axisSelectors-Q9vNN-fQ.js";import"./d3-scale-DdptYiWa.js";import"./CartesianChart-BaL0sKso.js";import"./chartDataContext-BuQzXvR1.js";import"./CategoricalChart-Q8RRHSJw.js";import"./Symbols-Cv-NkGAG.js";import"./symbol-C1akmMb0.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C-Hc0Nh0.js";import"./uniqBy-7nk3lUE2.js";import"./iteratee-InYqkfXa.js";import"./tooltipContext-DdsaO4dB.js";import"./ReactUtils-GZ1OoiCv.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DN1lBA6W.js";import"./useAnimationId-Bs6-Zm7y.js";import"./ActiveShapeUtils-BjI4G98c.js";import"./RegisterGraphicalItemId-Y2xEXS3n.js";import"./ErrorBarContext-CS0wxcMb.js";import"./GraphicalItemClipPath-DHmOdu8W.js";import"./SetGraphicalItem-xXSm9JS4.js";import"./getZIndexFromUnknown-Cnah0vsn.js";import"./graphicalItemSelectors-CK02F2-J.js";const ve={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const xe=["WithIncludeHidden"];export{t as WithIncludeHidden,xe as __namedExportsOrder,ve as default};
