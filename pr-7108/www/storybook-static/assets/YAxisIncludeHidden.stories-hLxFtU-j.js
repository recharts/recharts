import{r as f,e}from"./iframe-BB4UUGL6.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-BjQFu2fY.js";import{R as A}from"./arrayEqualityCheck-BYmPeJrr.js";import{C}from"./ComposedChart-C2BzGzPZ.js";import{X as K}from"./XAxis-Sg_yoptQ.js";import{L as v}from"./Legend-BdIYXKvq.js";import{B as a}from"./Bar-CmXoqB39.js";import{R as x}from"./RechartsHookInspector-Bh0xNYsg.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-D42FnObu.js";import"./Layer-CzRXBUT9.js";import"./resolveDefaultProps-Dwn4tBVe.js";import"./Text-xAwQNVqR.js";import"./DOMUtils-DBhHNbvA.js";import"./Label-BuQHIgdG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C40yFkyN.js";import"./zIndexSlice-CuyQJUW0.js";import"./immer-CGr0ptDX.js";import"./types-DX1g5Szp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-lC7cSHHa.js";import"./hooks-DFTFZ2_R.js";import"./axisSelectors-xhLV-t5X.js";import"./d3-scale-T-qah3ml.js";import"./RechartsWrapper-D-mKRVYc.js";import"./index-DU7ieidm.js";import"./CartesianChart-BRe-Cj4k.js";import"./chartDataContext-zlvG9ShK.js";import"./CategoricalChart-Ct_zc7o_.js";import"./Symbols-CZ1AA7rn.js";import"./symbol-DNGflvzo.js";import"./step-BIZ2Vv4e.js";import"./useElementOffset-DLf_jPLb.js";import"./uniqBy-DnQsVhpX.js";import"./iteratee-CSGtCKt7.js";import"./tooltipContext-BBUNFgLK.js";import"./ReactUtils-C_PCtVqv.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DQggNROu.js";import"./isPlainObject-BHtqOomI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BoM2sg2T.js";import"./useAnimationId-CR73Z47T.js";import"./Trapezoid-02WGJX_U.js";import"./Sector-DNRZINVD.js";import"./Curve--7RAEkWQ.js";import"./RegisterGraphicalItemId-DlFEoDs3.js";import"./ErrorBarContext-CSlHUW5r.js";import"./GraphicalItemClipPath-Y2-czyRy.js";import"./SetGraphicalItem-Da_W53nM.js";import"./getZIndexFromUnknown-B_CfMx-d.js";import"./graphicalItemSelectors-BlHR2ggU.js";import"./index-UCZ6NmO8.js";import"./ChartSizeDimensions-Dx8qGUZW.js";import"./OffsetShower-6Dk3TPlH.js";import"./PlotAreaShower-CdNqGPUL.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
