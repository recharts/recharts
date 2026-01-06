import{r as f,e}from"./iframe-DLhPWxyK.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisProps-ByMyQu0r.js";import{Y as c}from"./YAxis-BkUnmSc2.js";import{R as C}from"./arrayEqualityCheck-m1RhjOmx.js";import{C as K}from"./ComposedChart-DNdReU5t.js";import{X as A}from"./XAxis-sgPLB-rr.js";import{L as v}from"./Legend-dB7LAjtZ.js";import{B as a}from"./Bar-DdI9BB9r.js";import{R as x}from"./RechartsHookInspector-HNjcmSsy.js";import{p as s}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./resolveDefaultProps-E8e_3mlR.js";import"./CartesianAxis-DsXxqkAo.js";import"./Layer-T-_zDyRj.js";import"./Text-1NI18g4k.js";import"./DOMUtils-DXMqjRDX.js";import"./Label-Cfm9uiYS.js";import"./PolarUtils-C6JBvuC0.js";import"./ZIndexLayer-CE4rF1P8.js";import"./zIndexSlice-CkjTQxGc.js";import"./types-DGdi1KYp.js";import"./hooks-CPfFhdP1.js";import"./axisSelectors-H2aLd2HR.js";import"./RechartsWrapper-DgQpMTik.js";import"./CartesianChart-C_LwKB0K.js";import"./chartDataContext-DLN8QOpK.js";import"./CategoricalChart-B42UgGES.js";import"./Symbols-CNkEhL1u.js";import"./Curve-DeIwtCC2.js";import"./useElementOffset-CebiNadU.js";import"./iteratee-B5VvVAP5.js";import"./tooltipContext-YFR452HV.js";import"./ReactUtils-CkbQi9iw.js";import"./ActiveShapeUtils-BWgEW_58.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DFsdprJS.js";import"./useAnimationId-CcCb5ZgY.js";import"./Trapezoid-C-EY4dJQ.js";import"./Sector-tN30gQok.js";import"./RegisterGraphicalItemId-BfrmZf1G.js";import"./ErrorBarContext-DgDHXHvv.js";import"./GraphicalItemClipPath-B90mhSGP.js";import"./SetGraphicalItem-FkCdxtAh.js";import"./getZIndexFromUnknown-D663qf7E.js";import"./graphicalItemSelectors-C6bwYjmT.js";import"./index-DdNKA2qu.js";import"./ChartSizeDimensions-2_L3pVFL.js";import"./OffsetShower-Bubd5l8I.js";import"./PlotAreaShower-DZzXcMEl.js";const Ae={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(K,{data:s},e.createElement(A,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
  args: getStoryArgsFromArgsTypesObject(YAxisProps)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ve=["WithIncludeHidden"];export{t as WithIncludeHidden,ve as __namedExportsOrder,Ae as default};
