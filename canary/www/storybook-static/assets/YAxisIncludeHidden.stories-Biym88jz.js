import{r as f,e}from"./iframe-BZbOzzTY.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CNrfi_Sb.js";import{Y as c}from"./YAxis-Dya7AK5Z.js";import{R as A}from"./arrayEqualityCheck-D0qDv0Fd.js";import{C}from"./ComposedChart-BgDb9u1m.js";import{X as K}from"./XAxis-D_0iXdcr.js";import{L as v}from"./Legend-CjRF6FTa.js";import{B as a}from"./Bar-VTsXzd3L.js";import{R as x}from"./RechartsHookInspector-135t8dQu.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Dw2Mrgq2.js";import"./CartesianAxis-B2T9DZ1W.js";import"./Layer-Ca1ZcU8K.js";import"./Text-Dp7XyQOy.js";import"./DOMUtils-vtRXHL3R.js";import"./Label-D9W5dwQ-.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-CLlHxURh.js";import"./zIndexSlice-J5rUHDmR.js";import"./types-CCRlLAaX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-CeNJ-Qya.js";import"./axisSelectors-Cv1qfvr6.js";import"./RechartsWrapper-Bx7P3ldu.js";import"./CartesianChart-Bmuz99Xe.js";import"./chartDataContext-D5Kp386R.js";import"./CategoricalChart-BBkfjreJ.js";import"./Symbols-BeK0vgrh.js";import"./Curve-LGs6YPsX.js";import"./useElementOffset-Dh2fW2NM.js";import"./iteratee-L5Ky7jPy.js";import"./tooltipContext-CEJlVqMU.js";import"./ReactUtils-BZBgIdmA.js";import"./ActiveShapeUtils-dkNue--z.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CkInrNvF.js";import"./useAnimationId-CbTMmgPX.js";import"./Trapezoid-vZxOp19A.js";import"./Sector-Cp2fRZg0.js";import"./RegisterGraphicalItemId-DiEkoTQv.js";import"./ErrorBarContext-D7kGcYfA.js";import"./GraphicalItemClipPath-Cs5ZE868.js";import"./SetGraphicalItem-8hrJSJHb.js";import"./getZIndexFromUnknown-0zxBSWVr.js";import"./graphicalItemSelectors-BXArVv3q.js";import"./index--k4eFqf6.js";import"./ChartSizeDimensions-OWBI4sZr.js";import"./OffsetShower-BDJynaSn.js";import"./PlotAreaShower-DgtK3Nlq.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
