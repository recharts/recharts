import{r as f,e}from"./iframe-CU9XYLf3.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-Sk_2BRIW.js";import{Y as c}from"./YAxis-BemMrlFL.js";import{R as A}from"./arrayEqualityCheck-eFaqPFyI.js";import{C}from"./ComposedChart-DmX0UFL1.js";import{X as K}from"./XAxis-Bcv7Mskw.js";import{L as v}from"./Legend-Bhep4iF3.js";import{B as a}from"./Bar-DgOhgaJS.js";import{R as x}from"./RechartsHookInspector-_W3CqC5M.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bb0L8kLp.js";import"./CartesianAxis-D8E3unsA.js";import"./Layer-DY220JH0.js";import"./Text-CY41MgYr.js";import"./DOMUtils-Dak0oEyJ.js";import"./Label-DXEyh5i9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dc6Gk9II.js";import"./zIndexSlice-MqfV_Lfv.js";import"./types-B0qniNwz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-BpNXzUNL.js";import"./axisSelectors-zUwIil_A.js";import"./RechartsWrapper-CMA78OKy.js";import"./CartesianChart-C7ozkYMn.js";import"./chartDataContext-eO3XCw92.js";import"./CategoricalChart-CnWZI6Fz.js";import"./Symbols-DqoOcyix.js";import"./Curve-_cbPrSga.js";import"./useElementOffset-DYTW7eVO.js";import"./iteratee-DCZOOTd4.js";import"./tooltipContext-CaWPMfld.js";import"./ReactUtils-D-xpVFtM.js";import"./ActiveShapeUtils-DlS6WpAj.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B_wboqG7.js";import"./useAnimationId-VWf3KASX.js";import"./Trapezoid-BbNzWkoD.js";import"./Sector-CkX8bkkx.js";import"./RegisterGraphicalItemId-CSmKkG0q.js";import"./ErrorBarContext-asfsfUUV.js";import"./GraphicalItemClipPath-BoX2yUt9.js";import"./SetGraphicalItem-Dr6ZmOI6.js";import"./getZIndexFromUnknown-BscCup4G.js";import"./graphicalItemSelectors-CNg_cJMp.js";import"./index-DN73DgGW.js";import"./ChartSizeDimensions-Bvvn8A72.js";import"./OffsetShower-CnaZFh38.js";import"./PlotAreaShower-DsaFxt3j.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
