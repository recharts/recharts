import{r as f,R as e}from"./iframe-DCxLvNga.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-BqxXsg45.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DgwgOA8W.js";import{C as k}from"./ComposedChart-BhW0iq0n.js";import{X as K}from"./XAxis-CvAM-btA.js";import{L as v}from"./Legend-ze8rcI28.js";import{B as s}from"./Bar-BNbtkdOd.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Cqaz2t92.js";import"./CartesianAxis-D6yEppZ-.js";import"./Layer-wgUOVjl0.js";import"./resolveDefaultProps-Clp0Py5Q.js";import"./Text-CxvVezqe.js";import"./DOMUtils-CJlLdKU3.js";import"./isWellBehavedNumber-C0c3JW0z.js";import"./Label-B5b7aLp5.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CM9bDnHX.js";import"./index-8Ky9zJpe.js";import"./index-eUk0KR26.js";import"./types-CVkN-t8Z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-PHCHKu5h.js";import"./throttle-BEPLbkDl.js";import"./RechartsWrapper-DQRomY3U.js";import"./index-WumRa2O_.js";import"./index-HEbudI5N.js";import"./axisSelectors-LD-bHnG0.js";import"./d3-scale-U7zf4vxG.js";import"./CartesianChart-WbtSIkDa.js";import"./chartDataContext-1-JtWOIC.js";import"./CategoricalChart-BL0VhkFE.js";import"./Symbols-C85RPVvD.js";import"./symbol-BU7Yt18z.js";import"./path-DyVhHtw_.js";import"./useElementOffset-AXra7XvW.js";import"./uniqBy-C8S0yzEw.js";import"./iteratee-XGgbb57g.js";import"./tooltipContext-HxNXNBwa.js";import"./AnimatedItems-kb_X2dzq.js";import"./useAnimationId-HOEbSJwy.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-TQcaGvcZ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-j_zEDQtR.js";import"./RegisterGraphicalItemId-uoD-MQmf.js";import"./ErrorBarContext-BqmhDiAL.js";import"./GraphicalItemClipPath-CWBeJB2a.js";import"./SetGraphicalItem-Cst8NOmH.js";import"./getZIndexFromUnknown-DphAGuTV.js";import"./graphicalItemSelectors-z9URsQXH.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
