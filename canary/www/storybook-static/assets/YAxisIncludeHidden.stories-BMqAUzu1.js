import{r as f,e}from"./iframe-DDDnlj5f.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-BsKc4EC-.js";import{R as A}from"./arrayEqualityCheck-CJpSjh_E.js";import{C}from"./ComposedChart-Ce7krGfK.js";import{X as K}from"./XAxis-CWnYqww0.js";import{L as v}from"./Legend-BN3eH4xq.js";import{B as a}from"./Bar-ArsJieLu.js";import{R as x}from"./RechartsHookInspector-BhwNj7SB.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CMW5fm9o.js";import"./Layer-BtE1IS0j.js";import"./resolveDefaultProps-DYeysdtP.js";import"./Text-C-kvncvF.js";import"./DOMUtils-DDovTr1I.js";import"./Label-VNLDkr3Z.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DkrOw8iH.js";import"./zIndexSlice-DoI0yJNb.js";import"./immer-aj6qr0b6.js";import"./types-BPe_V6d-.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-k6HnSAnM.js";import"./hooks-Dv-UaG4_.js";import"./axisSelectors-CDHzLZeD.js";import"./d3-scale-pmFb8TKN.js";import"./RechartsWrapper-CrpiHev6.js";import"./index-CMSlVVpG.js";import"./CartesianChart-D5sDgHmv.js";import"./chartDataContext-ib7DGGK_.js";import"./CategoricalChart-h2VJliXU.js";import"./Symbols-9n4DXsSp.js";import"./symbol-B5WodTQ6.js";import"./step-BKhUoFo2.js";import"./useElementOffset-03RznBD_.js";import"./uniqBy-CE60lU9f.js";import"./iteratee-BZMdZ1c9.js";import"./tooltipContext-DzaFJLFA.js";import"./ReactUtils-CjPSIKmy.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BfdtDxL7.js";import"./isPlainObject-CJH28dtQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cb4jcIHL.js";import"./useAnimationId-Dkj4_Bqz.js";import"./Trapezoid-DeNT7-hb.js";import"./Sector-BQbNJdDe.js";import"./Curve-SLwfiusm.js";import"./RegisterGraphicalItemId-D4tYqbmw.js";import"./ErrorBarContext-E3Vm-e-r.js";import"./GraphicalItemClipPath-CuDHFuAP.js";import"./SetGraphicalItem-CHHuJTp3.js";import"./getZIndexFromUnknown-CpSPHkb-.js";import"./graphicalItemSelectors-BAN2wZdq.js";import"./index-CTBoJ3Fl.js";import"./ChartSizeDimensions-CGFO1lez.js";import"./OffsetShower-LgcvfXe3.js";import"./PlotAreaShower-DDwsWzkY.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
