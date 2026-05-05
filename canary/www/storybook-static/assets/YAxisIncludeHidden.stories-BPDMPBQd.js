import{r as f,e}from"./iframe-DftoLjMQ.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-_evmKux2.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-OUBI6cxl.js";import{C}from"./ComposedChart-DxZ1rHvA.js";import{X as K}from"./XAxis-diXG-Ooh.js";import{L as v}from"./Legend-BWUyCpiN.js";import{B as s}from"./Bar-DlO24gaa.js";import{R as x}from"./RechartsHookInspector-BW_p22UR.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-D4w_zo3U.js";import"./Layer-Dsgs0O8o.js";import"./resolveDefaultProps-BarHlGRM.js";import"./Text-BLuQUWft.js";import"./DOMUtils-DS-WaQM8.js";import"./Label-OGw7wMde.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer--xl3uim8.js";import"./zIndexSlice--T96FzXv.js";import"./immer-CQJBkabG.js";import"./types-Bejjp4Hx.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-D9MmoYOr.js";import"./hooks-CtUEKUIT.js";import"./axisSelectors-wXsEFnMj.js";import"./d3-scale-BsmYBoZY.js";import"./RechartsWrapper-DHlVG8GT.js";import"./index-uEh81NxT.js";import"./CartesianChart-Dc_3s4TO.js";import"./chartDataContext-IpRtB3jy.js";import"./CategoricalChart-DhhIk46Q.js";import"./Symbols-xJuY3fVT.js";import"./symbol--t7F40kw.js";import"./step-DzOVAhhf.js";import"./useElementOffset-D9nHdrIo.js";import"./uniqBy-CvQpRBMV.js";import"./iteratee-C5N7-gfq.js";import"./tooltipContext-CK5rjbAb.js";import"./ReactUtils-D8J0Scd8.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-KSU4yUqy.js";import"./isPlainObject-DhKwCKiu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CdclZ8ZW.js";import"./useAnimationId-HlRR6VOg.js";import"./Trapezoid-Cfr8ELTn.js";import"./Sector-9UyeEGs-.js";import"./Curve-5-yobk2P.js";import"./RegisterGraphicalItemId-BsfM9YTI.js";import"./ErrorBarContext-BqvDCGa4.js";import"./GraphicalItemClipPath-CA0a5dPY.js";import"./SetGraphicalItem-CtgQyVhP.js";import"./getZIndexFromUnknown-Bkwelvve.js";import"./graphicalItemSelectors-BHTb9orb.js";import"./index-l8sRLK9z.js";import"./ChartSizeDimensions-BJ7Qv0Pi.js";import"./OffsetShower-DBZtide3.js";import"./PlotAreaShower-DKTeWqRs.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
