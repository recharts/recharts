import{r as f,R as e}from"./iframe-CzzdtdLH.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-xlB7Mrcu.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Co00U7DY.js";import{C as k}from"./ComposedChart-QZ0vaLGf.js";import{X as K}from"./XAxis-CKEr4FP9.js";import{L as v}from"./Legend-zFfIrWmw.js";import{B as s}from"./Bar-BQUvCOCn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BbUS-Vpa.js";import"./Layer-BbK8NiGM.js";import"./resolveDefaultProps-BjUNTsKn.js";import"./Text-0Zz8t0sM.js";import"./DOMUtils-DH9j7AXM.js";import"./isWellBehavedNumber-BmNKw_Tm.js";import"./Label-CL5-PwM4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ChHVLqdE.js";import"./index-64quDrFB.js";import"./index-DWpzXqnr.js";import"./types-3QfDILpo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-1HW0Usy7.js";import"./throttle-DKJrGqy3.js";import"./RechartsThemeContext-BUtRhNjz.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-BJjI_Ka0.js";import"./index-Bnee00Tj.js";import"./index-C75_nTb2.js";import"./axisSelectors-BlRIZcT4.js";import"./d3-scale-pYyMK9Lh.js";import"./CartesianChart-CuTVmHhm.js";import"./chartDataContext-BZcRmYig.js";import"./CategoricalChart-VSe_1AC9.js";import"./Symbols-BP5bT7AT.js";import"./symbol-SPLfPpdC.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DxiJzbv2.js";import"./uniqBy-CiFzx0lO.js";import"./iteratee-F5ErMUJK.js";import"./tooltipContext-BnTIeiHd.js";import"./AnimatedItems-BMiyvThI.js";import"./useAnimationId-C9cdprRM.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-COPtEdoX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DWVSurhB.js";import"./RegisterGraphicalItemId-BU-YkEzl.js";import"./ErrorBarContext-ZLp962OP.js";import"./GraphicalItemClipPath-B0mB6y5l.js";import"./SetGraphicalItem-tk_sKpy7.js";import"./getZIndexFromUnknown-DX4gujlY.js";import"./graphicalItemSelectors-BaSKkPeO.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ye=["WithIncludeHidden"];export{t as WithIncludeHidden,Ye as __namedExportsOrder,be as default};
