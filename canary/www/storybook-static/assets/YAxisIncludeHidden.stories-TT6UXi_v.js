import{r as f,e}from"./iframe-DqbxrOnC.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-BQIKrjqI.js";import{Y as c}from"./YAxis-C1VoYxeB.js";import{R as A}from"./arrayEqualityCheck-DDnB3yQJ.js";import{C}from"./ComposedChart-C4q1Unrm.js";import{X as K}from"./XAxis-Clh3r3oa.js";import{L as v}from"./Legend-Dom9mrOu.js";import{B as a}from"./Bar-C4LEPpud.js";import{R as x}from"./RechartsHookInspector-nEoOxjIA.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-H2CuSuBD.js";import"./CartesianAxis-CBS5lhtQ.js";import"./Layer-DO_g1bne.js";import"./Text-UMPVnpE1.js";import"./DOMUtils-DJjhPRNo.js";import"./Label-Dn_4yvvw.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BLOQbcIf.js";import"./zIndexSlice-Be92tzJW.js";import"./types-DYQm65dh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-Bh4iEl2l.js";import"./axisSelectors-BhsfxkUf.js";import"./RechartsWrapper-CpGZSQIF.js";import"./CartesianChart-BmQRqUeT.js";import"./chartDataContext-DOwFKY9v.js";import"./CategoricalChart-BDtAQzJe.js";import"./Symbols-m2t7OCzL.js";import"./Curve-D1iAhDrw.js";import"./useElementOffset-DGNIXEDP.js";import"./iteratee-B2QshLL-.js";import"./tooltipContext-D16SUj3v.js";import"./ReactUtils-CmTCn7uo.js";import"./ActiveShapeUtils-CZKx7Ui-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DoZxp5Jb.js";import"./useAnimationId-CZrzdjIq.js";import"./Trapezoid-CT_AsUkt.js";import"./Sector-BHLa0ImP.js";import"./RegisterGraphicalItemId-BknrU22d.js";import"./ErrorBarContext-brGngOut.js";import"./GraphicalItemClipPath-BvpOtW2w.js";import"./SetGraphicalItem-D6JZdLch.js";import"./getZIndexFromUnknown-C03Ahide.js";import"./graphicalItemSelectors-4b15-XDR.js";import"./index-DM8LAuhA.js";import"./ChartSizeDimensions-D5VWiq-O.js";import"./OffsetShower-BGmawGzl.js";import"./PlotAreaShower-Cv1rJPUW.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
