import{r as f,e}from"./iframe-Bsm65lpu.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-Sk_2BRIW.js";import{Y as c}from"./YAxis-B-wKWhdg.js";import{R as A}from"./arrayEqualityCheck-pVpwfhw9.js";import{C}from"./ComposedChart-DLKCNB3k.js";import{X as K}from"./XAxis-TRGWr1gg.js";import{L as v}from"./Legend-BN92K_RB.js";import{B as a}from"./Bar-CQJxKN4K.js";import{R as x}from"./RechartsHookInspector-Clmx80vb.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-rxG_-3GU.js";import"./CartesianAxis-BtMXIbHW.js";import"./Layer-wMrNll4f.js";import"./Text-qBvU-JXf.js";import"./DOMUtils-D61cKDLm.js";import"./Label-BJg3D3z3.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-B9ntexjH.js";import"./zIndexSlice-CyooY4AF.js";import"./types-DNFwz7vs.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-C8-QiYSZ.js";import"./axisSelectors-BL5_jCnI.js";import"./RechartsWrapper-De8mSPBF.js";import"./CartesianChart-COAh2GwA.js";import"./chartDataContext-BzZNyNeo.js";import"./CategoricalChart-CpYGwsdd.js";import"./Symbols-lC3l514a.js";import"./Curve-Dwdi27bs.js";import"./useElementOffset-F4mKjVmk.js";import"./iteratee-D5J6UOkd.js";import"./tooltipContext-CW6cq-3Y.js";import"./ReactUtils-Dg23rHrH.js";import"./ActiveShapeUtils-D74FXmj1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CqOp_VNA.js";import"./useAnimationId-dI2bK3sU.js";import"./Trapezoid-DD-HamH_.js";import"./Sector-BjJSeVtU.js";import"./RegisterGraphicalItemId-D7Q-Ng9s.js";import"./ErrorBarContext-ypCLG3pm.js";import"./GraphicalItemClipPath-DmxStlHE.js";import"./SetGraphicalItem-BK1cbA1C.js";import"./getZIndexFromUnknown-U6VIUAGj.js";import"./graphicalItemSelectors-DbjNkkTF.js";import"./index-CU5fePgk.js";import"./ChartSizeDimensions-CraFDmRl.js";import"./OffsetShower-Cb2JVvak.js";import"./PlotAreaShower-Bu5CsAfQ.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ve=["WithIncludeHidden"];export{t as WithIncludeHidden,ve as __namedExportsOrder,Ke as default};
