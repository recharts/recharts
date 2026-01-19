import{r as f,e}from"./iframe-DwwP6BDm.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CtpClMsJ.js";import{Y as c}from"./YAxis-BtN4txUd.js";import{R as A}from"./arrayEqualityCheck-CXp0SSuS.js";import{C}from"./ComposedChart-DKKiCSIk.js";import{X as K}from"./XAxis-CWc7NM0U.js";import{L as v}from"./Legend-BfuO8CMF.js";import{B as a}from"./Bar-W7kr5YLC.js";import{R as x}from"./RechartsHookInspector-CJI_KtjH.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-fclRL42w.js";import"./CartesianAxis-eabYiytD.js";import"./Layer-CFoQxLn1.js";import"./Text-BQatnNw9.js";import"./DOMUtils-B0inai4d.js";import"./Label-DDS3-7t-.js";import"./PolarUtils-Dg8SPN1d.js";import"./ZIndexLayer-BDklLudV.js";import"./zIndexSlice-B2wHCWq0.js";import"./types-B_qGOwmF.js";import"./hooks-COs4f3qd.js";import"./axisSelectors-B_EC2kA9.js";import"./RechartsWrapper-DfwiyTzK.js";import"./CartesianChart-CSvI-_HL.js";import"./chartDataContext-GZk7dH94.js";import"./CategoricalChart-LzovMGTR.js";import"./Symbols-C6tHIL3l.js";import"./Curve-CYEqd5kN.js";import"./useElementOffset-DWLOui-S.js";import"./iteratee-phGUhboG.js";import"./tooltipContext-HXLRqA2y.js";import"./ReactUtils-DUdaZBrS.js";import"./ActiveShapeUtils-TYQt8YFp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BIC-oKaI.js";import"./useAnimationId-DSGl_EXu.js";import"./Trapezoid-D_UTfuwy.js";import"./Sector-CBezTXxj.js";import"./RegisterGraphicalItemId-DERA-43u.js";import"./ErrorBarContext-CdRKq8JD.js";import"./GraphicalItemClipPath-CGcYTlQM.js";import"./SetGraphicalItem-BEgWdOjU.js";import"./getZIndexFromUnknown-ZTxR44GJ.js";import"./graphicalItemSelectors-CufL_txW.js";import"./index-BPFUjSxJ.js";import"./ChartSizeDimensions-Bw79VUZb.js";import"./OffsetShower-BCg2GNSc.js";import"./PlotAreaShower-DXMXrPtG.js";const Ce={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ke=["WithIncludeHidden"];export{t as WithIncludeHidden,Ke as __namedExportsOrder,Ce as default};
