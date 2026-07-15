import{r as f,R as e}from"./iframe-ClcrwGuW.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-XJItrttK.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BIGnlmU8.js";import{C as k}from"./ComposedChart-QFp2QUo8.js";import{X as K}from"./XAxis-DBark8Vy.js";import{L as v}from"./Legend-BS7RA_N3.js";import{B as s}from"./Bar-DyiIlEkb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-ByEdCDio.js";import"./Layer-3ZpdhJcS.js";import"./resolveDefaultProps-9pIX-KZX.js";import"./Text-BoORctzg.js";import"./DOMUtils-Bjh7wfeW.js";import"./isWellBehavedNumber-DdPJLAK-.js";import"./Label-Dq1bNHIu.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ktmCEwYK.js";import"./index-2ZX0-Izg.js";import"./index-CDmIxHtk.js";import"./types-BTRTN-qV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-rMv3D_T6.js";import"./throttle-CCS8xgZt.js";import"./RechartsWrapper-BesFJ4ht.js";import"./index-B0NRpt-4.js";import"./index-DNzarm0L.js";import"./axisSelectors-BOLsAE8g.js";import"./d3-scale-CMtXPpnj.js";import"./CartesianChart-DuIwxUsc.js";import"./chartDataContext-STSGah94.js";import"./CategoricalChart-C5ZgEjVK.js";import"./Symbols-D815RcxC.js";import"./symbol-9zs_gWxT.js";import"./path-DyVhHtw_.js";import"./useElementOffset-0hht_3Y4.js";import"./uniqBy-BWkjWHs1.js";import"./iteratee-D67nRlPy.js";import"./tooltipContext-CGOErNQb.js";import"./AnimatedItems-LJ4rT4-Q.js";import"./useAnimationId-Dr2V8ESg.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BnksOpBX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-kn3TCk0Z.js";import"./RegisterGraphicalItemId-D8phwbUX.js";import"./ErrorBarContext-BQj1MtW_.js";import"./GraphicalItemClipPath-UUgKir8H.js";import"./SetGraphicalItem-CKgMzTJ0.js";import"./getZIndexFromUnknown-abdcZcSw.js";import"./graphicalItemSelectors-DJzLZ4Ei.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
