import{u as f,e}from"./iframe-C6nv2cAy.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-O_OVv1Cn.js";import{p as a}from"./Page-DPte-9pC.js";import{g as A}from"./arrayEqualityCheck-B6TrlJO6.js";import{C}from"./ComposedChart-CelmCkFr.js";import{X as K}from"./XAxis-VmwM632k.js";import{L as v}from"./Legend-DRo4loKD.js";import{B as s}from"./Bar-CfukuZr-.js";import{R as x}from"./RechartsHookInspector-DL3_bzE2.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BFynhpO1.js";import"./Layer-wqnfjYdM.js";import"./resolveDefaultProps-Dz2DdWhQ.js";import"./Text-Ceq4AYN-.js";import"./DOMUtils-5JKzP-3C.js";import"./Label-DLbKprA1.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B79SyOov.js";import"./zIndexSlice-J7b4XvEa.js";import"./immer-Cni8-JSk.js";import"./types-QOd3xFvZ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CAeDVDJj.js";import"./hooks-BtR6DFBi.js";import"./axisSelectors-DvgT42C4.js";import"./d3-scale-BCthX3a6.js";import"./RechartsWrapper-BW8puFa7.js";import"./index-B73x1Khd.js";import"./CartesianChart-DXKuJw3U.js";import"./chartDataContext-CzxDQN7p.js";import"./CategoricalChart-QgKXQZGT.js";import"./Symbols-vlD5G2OE.js";import"./symbol-yrXamAhh.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BQjeDNfi.js";import"./uniqBy-B8uGSroM.js";import"./iteratee-D-F710r8.js";import"./tooltipContext-1GntcCaO.js";import"./ReactUtils-DhUlF_RS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-M0x9aVbG.js";import"./useAnimationId-CQiwipC5.js";import"./ActiveShapeUtils-BD3rh4KE.js";import"./RegisterGraphicalItemId-D4TYIl8u.js";import"./ErrorBarContext-AqRNcVf3.js";import"./GraphicalItemClipPath-DfRR2I58.js";import"./SetGraphicalItem-Cgl-K06p.js";import"./getZIndexFromUnknown-n5YwGYeL.js";import"./graphicalItemSelectors-CGet36BX.js";import"./index-DweZMxE9.js";import"./ChartSizeDimensions-BY1_-T9T.js";import"./OffsetShower-DDAPU-JD.js";import"./PlotAreaShower-XRHlYJYB.js";const He={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ye=["WithIncludeHidden"];export{t as WithIncludeHidden,Ye as __namedExportsOrder,He as default};
