import{r as f,e}from"./iframe-HE4l6gpY.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CtpClMsJ.js";import{Y as c}from"./YAxis-WQBuKMWe.js";import{R as A}from"./arrayEqualityCheck-zbhzaWLf.js";import{C}from"./ComposedChart-C5Q1Dlys.js";import{X as K}from"./XAxis-DdaPXuK0.js";import{L as v}from"./Legend-BRdhBltB.js";import{B as a}from"./Bar-BOtmOARW.js";import{R as x}from"./RechartsHookInspector-JJmqV01h.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-ycHCQ38b.js";import"./CartesianAxis-DHNzlHQb.js";import"./Layer-BUJF1xKh.js";import"./Text-CEFvmxgj.js";import"./DOMUtils-BzGtJFJB.js";import"./Label-D3UA2eyA.js";import"./PolarUtils-DtB8lpuj.js";import"./ZIndexLayer-C9xwCaJR.js";import"./zIndexSlice-CDFEuO1j.js";import"./types-CN_ngcpa.js";import"./hooks-CAMR9gDE.js";import"./axisSelectors-BlI41Nqe.js";import"./RechartsWrapper-rscDC45n.js";import"./CartesianChart-Dff8VYzG.js";import"./chartDataContext-HKU5YHU8.js";import"./CategoricalChart-b_wn2d-T.js";import"./Symbols-DoDZ9cAV.js";import"./Curve-B2qa_Fpt.js";import"./useElementOffset-c9br3Dij.js";import"./iteratee-CTXU5arM.js";import"./tooltipContext-BsYYO75B.js";import"./ReactUtils-DzgF8jcH.js";import"./ActiveShapeUtils-OiiVmCWc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C42JoSoA.js";import"./useAnimationId-CIwDHleW.js";import"./Trapezoid-DAtsx-SU.js";import"./Sector-CwzJgIqc.js";import"./RegisterGraphicalItemId-D8pM0yYi.js";import"./ErrorBarContext-CKHDFfpn.js";import"./GraphicalItemClipPath-BnkYT85w.js";import"./SetGraphicalItem-bFi_wPR4.js";import"./getZIndexFromUnknown-DmUPlY1R.js";import"./graphicalItemSelectors-CrTBi9mh.js";import"./index-CuPLL4UF.js";import"./ChartSizeDimensions-AwnLO8b3.js";import"./OffsetShower-B5Y-lcHm.js";import"./PlotAreaShower-Cx476p9R.js";const Ce={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
