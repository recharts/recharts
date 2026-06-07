import{r as f,R as e}from"./iframe-UrDM9Xq3.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-B_QpZZ2v.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-ByG8njt8.js";import{C as k}from"./ComposedChart-GlsxxvdN.js";import{X as K}from"./XAxis-DnTKDl6t.js";import{L as v}from"./Legend-1GhppzqO.js";import{B as s}from"./Bar-BOsKiamZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DL-gpN5o.js";import"./CartesianAxis-DMp3qHuF.js";import"./Layer-CegbOy6-.js";import"./resolveDefaultProps-PeQIR1GL.js";import"./Text-Z9b8Q3If.js";import"./DOMUtils-B87CjqTu.js";import"./isWellBehavedNumber-CLVIVmGZ.js";import"./Label-KmMVZ1kh.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DAEesPn0.js";import"./index-DNiwhT54.js";import"./index-Cn_MLy2m.js";import"./types-DWkwwyEz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-SpzHxRDt.js";import"./immer-CN88OGp3.js";import"./RechartsWrapper-Dm1mVgCK.js";import"./index-B2ZS3Yz1.js";import"./index-4YA6lX68.js";import"./axisSelectors-BJCtqUC9.js";import"./d3-scale-DVQsPwxD.js";import"./string-B6fdYHAA.js";import"./CartesianChart-H9EcaXcZ.js";import"./chartDataContext-K_upA5vN.js";import"./CategoricalChart-CUBoZ8Vx.js";import"./Symbols-DKJydra-.js";import"./symbol-CLMPAJyz.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DjPVz3Qr.js";import"./uniqBy-BaWx7qNK.js";import"./iteratee-CIqk3D2T.js";import"./tooltipContext-Dgrt9PpW.js";import"./AnimatedItems-BNMmNPct.js";import"./useAnimationId-cQnLIEvC.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CvnkFbTC.js";import"./ActiveShapeUtils-BKflvOdY.js";import"./RegisterGraphicalItemId-cO8s0yof.js";import"./ErrorBarContext-DmZiqBUr.js";import"./GraphicalItemClipPath-1r6w1RAv.js";import"./SetGraphicalItem-BPavUJGK.js";import"./getZIndexFromUnknown-C57GEJc7.js";import"./graphicalItemSelectors-C80CPUyS.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
