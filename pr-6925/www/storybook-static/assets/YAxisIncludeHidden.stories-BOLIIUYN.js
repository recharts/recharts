import{r as f,e}from"./iframe-Db4zTqbk.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CNrfi_Sb.js";import{Y as c}from"./YAxis-C58kpuB1.js";import{R as A}from"./arrayEqualityCheck-3CRW7fvn.js";import{C}from"./ComposedChart-b8DT5qpX.js";import{X as K}from"./XAxis-2YmY08Fs.js";import{L as v}from"./Legend-CfZ6io_H.js";import{B as a}from"./Bar-Bc0RoBXd.js";import{R as x}from"./RechartsHookInspector-CrEL5moc.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C9skBriC.js";import"./CartesianAxis-CUgWXt_R.js";import"./Layer-Cflbp2vf.js";import"./Text-B-BVNWA6.js";import"./DOMUtils-CXvwiz2o.js";import"./Label-CqrigLpP.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-BUznzSNs.js";import"./zIndexSlice-CrYwnyyD.js";import"./types-BTyyhFf_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-ryz_uIK2.js";import"./axisSelectors-blz0ZUDW.js";import"./RechartsWrapper-FQCKz-X1.js";import"./CartesianChart-YyNzumgC.js";import"./chartDataContext-C75QL-LK.js";import"./CategoricalChart-CqxC4z6s.js";import"./Symbols-G_hIZhWd.js";import"./Curve-D50n1SBe.js";import"./useElementOffset-3-L9Y_Hv.js";import"./iteratee-D6kta_VZ.js";import"./tooltipContext-ifBmNptB.js";import"./ReactUtils-OGo3X-P4.js";import"./ActiveShapeUtils-DuwLTnau.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C_uWIMPJ.js";import"./useAnimationId-CxVKnk1J.js";import"./Trapezoid-m-4m64o7.js";import"./Sector-CU3fNncw.js";import"./RegisterGraphicalItemId-Dl15i-mE.js";import"./ErrorBarContext-EfIpxhpK.js";import"./GraphicalItemClipPath-BZwY5GCl.js";import"./SetGraphicalItem-DZCf9fqS.js";import"./getZIndexFromUnknown-In0YmsOz.js";import"./graphicalItemSelectors-ChQSH1mb.js";import"./index-Bol23Ne6.js";import"./ChartSizeDimensions-CMbAaaLi.js";import"./OffsetShower-n4gU0hEx.js";import"./PlotAreaShower-Dgj_k8x2.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
