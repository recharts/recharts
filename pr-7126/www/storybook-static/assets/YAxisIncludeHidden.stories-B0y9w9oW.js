import{r as f,e}from"./iframe-D86QwX9l.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-Dp7U47F6.js";import{R as A}from"./arrayEqualityCheck-CgXO-ZuA.js";import{C}from"./ComposedChart-CSnYCF8C.js";import{X as K}from"./XAxis-BmsupeL1.js";import{L as v}from"./Legend-B_1fLrVV.js";import{B as a}from"./Bar-CyCFiQ_G.js";import{R as x}from"./RechartsHookInspector-BUpx_xVe.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DxWgPgnd.js";import"./Layer-7ZFhhqEA.js";import"./resolveDefaultProps-Dk2nPyU3.js";import"./Text-Du8Py4Em.js";import"./DOMUtils-BHs0vF9m.js";import"./Label-Db7DMkNg.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-UcIV_jcl.js";import"./zIndexSlice-Cs40vUo3.js";import"./immer-8-oQo3xP.js";import"./types-BKmbYWQ3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Cs4zqxJz.js";import"./hooks-CqXI__Cc.js";import"./axisSelectors-CDwpVfsZ.js";import"./d3-scale-Be_57Quy.js";import"./RechartsWrapper-9Ks6YNdz.js";import"./index-Dlozd1Zf.js";import"./CartesianChart-BPHLQ0t0.js";import"./chartDataContext-Ct7JPcI4.js";import"./CategoricalChart-C13dIv8W.js";import"./Symbols-BEczeOkh.js";import"./symbol-C57rPMDp.js";import"./step-lGE8FQDz.js";import"./useElementOffset-D0xWsyXU.js";import"./uniqBy-CXA0falP.js";import"./iteratee-QPPlsimc.js";import"./tooltipContext-C-SAUFQD.js";import"./ReactUtils-BRuRWbDc.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-B0bsImWY.js";import"./isPlainObject-HWQUIItt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BlbPkBXV.js";import"./useAnimationId-DeGRDsC6.js";import"./Trapezoid-jhl-5jxc.js";import"./Sector-qJl1uh8Z.js";import"./Curve-r3vqpxAw.js";import"./RegisterGraphicalItemId-Cb3ALFIQ.js";import"./ErrorBarContext-CuFeAbue.js";import"./GraphicalItemClipPath-DOcGoQ4n.js";import"./SetGraphicalItem-rCG6xPW_.js";import"./getZIndexFromUnknown-x79ucrML.js";import"./graphicalItemSelectors-BjIRo1dU.js";import"./index-BhBhI1sn.js";import"./ChartSizeDimensions-0WIqpo-P.js";import"./OffsetShower-laCN2MaK.js";import"./PlotAreaShower-DL6rBkyw.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
