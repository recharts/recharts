import{r as f,R as e}from"./iframe-B87OnEHe.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CIV2IRSG.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CayLxsD5.js";import{C as k}from"./ComposedChart-CPmtdHf0.js";import{X as K}from"./XAxis-P4dvE_Lf.js";import{L as v}from"./Legend-DWHYJm5C.js";import{B as a}from"./Bar-5lkvLcEM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CCuY2Era.js";import"./Text-DwFYMnaM.js";import"./resolveDefaultProps-BO6btQ4Q.js";import"./pageBackground-CO_WqCks.js";import"./ZIndexLayer-v9eepHO2.js";import"./index-BAzLdDjX.js";import"./index-DvKC7fGa.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DUkdlQZC.js";import"./throttle-DxXe2fSX.js";import"./dataEntryStyles-B54Iq7xi.js";import"./axisSelectors-DZJywaTf.js";import"./d3-scale-BoPllMsy.js";import"./CartesianAxis-O93eF2fQ.js";import"./Layer-B5mZFZkh.js";import"./types-CvQS_eYG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Db8-13BV.js";import"./index-BmBjwPgJ.js";import"./index-Cizw57Lu.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C4kU4M5n.js";import"./index-DKiqyqcX.js";import"./CartesianChart-B_5wOWKW.js";import"./ZIndexPortal-BhrD04L0.js";import"./CategoricalChart-DOgCDtrc.js";import"./Symbols-C5l9Kmbi.js";import"./symbol-Bou66IFx.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BRYlrKrP.js";import"./uniqBy-V2CyeYbI.js";import"./iteratee-BGK8_Z9h.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-DteE4Y6d.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-XssNjNyZ.js";import"./useAnimationId-DHS0idNw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-KYdt019M.js";import"./tooltipContext-UIwdYet0.js";import"./RegisterGraphicalItemId-CXcrjxG2.js";import"./ErrorBarContext-DgiLcLgY.js";import"./activeStyles-gtCHrDIH.js";import"./SetGraphicalItem-t5mD_xbz.js";import"./getZIndexFromUnknown-CoN1Aw3R.js";import"./useEffectiveDataKey-D32F3nXW.js";import"./omit-Dn3mPKBL.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
