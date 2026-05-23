import{u as f,e}from"./iframe-Cbg-fKNU.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-DeM2VHlz.js";import{p as a}from"./Page-DPte-9pC.js";import{g as A}from"./arrayEqualityCheck-hFPRsS2v.js";import{C}from"./ComposedChart-Cte27ylB.js";import{X as K}from"./XAxis-scJ13O_U.js";import{L as v}from"./Legend-BGilQiwd.js";import{B as s}from"./Bar-D07cO1Ye.js";import{R as x}from"./RechartsHookInspector-D7okJ7xS.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-A8y-DKmq.js";import"./Layer-OlYOmPUf.js";import"./resolveDefaultProps-D6T4fIvs.js";import"./Text-BtrwnnO1.js";import"./DOMUtils-BOYR8naz.js";import"./Label-Dne7i20P.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-qeHNPcT8.js";import"./zIndexSlice-ByH7lQpu.js";import"./immer-S1zDTrNa.js";import"./types-BpyuZwQS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BAcUufvh.js";import"./hooks-CL-gQxGz.js";import"./axisSelectors-COlbOcyl.js";import"./d3-scale-DuHK7VZm.js";import"./string-yHBgcFlJ.js";import"./RechartsWrapper-EdxkrsQJ.js";import"./index-tFSrK1wv.js";import"./CartesianChart-IEffqnC4.js";import"./chartDataContext-BUHR6knq.js";import"./CategoricalChart-DAwQUD4-.js";import"./Symbols-UYaWffC4.js";import"./symbol-DEGNIwBZ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DGafWhz7.js";import"./uniqBy-C9mCQonC.js";import"./iteratee-BMHEy9Yu.js";import"./tooltipContext-7v6XnHpM.js";import"./AnimatedItems-POHvOeVE.js";import"./useAnimationId-ClgLuj6x.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DIyqwkit.js";import"./ActiveShapeUtils-Drq8bts1.js";import"./RegisterGraphicalItemId-CwmBMhGa.js";import"./ErrorBarContext-Q5zY_unn.js";import"./GraphicalItemClipPath-B0xiuhMH.js";import"./SetGraphicalItem-BIH6QpC3.js";import"./getZIndexFromUnknown-Dg3dHFHu.js";import"./graphicalItemSelectors-C0F3swNy.js";import"./index-BkDgLzYn.js";import"./ChartSizeDimensions-D9mNUeVH.js";import"./OffsetShower-DsmXSBYW.js";import"./PlotAreaShower-CeGNuSiV.js";const Ye={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Le=["WithIncludeHidden"];export{t as WithIncludeHidden,Le as __namedExportsOrder,Ye as default};
