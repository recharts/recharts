import{r as f,e}from"./iframe-GFfTjQoK.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-BZdMUrT_.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-rTBxpMje.js";import{C}from"./ComposedChart-D9Sx-1p6.js";import{X as K}from"./XAxis-DKH_cPy1.js";import{L as v}from"./Legend-BemLAAW3.js";import{B as s}from"./Bar-CrvghyA4.js";import{R as x}from"./RechartsHookInspector-B-bvN_Hp.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Cx84Q0BH.js";import"./Layer-CKdwahrM.js";import"./resolveDefaultProps-BjWq3AFN.js";import"./Text-CMg3-e7E.js";import"./DOMUtils-D3LQizf9.js";import"./Label-B7hBq0Ji.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BaMuJtoq.js";import"./zIndexSlice-BfN4rN3H.js";import"./immer-DuJeroaq.js";import"./types-CLB7ynuJ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DKYVxNAz.js";import"./hooks-CqeOQ7eW.js";import"./axisSelectors-L84MoTjP.js";import"./d3-scale-BPfRQFr_.js";import"./RechartsWrapper-C0HFJBeI.js";import"./index-DXddhZW0.js";import"./CartesianChart-D-2ecpa2.js";import"./chartDataContext-FYXA0LCO.js";import"./CategoricalChart-B30LS6x5.js";import"./Symbols-I86a4FCe.js";import"./symbol-B1lNwkQx.js";import"./step-BFgO3zi8.js";import"./useElementOffset-C2BhWW9o.js";import"./uniqBy-CZKOzj_D.js";import"./iteratee-DZbtrRGQ.js";import"./tooltipContext-BLyTXg0V.js";import"./ReactUtils-D17-4l-2.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-rLEzUBWB.js";import"./isPlainObject-DZFhrpuV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CYvKy2lW.js";import"./useAnimationId-Yz3h7jnZ.js";import"./Trapezoid-BzxYlSmA.js";import"./Sector-BM4VUaxN.js";import"./Curve-mNHJmuek.js";import"./RegisterGraphicalItemId-BcS1kKIp.js";import"./ErrorBarContext-CFOED4N_.js";import"./GraphicalItemClipPath-Bgdp1vAv.js";import"./SetGraphicalItem-mKeT8kkZ.js";import"./getZIndexFromUnknown-DdgS6aOq.js";import"./graphicalItemSelectors-vqkvq921.js";import"./index-DEk02y8i.js";import"./ChartSizeDimensions-C4mVk4KC.js";import"./OffsetShower-UIogbUR8.js";import"./PlotAreaShower-DSjypVDX.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
