import{r as f,e}from"./iframe-CgKUDY6I.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CNrfi_Sb.js";import{Y as c}from"./YAxis-D1iy5DZK.js";import{R as A}from"./arrayEqualityCheck-4uJZ54sz.js";import{C}from"./ComposedChart-553E1B93.js";import{X as K}from"./XAxis-DwOryPfA.js";import{L as v}from"./Legend-DDBb85lz.js";import{B as a}from"./Bar-oIXReFvc.js";import{R as x}from"./RechartsHookInspector-BbTYK-9O.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DMHVQbHf.js";import"./CartesianAxis-B5IaiaWB.js";import"./Layer-DyDQThNB.js";import"./Text-D7eyVQni.js";import"./DOMUtils-oL5y8gGU.js";import"./Label-Dn5iT33K.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-Cm5c_q02.js";import"./zIndexSlice-L1yp4KKu.js";import"./types-DoxvimZ4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-C-jfEB0O.js";import"./axisSelectors-78x8Dv2Q.js";import"./RechartsWrapper-DRtAtWmJ.js";import"./CartesianChart-DklQ4GGx.js";import"./chartDataContext-B10HjSyG.js";import"./CategoricalChart-BTXI1VEa.js";import"./Symbols-Crrpo09o.js";import"./Curve-BuIdVsH6.js";import"./useElementOffset-Db-z7mz0.js";import"./iteratee-CbFyJTBX.js";import"./tooltipContext-BX66OGI4.js";import"./ReactUtils-4_OOWgDq.js";import"./ActiveShapeUtils-4Z7GGztm.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DDDRsXYi.js";import"./useAnimationId-BABjQp7J.js";import"./Trapezoid-XOwgAbCO.js";import"./Sector-BF2Rl4dz.js";import"./RegisterGraphicalItemId-DTO6cAIg.js";import"./ErrorBarContext-DEMjkEM_.js";import"./GraphicalItemClipPath-D2P2Wy6l.js";import"./SetGraphicalItem-GcELh7Cs.js";import"./getZIndexFromUnknown-BjUd5y5l.js";import"./graphicalItemSelectors-CfIdsgiu.js";import"./index-2ufv7V98.js";import"./ChartSizeDimensions-BloifcJy.js";import"./OffsetShower-BASfXPJZ.js";import"./PlotAreaShower-d7Om0wsj.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ve=["WithIncludeHidden"];export{t as WithIncludeHidden,ve as __namedExportsOrder,Ke as default};
