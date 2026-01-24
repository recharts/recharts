import{r as f,e}from"./iframe-CQZRorsz.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CNrfi_Sb.js";import{Y as c}from"./YAxis-ZJLISdMg.js";import{R as A}from"./arrayEqualityCheck-CQz2flWD.js";import{C}from"./ComposedChart-CBRgk2dx.js";import{X as K}from"./XAxis-BF5Pgeue.js";import{L as v}from"./Legend-BS5Pl9Uu.js";import{B as a}from"./Bar-CpGbIiNv.js";import{R as x}from"./RechartsHookInspector-C6yxPh9Y.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DxEfcX11.js";import"./CartesianAxis-DCx-He5v.js";import"./Layer-BhxYv9l3.js";import"./Text-CY4lUY6F.js";import"./DOMUtils-CKyp5Bk3.js";import"./Label-BJgUEQlL.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-D-FGBInf.js";import"./zIndexSlice-DivviUqw.js";import"./types-Doxj5qxW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-8nQ0k4Um.js";import"./axisSelectors-CGQ8Nqi9.js";import"./RechartsWrapper-3JJSXLuc.js";import"./CartesianChart-BcPUndnw.js";import"./chartDataContext-CFVBZ9Sm.js";import"./CategoricalChart-BLq3U5DT.js";import"./Symbols-DuJw27Ks.js";import"./Curve-DrDC8HjY.js";import"./useElementOffset-BJytgDY9.js";import"./iteratee-CArEEeig.js";import"./tooltipContext-5nOvhwQX.js";import"./ReactUtils-C6XrS2ih.js";import"./ActiveShapeUtils-C0gybZn4.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BSDamI1k.js";import"./useAnimationId-DBhXyqXg.js";import"./Trapezoid-Cm1xY1NA.js";import"./Sector-CNW4UiZI.js";import"./RegisterGraphicalItemId-CzLwNJmP.js";import"./ErrorBarContext-BV2zEajK.js";import"./GraphicalItemClipPath-DLLdlCGA.js";import"./SetGraphicalItem-BtJfHG9-.js";import"./getZIndexFromUnknown-Cv_3YjK1.js";import"./graphicalItemSelectors-CzZHSMZI.js";import"./index-hMecVWzD.js";import"./ChartSizeDimensions-DRFM_waE.js";import"./OffsetShower-CrJHGQg7.js";import"./PlotAreaShower-De7PuJHn.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
