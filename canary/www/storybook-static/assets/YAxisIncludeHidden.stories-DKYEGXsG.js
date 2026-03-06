import{r as f,e}from"./iframe-6EykQKfG.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-EuersLOS.js";import{R as A}from"./arrayEqualityCheck-CqC3jwM6.js";import{C}from"./ComposedChart-D9Ylu3vF.js";import{X as K}from"./XAxis-Bq0FFrPR.js";import{L as v}from"./Legend-DFC8rw7q.js";import{B as a}from"./Bar-w0Cpi59m.js";import{R as x}from"./RechartsHookInspector-De58Dhu7.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DTiDbYgb.js";import"./Layer-DsfYNbWJ.js";import"./resolveDefaultProps-CZLGh6RG.js";import"./Text-ByiAR9HY.js";import"./DOMUtils-BptD102S.js";import"./Label-AanK--nR.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dj7WhaOm.js";import"./zIndexSlice-C6kP2rU-.js";import"./immer-DZYxGOvJ.js";import"./types-DI1ZOnYm.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-ChlibOAb.js";import"./hooks-C3ySExDc.js";import"./axisSelectors-FAny2dXm.js";import"./d3-scale-ZR-RinUh.js";import"./RechartsWrapper-B-8Vi1YZ.js";import"./index-C5RNfFWo.js";import"./CartesianChart-yFNUOVem.js";import"./chartDataContext-vZs3YuCl.js";import"./CategoricalChart-B0C_vbjT.js";import"./Symbols-DRjofMjK.js";import"./symbol-VuSYaHfl.js";import"./step-DU4Jxd72.js";import"./useElementOffset-DL95p2it.js";import"./uniqBy-D9IJRH_0.js";import"./iteratee-BWAJxHBx.js";import"./tooltipContext-jITfcRZK.js";import"./ReactUtils-CfLs9KKR.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BzU2hCU1.js";import"./isPlainObject-CAtj_e7X.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle--9HeXx83.js";import"./useAnimationId-SK1GTTks.js";import"./Trapezoid-DdvROJEh.js";import"./Sector-NFqcE7L7.js";import"./Curve-BHG7-tm7.js";import"./RegisterGraphicalItemId-SLc1E9Mg.js";import"./ErrorBarContext-BKEDiamV.js";import"./GraphicalItemClipPath-CyC67rpY.js";import"./SetGraphicalItem-D4EZqEL5.js";import"./getZIndexFromUnknown-BZ0DebkK.js";import"./graphicalItemSelectors-DOMUNDx9.js";import"./index-DoXoLnYR.js";import"./ChartSizeDimensions-4WehLi-t.js";import"./OffsetShower-DPGgRtYl.js";import"./PlotAreaShower-DJZyMIDk.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Oe=["WithIncludeHidden"];export{t as WithIncludeHidden,Oe as __namedExportsOrder,we as default};
