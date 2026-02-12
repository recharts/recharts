import{r as f,e}from"./iframe-ByhUx3i5.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-BQIKrjqI.js";import{Y as c}from"./YAxis-D42CMzIK.js";import{R as A}from"./arrayEqualityCheck-Dc2-6IGJ.js";import{C}from"./ComposedChart-BqdUV1Sk.js";import{X as K}from"./XAxis-BI5mxokc.js";import{L as v}from"./Legend-BBRdLGFw.js";import{B as a}from"./Bar-zWPLBl_Q.js";import{R as x}from"./RechartsHookInspector-7ObrtXBg.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BXU9cl7Q.js";import"./CartesianAxis-Dz61qQ6A.js";import"./Layer-C6tXeN-I.js";import"./Text-D9qGFk_y.js";import"./DOMUtils-CN3Smf_c.js";import"./Label-CEJ3y0id.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ktHWf7_5.js";import"./zIndexSlice-D3kDw7sn.js";import"./types-CJt6eGgj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-3yl5iFEg.js";import"./axisSelectors-NQs8EjRk.js";import"./RechartsWrapper-CIwNTWTh.js";import"./CartesianChart-R5e0LOwa.js";import"./chartDataContext-BYf5RbAV.js";import"./CategoricalChart-5ePC_oFI.js";import"./Symbols-C3LGHQVt.js";import"./Curve-CS0P1hcX.js";import"./useElementOffset-CNw39Ncf.js";import"./iteratee-k1Sg484z.js";import"./tooltipContext-7NlN6gcD.js";import"./ReactUtils-BmZRR5An.js";import"./ActiveShapeUtils-CvF1aWoR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CxW-1m5M.js";import"./useAnimationId-aMq0pZgy.js";import"./Trapezoid-BUngsVtC.js";import"./Sector-BymBl_Im.js";import"./RegisterGraphicalItemId-CUDjPLNo.js";import"./ErrorBarContext-Coaa-8b_.js";import"./GraphicalItemClipPath-CCO6Hfg0.js";import"./SetGraphicalItem-d5ssc5Bz.js";import"./getZIndexFromUnknown-rrrHiWL0.js";import"./graphicalItemSelectors-CD7_eHaQ.js";import"./index-Bitkd77q.js";import"./ChartSizeDimensions-DxQjWf1j.js";import"./OffsetShower-DxCTP-c8.js";import"./PlotAreaShower-DB1zgg4x.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
