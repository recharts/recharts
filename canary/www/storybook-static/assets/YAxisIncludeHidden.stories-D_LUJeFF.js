import{r as f,e}from"./iframe-Dt2-Rn2T.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CNrfi_Sb.js";import{Y as c}from"./YAxis-CkTVj5OB.js";import{R as A}from"./arrayEqualityCheck-e3rdG8sZ.js";import{C}from"./ComposedChart-CpKIk9zm.js";import{X as K}from"./XAxis-CRrkfAWq.js";import{L as v}from"./Legend-D3DE2sEM.js";import{B as a}from"./Bar-DKKXbD6J.js";import{R as x}from"./RechartsHookInspector-5aSdxu_t.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BoKEDzkZ.js";import"./CartesianAxis-CuL6QCDl.js";import"./Layer-Cy-kS3Tn.js";import"./Text-Bi0muiqL.js";import"./DOMUtils-ngjC_q0v.js";import"./Label-C32CYHoq.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-RqzvM65R.js";import"./zIndexSlice-C1nzEFYS.js";import"./types-BU6HIYaW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-DJKBhfj1.js";import"./axisSelectors-B_oLlWSB.js";import"./RechartsWrapper-CBGhND_r.js";import"./CartesianChart-B7uV6D3o.js";import"./chartDataContext-DW1Hpk6b.js";import"./CategoricalChart-Dpdb76Jr.js";import"./Symbols-Cq9VSHhf.js";import"./Curve-Ff2ksW4t.js";import"./useElementOffset-CUFeQ2ye.js";import"./iteratee-HLQGaxaB.js";import"./tooltipContext-BR1HLUbB.js";import"./ReactUtils-OtSSiA15.js";import"./ActiveShapeUtils-d0cRIwlh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CbTbEpru.js";import"./useAnimationId-C5m05tY7.js";import"./Trapezoid-BtcZZN-I.js";import"./Sector-D7OsKu7Y.js";import"./RegisterGraphicalItemId-BHPtgntX.js";import"./ErrorBarContext-Ds0jOqwg.js";import"./GraphicalItemClipPath-DzB0Slfu.js";import"./SetGraphicalItem-C72JWaDt.js";import"./getZIndexFromUnknown-CodYqlwr.js";import"./graphicalItemSelectors-CxiBt8fS.js";import"./index-DBIfqZnx.js";import"./ChartSizeDimensions-CGKu1G21.js";import"./OffsetShower-Cg1AihHI.js";import"./PlotAreaShower-Byk-bE4C.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
