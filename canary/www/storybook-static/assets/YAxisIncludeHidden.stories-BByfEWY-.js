import{r as f,R as e}from"./iframe-DLBrGVIL.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-BYVuK0Yz.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D04f94zz.js";import{C as k}from"./ComposedChart-B19GUyoN.js";import{X as K}from"./XAxis-CeLc4bEQ.js";import{L as v}from"./Legend-rYKJOgHs.js";import{B as a}from"./Bar-DeiK9zHA.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DCNaX0Un.js";import"./get-CjriyByo.js";import"./Label-B42eZj7W.js";import"./Text-3dSBCvrE.js";import"./ZIndexLayer-R8fInGM9.js";import"./index-B7CtExx5.js";import"./index-DQTJ-3mG.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-5dY8QunD.js";import"./throttle-Csq4RHLA.js";import"./axisSelectors-e5FgB8sH.js";import"./d3-scale-B7f23rgt.js";import"./CartesianAxis-DwNRBXKt.js";import"./Layer-fmxJ3YOZ.js";import"./types-Bhx-lAgy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C3k9zhPb.js";import"./index-wzkov3Za.js";import"./index-C5Iik6-v.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CQD9R6Ch.js";import"./index-71o-Y0_J.js";import"./fillDefinitions-3l2D0OPm.js";import"./CartesianChart-DqjyD4mn.js";import"./chartDataContext-Xl7iaHZA.js";import"./CategoricalChart-D7HNeFeV.js";import"./Symbols-CwwyfWDy.js";import"./symbol-CTUGUG7K.js";import"./path-BBMZd4YL.js";import"./useElementOffset-CivVGgp9.js";import"./uniqBy-ConzCxl5.js";import"./iteratee-BL4ehpYl.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-C-aMudj3.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BfcJPzvH.js";import"./useAnimationId-UzUbsW_e.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BggRH-Y1.js";import"./tooltipContext-I57Z2J2k.js";import"./ErrorBarContext-5vBRFIsn.js";import"./activeStyles-DixW-39S.js";import"./SetGraphicalItem-mnwtfu-X.js";import"./getZIndexFromUnknown-DInNQp8a.js";import"./useEffectiveDataKey-CzXzkxYB.js";import"./omit-VFDAEpqp.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
