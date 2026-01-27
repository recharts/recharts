import{r as f,e}from"./iframe-DwqRYk2I.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CNrfi_Sb.js";import{Y as c}from"./YAxis-QYWka3EJ.js";import{R as A}from"./arrayEqualityCheck-DgzFlSOI.js";import{C}from"./ComposedChart-CeV-pGSf.js";import{X as K}from"./XAxis-Cyh_YOcY.js";import{L as v}from"./Legend-C5eJuXMe.js";import{B as a}from"./Bar-BsqE6w07.js";import{R as x}from"./RechartsHookInspector-DYt25tbN.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DNDo_DVE.js";import"./CartesianAxis-0yio1lEn.js";import"./Layer-CKGvS6fh.js";import"./Text-DFlmLHAl.js";import"./DOMUtils-KiKr0dq-.js";import"./Label-BBrY7asM.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-14WaUFCY.js";import"./zIndexSlice-CZHcI390.js";import"./types-DQBQm6yM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-D1ZMD5tV.js";import"./axisSelectors-BOQABpOz.js";import"./RechartsWrapper-C7VpHEZH.js";import"./CartesianChart-DcDVXLOL.js";import"./chartDataContext-Ctj-_rOR.js";import"./CategoricalChart-BLGSXnLr.js";import"./Symbols--4uQfBg4.js";import"./Curve-MGg7iv1Z.js";import"./useElementOffset-BIde8PX1.js";import"./iteratee-Czloof4i.js";import"./tooltipContext-D4tYLNyP.js";import"./ReactUtils-CSQ_QEna.js";import"./ActiveShapeUtils-DqRUZVTG.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bp9O5e-s.js";import"./useAnimationId-BgtwKRIK.js";import"./Trapezoid-DufcdAFp.js";import"./Sector-0XUVx_Z1.js";import"./RegisterGraphicalItemId-Bfk0jvW8.js";import"./ErrorBarContext-DWBN2nFH.js";import"./GraphicalItemClipPath-D2KsqG86.js";import"./SetGraphicalItem-099u0L0c.js";import"./getZIndexFromUnknown-DetDeQ8A.js";import"./graphicalItemSelectors-0SR2nuDA.js";import"./index-B__3XDnp.js";import"./ChartSizeDimensions-BDK5RpWT.js";import"./OffsetShower-CMnq-Zau.js";import"./PlotAreaShower-DGemeH0F.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
